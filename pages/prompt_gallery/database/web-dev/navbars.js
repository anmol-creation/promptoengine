export const navbarsData = [
  {
    id: "wd-nav-01",
    category: "Navbars",
    title: "Glassmorphism Header",
    prompt: "Create a 'Glassmorphism Navbar'. The header background must be semi-transparent with a frosted glass blur effect (backdrop-filter: blur). It must seamlessly overlay the page content below it. Keep text contrast high.\n\nImplementation Rules:\n- If integrating into an existing repository, verify that the browser support for backdrop-filter aligns with project requirements and use appropriate fallbacks.\n- If standalone, include a colorful background behind the content area to demonstrate the glass blur effect.\n[Custom Instructions]: Modern black and white color.",
    html: `
<div class="relative w-full h-[300px] overflow-y-auto rounded-xl" style="background-image: repeating-linear-gradient(45deg, #f3f4f6 0, #f3f4f6 2px, transparent 2px, transparent 8px), linear-gradient(to bottom right, #e2e8f0, #cbd5e1);">

  <!-- Fixed Navbar -->
  <header class="sticky top-0 z-50 w-full border-b border-white/20 bg-black/10 backdrop-blur-md">
    <div class="container flex items-center justify-between h-16 px-6 mx-auto">
      <a href="#" class="text-xl font-black tracking-tighter text-gray-900 uppercase">
        Brand<span class="text-white drop-shadow-md">.</span>
      </a>

      <nav class="hidden space-x-8 md:flex">
        <a href="#" class="text-sm font-semibold text-gray-800 transition hover:text-black">Home</a>
        <a href="#" class="text-sm font-semibold text-gray-800 transition hover:text-black">About</a>
        <a href="#" class="text-sm font-semibold text-gray-800 transition hover:text-black">Services</a>
        <a href="#" class="text-sm font-semibold text-gray-800 transition hover:text-black">Contact</a>
      </nav>

      <button class="px-5 py-2 text-sm font-semibold text-white transition bg-black rounded-full hover:bg-gray-800 shadow-md">
        Sign Up
      </button>
    </div>
  </header>

  <!-- Dummy Scroll Content to show blur effect -->
  <main class="p-8 pb-32">
    <div class="max-w-2xl mx-auto space-y-6 text-gray-800">
      <div class="w-24 h-24 bg-gradient-to-tr from-gray-900 to-gray-600 rounded-full shadow-lg blur-sm float-right ml-6 mb-4"></div>
      <h1 class="text-4xl font-extrabold text-black">Modern Black & White</h1>
      <p class="text-lg leading-relaxed">Scroll down to see the frosted glass effect in action. The navbar stays sticky at the top, blurring the content as it passes underneath.</p>
      <div class="h-40 bg-white/50 border border-white rounded-xl shadow-sm p-6 backdrop-blur-sm">
         <div class="w-1/2 h-6 bg-gray-300 rounded mb-4 animate-pulse"></div>
         <div class="w-full h-4 bg-gray-200 rounded mb-2 animate-pulse"></div>
         <div class="w-3/4 h-4 bg-gray-200 rounded animate-pulse"></div>
      </div>
      <p class="text-lg leading-relaxed">This black and white minimalist approach ensures high contrast and readability while maintaining a premium glass aesthetic.</p>
      <div class="w-32 h-32 bg-black rounded-lg shadow-xl float-left mr-6 mt-4 rotate-12 opacity-80"></div>
      <p class="text-lg leading-relaxed pt-8">Keep scrolling...<br><br><br><br>End of content.</p>
    </div>
  </main>
</div>
    `,
    css: "",
    tags: ["Navbar", "Header", "Glassmorphism", "Tailwind", "Sticky"],
    subject: "Component"
  }
];
