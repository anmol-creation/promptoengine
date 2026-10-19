export const buttonsData = [
  {
    id: "wd-btn-01",
    category: "Button",
    title: "Neon Glow Button",
    prompt: "Create a modern button component with dark theme, neon blue glow on hover, rounded corners, and smooth transition effects using Tailwind CSS.",
    html: `
<div class="flex items-center justify-center p-8 bg-gray-900 rounded-xl">
  <button class="relative px-6 py-3 font-bold text-white rounded-full group">
    <span class="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-cyan-500 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>
    <span class="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-blue-700 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>
    <span class="relative z-10 px-6 py-3 bg-gray-900 border-2 border-gray-800 rounded-full group-hover:bg-gray-800 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.5)] transition-all duration-300">
      Hover Me
    </span>
  </button>
</div>
    `,
    css: "",
    tags: ["UI", "Button", "Neon", "Tailwind"],
    subject: "Component"
  },
  {
    id: "wd-btn-02",
    category: "Button",
    title: "Glassmorphism CTA",
    prompt: "Create an elegant 'Glassmorphism' style Call-to-Action (CTA) button. The design must include a semi-transparent frosted glass background (backdrop-blur), a subtle white or light border to define the edge, and clear, legible typography.\\n\\nImplementation Rules:\\n- If integrating into an existing repository, ensure the glass effect overlays seamlessly over the existing background context and adapts to the current color scheme.\\n- If standalone, include a colorful placeholder background behind the button to demonstrate the frosted effect.",
    html: `
<div class="flex items-center justify-center p-12 rounded-xl" style="background-image: radial-gradient(circle at top right, #ff7eb3, #ff758c, #ff6a5c); min-height: 200px;">
  <button class="relative px-8 py-4 text-lg font-semibold text-white transition duration-300 bg-white/10 border border-white/30 rounded-2xl shadow-lg backdrop-blur-md hover:bg-white/20 hover:shadow-xl hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-white/50">
    Get Started
  </button>
</div>
    `,
    css: "",
    tags: ["Button", "Glassmorphism", "CTA", "Tailwind"],
    subject: "Component"
  }
];
