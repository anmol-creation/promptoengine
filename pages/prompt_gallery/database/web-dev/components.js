export const componentsData = [
  {
    id: "wd-comp-01",
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
    css: "", // Tailwind is assumed via a CDN for rendering, or inline styles
    tags: ["UI", "Button", "Neon", "Tailwind"],
    subject: "Component"
  },
  {
    id: "wd-comp-02",
    category: "Card",
    title: "Glassmorphism Profile Card",
    prompt: "Design a profile card with glassmorphism effect, subtle border, blurred background, containing a profile image, name, role, and social links.",
    html: `
<div class="flex items-center justify-center p-8" style="background-image: linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1);">
  <div class="flex flex-col items-center max-w-sm p-6 space-y-4 bg-white border border-white rounded-2xl shadow-xl bg-opacity-20 backdrop-filter backdrop-blur-lg">
    <img src="https://i.pravatar.cc/150?img=32" alt="Profile" class="w-24 h-24 rounded-full border-2 border-white shadow-md object-cover">
    <div class="text-center">
      <h2 class="text-xl font-bold text-gray-800">Jane Doe</h2>
      <p class="text-sm font-medium text-gray-600">Frontend Developer</p>
    </div>
    <div class="flex space-x-3">
      <button class="p-2 text-gray-700 bg-white bg-opacity-50 rounded-full hover:bg-opacity-100 transition-all">♡</button>
      <button class="p-2 text-gray-700 bg-white bg-opacity-50 rounded-full hover:bg-opacity-100 transition-all">✉</button>
      <button class="p-2 text-gray-700 bg-white bg-opacity-50 rounded-full hover:bg-opacity-100 transition-all">↗</button>
    </div>
  </div>
</div>
    `,
    css: "",
    tags: ["Card", "Profile", "Glassmorphism"],
    subject: "Component"
  }
];
