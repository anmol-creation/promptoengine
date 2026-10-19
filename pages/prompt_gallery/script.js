import { initTheme } from '../../assets/js/utils.js';
import { initDevTrigger } from '../../dev-access/trigger.js';
import { savePrompt } from '../../assets/js/firestore.js';
import { promptDatabase, webDevDatabase } from './database.js';

const grid=document.getElementById('gallery-grid'), search=document.getElementById('gallery-search'), tabs=document.getElementById('tabs-container'), toast=document.getElementById('toast');
let currentMode = 'image'; // 'image' or 'webdev'
let category='All', sort='newest', subject='all', engine='all', query='', page=1; const perPage=9;
const icon=(name)=>({heart:'♡',share:'↗',copy:'⧉'}[name]||'');

function allItems(){
  if (currentMode === 'image') {
    return Object.entries(promptDatabase).flatMap(([key,items])=>items.map((raw,index)=>({id:`${key}-${raw.id||index}`,imageUrl:raw.ai_image||'',refImage:raw.ref_image||'',promptText:raw.prompt||'',category:key,subject:raw.subject||'',dateAdded:raw.createdAt||0})));
  } else {
    return Object.entries(webDevDatabase).flatMap(([key,items])=>items.map((raw,index)=>({
      id: raw.id || `wd-${key}-${index}`,
      html: raw.html || '',
      css: raw.css || '',
      title: raw.title || '',
      tags: raw.tags || [],
      promptText: raw.prompt || '',
      category: key,
      subject: raw.subject || '',
      dateAdded: raw.createdAt || Date.now()
    })));
  }
}
let activeShareId = null;
function filtered(){let list=allItems();if(activeShareId){return list.filter(x=>x.id===activeShareId)}if(category!=='All')list=list.filter(x=>x.category.toLowerCase()===category.toLowerCase());if(subject!=='all')list=list.filter(x=>x.subject.toLowerCase()===subject);if(query)list=list.filter(x=>`${x.promptText} ${x.category} ${x.subject}`.toLowerCase().includes(query.toLowerCase()));list.sort((a,b)=>sort==='newest'?b.dateAdded-a.dateAdded:a.dateAdded-b.dateAdded);return list}
function render(){const list=filtered(), total=Math.ceil(list.length/perPage)||1;page=Math.min(page,total);const shown=list.slice((page-1)*perPage,page*perPage);document.getElementById('results-count').textContent=list.length;grid.innerHTML='';shown.forEach(item=>grid.appendChild(card(item)));renderPagination(total);const filtersEl = document.querySelector('.filters'); let clearBtn = document.getElementById('clear-share-btn'); if(activeShareId){if(!clearBtn){clearBtn=document.createElement('button');clearBtn.id='clear-share-btn';clearBtn.className='tab-btn active';clearBtn.style.background='var(--cyan)';clearBtn.style.color='#000';clearBtn.textContent='← Back to Full Gallery';clearBtn.addEventListener('click',()=>{activeShareId=null;const url=new URL(window.location);url.searchParams.delete('share_id');window.history.replaceState({},'',url);renderTabs();render()});filtersEl.prepend(clearBtn)}}else{if(clearBtn)clearBtn.remove()}}
function renderTabs(){
  const db = currentMode === 'image' ? promptDatabase : webDevDatabase;
  const names = currentMode === 'image' ? ['All',...Object.keys(db),'Cyberpunk'] : ['All', ...Object.keys(db)];
  tabs.innerHTML='';
  names.forEach(name=>{
    const b=document.createElement('button');
    b.className=`tab-btn ${name===category?'active':''}`;
    b.textContent=name;
    b.addEventListener('click',()=>{category=name;page=1;renderTabs();render()});
    tabs.appendChild(b)
  });
}
function card(item) {
  const el = document.createElement('article');
  el.className = 'gallery-card';

  if (currentMode === 'image') {
    const engineName = engine === 'all' ? 'Flux.1 Schnell' : engine === 'midjourney' ? 'Midjourney v6.1' : engine === 'stable' ? 'Stable Diffusion 3.5' : engine === 'dalle' ? 'DALL·E 3' : 'Flux.1';
    const tags = ['Cinematic', 'Photoreal', 'Editorial'];
    el.innerHTML = `<div class="card-image-wrapper"><img class="card-image" src="${item.imageUrl}" alt="${item.category} AI prompt result" loading="lazy"><span class="category-tag">${item.category}</span>${item.refImage ? '<button class="image-toggle-btn">View Original</button>' : ''}<div class="image-actions"><button class="like-btn">${icon('heart')} <span>${(1.2 + (item.dateAdded % 400) / 100).toFixed(1)}k</span></button><button class="share-btn">${icon('share')} Share</button></div></div><div class="card-body"><span class="engine-badge">${engineName}</span><h3>Prompt Recipe</h3><p class="recipe">${item.promptText}</p><button class="view-more">View more</button><div class="tags">${tags.map(t => `<span>#${t}</span>`).join('')}</div><div class="card-bottom"><button class="copy-btn">${icon('copy')} Copy prompt</button><span class="author-meta">${item.subject || 'Visual'} · 2025</span></div></div>`;
    const img = el.querySelector('img'), toggle = el.querySelector('.image-toggle-btn');
    toggle?.addEventListener('click', () => { const original = img.src === item.imageUrl; img.src = original ? item.refImage : item.imageUrl; toggle.textContent = original ? 'View AI Generated' : 'View Original'; });
  } else {
    // Web Dev Card Render with iframe
    const iframeSrc = `
      <!DOCTYPE html>
      <html>
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
        <style>${item.css || ''}</style>
      </head>
      <body style="margin:0; padding:0; display:flex; justify-content:center; align-items:center; min-height: 250px; background:transparent;">
        ${item.html}
      </body>
      </html>
    `;

    const tags = item.tags && item.tags.length > 0 ? item.tags : ['UI', 'Component'];
    el.innerHTML = `
      <div class="card-image-wrapper" style="background: #111; padding: 0; display:flex; align-items:center; justify-content:center; min-height: 250px; border-bottom: 1px solid #333;">
        <iframe srcdoc="${iframeSrc.replace(/"/g, '&quot;')}" style="width:100%; height:250px; border:none; pointer-events:auto;" sandbox="allow-scripts"></iframe>
        <span class="category-tag">${item.title || item.category}</span>
        <div class="image-actions">
          <button class="like-btn">${icon('heart')} <span>${(1.2 + (item.dateAdded % 400) / 100).toFixed(1)}k</span></button>
          <button class="share-btn">${icon('share')} Share</button>
        </div>
      </div>
      <div class="card-body">
        <span class="engine-badge">Tailwind CSS</span>
        <h3>Prompt Recipe</h3>
        <p class="recipe">${item.promptText}</p>
        <button class="view-more">View more</button>
        <div class="tags">${tags.map(t => `<span>#${t}</span>`).join('')}</div>
        <div class="card-bottom">
          <button class="copy-btn wd-copy-prompt">${icon('copy')} Copy prompt</button>
          <button class="copy-btn wd-copy-code" style="margin-left: 8px;">&lt;/&gt; Copy Code</button>
        </div>
      </div>
    `;

    el.querySelector('.wd-copy-code')?.addEventListener('click', async e => {
      await navigator.clipboard?.writeText(item.html);
      const originalText = e.target.innerHTML;
      e.target.textContent = 'Code Copied!';
      showToast('HTML Code copied');
      setTimeout(()=> e.target.innerHTML = originalText, 2000);
    });
  }

  // Shared Interactions
  el.querySelector('.view-more').addEventListener('click', e => {
    el.querySelector('.recipe').classList.toggle('expanded');
    e.target.textContent = el.querySelector('.recipe').classList.contains('expanded') ? 'Show less' : 'View more';
  });

  el.querySelector('.copy-btn').addEventListener('click', async e => {
    if(e.target.classList.contains('wd-copy-code')) return; // handled above
    await navigator.clipboard?.writeText(item.promptText);
    const originalText = e.target.innerHTML;
    e.target.textContent = 'Copied';
    showToast('Prompt copied');
    setTimeout(()=> e.target.innerHTML = originalText, 2000);
  });

  el.querySelector('.like-btn').addEventListener('click', e => {
    e.currentTarget.classList.toggle('liked');
  });

  el.querySelector('.share-btn').addEventListener('click', async () => {
    const url = new URL(window.location);
    url.searchParams.set('share_id', item.id);
    const shareUrl = url.toString();
    try {
      await navigator.clipboard?.writeText(shareUrl);
      showToast('Link copied to clipboard');
      await navigator.share?.({ title: `PromptoEngine - ${item.category} Prompt`, url: shareUrl });
    } catch (err) {
      if (err.name !== 'AbortError') console.log('Share API not supported or aborted.', err);
    }
  });

  return el;
}
function renderPagination(total){const p=document.getElementById('pagination');p.innerHTML='';[['Previous',page-1],...Array.from({length:total},(_,i)=>[i+1,i+1]),['Next',page+1]].forEach(([label,value])=>{const b=document.createElement('button');b.textContent=label;b.disabled=value<1||value>total;b.className=value===page?'active':'';b.addEventListener('click',()=>{page=value;render();scrollTo({top:document.querySelector('.gallery-section').offsetTop-20,behavior:'smooth'})});p.appendChild(b)})}
function showToast(msg){toast.textContent=msg;toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),2200)}
function init(){
  initTheme();
  initDevTrigger();
  const urlParams=new URLSearchParams(window.location.search);
  const sid=urlParams.get('share_id');
  if(sid){activeShareId=sid;}

  // Mode Toggles
  const modeImageBtn = document.getElementById('mode-image-btn');
  const modeWebdevBtn = document.getElementById('mode-webdev-btn');

  if (modeImageBtn && modeWebdevBtn) {
    modeImageBtn.addEventListener('click', () => {
      currentMode = 'image';
      category = 'All';
      page = 1;
      modeImageBtn.classList.add('active');
      modeWebdevBtn.classList.remove('active');
      document.querySelector('.filters').style.display = 'flex'; // show image filters
      renderTabs();
      render();
    });
    modeWebdevBtn.addEventListener('click', () => {
      currentMode = 'webdev';
      category = 'All';
      subject = 'all';
      engine = 'all';
      page = 1;
      modeWebdevBtn.classList.add('active');
      modeImageBtn.classList.remove('active');
      document.querySelector('.filters').style.display = 'none'; // hide image filters
      renderTabs();
      render();
    });
  }

  renderTabs();
  render();
  search.addEventListener('input',e=>{query=e.target.value;page=1;activeShareId=null;render()});
  document.getElementById('search-btn').addEventListener('click',()=>{query=search.value;page=1;activeShareId=null;render()});
  document.getElementById('sort-select').addEventListener('change',e=>{sort=e.target.value;render()});
  document.getElementById('subject-select').addEventListener('change',e=>{subject=e.target.value;render()});
  document.getElementById('engine-select').addEventListener('change',e=>{engine=e.target.value;render()});
  document.addEventListener('keydown',e=>{if((e.metaKey||e.ctrlKey)&&e.key==='k'){e.preventDefault();search.focus()}});
}
document.addEventListener('DOMContentLoaded',init);
