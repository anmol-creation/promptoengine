export const layoutsData = [
  {
    id: "wd-layout-01",
    category: "Layouts",
    title: "Holy Grail Layout",
    prompt: "Create a 'Holy Grail Layout' structural shell. It must include a persistent Header at the top, a persistent Footer at the bottom, and a main content area in the middle that is split into 3 columns: a left sidebar, a wide main content area, and a right sidebar. Ensure the footer sticks to the bottom even if the content is short.",
    html: `
<div class="flex flex-col min-h-[400px] w-full text-sm font-semibold text-center text-gray-800 bg-gray-100 rounded-xl overflow-hidden shadow-sm border border-gray-200">
  <!-- Header -->
  <header class="flex items-center justify-center p-4 bg-blue-200 shadow-sm z-10">
    Persistent Header
  </header>

  <!-- Middle Content Area -->
  <div class="flex flex-1 flex-col md:flex-row">
    <!-- Left Sidebar -->
    <aside class="flex items-center justify-center w-full md:w-1/4 p-4 bg-green-200 md:order-1">
      Left Sidebar
    </aside>

    <!-- Main Content -->
    <main class="flex items-center justify-center w-full md:w-2/4 p-8 bg-white md:order-2 shadow-inner">
      Main Content Area
    </main>

    <!-- Right Sidebar -->
    <aside class="flex items-center justify-center w-full md:w-1/4 p-4 bg-yellow-200 md:order-3">
      Right Sidebar
    </aside>
  </div>

  <!-- Footer -->
  <footer class="flex items-center justify-center p-4 bg-purple-200 shadow-sm z-10">
    Persistent Footer
  </footer>
</div>
    `,
    css: "",
    tags: ["Layout", "Holy Grail", "Tailwind", "Responsive"],
    subject: "Structure"
  },
  {
    id: "wd-layout-02",
    category: "Layouts",
    title: "12-Column Grid",
    prompt: "Set up a standard '12-Column Grid' wrapper. Include placeholder blocks demonstrating how to span 3, 4, 6, and 12 columns responsively. Use Tailwind CSS grid utilities if applicable.",
    html: `
<div class="grid grid-cols-12 gap-4 w-full p-6 bg-gray-100 rounded-xl font-semibold text-gray-800 text-center shadow-inner">
  <!-- 12 Columns -->
  <div class="col-span-12 p-4 bg-indigo-300 rounded-lg shadow-sm border border-indigo-400">
    Span 12
  </div>

  <!-- 6 Columns -->
  <div class="col-span-12 md:col-span-6 p-4 bg-teal-300 rounded-lg shadow-sm border border-teal-400">
    Span 6
  </div>
  <div class="col-span-12 md:col-span-6 p-4 bg-teal-300 rounded-lg shadow-sm border border-teal-400">
    Span 6
  </div>

  <!-- 4 Columns -->
  <div class="col-span-12 md:col-span-4 p-4 bg-rose-300 rounded-lg shadow-sm border border-rose-400">
    Span 4
  </div>
  <div class="col-span-12 md:col-span-4 p-4 bg-rose-300 rounded-lg shadow-sm border border-rose-400">
    Span 4
  </div>
  <div class="col-span-12 md:col-span-4 p-4 bg-rose-300 rounded-lg shadow-sm border border-rose-400">
    Span 4
  </div>

  <!-- 3 Columns -->
  <div class="col-span-12 sm:col-span-6 md:col-span-3 p-4 bg-amber-300 rounded-lg shadow-sm border border-amber-400">
    Span 3
  </div>
  <div class="col-span-12 sm:col-span-6 md:col-span-3 p-4 bg-amber-300 rounded-lg shadow-sm border border-amber-400">
    Span 3
  </div>
  <div class="col-span-12 sm:col-span-6 md:col-span-3 p-4 bg-amber-300 rounded-lg shadow-sm border border-amber-400">
    Span 3
  </div>
  <div class="col-span-12 sm:col-span-6 md:col-span-3 p-4 bg-amber-300 rounded-lg shadow-sm border border-amber-400">
    Span 3
  </div>
</div>
    `,
    css: "",
    tags: ["Layout", "Grid", "12-Column", "Tailwind"],
    subject: "Structure"
  },
  {
    id: "wd-layout-03",
    category: "Layouts",
    title: "Narrow Reading Container",
    prompt: "Create a 'Narrow Reading Container' layout. Apply a maximum width (around 65ch or 700px) and center it horizontally to provide the optimal line length for reading long-form typography.",
    html: `
<div class="flex items-center justify-center w-full min-h-[300px] bg-gray-100 p-6 rounded-xl">
  <!-- Narrow Reading Container -->
  <article class="max-w-[65ch] w-full mx-auto p-8 bg-white shadow-lg rounded-xl border border-gray-200">
    <header class="mb-6">
      <h1 class="text-3xl font-bold text-gray-900 mb-2">The Art of Typography</h1>
      <p class="text-sm text-gray-500 font-medium tracking-wide uppercase">October 20, 2026</p>
    </header>

    <div class="prose prose-gray text-gray-700 leading-relaxed space-y-4">
      <p>
        A narrow reading container is essential for long-form content. By restricting the maximum width of the text to around 65 characters, you create an optimal line length that is comfortable for the human eye to track.
      </p>
      <p>
        If lines are too long, the reader's eye will have a hard time focusing on the text. This is because the length makes it difficult to judge where the line starts and ends. Furthermore it can be difficult to continue from the correct line in large blocks of text.
      </p>
    </div>
  </article>
</div>
    `,
    css: "",
    tags: ["Layout", "Typography", "Reading", "Tailwind"],
    subject: "Structure"
  },
  {
    id: "wd-layout-04",
    category: "Layouts",
    title: "Large Multi-Column Footer",
    prompt: "Create a 'Large Multi-Column Footer'. Include a company bio column, 3 columns for sitemap links, and a bottom edge with legal links and copyright.",
    html: `
<footer class="w-full bg-slate-900 text-slate-300 py-12 px-6 font-sans text-sm rounded-xl">
  <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
    <!-- Company Bio Column -->
    <div class="lg:col-span-2 space-y-4">
      <h3 class="text-white text-xl font-bold tracking-tight">Acme Corp</h3>
      <p class="text-slate-400 leading-relaxed max-w-sm">
        We build beautiful, fast, and accessible digital experiences. Our mission is to empower creators and innovators around the world with cutting-edge tools.
      </p>
      <div class="flex space-x-4 pt-2">
        <div class="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-500 transition-colors cursor-pointer">
          <span class="sr-only">Twitter</span>
          <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
        </div>
        <div class="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-500 transition-colors cursor-pointer">
          <span class="sr-only">GitHub</span>
          <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path></svg>
        </div>
      </div>
    </div>

    <!-- Links Column 1 -->
    <div class="space-y-4">
      <h4 class="text-white font-semibold uppercase tracking-wider text-xs">Products</h4>
      <ul class="space-y-3">
        <li><a href="#" class="hover:text-white transition-colors">UI Builder</a></li>
        <li><a href="#" class="hover:text-white transition-colors">Analytics</a></li>
        <li><a href="#" class="hover:text-white transition-colors">Data Storage</a></li>
        <li><a href="#" class="hover:text-white transition-colors">Cloud Functions</a></li>
      </ul>
    </div>

    <!-- Links Column 2 -->
    <div class="space-y-4">
      <h4 class="text-white font-semibold uppercase tracking-wider text-xs">Resources</h4>
      <ul class="space-y-3">
        <li><a href="#" class="hover:text-white transition-colors">Documentation</a></li>
        <li><a href="#" class="hover:text-white transition-colors">API Reference</a></li>
        <li><a href="#" class="hover:text-white transition-colors">Community Forum</a></li>
        <li><a href="#" class="hover:text-white transition-colors">Blog</a></li>
      </ul>
    </div>

    <!-- Links Column 3 -->
    <div class="space-y-4">
      <h4 class="text-white font-semibold uppercase tracking-wider text-xs">Company</h4>
      <ul class="space-y-3">
        <li><a href="#" class="hover:text-white transition-colors">About Us</a></li>
        <li><a href="#" class="hover:text-white transition-colors">Careers</a></li>
        <li><a href="#" class="hover:text-white transition-colors">Press</a></li>
        <li><a href="#" class="hover:text-white transition-colors">Contact</a></li>
      </ul>
    </div>
  </div>

  <!-- Bottom Edge -->
  <div class="max-w-7xl mx-auto pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
    <p class="text-slate-500 text-xs">
      &copy; 2026 Acme Corporation. All rights reserved.
    </p>
    <div class="flex space-x-6 text-xs text-slate-500">
      <a href="#" class="hover:text-white transition-colors">Privacy Policy</a>
      <a href="#" class="hover:text-white transition-colors">Terms of Service</a>
      <a href="#" class="hover:text-white transition-colors">Cookie Settings</a>
    </div>
  </div>
</footer>
    `,
    css: "",
    tags: ["Layout", "Footer", "Tailwind", "Responsive"],
    subject: "Structure"
  },
  {
    id: "wd-layout-05",
    category: "Layouts",
    title: "Social User Profile",
    prompt: "Create a 'Social User Profile' page layout. It must include a cover banner image at the top, a profile avatar overlapping the banner, user stats (like followers/following), and a timeline feed of their posts below.",
    html: `
<div class="max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 font-sans text-gray-800">
  <!-- Cover Banner -->
  <div class="h-32 sm:h-48 w-full bg-gradient-to-r from-cyan-500 to-blue-500 relative">
    <!-- Action buttons could go here (e.g., Edit Cover) -->
  </div>

  <!-- Profile Info Section -->
  <div class="px-6 relative">
    <!-- Avatar overlapping banner -->
    <div class="absolute -top-12 sm:-top-16 border-4 border-white rounded-full bg-white shadow-sm">
      <div class="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
        <!-- Placeholder Image -->
        <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="Profile Avatar" class="w-full h-full object-cover" />
      </div>
    </div>

    <!-- Action Button -->
    <div class="flex justify-end pt-4 pb-2">
      <button class="px-4 py-1.5 rounded-full border border-gray-300 font-semibold text-sm hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
        Edit Profile
      </button>
    </div>

    <!-- User Details -->
    <div class="mt-2 sm:mt-0 pb-4 border-b border-gray-100">
      <h1 class="text-xl sm:text-2xl font-bold text-gray-900">Jane Doe</h1>
      <p class="text-sm text-gray-500">@janedoe_dev</p>

      <p class="mt-3 text-sm text-gray-700 leading-relaxed max-w-lg">
        Frontend Developer building accessible and beautiful user interfaces. Open source contributor and coffee enthusiast. ☕💻
      </p>

      <!-- Stats -->
      <div class="flex space-x-6 mt-4 text-sm">
        <div class="flex space-x-1 cursor-pointer hover:underline">
          <span class="font-bold text-gray-900">1,204</span>
          <span class="text-gray-500">Following</span>
        </div>
        <div class="flex space-x-1 cursor-pointer hover:underline">
          <span class="font-bold text-gray-900">10.5K</span>
          <span class="text-gray-500">Followers</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Timeline Feed -->
  <div class="bg-gray-50/50 p-6 space-y-4">
    <h2 class="font-bold text-gray-900 text-lg mb-2">Recent Posts</h2>

    <!-- Post 1 -->
    <div class="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
      <div class="flex items-center space-x-3 mb-3">
        <div class="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
           <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="Profile Avatar" class="w-full h-full object-cover" />
        </div>
        <div>
          <p class="font-semibold text-sm text-gray-900">Jane Doe <span class="font-normal text-gray-500 text-xs ml-1">· 2h</span></p>
        </div>
      </div>
      <p class="text-sm text-gray-700">Just launched my new portfolio built with Tailwind CSS! It's amazing how fast you can iterate on designs when you don't have to leave your HTML file. 🚀 #webdev #tailwindcss</p>
    </div>

    <!-- Post 2 -->
    <div class="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
      <div class="flex items-center space-x-3 mb-3">
        <div class="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
           <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="Profile Avatar" class="w-full h-full object-cover" />
        </div>
        <div>
          <p class="font-semibold text-sm text-gray-900">Jane Doe <span class="font-normal text-gray-500 text-xs ml-1">· Oct 24</span></p>
        </div>
      </div>
      <p class="text-sm text-gray-700 mb-3">Working on some new glassmorphism UI components today. The backdrop-filter utility makes this so easy.</p>
      <!-- Post Image Placeholder -->
      <div class="h-40 w-full rounded-md bg-gradient-to-br from-indigo-100 to-purple-100 border border-gray-100 flex items-center justify-center">
        <span class="text-gray-400 text-xs font-medium uppercase tracking-widest">UI Snapshot</span>
      </div>
    </div>
  </div>
</div>
    `,
    css: "",
    tags: ["Layout", "Profile", "Social", "Tailwind"],
    subject: "Structure"
  }
];
