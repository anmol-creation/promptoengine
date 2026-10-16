export const simpleBrainMap = {
    "Plan": {
        type: "group",
        options: {
            "Project Idea": {
                type: "group",
                options: {
                    "Generate New Idea": {
                        type: "group",
                        options: {
                            "Field": {
                                type: "group",
                                options: {
                                    "AI": { type: "option", prompt: "AI" },
                                    "Education": { type: "option", prompt: "Education" },
                                    "Healthcare": { type: "option", prompt: "Healthcare" },
                                    "Finance": { type: "option", prompt: "Finance" },
                                    "Social Media": { type: "option", prompt: "Social Media" },
                                    "E-commerce": { type: "option", prompt: "E-commerce" },
                                    "Productivity": { type: "option", prompt: "Productivity" },
                                    "Travel": { type: "option", prompt: "Travel" },
                                    "Gaming": { type: "option", prompt: "Gaming" },
                                    "Entertainment": { type: "option", prompt: "Entertainment" },
                                    "Business": { type: "option", prompt: "Business" },
                                    "Community": { type: "option", prompt: "Community" },
                                    "News": { type: "option", prompt: "News" },
                                    "Portfolio": { type: "option", prompt: "Portfolio" },
                                    "Food": { type: "option", prompt: "Food" },
                                    "Sports": { type: "option", prompt: "Sports" },
                                    "Real Estate": { type: "option", prompt: "Real Estate" },
                                    "Job & Career": { type: "option", prompt: "Job & Career" },
                                    "Lifestyle": { type: "option", prompt: "Lifestyle" },
                                    "Other": { type: "option", prompt: "Other" }
                                }
                            },
                            "Target Audience": {
                                type: "group",
                                options: {
                                    "Everyone": { type: "option", prompt: "Everyone" },
                                    "Students": { type: "option", prompt: "Students" },
                                    "Teachers": { type: "option", prompt: "Teachers" },
                                    "Developers": { type: "option", prompt: "Developers" },
                                    "Designers": { type: "option", prompt: "Designers" },
                                    "Creators": { type: "option", prompt: "Creators" },
                                    "Businesses": { type: "option", prompt: "Businesses" },
                                    "Startups": { type: "option", prompt: "Startups" },
                                    "Freelancers": { type: "option", prompt: "Freelancers" },
                                    "Professionals": { type: "option", prompt: "Professionals" },
                                    "Children": { type: "option", prompt: "Children" },
                                    "Parents": { type: "option", prompt: "Parents" },
                                    "Local Community": { type: "option", prompt: "Local Community" },
                                    "Other": { type: "option", prompt: "Other" }
                                }
                            },
                            "Goal": {
                                type: "group",
                                options: {
                                    "Solve a Problem": { type: "option", prompt: "Solve a Problem" },
                                    "Save Time": { type: "option", prompt: "Save Time" },
                                    "Increase Productivity": { type: "option", prompt: "Increase Productivity" },
                                    "Learning": { type: "option", prompt: "Learning" },
                                    "Business Growth": { type: "option", prompt: "Business Growth" },
                                    "Community Building": { type: "option", prompt: "Community Building" },
                                    "Entertainment": { type: "option", prompt: "Entertainment" },
                                    "Information Sharing": { type: "option", prompt: "Information Sharing" },
                                    "Sell Products": { type: "option", prompt: "Sell Products" },
                                    "Sell Services": { type: "option", prompt: "Sell Services" },
                                    "Generate Leads": { type: "option", prompt: "Generate Leads" },
                                    "Brand Awareness": { type: "option", prompt: "Brand Awareness" },
                                    "Other": { type: "option", prompt: "Other" }
                                }
                            },
                            "Platform": {
                                type: "group",
                                options: {
                                    "Website": { type: "option", prompt: "Website" },
                                    "Web App": { type: "option", prompt: "Web App" },
                                    "SaaS Platform": { type: "option", prompt: "SaaS Platform" },
                                    "Dashboard": { type: "option", prompt: "Dashboard" },
                                    "Marketplace": { type: "option", prompt: "Marketplace" },
                                    "Community Platform": { type: "option", prompt: "Community Platform" },
                                    "Landing Page": { type: "option", prompt: "Landing Page" },
                                    "Portfolio": { type: "option", prompt: "Portfolio" },
                                    "Directory": { type: "option", prompt: "Directory" },
                                    "Blog": { type: "option", prompt: "Blog" },
                                    "Other": { type: "option", prompt: "Other" }
                                }
                            },
                            "Complexity": {
                                type: "group",
                                options: {
                                    "Simple": { type: "option", prompt: "Simple" },
                                    "Medium": { type: "option", prompt: "Medium" },
                                    "Advanced": { type: "option", prompt: "Advanced" }
                                }
                            },
                            "Monetization": {
                                type: "group",
                                options: {
                                    "Free": { type: "option", prompt: "Free" },
                                    "Subscription": { type: "option", prompt: "Subscription" },
                                    "One-time Purchase": { type: "option", prompt: "One-time Purchase" },
                                    "Freemium": { type: "option", prompt: "Freemium" },
                                    "Advertisements": { type: "option", prompt: "Advertisements" },
                                    "Donations": { type: "option", prompt: "Donations" },
                                    "Not Required": { type: "option", prompt: "Not Required" },
                                    "Other": { type: "option", prompt: "Other" }
                                }
                            },
                            "Technology Preference": {
                                type: "group",
                                options: {
                                    "No Preference": { type: "option", prompt: "No Preference" },
                                    "React": { type: "option", prompt: "React" },
                                    "Next.js": { type: "option", prompt: "Next.js" },
                                    "Vue": { type: "option", prompt: "Vue" },
                                    "Angular": { type: "option", prompt: "Angular" },
                                    "HTML / CSS / JavaScript": { type: "option", prompt: "HTML / CSS / JavaScript" },
                                    "Other": { type: "option", prompt: "Other" }
                                }
                            },
                            "Additional Requirements": {
                                type: "group",
                                options: {
                                    "Add Details": {
                                        type: "option",
                                        prompt: "",
                                        dynamicInput: {
                                            type: "text",
                                            placeholder: "Describe any specific requirement that cannot be selected above.\n\nExamples:\n- Modern futuristic design\n- Focus on mobile users\n- Multi-language support\n- AI-powered features\n- Dark mode by default",
                                            label: "Additional Requirements (Optional)"
                                        }
                                    }
                                }
                            },
                            "Output Format": {
                                type: "group",
                                options: {
                                    "Quick Idea": { type: "option", prompt: "Quick Idea" },
                                    "Detailed Plan": { type: "option", prompt: "Detailed Plan" },
                                    "Startup Proposal": { type: "option", prompt: "Startup Proposal" },
                                    "Technical Blueprint": { type: "option", prompt: "Technical Blueprint" },
                                    "Product Requirements Document (PRD)": { type: "option", prompt: "Product Requirements Document (PRD)" }
                                }
                            }
                        }
                    },
                    "Improve Existing Idea": { type: "option", prompt: "Improve Existing Idea" },
                    "Expand Existing Idea": { type: "option", prompt: "Expand Existing Idea" },
                    "Validate Existing Idea": { type: "option", prompt: "Validate Existing Idea" },
                    "Convert Idea into Website Plan": { type: "option", prompt: "Convert Idea into Website Plan" }
                }
            },
            "Existing Project": { type: "group", options: {} },
            "Requirements": { type: "group", options: {} },
            "Features": { type: "group", options: {} },
            "Pages": { type: "group", options: {} },
            "Structure": { type: "group", options: {} },
            "User Flow": { type: "group", options: {} },
            "Tech Stack": { type: "group", options: {} },
            "Architecture": { type: "group", options: {} },
            "Roadmap": { type: "group", options: {} },
            "Timeline": { type: "group", options: {} },
            "Other": { type: "group", options: {} }
        }
    },
    "Create": {
        type: "group",
        options: {
            "Components (UI Elements)": {
                type: "group",
                options: {
                    "Basic / Core": {
                        type: "group",
                        options: {
                            "Button": {
                                type: "group",
                                options: {
                                    "CTA (Call to Action)": {
                                        type: "group",
                                        options: {
                                            "Neon Cyberpunk": {
                                                type: "option",
                                                prompt: "Create a highly engaging 'Neon Cyberpunk' style Call-to-Action (CTA) button. It should feature a glowing neon border, a dark contrasting background, futuristic typography, and a subtle glitch or intense glow effect on hover.\n\nImplementation Rules:\n- If integrating into an existing repository, adapt the neon colors to match the project's primary accent colors while maintaining the cyberpunk aesthetic. Respect existing design tokens.\n- If standalone, provide a complete, isolated component with necessary CSS/framework classes.",
                                                dynamicInput: { type: "text", placeholder: "Any specific text (e.g., 'Join Now') or tech stack?", label: "Custom Details" }
                                            },
                                            "Glassmorphism (Frosted)": {
                                                type: "option",
                                                prompt: "Create an elegant 'Glassmorphism' style Call-to-Action (CTA) button. The design must include a semi-transparent frosted glass background (backdrop-blur), a subtle white or light border to define the edge, and clear, legible typography.\n\nImplementation Rules:\n- If integrating into an existing repository, ensure the glass effect overlays seamlessly over the existing background context and adapts to the current color scheme.\n- If standalone, include a colorful placeholder background behind the button to demonstrate the frosted effect.",
                                                dynamicInput: { type: "text", placeholder: "Any specific text or tech stack (Tailwind, CSS)?", label: "Custom Details" }
                                            },
                                            "Soft Neumorphic": {
                                                type: "option",
                                                prompt: "Create a 'Soft Neumorphic' style Call-to-Action (CTA) button. It should mimic a physical, extruded button using dual soft drop-shadows (one light, one dark) that blend perfectly with the background color. It must have a realistic 'pressed' inner-shadow state on active/click.\n\nImplementation Rules:\n- If integrating into an existing repository, meticulously match the button's background color to its parent container for the neumorphic illusion to work.\n- If standalone, provide the necessary base background styling.",
                                                dynamicInput: { type: "text", placeholder: "Button text or framework?", label: "Custom Details" }
                                            },
                                            "Elegant Gradient": {
                                                type: "option",
                                                prompt: "Create a modern 'Elegant Gradient' Call-to-Action (CTA) button. Apply a smooth, premium multi-color linear or radial gradient, rounded corners (pill or soft radius), and a subtle colored drop shadow that reflects the gradient.\n\nImplementation Rules:\n- If integrating into an existing repository, generate a gradient that harmonizes with the existing brand color palette or design system.\n- If standalone, use a vibrant and trendy gradient combination.",
                                                dynamicInput: { type: "text", placeholder: "Button text or preferred gradient colors?", label: "Custom Details" }
                                            },
                                            "High-Contrast Minimalist": {
                                                type: "option",
                                                prompt: "Create a 'High-Contrast Minimalist' Call-to-Action (CTA) button. Focus on sharp, distinct edges, solid monochrome or stark contrasting colors (e.g., stark black on white), bold typography, and a stark inverted state on hover.\n\nImplementation Rules:\n- If integrating into an existing codebase, adapt to the project's typography scale and strict spacing guidelines while maintaining the stark contrast.\n- If standalone, ensure maximum accessibility and crisp rendering.",
                                                dynamicInput: { type: "text", placeholder: "Button text or framework?", label: "Custom Details" }
                                            },
                                            "Playful Bouncy / 3D Pop": {
                                                type: "option",
                                                prompt: "Create a 'Playful Bouncy' 3D style Call-to-Action (CTA) button. It should feature a thick bottom border or shadow to give it a physical 3D block appearance. On click/active, it must physically 'press down' by translating the Y-axis and reducing the shadow.\n\nImplementation Rules:\n- If integrating into an existing repository, adapt the button colors to match the brand identity while retaining the playful, interactive physics.\n- If standalone, provide a fully functioning component with smooth spring/bounce transitions.",
                                                dynamicInput: { type: "text", placeholder: "Button text or framework?", label: "Custom Details" }
                                            }
                                        }
                                    },
                                    "Social Media / Login": {
                                        type: "group",
                                        options: {
                                            "Brand Colors (Solid)": {
                                                type: "option",
                                                prompt: "Create a 'Brand Colors (Solid)' Social Media / Login button. It should feature a clean, flat design using the exact official hex color of the selected social media brand (e.g., Google White, Facebook Blue). Include the official vector logo icon on the left.\n\nImplementation Rules:\n- If integrating into an existing repository, adapt the button's spacing and border-radius to match the global UI theme, but strictly preserve the brand color and icon.\n- If standalone, provide the standard button code with placeholder brand colors.",
                                                dynamicInput: { type: "text", placeholder: "Specify the brand (e.g., Google, Apple) or framework?", label: "Custom Details" }
                                            },
                                            "Outline with Brand Icon": {
                                                type: "option",
                                                prompt: "Create an 'Outline with Brand Icon' Social Media / Login button. The button must have a transparent background with a solid border matching the brand's primary color. The brand icon should be placed on the left side with text in the center.\n\nImplementation Rules:\n- If integrating into an existing repository, match the border thickness and hover states (e.g., slight background fill on hover) to the current theme.\n- If standalone, provide a clean, modern outlined component.",
                                                dynamicInput: { type: "text", placeholder: "Specify the brand (e.g., Twitter) or framework?", label: "Custom Details" }
                                            },
                                            "Pill-shaped with Gradient": {
                                                type: "option",
                                                prompt: "Create a 'Pill-shaped with Gradient' Social Media / Login button. It should have a fully rounded pill shape (e.g., rounded-full) and a vibrant, modern background gradient (ideal for brands like Instagram or TikTok).\n\nImplementation Rules:\n- If integrating into an existing repository, ensure the pill shape doesn't clash with highly square themes, and adapt the gradient direction to match existing styles.\n- If standalone, generate the exact CSS gradient required.",
                                                dynamicInput: { type: "text", placeholder: "Specify the brand (e.g., Instagram) or framework?", label: "Custom Details" }
                                            },
                                            "Dark Mode Stealth": {
                                                type: "option",
                                                prompt: "Create a premium 'Dark Mode Stealth' Social Media / Login button. The background should be a deep dark grey or black, with a very subtle lighter border. The icon and text must be stark white for high contrast.\n\nImplementation Rules:\n- If integrating into an existing repository, utilize the theme's existing dark mode color variables (e.g., bg-gray-800 or surface colors).\n- If standalone, create an isolated dark-themed component.",
                                                dynamicInput: { type: "text", placeholder: "Specify the brand (e.g., Apple, GitHub) or framework?", label: "Custom Details" }
                                            },
                                            "Minimalist Icon-Only": {
                                                type: "option",
                                                prompt: "Create a 'Minimalist Icon-Only' Social Media / Login button. The button should display only the brand's logo inside a soft circular or rounded-square container, without any accompanying text. Include a subtle hover animation like a slight scale, spin, or bounce.\n\nImplementation Rules:\n- If integrating into an existing codebase, apply the repository's standard icon-button hover transition tokens.\n- If standalone, provide a compact, accessible icon button component.",
                                                dynamicInput: { type: "text", placeholder: "Specify the brand (e.g., Discord) or framework?", label: "Custom Details" }
                                            }
                                        }
                                    },
                                    "E-commerce / Cart": {
                                        type: "group",
                                        options: {
                                            "Urgent 'Buy Now' (Pulsing)": {
                                                type: "option",
                                                prompt: "Create an Urgent 'Buy Now' E-commerce button. The button must use a high-conversion, attention-grabbing color (like bright red, orange, or vibrant green) and feature a continuous, subtle pulsing or heartbeat animation to create urgency.\n\nImplementation Rules:\n- If integrating into an existing repository, respect the primary/secondary accent color system if possible, but prioritize visibility. Use existing keyframe animations if available.\n- If standalone, implement the keyframe pulsing CSS animation.",
                                                dynamicInput: { type: "text", placeholder: "Any specific text (e.g., 'Buy Now') or tech stack?", label: "Custom Details" }
                                            },
                                            "Wide 'Add to Cart' Block": {
                                                type: "option",
                                                prompt: "Create a 'Wide Add to Cart Block' button. It should be a full-width (block-level) button designed for mobile product pages or sidebars. Include a shopping cart or bag icon aligned to the left or center, with bold, readable text.\n\nImplementation Rules:\n- If integrating into an existing repository, adapt the button's padding and typography to match the product details layout.\n- If standalone, provide a responsive full-width component.",
                                                dynamicInput: { type: "text", placeholder: "Any specific text or tech stack?", label: "Custom Details" }
                                            },
                                            "Sleek Dark Mode Cart": {
                                                type: "option",
                                                prompt: "Create a 'Sleek Dark Mode Cart' E-commerce button. It should have a deep black or rich dark background with luxury contrast details (like gold, silver, or crisp white text and icon). The hover state should be elegant, perhaps a slight brightness increase.\n\nImplementation Rules:\n- If integrating into an existing repository, match the 'sleekness' to the existing premium/dark theme tokens.\n- If standalone, provide a high-end luxury e-commerce button.",
                                                dynamicInput: { type: "text", placeholder: "Any specific text or tech stack?", label: "Custom Details" }
                                            },
                                            "Split Button": {
                                                type: "option",
                                                prompt: "Create a 'Split Button' for E-commerce. The left side is the primary action (e.g., 'Add to Cart') and the right side is a smaller, distinct section separated by a vertical divider line containing a dropdown chevron/arrow for selecting variants or quantities.\n\nImplementation Rules:\n- If integrating into an existing repository, ensure the divider and dropdown functionality integrate with the existing UI component library or state management.\n- If standalone, provide the HTML/CSS structure for the split layout.",
                                                dynamicInput: { type: "text", placeholder: "Any specific text or tech stack?", label: "Custom Details" }
                                            }
                                        }
                                    },
                                    "Navigation / Menu": {
                                        type: "group",
                                        options: {
                                            "Ghost / Invisible": {
                                                type: "option",
                                                prompt: "Create a 'Ghost / Invisible' Navigation button. The button should have no background or border by default, appearing just as text. On hover or focus, it should reveal a soft, low-opacity background color (e.g., light grey or pale primary color).\n\nImplementation Rules:\n- If integrating into an existing repository, use the theme's standard hover-state utility classes (e.g., hover:bg-gray-100 in Tailwind).\n- If standalone, provide a clean, accessible ghost button.",
                                                dynamicInput: { type: "text", placeholder: "Button text or framework?", label: "Custom Details" }
                                            },
                                            "Underline Slide (Hover)": {
                                                type: "option",
                                                prompt: "Create an 'Underline Slide' Navigation button. It should appear as plain text, but upon hover, an underline should smoothly animate from left to right (or expand from the center) beneath the text.\n\nImplementation Rules:\n- If integrating into an existing repository, match the transition timing functions to the global animation rules.\n- If standalone, implement the ::after pseudo-element CSS animation logic.",
                                                dynamicInput: { type: "text", placeholder: "Button text or framework?", label: "Custom Details" }
                                            },
                                            "Pill-shaped Active State": {
                                                type: "option",
                                                prompt: "Create a 'Pill-shaped Active State' Navigation button. When inactive, it looks like a standard ghost button. When marked as 'active' (current page), it morphs into a fully rounded pill shape with a solid or subtly tinted background color.\n\nImplementation Rules:\n- If integrating into an existing codebase, ensure it accepts an 'active' or 'isCurrent' prop/class and styles accordingly based on the theme.\n- If standalone, provide both default and active state CSS.",
                                                dynamicInput: { type: "text", placeholder: "Button text or framework?", label: "Custom Details" }
                                            },
                                            "Retro Terminal Style": {
                                                type: "option",
                                                prompt: "Create a 'Retro Terminal Style' Navigation button. It should use a monospace typography font, with neon green or amber text on a dark background. The hover state should invert the colors entirely into a solid block (like an old command-line cursor).\n\nImplementation Rules:\n- If integrating into an existing repository, only apply this if it fits the thematic context, otherwise use custom scoped CSS to prevent bleeding.\n- If standalone, provide the complete retro aesthetic.",
                                                dynamicInput: { type: "text", placeholder: "Button text or framework?", label: "Custom Details" }
                                            }
                                        }
                                    },
                                    "Floating / Icon": {
                                        type: "group",
                                        options: {
                                            "Circular Shadow Lift": {
                                                type: "option",
                                                prompt: "Create a 'Circular Shadow Lift' Floating Action Button (FAB). It must be a perfect circle containing an icon (e.g., a plus sign or message icon), featuring a heavy drop shadow. On hover, the button should lift up slightly (translateY) and the shadow should expand.\n\nImplementation Rules:\n- If integrating into an existing repository, position it fixed to the bottom-right corner and use the theme's shadow elevation tokens.\n- If standalone, provide the fixed positioning and hover physics.",
                                                dynamicInput: { type: "text", placeholder: "Specify the icon (e.g., Plus, Chat) or tech stack?", label: "Custom Details" }
                                            },
                                            "Glassmorphism FAB": {
                                                type: "option",
                                                prompt: "Create a 'Glassmorphism' Floating Action Button (FAB). The circular button should have a frosted glass effect (backdrop-blur), semi-transparent background, and a delicate border, allowing underlying page content to blur as it scrolls behind it.\n\nImplementation Rules:\n- If integrating into an existing repository, ensure the blur effect is performant and matches the project's glassmorphism style guide.\n- If standalone, include a colorful background behind it to prove the blur works.",
                                                dynamicInput: { type: "text", placeholder: "Specify the icon or tech stack?", label: "Custom Details" }
                                            },
                                            "Expanding FAB": {
                                                type: "option",
                                                prompt: "Create an 'Expanding' Floating Action Button (FAB). Initially, it should be a small circle with just an icon. On hover, the button must smoothly expand horizontally into a pill shape to reveal descriptive text next to the icon.\n\nImplementation Rules:\n- If integrating into an existing repository, implement smooth CSS transitions for width/max-width and text opacity.\n- If standalone, provide the complete HTML/CSS for the expanding animation.",
                                                dynamicInput: { type: "text", placeholder: "Specify the text (e.g., 'New Post') and icon?", label: "Custom Details" }
                                            },
                                            "Glowing Neon FAB": {
                                                type: "option",
                                                prompt: "Create a 'Glowing Neon' Floating Action Button (FAB). The circular button should have a continuous, radiating neon pulse effect behind it (like radar waves or a glowing aura). Ideal for chat support or AI assistant triggers.\n\nImplementation Rules:\n- If integrating into an existing repository, use existing keyframe animations if present, and adapt the glow color to the primary brand color.\n- If standalone, provide the custom keyframe animations for the glowing rings.",
                                                dynamicInput: { type: "text", placeholder: "Specify the icon (e.g., Bot, Chat) or tech stack?", label: "Custom Details" }
                                            }
                                        }
                                    }
                                }
                            },
                            "Badges / Chips": { type: "option", prompt: "Badges / Chips" },
                            "Icons & Avatars": { type: "option", prompt: "Icons & Avatars" }
                        }
                    },
                    "Form Elements": {
                        type: "group",
                        options: {
                            "Input Fields": { type: "option", prompt: "Input Fields (Text, Password, Email, etc.)" },
                            "Checkboxes & Radio Buttons": { type: "option", prompt: "Checkboxes & Radio Buttons" },
                            "Dropdowns & Select Menus": { type: "option", prompt: "Dropdowns & Select Menus" },
                            "Toggles / Switches": { type: "option", prompt: "Toggles / Switches" },
                            "Textareas": { type: "option", prompt: "Textareas" },
                            "Sliders / Range Inputs": { type: "option", prompt: "Sliders / Range Inputs" },
                            "File Uploaders": { type: "option", prompt: "File Uploaders" },
                            "Date / Time Pickers": { type: "option", prompt: "Date / Time Pickers" }
                        }
                    },
                    "Navigation": {
                        type: "group",
                        options: {
                            "Navbar / Top Header": { type: "option", prompt: "Navbar / Top Header" },
                            "Sidebar / Drawer": { type: "option", prompt: "Sidebar / Drawer" },
                            "Breadcrumbs": { type: "option", prompt: "Breadcrumbs" },
                            "Pagination": { type: "option", prompt: "Pagination" },
                            "Tabs": { type: "option", prompt: "Tabs" }
                        }
                    },
                    "Data Display & Layout": {
                        type: "group",
                        options: {
                            "Cards": { type: "option", prompt: "Cards" },
                            "Tables / Data Grids": { type: "option", prompt: "Tables / Data Grids" },
                            "Accordions / Collapsible Panels": { type: "option", prompt: "Accordions / Collapsible Panels" },
                            "Carousels / Image Sliders": { type: "option", prompt: "Carousels / Image Sliders" },
                            "Modals / Dialogs": { type: "option", prompt: "Modals / Dialogs" },
                            "Tooltips / Popovers": { type: "option", prompt: "Tooltips / Popovers" },
                            "Progress Bars": { type: "option", prompt: "Progress Bars" }
                        }
                    },
                    "Feedback & Alerts": {
                        type: "group",
                        options: {
                            "Alerts / Banners": { type: "option", prompt: "Alerts / Banners" },
                            "Toast Notifications / Snackbars": { type: "option", prompt: "Toast Notifications / Snackbars" },
                            "Spinners / Loading Indicators": { type: "option", prompt: "Spinners / Loading Indicators" },
                            "Skeleton Screens": { type: "option", prompt: "Skeleton Screens (Loading state)" }
                        }
                    }
                }
            },
            "Pages (Views)": { type: "group", options: {} },
            "Sections (Page Blocks)": { type: "group", options: {} },
            "Layouts": { type: "group", options: {} },
            "Styles & Theming": { type: "group", options: {} },
            "Logic / Scripts": { type: "group", options: {} },
            "Backend / APIs": { type: "group", options: {} },
            "Configuration / Assets": { type: "group", options: {} }
        }
    },
    "Design": { type: "group", options: {} },
    "Content": { type: "group", options: {} },
    "Features": { type: "group", options: {} },
    "Manage": { type: "group", options: {} },
    "Analyze": { type: "group", options: {} },
    "Fix": { type: "group", options: {} },
    "Optimize": { type: "group", options: {} },
    "Security": { type: "group", options: {} },
    "Responsive": { type: "group", options: {} },
    "Accessibility": { type: "group", options: {} },
    "Connect": { type: "group", options: {} },
    "Test": { type: "group", options: {} },
    "Deploy": { type: "group", options: {} },
    "Migrate": { type: "group", options: {} },
    "Upgrade": { type: "group", options: {} },
    "Document": { type: "group", options: {} },
    "Remove": { type: "group", options: {} },
    "Other": { type: "group", options: {} }
};
