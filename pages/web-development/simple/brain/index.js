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
                            "Badges / Chips": {
                                type: "group",
                                options: {
                                    "Status / Indicator": {
                                        type: "group",
                                        options: {
                                            "Soft Pastel Status (Modern)": {
                                                type: "option",
                                                prompt: "Create a 'Soft Pastel' status badge. It should use a very light, semi-transparent background color (e.g., pale green, pale red) with dark, matching text color for high readability. It should feature rounded pill corners and minimal padding for a compact look.\n\nImplementation Rules:\n- If integrating into an existing repository, adapt the colors to match the project's state colors (success, warning, error).\n- If standalone, provide a versatile component with success/error variants.",
                                                dynamicInput: { type: "text", placeholder: "Specify status text (e.g., 'Active', 'Pending') or tech stack?", label: "Custom Details" }
                                            },
                                            "Solid High-Contrast Indicator": {
                                                type: "option",
                                                prompt: "Create a 'Solid High-Contrast' status indicator badge. It requires a stark, solid background color representing the state (e.g., solid red for error, solid green for success) with crisp white text. Include a tiny, matching status icon (like a checkmark or cross) on the left.\n\nImplementation Rules:\n- If integrating into an existing repository, ensure the solid colors are accessible against the existing background.\n- If standalone, include standard SVG icons for different states.",
                                                dynamicInput: { type: "text", placeholder: "Specify status text and icon preference?", label: "Custom Details" }
                                            },
                                            "Dot Indicator (Minimal)": {
                                                type: "option",
                                                prompt: "Create a 'Dot Indicator' minimal badge. Instead of a background fill, this badge should have a transparent background with a small, glowing or solid colored circle (dot) preceding the text. The text color should subtly match the dot.\n\nImplementation Rules:\n- If integrating into an existing repository, implement a subtle pulse animation on the dot if the state is 'live' or 'active'.\n- If standalone, provide the HTML/CSS for the pulsing dot effect.",
                                                dynamicInput: { type: "text", placeholder: "Specify status text (e.g., 'Online') or tech stack?", label: "Custom Details" }
                                            }
                                        }
                                    },
                                    "Notification / Counter": {
                                        type: "group",
                                        options: {
                                            "Floating Notification Dot (Overlays)": {
                                                type: "option",
                                                prompt: "Create a 'Floating Notification Dot' badge. This is a tiny, circular badge meant to overlay on top of an icon (like a bell or cart). It should have a vibrant red or accent color, a white border to separate it from the underlying icon, and display a small number (e.g., '3', '99+').\n\nImplementation Rules:\n- If integrating into an existing repository, ensure absolute positioning works within a relative parent icon container.\n- If standalone, provide an example icon container to demonstrate the overlay.",
                                                dynamicInput: { type: "text", placeholder: "Specify the number (e.g., '99+') or the icon it overlays?", label: "Custom Details" }
                                            },
                                            "Pill Counter (Inline)": {
                                                type: "option",
                                                prompt: "Create an inline 'Pill Counter' badge. This is used alongside text (e.g., inside a sidebar menu item). It should be a small, elongated pill shape with a muted background (like light gray) and dark, bold numeric text to show counts.\n\nImplementation Rules:\n- If integrating into an existing repository, adapt the typography to match secondary text sizes.\n- If standalone, provide a clean, inline flexbox alignment.",
                                                dynamicInput: { type: "text", placeholder: "Specify the number or context (e.g., 'Sidebar menu count')?", label: "Custom Details" }
                                            }
                                        }
                                    },
                                    "Tag / Filter Chips": {
                                        type: "group",
                                        options: {
                                            "Dismissible Tag (With 'X')": {
                                                type: "option",
                                                prompt: "Create a 'Dismissible Tag' chip. It should look like a standard tag or category chip but must include a small 'X' icon or close button on the right side. Include a subtle hover state where the 'X' icon darkens or the chip background slightly changes to indicate interactability.\n\nImplementation Rules:\n- If integrating into an existing repository, ensure the close button triggers existing event handlers smoothly.\n- If standalone, provide the visual hover states for the close icon.",
                                                dynamicInput: { type: "text", placeholder: "Specify tag text (e.g., 'Web Design') or tech stack?", label: "Custom Details" }
                                            },
                                            "Outlined Filter Chip": {
                                                type: "option",
                                                prompt: "Create an 'Outlined Filter' chip. It should have a transparent background with a solid, thin 1px border. On hover or active state, the background should fill slightly with the border color. Ideal for multi-select filtering interfaces.\n\nImplementation Rules:\n- If integrating into an existing repository, match the border radius to the project's global inputs.\n- If standalone, provide a clean outlined component with an 'active' class state.",
                                                dynamicInput: { type: "text", placeholder: "Specify filter text or active/inactive state preference?", label: "Custom Details" }
                                            },
                                            "Gradient Hash Tag": {
                                                type: "option",
                                                prompt: "Create a 'Gradient Hash' tag chip. The chip should have a very subtle, modern gradient background. The text should start with a hashtag symbol (#) and use a trendy, slightly bolder typography.\n\nImplementation Rules:\n- If integrating into an existing repository, use gradients that compliment the brand identity.\n- If standalone, provide a modern, visually appealing gradient mix.",
                                                dynamicInput: { type: "text", placeholder: "Specify tag text (e.g., '#development')?", label: "Custom Details" }
                                            }
                                        }
                                    },
                                    "Interactive / Action": {
                                        type: "group",
                                        options: {
                                            "Selectable Choice Chip": {
                                                type: "option",
                                                prompt: "Create a 'Selectable Choice' chip. This acts like a radio button. When unselected, it looks like a standard outline chip. When selected, it must smoothly transition into a solid filled state with an optional checkmark icon appearing on the left.\n\nImplementation Rules:\n- If integrating into an existing repository, utilize existing checkmark icons and theme transition tokens.\n- If standalone, implement a hidden radio input logic with sibling CSS for state changes.",
                                                dynamicInput: { type: "text", placeholder: "Specify choice text (e.g., 'Size: Medium') or tech stack?", label: "Custom Details" }
                                            },
                                            "Avatar Chip (Contact / User)": {
                                                type: "option",
                                                prompt: "Create an 'Avatar Chip' for displaying users or contacts. It should be a pill-shaped chip containing a tiny circular user avatar image on the far left, followed by the user's name. Include a subtle shadow and hover lift effect.\n\nImplementation Rules:\n- If integrating into an existing repository, handle missing image fallbacks (e.g., initials) gracefully.\n- If standalone, include an image tag with a placeholder URL.",
                                                dynamicInput: { type: "text", placeholder: "Specify user name (e.g., 'John Doe') or avatar URL?", label: "Custom Details" }
                                            }
                                        }
                                    }
                                }
                            },
                            "Icons & Avatars": {
                                type: "group",
                                options: {
                                    "Avatars / Profile Pics": {
                                        type: "group",
                                        options: {
                                            "Standard Image Avatar": {
                                                type: "option",
                                                prompt: "Create a 'Standard Image Avatar'. It should be a perfectly circular (or slightly rounded square) container holding a profile image. Ensure the image uses `object-fit: cover` to maintain aspect ratio without stretching. Include an inner shadow or delicate border to define the edge.\n\nImplementation Rules:\n- If integrating into an existing repository, utilize the project's standard avatar dimension tokens (e.g., w-10 h-10).\n- If standalone, provide a default placeholder image.",
                                                dynamicInput: { type: "text", placeholder: "Specify shape preference (e.g., 'perfect circle') or framework?", label: "Custom Details" }
                                            },
                                            "Initials / Letter Avatar": {
                                                type: "option",
                                                prompt: "Create an 'Initials / Letter Avatar'. Used when a user has no profile picture. It should feature a solid, vibrant background color with the user's initials in crisp, white, centered text. Ensure perfect vertical and horizontal alignment of the text.\n\nImplementation Rules:\n- If integrating into an existing repository, dynamically pull colors from a predefined theme palette based on the user's name if possible.\n- If standalone, provide the CSS for centering text perfectly within a circle.",
                                                dynamicInput: { type: "text", placeholder: "Specify initials (e.g., 'JD') or background color?", label: "Custom Details" }
                                            },
                                            "Avatar Group (Stacked)": {
                                                type: "option",
                                                prompt: "Create an 'Avatar Group' component. This should display multiple circular avatars horizontally, slightly overlapping each other (using negative margins). Include a final '+N' avatar (e.g., '+3') indicating remaining hidden users, with a distinct muted background.\n\nImplementation Rules:\n- If integrating into an existing repository, ensure standard z-index stacking so the first avatar is on top, and match standard borders.\n- If standalone, provide the flexbox and negative margin CSS trick.",
                                                dynamicInput: { type: "text", placeholder: "How many avatars to show initially, or tech stack?", label: "Custom Details" }
                                            },
                                            "Active Status Avatar": {
                                                type: "option",
                                                prompt: "Create an 'Active Status Avatar'. This is a standard image avatar but includes a small, colored notification dot (usually green for online) positioned in the bottom-right corner. The dot must have a thick border matching the background behind the avatar to cut into the main image visually.\n\nImplementation Rules:\n- If integrating into an existing repository, use absolute positioning relative to the avatar container for the status dot.\n- If standalone, implement the 'cut-out' visual effect using border-color matching.",
                                                dynamicInput: { type: "text", placeholder: "Specify status (e.g., online, offline, busy) or tech stack?", label: "Custom Details" }
                                            }
                                        }
                                    },
                                    "Icon Buttons / Controls": {
                                        type: "group",
                                        options: {
                                            "Subtle Hover Icon Button": {
                                                type: "option",
                                                prompt: "Create a 'Subtle Hover Icon Button'. By default, it appears just as an icon. On hover, a soft, semi-transparent circular background should appear behind it, and the icon color might slightly darken or change to the primary brand color.\n\nImplementation Rules:\n- If integrating into an existing repository, match the hover background opacity to the system's interactive states.\n- If standalone, provide an accessible `<button>` tag containing an SVG.",
                                                dynamicInput: { type: "text", placeholder: "Specify the icon type (e.g., Settings, Heart) or framework?", label: "Custom Details" }
                                            },
                                            "Solid Primary Icon Button": {
                                                type: "option",
                                                prompt: "Create a 'Solid Primary Icon Button'. A bold, prominent button containing only an icon. It should use the primary brand color for the background and a contrasting color (usually white) for the icon. Include standard button hover states (like a slight brightness adjustment or shadow).\n\nImplementation Rules:\n- If integrating into an existing repository, ensure the button maintains a perfect 1:1 aspect ratio (square or circular) across sizes.\n- If standalone, provide the CSS to force a square/circular aspect ratio regardless of icon size.",
                                                dynamicInput: { type: "text", placeholder: "Specify the icon type (e.g., Play, Add) or framework?", label: "Custom Details" }
                                            }
                                        }
                                    },
                                    "Illustrative / Feature Icons": {
                                        type: "group",
                                        options: {
                                            "Duotone / Two-Color Icon": {
                                                type: "option",
                                                prompt: "Create a 'Duotone / Two-Color' illustrative icon container. The icon should utilize two distinct shades of the same color palette (e.g., a dark solid primary shape and a lighter, semi-transparent secondary shape) for a modern, layered look.\n\nImplementation Rules:\n- If integrating into an existing repository, apply the primary and secondary brand colors to the SVG's `fill` and `currentColor` properties.\n- If standalone, provide a sample two-tone SVG.",
                                                dynamicInput: { type: "text", placeholder: "Specify the concept (e.g., 'Cloud Storage', 'Security')?", label: "Custom Details" }
                                            },
                                            "Icon with Soft Glow / Aura": {
                                                type: "option",
                                                prompt: "Create an 'Icon with Soft Glow'. The icon sits centered within a rounded container that has a soft, glowing background shadow (aura) matching the icon's color, giving it a premium, floating appearance.\n\nImplementation Rules:\n- If integrating into an existing repository, utilize the theme's soft box-shadow tokens, adjusting the shadow color dynamically if possible.\n- If standalone, provide the custom colored box-shadow CSS.",
                                                dynamicInput: { type: "text", placeholder: "Specify the concept and preferred color?", label: "Custom Details" }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "Form Elements": {
                        type: "group",
                        options: {
                            "Text Inputs & Textareas": {
                                type: "group",
                                options: {
                                    "Floating Label Input": {
                                        type: "option",
                                        prompt: "Create a 'Floating Label' text input component. When the user focuses on the input or types text, the placeholder text should smoothly animate upwards to become a small label on the top border. Include normal, focus, and error states.",
                                        dynamicInput: { type: "text", placeholder: "Input name or framework?", label: "Custom Details" }
                                    },
                                    "Search Bar with Icon": {
                                        type: "option",
                                        prompt: "Design a modern 'Search Bar' component. It should be wide, feature a magnifying glass icon on the left, a clear 'X' button on the right (visible when text is entered), and a subtle drop shadow that intensifies on focus.",
                                        dynamicInput: { type: "text", placeholder: "Custom placeholder or framework?", label: "Custom Details" }
                                    },
                                    "Password Input (with Toggle)": {
                                        type: "option",
                                        prompt: "Create a secure 'Password Input' field. Crucially, it must include an 'eye' icon button on the right side that toggles the input type between 'password' (hidden) and 'text' (visible).",
                                        dynamicInput: { type: "text", placeholder: "Framework or specific styling?", label: "Custom Details" }
                                    }
                                }
                            },
                            "Selection Controls": {
                                type: "group",
                                options: {
                                    "Custom Styled Checkbox": {
                                        type: "option",
                                        prompt: "Design a 'Custom Styled Checkbox'. Do not use the default browser checkbox. Create a custom square box with smooth transitions, a checkmark animation when selected, and support for a disabled state. Keep the label text aligned properly.",
                                        dynamicInput: { type: "text", placeholder: "Label text or color?", label: "Custom Details" }
                                    },
                                    "Custom Radio Button Group": {
                                        type: "option",
                                        prompt: "Create a 'Radio Button Group' with custom styling. The radio circles should have a smooth animation when the inner dot appears. Ensure they are fully accessible and group them under a single question/label.",
                                        dynamicInput: { type: "text", placeholder: "Options or tech stack?", label: "Custom Details" }
                                    },
                                    "Modern Select Dropdown": {
                                        type: "option",
                                        prompt: "Design a 'Modern Select Dropdown' component. Instead of the native browser styling, use a custom button trigger with a chevron icon, and a clean, floating dropdown menu list for options. Include hover states for list items.",
                                        dynamicInput: { type: "text", placeholder: "Dropdown options or framework?", label: "Custom Details" }
                                    }
                                }
                            },
                            "Switches & Toggles": {
                                type: "group",
                                options: {
                                    "Smooth Toggle Switch": {
                                        type: "option",
                                        prompt: "Create a 'Smooth Toggle Switch' component (often used for ON/OFF or Dark/Light mode). It should have a pill-shaped background that changes color when active, and a circular thumb that slides smoothly from left to right.",
                                        dynamicInput: { type: "text", placeholder: "Label text or framework?", label: "Custom Details" }
                                    }
                                }
                            },
                            "Complete Forms / Patterns": {
                                type: "group",
                                options: {
                                    "Login / Sign-Up Form": {
                                        type: "option",
                                        prompt: "Design a complete 'Login / Sign-Up Form' card. It should include an email input, a password input (with visibility toggle), a 'Remember Me' checkbox, a 'Forgot Password' link, and a prominent submit button. Keep the layout clean and centered.",
                                        dynamicInput: { type: "text", placeholder: "Specific requirements or framework?", label: "Custom Details" }
                                    },
                                    "Contact Us Form": {
                                        type: "option",
                                        prompt: "Create a 'Contact Us Form'. It needs fields for Name, Email, Subject (as a dropdown), and a large Textarea for the message. Include a Submit button and demonstrate how validation error messages would appear below the fields.",
                                        dynamicInput: { type: "text", placeholder: "Custom fields or framework?", label: "Custom Details" }
                                    }
                                }
                            }
                        }
                    },
                    "Navigation": {
                        type: "group",
                        options: {
                            "Navbar / Top Header": {
                                type: "group",
                                options: {
                                    "Standard Sticky Navbar": {
                                        type: "option",
                                        prompt: "Create a 'Standard Sticky Navbar'. It should stick to the top of the viewport on scroll (`position: sticky` or `fixed`). Include a logo on the left, horizontal navigation links centered or right-aligned, and a CTA/Login button on the far right. It must have a subtle drop-shadow that appears only when scrolling down.\n\nImplementation Rules:\n- If integrating into an existing repository, utilize existing brand logos and theme colors for the active link state.\n- If standalone, provide a complete HTML/CSS structure with placeholder logo and JS for the scroll-shadow effect.",
                                        dynamicInput: { type: "text", placeholder: "Specify links (e.g., Home, About) or framework?", label: "Custom Details" }
                                    },
                                    "Glassmorphism Navbar": {
                                        type: "option",
                                        prompt: "Create a 'Glassmorphism Navbar'. The header background must be semi-transparent with a frosted glass blur effect (`backdrop-filter: blur`). It must seamlessly overlay the page content below it. Keep text contrast high.\n\nImplementation Rules:\n- If integrating into an existing repository, verify that the browser support for backdrop-filter aligns with project requirements and use appropriate fallbacks.\n- If standalone, include a colorful background behind the content area to demonstrate the glass blur effect.",
                                        dynamicInput: { type: "text", placeholder: "Brand colors or tech stack?", label: "Custom Details" }
                                    },
                                    "Mega Menu Header": {
                                        type: "option",
                                        prompt: "Create a 'Mega Menu Header'. When hovering over a navigation link, a large, full-width dropdown panel should animate in. This panel should be capable of holding multi-column lists of links, promotional images, and categories.\n\nImplementation Rules:\n- If integrating into an existing repository, structure the HTML semantically for accessibility (ARIA roles) while mapping to existing theme styles.\n- If standalone, provide the complex CSS dropdown logic and a sample 3-column layout inside the menu.",
                                        dynamicInput: { type: "text", placeholder: "Which link triggers the mega menu (e.g., 'Products')?", label: "Custom Details" }
                                    }
                                }
                            },
                            "Sidebar / Drawer": {
                                type: "group",
                                options: {
                                    "Collapsible Sidebar (Admin)": {
                                        type: "option",
                                        prompt: "Create a 'Collapsible Sidebar'. Ideal for dashboards. It should contain a vertical list of icon-text links. It must include a toggle button to collapse the sidebar into a compact state showing only icons, smoothly animating the width change.\n\nImplementation Rules:\n- If integrating into an existing repository, manage the expanded/collapsed state globally if required by the layout wrapper.\n- If standalone, provide the CSS transitions and a small script to toggle the 'collapsed' class.",
                                        dynamicInput: { type: "text", placeholder: "Specify initial state (open/closed) or tech stack?", label: "Custom Details" }
                                    },
                                    "Off-canvas Drawer (Mobile)": {
                                        type: "option",
                                        prompt: "Create an 'Off-canvas Mobile Drawer'. It should remain completely hidden off-screen by default. Triggered by a hamburger menu, it should slide in smoothly from the edge, pushing or overlaying the main content, complete with a dark semi-transparent backdrop overlay.\n\nImplementation Rules:\n- If integrating into an existing repository, ensure the z-index is higher than all standard page content and prevent body scrolling when open.\n- If standalone, provide the HTML structure for the drawer, overlay, and trigger button.",
                                        dynamicInput: { type: "text", placeholder: "Slide from left or right? Tech stack?", label: "Custom Details" }
                                    }
                                }
                            },
                            "Breadcrumbs": {
                                type: "group",
                                options: {
                                    "Minimalist Slash Separator": {
                                        type: "option",
                                        prompt: "Create a 'Minimalist Breadcrumb' navigation. Use simple, muted text for parent links and a distinct primary color for the current active page. Use a forward slash (`/`) as a subtle separator between links, with adequate spacing.\n\nImplementation Rules:\n- If integrating into an existing repository, utilize the theme's secondary typography colors.\n- If standalone, provide a clean semantic `<nav>` and `<ol>` structure.",
                                        dynamicInput: { type: "text", placeholder: "Specify path (e.g., Home / Category / Product)?", label: "Custom Details" }
                                    },
                                    "Chevron Block Breadcrumbs": {
                                        type: "option",
                                        prompt: "Create 'Chevron Block Breadcrumbs'. The links should be housed within connected, arrow-shaped blocks (chevrons) pointing to the right. Use contrasting background colors for each block to clearly indicate depth and progression.\n\nImplementation Rules:\n- If integrating into an existing repository, adapt the block colors to align with the primary brand gradient or palette.\n- If standalone, implement the chevron shapes using CSS borders or SVG backgrounds.",
                                        dynamicInput: { type: "text", placeholder: "Specify path or framework?", label: "Custom Details" }
                                    }
                                }
                            },
                            "Pagination": {
                                type: "group",
                                options: {
                                    "Classic Numbered Pagination": {
                                        type: "option",
                                        prompt: "Create a 'Classic Numbered Pagination' block. It should feature 'Previous' and 'Next' buttons on the ends, with clickable page numbers in the middle. The current active page should be highlighted with a solid primary background, while inactive pages are subtle.\n\nImplementation Rules:\n- If integrating into an existing repository, ensure the interactive states match global button styles.\n- If standalone, provide a responsive list format ensuring elements wrap cleanly on small screens.",
                                        dynamicInput: { type: "text", placeholder: "Total pages or framework?", label: "Custom Details" }
                                    },
                                    "Load More Trigger (Spinner)": {
                                        type: "option",
                                        prompt: "Create a 'Load More' button / Infinite Scroll Trigger. Instead of numbers, create a centered button at the bottom of a list. When clicked, it should transition to a loading spinner state while fetching more content.\n\nImplementation Rules:\n- If integrating into an existing repository, use existing SVG spinner assets and button loading states.\n- If standalone, provide the CSS keyframes for a simple spinner inside the button.",
                                        dynamicInput: { type: "text", placeholder: "Text (e.g., 'Load More Articles')?", label: "Custom Details" }
                                    }
                                }
                            },
                            "Tabs": {
                                type: "group",
                                options: {
                                    "Underline Animated Tabs": {
                                        type: "option",
                                        prompt: "Create 'Underline Animated Tabs'. A horizontal list of text tabs. The active tab has a solid underline. When clicking a different tab, the underline must smoothly slide across the X-axis to align under the newly selected tab.\n\nImplementation Rules:\n- If integrating into an existing repository, sync the animation duration with global transition tokens.\n- If standalone, provide the JS logic required to calculate underline width and left-offset dynamically.",
                                        dynamicInput: { type: "text", placeholder: "Tab names (e.g., Details, Reviews)?", label: "Custom Details" }
                                    },
                                    "Segmented Control (Pill) Tabs": {
                                        type: "option",
                                        prompt: "Create a 'Segmented Control' or 'Pill' tab interface. The tabs sit inside a common rounded container with a muted background. The active tab is a solid pill shape that sits inside this container, resembling an iOS segmented control.\n\nImplementation Rules:\n- If integrating into an existing repository, match the border radius to the project's form inputs.\n- If standalone, provide a clean flexbox layout with an active state class.",
                                        dynamicInput: { type: "text", placeholder: "Tab names or framework?", label: "Custom Details" }
                                    }
                                }
                            }
                        }
                    },
                    "Data Display & Layout": {
                        type: "group",
                        options: {
                            "Cards": {
                                type: "group",
                                options: {
                                    "Blog / Article Cards": {
                                        type: "group",
                                        options: {
                                            "Standard Feature Card": {
                                                type: "option",
                                                prompt: "Create a 'Standard Feature' Blog/Article Card. It must have a full-width featured image at the top with rounded top corners. Below the image, include a category tag, a bold title, a short text snippet (2-3 lines max), and a footer with the author's avatar, name, and publish date. Apply a soft drop-shadow on hover.\n\nImplementation Rules:\n- If integrating into an existing repository, use existing typography and card shadow tokens.\n- If standalone, provide the complete HTML/CSS with placeholder images.",
                                                dynamicInput: { type: "text", placeholder: "Specify topic (e.g., Tech, Lifestyle) or framework?", label: "Custom Details" }
                                            },
                                            "Horizontal / List Card": {
                                                type: "option",
                                                prompt: "Create a 'Horizontal / List' Article Card. This is a wide card where the image sits on the left side (taking up about 30-40% width) and the content (title, excerpt, meta info) sits vertically aligned on the right. Perfect for dense list views. Ensure it stacks vertically on mobile screens.\n\nImplementation Rules:\n- If integrating into an existing repository, rely on CSS Grid or Flexbox utility classes to handle the responsive stacking.\n- If standalone, provide the responsive media queries.",
                                                dynamicInput: { type: "text", placeholder: "Specify topic or tech stack?", label: "Custom Details" }
                                            }
                                        }
                                    },
                                    "Product / E-commerce Cards": {
                                        type: "group",
                                        options: {
                                            "Grid Product Card": {
                                                type: "option",
                                                prompt: "Create a 'Grid Product Card'. It should feature a large product image, the product name, star rating, and price. Crucially, it must include a prominent 'Add to Cart' button (either visible by default or revealed seamlessly upon hovering the card). Include a subtle 'Sale' or 'New' badge overlapping the image corner.\n\nImplementation Rules:\n- If integrating into an existing repository, utilize the theme's button and badge components.\n- If standalone, implement the hover-reveal logic using CSS.",
                                                dynamicInput: { type: "text", placeholder: "Product type (e.g., Shoes, Tech) or framework?", label: "Custom Details" }
                                            },
                                            "Minimalist Fashion Card": {
                                                type: "option",
                                                prompt: "Create a 'Minimalist Fashion' Product Card. Focus on high-end aesthetics: large, tall imagery, ample whitespace, and elegant serif or fine sans-serif typography. Omit heavy borders or shadows. The 'Quick View' or cart actions should be extremely subtle, perhaps appearing as icons overlaying the image on hover.\n\nImplementation Rules:\n- If integrating into an existing repository, adapt the typography to the closest elegant font family available in the theme.\n- If standalone, provide a clean, high-fashion aesthetic.",
                                                dynamicInput: { type: "text", placeholder: "Product type or brand style?", label: "Custom Details" }
                                            }
                                        }
                                    },
                                    "Profile / User Cards": {
                                        type: "group",
                                        options: {
                                            "Centered Profile Card": {
                                                type: "option",
                                                prompt: "Create a 'Centered Profile Card'. The layout should be strictly center-aligned. It must include a cover/banner image at the top, with a circular user avatar overlapping the bottom edge of the banner. Below that, center the user's name, title/role, a short bio, and a row of social media icon links.\n\nImplementation Rules:\n- If integrating into an existing repository, handle image fallbacks correctly.\n- If standalone, use negative margins to overlap the avatar on the banner.",
                                                dynamicInput: { type: "text", placeholder: "User profession (e.g., Designer) or framework?", label: "Custom Details" }
                                            },
                                            "Horizontal Contact Card": {
                                                type: "option",
                                                prompt: "Create a 'Horizontal Contact Card'. A compact, wide card displaying an avatar on the left, name and job title in the middle, and quick action buttons (like 'Message' or 'Follow') aligned to the right. Ideal for directory listings.\n\nImplementation Rules:\n- If integrating into an existing repository, use flexbox space-between for alignment.\n- If standalone, ensure it is responsive and stacks gracefully if the screen is too narrow.",
                                                dynamicInput: { type: "text", placeholder: "Context or tech stack?", label: "Custom Details" }
                                            }
                                        }
                                    },
                                    "Pricing / Subscription Cards": {
                                        type: "group",
                                        options: {
                                            "Standard Tier Card": {
                                                type: "option",
                                                prompt: "Create a 'Standard Pricing Tier Card'. It should display a tier name (e.g., 'Pro'), a large monthly price figure, a bulleted list of features (with checkmark icons), and a wide CTA button at the bottom. The design should be clean and readable.\n\nImplementation Rules:\n- If integrating into an existing repository, map checkmarks to existing SVG icons and use standard list styling.\n- If standalone, provide the complete structure.",
                                                dynamicInput: { type: "text", placeholder: "Tier name (e.g., 'Basic') or framework?", label: "Custom Details" }
                                            },
                                            "Highlighted 'Popular' Card": {
                                                type: "option",
                                                prompt: "Create a 'Highlighted Popular Pricing Card'. This card is meant to stand out in a 3-column pricing grid. It must have a distinct primary background color (or thick top border), a 'Most Popular' badge at the top, slightly larger typography, and an inverted CTA button color to draw immediate attention.\n\nImplementation Rules:\n- If integrating into an existing repository, use the brand's primary accent color heavily here to contrast with standard cards.\n- If standalone, implement the visual highlight effect.",
                                                dynamicInput: { type: "text", placeholder: "Tier name or framework?", label: "Custom Details" }
                                            }
                                        }
                                    },
                                    "Dashboard / Stat Cards": {
                                        type: "group",
                                        options: {
                                            "Simple Metric Card": {
                                                type: "option",
                                                prompt: "Create a 'Simple Metric Card' for a dashboard. It should be a compact rectangular block containing a title (e.g., 'Total Sales'), a large prominent number, and a small icon representing the metric in the top right corner.\n\nImplementation Rules:\n- If integrating into an existing repository, use existing grid container padding and subtle borders/shadows.\n- If standalone, provide a clean dashboard-style component.",
                                                dynamicInput: { type: "text", placeholder: "Metric name (e.g., 'Revenue')?", label: "Custom Details" }
                                            },
                                            "Trend & Sparkline Card": {
                                                type: "option",
                                                prompt: "Create a 'Trend & Sparkline Card'. Similar to a metric card, but it must include a percentage indicator showing growth/decline (colored green for up, red for down) and a small, simplified line chart (sparkline) at the bottom visualizing the recent trend.\n\nImplementation Rules:\n- If integrating into an existing repository, you may use an SVG graphic to simulate the sparkline if charting libraries aren't explicitly requested.\n- If standalone, provide an SVG path to represent the sparkline.",
                                                dynamicInput: { type: "text", placeholder: "Metric name or tech stack?", label: "Custom Details" }
                                            }
                                        }
                                    }
                                }
                            },
                            "Tables / Data Grids": { type: "option", prompt: "Tables / Data Grids" },
                            "Accordions / Collapsible Panels": { type: "option", prompt: "Accordions / Collapsible Panels" },
                            "Carousels / Image Sliders": { type: "option", prompt: "Carousels / Image Sliders" },
                            "Progress Bars": { type: "option", prompt: "Progress Bars" }
                        }
                    },
                    "Feedback & Overlays": {
                        type: "group",
                        options: {
                            "Alerts & Banners": {
                                type: "group",
                                options: {
                                    "Success Alert (Green)": {
                                        type: "option",
                                        prompt: "Create a 'Success Alert' component. The design must feature a soft green background, a bold green border or accent line, a checkmark icon, and clear typography for the success message. Include a close 'X' button on the right.",
                                        dynamicInput: { type: "text", placeholder: "Custom success message or framework?", label: "Custom Details" }
                                    },
                                    "Error / Danger Alert (Red)": {
                                        type: "option",
                                        prompt: "Design an 'Error Alert' box. It should have a subtle red/crimson background, a warning triangle or error icon, and stark, legible text warning the user of a failure. Make it stand out visually.",
                                        dynamicInput: { type: "text", placeholder: "Custom error message or framework?", label: "Custom Details" }
                                    },
                                    "Information Banner (Blue)": {
                                        type: "option",
                                        prompt: "Create an 'Informational Banner' component designed to sit at the top of a page or section. Use a calm blue color palette, an 'info' icon, and a layout that accommodates a short message and an optional action link.",
                                        dynamicInput: { type: "text", placeholder: "Custom info message or framework?", label: "Custom Details" }
                                    }
                                }
                            },
                            "Toasts / Snackbars": {
                                type: "group",
                                options: {
                                    "Notification Toast (Floating)": {
                                        type: "option",
                                        prompt: "Design a floating 'Notification Toast' component. It must look like it sits above the main content (high z-index, strong drop shadow), featuring a compact layout with a small icon, a brief message, and a subtle entry/exit animation.",
                                        dynamicInput: { type: "text", placeholder: "Custom text or framework?", label: "Custom Details" }
                                    },
                                    "Actionable Snackbar": {
                                        type: "option",
                                        prompt: "Create a 'Snackbar' component typically placed at the bottom center or corner of the screen. It should have a dark, high-contrast background, concise white text, and a prominently colored 'Undo' or 'Action' button.",
                                        dynamicInput: { type: "text", placeholder: "Custom action text or framework?", label: "Custom Details" }
                                    }
                                }
                            },
                            "Modals / Dialogs": {
                                type: "group",
                                options: {
                                    "Confirmation Modal (Are you sure?)": {
                                        type: "option",
                                        prompt: "Design a 'Confirmation Modal' dialog. Include a semi-transparent dark backdrop overlay (backdrop-blur). The modal box should be centered, featuring a warning icon, a title (e.g., 'Delete Item?'), descriptive text, a subtle 'Cancel' button, and a prominent, destructive 'Confirm' button (e.g., red).",
                                        dynamicInput: { type: "text", placeholder: "Custom title/text or framework?", label: "Custom Details" }
                                    },
                                    "Feature Announcement Modal": {
                                        type: "option",
                                        prompt: "Create a 'Feature Announcement Modal'. It should have an elegant design, perhaps with an illustration or image at the top, followed by an exciting title, descriptive text, and a primary 'Try it out' Call-to-Action button.",
                                        dynamicInput: { type: "text", placeholder: "Custom feature details or framework?", label: "Custom Details" }
                                    }
                                }
                            },
                            "Tooltips & Popovers": {
                                type: "group",
                                options: {
                                    "Simple Hover Tooltip": {
                                        type: "option",
                                        prompt: "Design a minimalist 'Tooltip' component that appears on hover. It must be very compact, with a dark background, white text, rounded corners, and a small directional arrow pointing towards the trigger element.",
                                        dynamicInput: { type: "text", placeholder: "Custom tooltip text or framework?", label: "Custom Details" }
                                    },
                                    "Rich Popover": {
                                        type: "option",
                                        prompt: "Create a 'Rich Popover' component. Unlike a simple tooltip, this should be a small card containing a title, a paragraph of explanatory text, and perhaps a tiny link or button. Include a subtle shadow and directional arrow.",
                                        dynamicInput: { type: "text", placeholder: "Custom popover content or framework?", label: "Custom Details" }
                                    }
                                }
                            },
                            "Spinners / Loading Indicators": { type: "option", prompt: "Spinners / Loading Indicators" },
                            "Skeleton Screens": { type: "option", prompt: "Skeleton Screens (Loading state)" }
                        }
                    }
                }
            },
            "Pages (Views)": {
                type: "group",
                options: {
                    "Landing & Marketing Pages": {
                        type: "group",
                        options: {
                            "SaaS / Product Homepage": {
                                type: "group",
                                options: {
                                    "Enterprise B2B SaaS": {
                                        type: "option",
                                        prompt: "Design an 'Enterprise B2B SaaS Homepage'. Focus on a highly professional, trustworthy aesthetic using deep blues or muted tones. The Hero section should have a conservative layout with a primary 'Request Demo' CTA. Include a prominent 'Trusted by Fortune 500' logo cloud, a complex 'Features' section showcasing data dashboards/security, a case-study/ROI metrics section, and a robust footer with compliance badges (SOC2, ISO).",
                                        dynamicInput: { type: "text", placeholder: "Specific industry or brand colors?", label: "Custom Details" }
                                    },
                                    "Developer-Focused API / Tool": {
                                        type: "option",
                                        prompt: "Create a 'Developer-Focused Tool Homepage'. The design must be heavily dark-mode with neon or bright accent colors. The Hero section should feature an interactive or animated code snippet / terminal window alongside a bold, technical headline. Include a 'How it works' section with syntax-highlighted code blocks, a clear documentation link, and a 'Start Building for Free' CTA.",
                                        dynamicInput: { type: "text", placeholder: "Tool type or specific code language?", label: "Custom Details" }
                                    },
                                    "Modern AI Product": {
                                        type: "option",
                                        prompt: "Design a 'Modern AI Product Homepage'. The aesthetic should feel magical and cutting-edge, utilizing fluid mesh gradients, subtle glassmorphism effects, and glowing accents. The Hero should feature a clean interface mockup with AI generation 'sparkle' effects. Include a 'Before/After' slider or interactive demo section, and feature blocks that highlight speed and automation.",
                                        dynamicInput: { type: "text", placeholder: "AI feature specifics or color theme?", label: "Custom Details" }
                                    },
                                    "Minimalist Consumer App (B2C)": {
                                        type: "option",
                                        prompt: "Create a 'Minimalist Consumer App Homepage'. Use an extremely clean, bright design with massive amounts of whitespace, large friendly typography, and soft pastel or vibrant solid brand colors. The Hero should feature a large 3D smartphone mockup or playful illustration. Include simple, bold benefit statements (not complex features), user reviews, and a single, unmissable 'Download the App' CTA.",
                                        dynamicInput: { type: "text", placeholder: "App purpose or primary color?", label: "Custom Details" }
                                    },
                                    "Open Source Project": {
                                        type: "option",
                                        prompt: "Design an 'Open Source Project Homepage'. It should feel welcoming and community-driven. The Hero must prominently display GitHub statistics (Stars, Forks) and dual CTAs: 'Get Started' and 'View on GitHub'. Include a section highlighting community contributors, a sponsor/backers section, and a simple feature grid highlighting the core open-source benefits.",
                                        dynamicInput: { type: "text", placeholder: "Project name or specific stats?", label: "Custom Details" }
                                    }
                                }
                            },
                            "Waitlist / Coming Soon Page": { type: "option", prompt: "Create a 'Waitlist / Coming Soon Page'. Focus on a highly conversion-optimized Hero section with an email capture form and a vibrant background.", dynamicInput: { type: "text", placeholder: "Product name or style?", label: "Custom Details" } },
                            "Event / Webinar Registration": { type: "option", prompt: "Design an 'Event / Webinar Registration Page'. It should display event details, a countdown timer, speaker profiles, and a clear registration form.", dynamicInput: { type: "text", placeholder: "Event theme or details?", label: "Custom Details" } },
                            "About Us / Company Page": { type: "option", prompt: "Create an 'About Us' page featuring a company mission statement, a timeline of history, and a 'Meet the Team' photo grid.", dynamicInput: { type: "text", placeholder: "Company vibe (e.g., Corporate, Startup)?", label: "Custom Details" } },
                            "Pricing Page": { type: "option", prompt: "Design a dedicated 'Pricing Page' with a toggle for Monthly/Yearly billing, 3 distinct pricing tier cards (highlighting the middle one), and an FAQ accordion below.", dynamicInput: { type: "text", placeholder: "Pricing structure or framework?", label: "Custom Details" } },
                            "Contact Us Page": { type: "option", prompt: "Create a 'Contact Us' page featuring a contact form, company address with a placeholder map, and direct email/phone links.", dynamicInput: { type: "text", placeholder: "Contact details or framework?", label: "Custom Details" } },
                            "Link-in-Bio / Personal Link Tree": { type: "option", prompt: "Design a mobile-first 'Link-in-Bio' page. Include a centered profile picture, bio text, and a vertical stack of styled buttons for various social and content links.", dynamicInput: { type: "text", placeholder: "User name or theme?", label: "Custom Details" } }
                        }
                    },
                    "E-Commerce & Stores": {
                        type: "group",
                        options: {
                            "Storefront / Catalog Homepage": { type: "option", prompt: "Create an E-commerce 'Storefront Homepage'. Include a large promotional hero banner, a 'Categories' grid, and a 'Trending Products' carousel.", dynamicInput: { type: "text", placeholder: "Store type (e.g., Fashion, Tech)?", label: "Custom Details" } },
                            "Product Listing Page (Grid/List)": { type: "option", prompt: "Design a 'Product Listing Page'. Include a sidebar for filters (category, price, size) and a main area displaying a grid of product cards with pagination.", dynamicInput: { type: "text", placeholder: "Specific filters or layout?", label: "Custom Details" } },
                            "Product Detail Page (PDP)": { type: "option", prompt: "Create a 'Product Detail Page'. Feature an image gallery on the left, and product details, price, variations (size/color), and an 'Add to Cart' button on the right.", dynamicInput: { type: "text", placeholder: "Product specifics?", label: "Custom Details" } },
                            "Shopping Cart / Bag Page": { type: "option", prompt: "Design a 'Shopping Cart' page. Show an itemized list of added products with quantity adjusters, a subtotal calculation area, and a 'Proceed to Checkout' button.", dynamicInput: { type: "text", placeholder: "Framework or specific requirements?", label: "Custom Details" } },
                            "Checkout / Payment Page": { type: "option", prompt: "Create a 'Checkout / Payment Page'. Use a 2-column layout: shipping/payment form on the left, and a sticky order summary on the right.", dynamicInput: { type: "text", placeholder: "Payment methods or styling?", label: "Custom Details" } },
                            "Order Tracking / Success Page": { type: "option", prompt: "Design an 'Order Success' page. Display a large success checkmark, an order confirmation number, a summary of purchased items, and a 'Continue Shopping' button.", dynamicInput: { type: "text", placeholder: "Brand style or framework?", label: "Custom Details" } }
                        }
                    },
                    "Dashboards & Admin Portals": {
                        type: "group",
                        options: {
                            "Analytics / Metric Overview": { type: "option", prompt: "Design an 'Analytics Overview Dashboard'. Include a sidebar navigation, top header, KPI metric cards, a main chart area, and a recent activity table.", dynamicInput: { type: "text", placeholder: "Data types or dashboard style?", label: "Custom Details" } },
                            "CRM / User Management Table": { type: "option", prompt: "Create a 'User Management Dashboard' page. The focus is a large, complex data table with columns for user info, status badges, and action menus (edit/delete). Include a top search bar and 'Add User' button.", dynamicInput: { type: "text", placeholder: "Specific columns or framework?", label: "Custom Details" } },
                            "Project Management / Kanban": { type: "option", prompt: "Design a 'Kanban Board' page layout. It should have horizontal scrollable columns (e.g., To Do, In Progress, Done) containing draggable task cards.", dynamicInput: { type: "text", placeholder: "Project type or styling?", label: "Custom Details" } },
                            "Financial / Invoice Dashboard": { type: "option", prompt: "Create a 'Financial Invoice Dashboard'. Display a summary of total revenue/outstanding balances, followed by a list of recent invoices with 'Paid' or 'Pending' statuses.", dynamicInput: { type: "text", placeholder: "Framework or specific metrics?", label: "Custom Details" } },
                            "Account Settings / Profile": { type: "option", prompt: "Design a 'User Settings' page. Use a secondary side-navigation for tabs (Profile, Security, Billing) and display a form to update user details in the main area.", dynamicInput: { type: "text", placeholder: "Settings options or framework?", label: "Custom Details" } }
                        }
                    },
                    "Authentication & Onboarding": {
                        type: "group",
                        options: {
                            "Sign In / Login Page": { type: "option", prompt: "Create a 'Sign In' page. Center a clean login form (email, password, remember me, submit). Consider a split-screen design with a lifestyle image on one half.", dynamicInput: { type: "text", placeholder: "Brand style or layout preference?", label: "Custom Details" } },
                            "Create Account / Sign Up Page": { type: "option", prompt: "Design a 'Sign Up' page. Include fields for name, email, password, confirm password, and a terms of service checkbox.", dynamicInput: { type: "text", placeholder: "Framework or styling?", label: "Custom Details" } },
                            "Forgot Password / Reset Page": { type: "option", prompt: "Create a 'Forgot Password' page. It should be a simple, centered card asking for the user's email address to send a recovery link.", dynamicInput: { type: "text", placeholder: "Brand style or framework?", label: "Custom Details" } },
                            "Multi-step User Onboarding": { type: "option", prompt: "Design a 'Multi-step Onboarding' page layout. Include a progress indicator at the top, a central content area for the current step's form/info, and 'Back'/'Next' buttons.", dynamicInput: { type: "text", placeholder: "Onboarding flow details?", label: "Custom Details" } },
                            "2FA Verification Page": { type: "option", prompt: "Create a 'Two-Factor Authentication (2FA)' page. It should have a centered form with input slots for a 6-digit code and a 'Verify' button.", dynamicInput: { type: "text", placeholder: "Framework or styling?", label: "Custom Details" } }
                        }
                    },
                    "Content & Media": {
                        type: "group",
                        options: {
                            "Blog / News Homepage": { type: "option", prompt: "Design a 'Blog / News Homepage'. Use a magazine-style layout with a featured article at the top and a grid of smaller article cards below, categorized by topics.", dynamicInput: { type: "text", placeholder: "Blog theme or framework?", label: "Custom Details" } },
                            "Single Article / Reading Page": { type: "option", prompt: "Create a 'Single Article' reading page. Focus on optimal typography and line length. Include a large cover image, author byline, formatted text content, and a share sidebar.", dynamicInput: { type: "text", placeholder: "Typography preferences?", label: "Custom Details" } },
                            "Personal Portfolio Grid": { type: "option", prompt: "Design a 'Personal Portfolio' page. Include a brief intro section and a masonry or grid layout of project thumbnail cards that reveal details on hover.", dynamicInput: { type: "text", placeholder: "Profession (e.g., Designer, Dev)?", label: "Custom Details" } },
                            "Podcast / Audio Player Page": { type: "option", prompt: "Create a 'Podcast Episode' page. Feature a large episode cover image, an integrated audio player (play/pause, timeline, volume), and show notes text below.", dynamicInput: { type: "text", placeholder: "Podcast theme or framework?", label: "Custom Details" } },
                            "Video Streaming / Gallery": { type: "option", prompt: "Design a 'Video Gallery' page similar to YouTube. Include a large main video player area, video details/description, and a sidebar or grid of 'Up Next' related videos.", dynamicInput: { type: "text", placeholder: "Video platform style?", label: "Custom Details" } }
                        }
                    },
                    "Social & Community": {
                        type: "group",
                        options: {
                            "User Profile / Timeline Page": { type: "option", prompt: "Create a 'Social User Profile' page. Include a cover banner, a profile avatar overlapping it, user stats (followers/following), and a timeline feed of their posts.", dynamicInput: { type: "text", placeholder: "Social network style?", label: "Custom Details" } },
                            "Social Feed / Newsfeed Page": { type: "option", prompt: "Design a 'Social Newsfeed' page. Include a top input area to 'Create a Post', followed by a vertical feed of post cards containing text, images, likes, and comment sections.", dynamicInput: { type: "text", placeholder: "Framework or specific features?", label: "Custom Details" } },
                            "Chat / Messaging Interface": { type: "option", prompt: "Create a 'Chat / Messaging Interface'. The layout should have a left sidebar listing conversations, and a right main area showing the active chat bubbles and a bottom input field.", dynamicInput: { type: "text", placeholder: "Messaging app style (e.g., WhatsApp, Slack)?", label: "Custom Details" } },
                            "Forum / Discussion Thread": { type: "option", prompt: "Design a 'Forum Discussion Thread' page. Show the original post at the top, followed by a list of nested or sequential reply cards.", dynamicInput: { type: "text", placeholder: "Forum theme (e.g., Reddit, Classic)?", label: "Custom Details" } }
                        }
                    },
                    "Utility & Error Pages": {
                        type: "group",
                        options: {
                            "404 / 500 Error Pages": { type: "option", prompt: "Create a creative '404 Error Page'. Include a large '404' graphic, friendly text explaining the page is missing, and a prominent 'Go Home' button.", dynamicInput: { type: "text", placeholder: "Brand style or specific message?", label: "Custom Details" } },
                            "FAQ / Help Center Page": { type: "option", prompt: "Design a 'Help Center / FAQ' page. Include a large search bar at the top, followed by categorized accordions containing frequently asked questions and answers.", dynamicInput: { type: "text", placeholder: "Framework or specific questions?", label: "Custom Details" } },
                            "Search Results Page": { type: "option", prompt: "Create a 'Search Results' page. Display the search query entered, a count of results found, and a list or grid of the results with brief excerpts.", dynamicInput: { type: "text", placeholder: "Result types (e.g., Products, Articles)?", label: "Custom Details" } },
                            "Maintenance / Offline Page": { type: "option", prompt: "Design a 'Maintenance / Offline' page. Keep it minimal and polite, displaying an illustration, a 'We'll be right back' message, and perhaps a social media link.", dynamicInput: { type: "text", placeholder: "Brand colors or specific message?", label: "Custom Details" } }
                        }
                    }
                }
            },
            "Sections (Page Blocks)": {
                type: "group",
                options: {
                    "Hero & Headers (Top Sections)": {
                        type: "group",
                        options: {
                            "Split Hero (Text Left, Image Right)": { type: "option", prompt: "Design a 'Split Hero' section. The left half should contain a prominent H1 headline, a subheadline, and a dual CTA button group. The right half should feature a large placeholder image or illustration.", dynamicInput: { type: "text", placeholder: "Headline or theme?", label: "Custom Details" } },
                            "Centered Minimal Hero": { type: "option", prompt: "Create a 'Centered Minimal Hero' section with a massive, bold headline centered on the screen, followed by concise subtext and a single large CTA button.", dynamicInput: { type: "text", placeholder: "Specific text or styling?", label: "Custom Details" } },
                            "Background Image/Video Hero": { type: "option", prompt: "Design a Hero section featuring a full-width background image or video placeholder with a dark overlay, ensuring the white centered text remains legible.", dynamicInput: { type: "text", placeholder: "Vibe or overlay color?", label: "Custom Details" } },
                            "Interactive/3D Element Hero": { type: "option", prompt: "Create a modern Hero section with an interactive or 3D element placeholder on one side, paired with striking typography on the other.", dynamicInput: { type: "text", placeholder: "Type of interactive element?", label: "Custom Details" } }
                        }
                    },
                    "Features & Services": {
                        type: "group",
                        options: {
                            "3-Column Icon/Text Grid": { type: "option", prompt: "Design a '3-Column Feature Grid' section. Provide a section title, and a grid of 3 identical cards, each containing a top icon, a title, and a short description.", dynamicInput: { type: "text", placeholder: "Feature details?", label: "Custom Details" } },
                            "Alternating Zig-Zag (Text & Image)": { type: "option", prompt: "Create an 'Alternating Features (Zig-Zag)' section with 3 consecutive rows. Alternate the layout (Left-Text/Right-Image, then Left-Image/Right-Text).", dynamicInput: { type: "text", placeholder: "Specific features?", label: "Custom Details" } },
                            "Feature Comparison Table": { type: "option", prompt: "Design a 'Feature Comparison Table' section, typically used to compare 'Us vs. Them' or different product tiers, using checkmarks and crosses.", dynamicInput: { type: "text", placeholder: "Comparison points?", label: "Custom Details" } },
                            "Interactive Feature Tabs": { type: "option", prompt: "Create an 'Interactive Feature Tabs' section. The left side should have clickable tab titles, and the right side should display the corresponding feature image and text.", dynamicInput: { type: "text", placeholder: "Tab names or framework?", label: "Custom Details" } }
                        }
                    },
                    "Social Proof & Trust": {
                        type: "group",
                        options: {
                            "Logo Cloud (Trusted By)": { type: "option", prompt: "Design a 'Logo Cloud' section. Use a subtle text 'Trusted by' followed by a horizontal flex row of 5 monochrome placeholder logos.", dynamicInput: { type: "text", placeholder: "Brand style?", label: "Custom Details" } },
                            "Testimonial Cards Grid": { type: "option", prompt: "Create a 'Testimonial Cards Grid' using a multi-column masonry layout displaying user quotes, star ratings, and avatars.", dynamicInput: { type: "text", placeholder: "Review topics?", label: "Custom Details" } },
                            "Featured Quote / Video Testimonial": { type: "option", prompt: "Design a section highlighting a single, massive 'Featured Quote' or a large placeholder for a video testimonial, accompanied by the author's details.", dynamicInput: { type: "text", placeholder: "Quote text or theme?", label: "Custom Details" } },
                            "User Stats / Milestones Counter": { type: "option", prompt: "Create a 'Stats Counter' section displaying 3 or 4 large animated numbers (e.g., '1M+ Users', '99.9% Uptime') in a horizontal row.", dynamicInput: { type: "text", placeholder: "Specific stats?", label: "Custom Details" } }
                        }
                    },
                    "Content & Information": {
                        type: "group",
                        options: {
                            "About Us / Mission Block": { type: "option", prompt: "Design an 'About Us' section block. Use a 2-column layout with a mission statement and text on one side, and team or office photos on the other.", dynamicInput: { type: "text", placeholder: "Mission statement?", label: "Custom Details" } },
                            "Team / Staff Grid": { type: "option", prompt: "Create a 'Team Grid' section featuring 4-6 staff profile cards containing a headshot, name, role, and social media links.", dynamicInput: { type: "text", placeholder: "Grid size or styling?", label: "Custom Details" } },
                            "FAQ Accordion Section": { type: "option", prompt: "Design an 'FAQ Accordion' section. Center a column of collapsible question blocks that reveal answers when clicked.", dynamicInput: { type: "text", placeholder: "Specific questions?", label: "Custom Details" } },
                            "Step-by-Step 'How it Works'": { type: "option", prompt: "Create a 'How it Works' section. Display 3 or 4 distinct steps either horizontally connected by a dashed line, or vertically stacked with large numbered circles.", dynamicInput: { type: "text", placeholder: "Step details?", label: "Custom Details" } }
                        }
                    },
                    "Conversion & CTAs": {
                        type: "group",
                        options: {
                            "Large Centered Newsletter Signup": { type: "option", prompt: "Design a 'Newsletter Signup' section. Center a bold headline, a short description, and an email input field with an inline 'Subscribe' button.", dynamicInput: { type: "text", placeholder: "Signup text or style?", label: "Custom Details" } },
                            "Two-Column CTA Block": { type: "option", prompt: "Create a 'Two-Column CTA' block. One side has compelling text and a primary button, the other side has a secondary button or a supporting graphic. Wrap it in a distinct background color.", dynamicInput: { type: "text", placeholder: "CTA text or colors?", label: "Custom Details" } },
                            "Pricing Tier Section (3 Columns)": { type: "option", prompt: "Design a 'Pricing Section' containing 3 vertical pricing tier cards. Emphasize the middle 'Pro' tier with a distinct border or color.", dynamicInput: { type: "text", placeholder: "Pricing details?", label: "Custom Details" } },
                            "App Download Promo Block": { type: "option", prompt: "Create an 'App Promo Block' featuring a headline, 'Download on App Store / Google Play' badge graphics, and a smartphone mockup showing the app.", dynamicInput: { type: "text", placeholder: "App details?", label: "Custom Details" } }
                        }
                    },
                    "Footers": {
                        type: "group",
                        options: {
                            "Simple Centered Footer": { type: "option", prompt: "Design a 'Simple Centered Footer'. Keep it minimal with a row of essential text links, social icons, and a copyright notice at the bottom.", dynamicInput: { type: "text", placeholder: "Specific links?", label: "Custom Details" } },
                            "Large Multi-Column Footer": { type: "option", prompt: "Create a 'Large Multi-Column Footer'. Include a company bio column, 3 columns for sitemap links, and a bottom edge with legal links and copyright.", dynamicInput: { type: "text", placeholder: "Sitemap columns?", label: "Custom Details" } },
                            "Footer with Large Brand Graphic": { type: "option", prompt: "Design a Footer that integrates a massive, subtle background watermark or brand graphic, alongside standard multi-column links and a newsletter input.", dynamicInput: { type: "text", placeholder: "Graphic details or theme?", label: "Custom Details" } }
                        }
                    }
                }
            },
            "Layouts": {
                type: "group",
                options: {
                    "Page Shells / App Frames": {
                        type: "group",
                        options: {
                            "Classic Holy Grail Layout": {
                                type: "option",
                                prompt: "Create a 'Holy Grail Layout' structural shell. It must include a persistent Header at the top, a persistent Footer at the bottom, and a main content area in the middle that is split into 3 columns: a left sidebar, a wide main content area, and a right sidebar. Ensure the footer sticks to the bottom even if the content is short.",
                                dynamicInput: { type: "text", placeholder: "Framework or specific widths?", label: "Custom Details" }
                            },
                            "Full-Screen Dashboard Shell": {
                                type: "option",
                                prompt: "Design a 'Full-Screen Dashboard Shell'. Create a 100vh layout with a fixed, narrow navigation sidebar on the left and a top utility header. The remaining main content area should have a distinct background color and be scrollable independently of the sidebar.",
                                dynamicInput: { type: "text", placeholder: "Sidebar behavior or framework?", label: "Custom Details" }
                            }
                        }
                    },
                    "Grid Systems": {
                        type: "group",
                        options: {
                            "Responsive Bento Box Grid": {
                                type: "option",
                                prompt: "Create a 'Bento Box' grid layout container. Use CSS Grid to create a responsive, asymmetric grid with varying cell sizes (e.g., some taking 2 spans horizontally, some vertically). Apply a standard gap and rounded corners to the empty placeholder cells.",
                                dynamicInput: { type: "text", placeholder: "Number of cells or framework?", label: "Custom Details" }
                            },
                            "Standard 12-Column Grid Wrapper": {
                                type: "option",
                                prompt: "Set up a standard '12-Column Grid' wrapper. Include placeholder blocks demonstrating how to span 3, 4, 6, and 12 columns responsively. Use Tailwind CSS grid utilities if applicable.",
                                dynamicInput: { type: "text", placeholder: "Framework (e.g., Tailwind, Bootstrap)?", label: "Custom Details" }
                            },
                            "Masonry Content Grid": {
                                type: "option",
                                prompt: "Create a 'Masonry Content Grid' layout. The columns should be fixed-width but the items inside should stack tightly regardless of their varying heights, leaving no awkward vertical gaps.",
                                dynamicInput: { type: "text", placeholder: "CSS columns vs JS approach?", label: "Custom Details" }
                            }
                        }
                    },
                    "Sidebar & Split Layouts": {
                        type: "group",
                        options: {
                            "Split-Screen Layout (50/50)": {
                                type: "option",
                                prompt: "Design a 'Split-Screen (50/50)' layout wrapper. Divide the viewport exactly in half horizontally. The left side should be fixed/sticky, and the right side should be independently scrollable.",
                                dynamicInput: { type: "text", placeholder: "Mobile stacking behavior?", label: "Custom Details" }
                            },
                            "Sidebar with Main Content": {
                                type: "option",
                                prompt: "Create a classic 'Sidebar + Main Content' wrapper. The sidebar should take up roughly 25% (or a fixed width) of the container, while the main content takes the remaining space. Ensure the sidebar stacks below or hides on mobile.",
                                dynamicInput: { type: "text", placeholder: "Sidebar left or right? Framework?", label: "Custom Details" }
                            }
                        }
                    },
                    "Content Containers": {
                        type: "group",
                        options: {
                            "Narrow Reading Container": {
                                type: "option",
                                prompt: "Create a 'Narrow Reading Container' layout. Apply a maximum width (around 65ch or 700px) and center it horizontally to provide the optimal line length for reading long-form typography.",
                                dynamicInput: { type: "text", placeholder: "Max-width preference?", label: "Custom Details" }
                            },
                            "Full-Bleed with Constrained Content": {
                                type: "option",
                                prompt: "Set up a 'Full-Bleed' layout wrapper where the background color or images stretch to the absolute edges of the screen, but the text/content inside remains constrained within a centered max-width container.",
                                dynamicInput: { type: "text", placeholder: "Max-width of inner content?", label: "Custom Details" }
                            }
                        }
                    }
                }
            },
            "Styles & Theming": {
                type: "group",
                options: {
                    "Color Schemes / Palettes": {
                        type: "group",
                        options: {
                            "Standard / Base Themes": {
                                type: "group",
                                options: {
                                    "Light Mode": {
                                        type: "option",
                                        prompt: "Apply a 'Light Mode' color scheme. The design should feel clean, bright, and standard. Use a white or very light grey background, dark grey or black text for high readability, and a distinct primary color for links and primary buttons. Ensure borders and dividers are subtle and light.",
                                        dynamicInput: { type: "text", placeholder: "Primary accent color?", label: "Custom Details" }
                                    },
                                    "Dark Mode": {
                                        type: "option",
                                        prompt: "Apply a 'Dark Mode' color scheme. The design must be sleek and easy on the eyes. Use a deep charcoal, dark blue-grey, or pure black background. Text should be off-white or light grey to reduce eye strain. Use bright, saturated accent colors for interactive elements so they stand out against the dark background.",
                                        dynamicInput: { type: "text", placeholder: "Primary accent color?", label: "Custom Details" }
                                    },
                                    "High Contrast": {
                                        type: "option",
                                        prompt: "Apply a 'High Contrast' color scheme. This is focused on accessibility and sharpness. Use starkly contrasting colors, such as pure black on pure white, or bright yellow on dark backgrounds. Avoid subtle shades or low-contrast text. Borders should be thick and clearly defined.",
                                        dynamicInput: { type: "text", placeholder: "Preferred contrast pair?", label: "Custom Details" }
                                    }
                                }
                            },
                            "Mood / Vibe Based": {
                                type: "group",
                                options: {
                                    "Cyberpunk / Neon": {
                                        type: "option",
                                        prompt: "Apply a 'Cyberpunk / Neon' color palette. The aesthetic should feature a very dark, near-black or deep purple background. Accentuate the design with vibrant, glowing neon colors like hot pink, electric blue, or neon green. Use these colors for borders, text highlights, and button glows.",
                                        dynamicInput: { type: "text", placeholder: "Specific neon colors?", label: "Custom Details" }
                                    },
                                    "Pastel / Soft": {
                                        type: "option",
                                        prompt: "Apply a 'Pastel / Soft' color palette. The design should feel calming and muted. Use light, washed-out colors like baby pink, mint green, or soft lavender for backgrounds and large areas. Pair with slightly darker, but still soft, shades for text to maintain readability without harsh contrast.",
                                        dynamicInput: { type: "text", placeholder: "Preferred pastel tones?", label: "Custom Details" }
                                    },
                                    "Earthy / Nature": {
                                        type: "option",
                                        prompt: "Apply an 'Earthy / Nature' color palette. The vibe should be organic and warm. Utilize a palette of warm greens, earthy browns, sand/beige, and muted terracotta. The background should be a warm off-white or light beige, avoiding stark white.",
                                        dynamicInput: { type: "text", placeholder: "Specific earthy shades?", label: "Custom Details" }
                                    },
                                    "Minimalist Monochrome": {
                                        type: "option",
                                        prompt: "Apply a 'Minimalist Monochrome' color palette. The design must be strictly black, white, and varying shades of grey. Do not use any other colors, even for links or buttons. Rely on typography scale, whitespace, and font weight to create hierarchy and indicate interactivity.",
                                        dynamicInput: { type: "text", placeholder: "Any subtle tint (e.g., cool grey)?", label: "Custom Details" }
                                    },
                                    "Vibrant & Playful": {
                                        type: "option",
                                        prompt: "Apply a 'Vibrant & Playful' color palette. The design should be energetic and lively. Use bright, saturated primary and secondary colors (reds, blues, yellows, oranges). Allow large blocks of color and high-contrast combinations. It should feel friendly and bold.",
                                        dynamicInput: { type: "text", placeholder: "Primary vibrant color?", label: "Custom Details" }
                                    }
                                }
                            },
                            "Industry / Brand Specific": {
                                type: "group",
                                options: {
                                    "Corporate / Trust": {
                                        type: "option",
                                        prompt: "Apply a 'Corporate / Trust' color palette. The design needs to feel professional, reliable, and secure. Heavily utilize a spectrum of professional blues, combined with crisp white backgrounds and structured slate or silver-greys for secondary elements and text.",
                                        dynamicInput: { type: "text", placeholder: "Specific shade of blue?", label: "Custom Details" }
                                    },
                                    "Luxury / Premium": {
                                        type: "option",
                                        prompt: "Apply a 'Luxury / Premium' color palette. The design should evoke exclusivity and high-end quality. Use a palette built around deep rich tones (like midnight blue, forest green, or stark black) accented with metallic colors like gold, silver, or rose gold. Keep backgrounds clean and use high contrast.",
                                        dynamicInput: { type: "text", placeholder: "Specific metallic accent?", label: "Custom Details" }
                                    }
                                }
                            }
                        }
                    },
                    "Typography / Fonts": {
                        type: "group",
                        options: {
                            "Modern & Clean (Sans-Serif)": {
                                type: "group",
                                options: {
                                    "Geometric (e.g., Poppins)": {
                                        type: "option",
                                        prompt: "Apply a 'Geometric Sans-Serif' typography style (e.g., Poppins, Montserrat, Futura). The fonts should have perfectly circular curves and clean, even stroke widths. This gives a highly modern, friendly, and structured look. Use bold weights for headings and regular weights for body text.",
                                        dynamicInput: { type: "text", placeholder: "Specific font family?", label: "Custom Details" }
                                    },
                                    "Neutral / UI (e.g., Inter)": {
                                        type: "option",
                                        prompt: "Apply a 'Neutral / UI Sans-Serif' typography style (e.g., Inter, Roboto, San Francisco). The font should be highly legible, unobtrusive, and designed specifically for user interfaces. It should blend in seamlessly and prioritize readability at all sizes, especially on screens.",
                                        dynamicInput: { type: "text", placeholder: "Specific font family?", label: "Custom Details" }
                                    }
                                }
                            },
                            "Elegant & Classic (Serif)": {
                                type: "group",
                                options: {
                                    "Editorial / Magazine": {
                                        type: "option",
                                        prompt: "Apply an 'Editorial / Magazine Serif' typography style (e.g., Playfair Display, Lora). The font should have high contrast between thick and thin strokes, giving it a sophisticated, fashionable, and literary feel. Ideal for large, striking headlines.",
                                        dynamicInput: { type: "text", placeholder: "Specific font family?", label: "Custom Details" }
                                    },
                                    "Traditional (e.g., Merriweather)": {
                                        type: "option",
                                        prompt: "Apply a 'Traditional Serif' typography style (e.g., Merriweather, Times New Roman, Georgia). The font should be highly readable for long-form text, with sturdy serifs and a classic, authoritative feel. Excellent for blogs, news, and academic content.",
                                        dynamicInput: { type: "text", placeholder: "Specific font family?", label: "Custom Details" }
                                    }
                                }
                            },
                            "Technical (Monospace)": {
                                type: "group",
                                options: {
                                    "Clean Mono (e.g., Fira Code)": {
                                        type: "option",
                                        prompt: "Apply a 'Clean Monospace' typography style (e.g., Fira Code, JetBrains Mono, Roboto Mono). Every character should take up the exact same horizontal width. This gives a technical, developer-focused, or raw 'terminal' aesthetic to the design.",
                                        dynamicInput: { type: "text", placeholder: "Specific font family?", label: "Custom Details" }
                                    }
                                }
                            },
                            "Creative & Expressive": {
                                type: "group",
                                options: {
                                    "Handwritten / Casual": {
                                        type: "option",
                                        prompt: "Apply a 'Handwritten / Casual' typography style. The font should mimic natural handwriting, cursive, or casual marker strokes. Use this sparingly for accents, signatures, or playful subheadings, while keeping body text in a legible sans-serif.",
                                        dynamicInput: { type: "text", placeholder: "Specific font family?", label: "Custom Details" }
                                    },
                                    "Chunky / Display": {
                                        type: "option",
                                        prompt: "Apply a 'Chunky / Display' typography style. The font should be extremely thick, bold, and heavy, designed for maximum impact in large headlines. It should feel loud, confident, and graphic.",
                                        dynamicInput: { type: "text", placeholder: "Specific font family?", label: "Custom Details" }
                                    }
                                }
                            }
                        }
                    },
                    "Visual Styles & Aesthetics": {
                        type: "group",
                        options: {
                            "Modern UI Trends": {
                                type: "group",
                                options: {
                                    "Glassmorphism": {
                                        type: "option",
                                        prompt: "Apply a 'Glassmorphism' aesthetic. Key elements (like cards, navbars, or sidebars) should feature a frosted glass effect using background blur (`backdrop-filter: blur`), semi-transparent white or dark backgrounds, and delicate 1px light borders to define the edges. Place colorful shapes or gradients behind these elements to make the glass effect visible.",
                                        dynamicInput: { type: "text", placeholder: "Level of blur (e.g., high, subtle)?", label: "Custom Details" }
                                    },
                                    "Neumorphism": {
                                        type: "option",
                                        prompt: "Apply a 'Neumorphism' (Soft UI) aesthetic. The design should mimic soft, extruded plastic. Elements should have the exact same background color as their parent container. Create depth purely using dual soft box-shadows: a light shadow on the top-left and a dark shadow on the bottom-right. Use inner shadows for pressed/active states.",
                                        dynamicInput: { type: "text", placeholder: "Background color to base shadows on?", label: "Custom Details" }
                                    },
                                    "Claymorphism": {
                                        type: "option",
                                        prompt: "Apply a 'Claymorphism' aesthetic. Elements should look like 3D, fluffy clay objects. Achieve this using a combination of a light background color, a double inner shadow (one light, one dark) to create a rounded 3D volume, and an outer drop shadow. Use highly rounded corners (border-radius).",
                                        dynamicInput: { type: "text", placeholder: "Primary clay color?", label: "Custom Details" }
                                    }
                                }
                            },
                            "Standard / Industry Tested": {
                                type: "group",
                                options: {
                                    "Material Design": {
                                        type: "option",
                                        prompt: "Apply a 'Material Design' aesthetic. Follow Google's principles: use solid, flat colors, distinct card-based layouts with subtle, layered drop shadows to indicate elevation (z-index). Include ripple effects for interactions and clear, bold typography.",
                                        dynamicInput: { type: "text", placeholder: "Primary brand color?", label: "Custom Details" }
                                    },
                                    "Flat Design": {
                                        type: "option",
                                        prompt: "Apply a 'Flat Design' aesthetic. Strictly avoid any gradients, shadows, bevels, or 3D effects. Rely entirely on solid colors, crisp typography, and sharp vector iconography to create a clean, 2D minimalist interface.",
                                        dynamicInput: { type: "text", placeholder: "Color palette details?", label: "Custom Details" }
                                    }
                                }
                            },
                            "Bold & Experimental": {
                                type: "group",
                                options: {
                                    "Brutalism": {
                                        type: "option",
                                        prompt: "Apply a 'Brutalism' aesthetic. The design should look raw, unpolished, and intentionally break standard rules. Use stark contrasting colors, thick harsh borders, oversized clashing typography, visible grid lines, and minimal spacing. The feel is anti-design and structural.",
                                        dynamicInput: { type: "text", placeholder: "Primary harsh colors?", label: "Custom Details" }
                                    },
                                    "Retro / 90s Web": {
                                        type: "option",
                                        prompt: "Apply a 'Retro / 90s Web' aesthetic. Emulate classic operating systems or early web design. Use harsh standard colors (like pure blue links), pixelated or monospace fonts, sharp bevels on buttons (classic Windows 95 style), visible table borders, and repeating background patterns.",
                                        dynamicInput: { type: "text", placeholder: "Specific retro era/system?", label: "Custom Details" }
                                    },
                                    "Apple-like Minimalist": {
                                        type: "option",
                                        prompt: "Apply an 'Apple-like Minimalist' aesthetic. Focus on extreme cleanliness and premium quality. Utilize massive amounts of whitespace, huge, elegant typography, very subtle metallic or grey gradients, and high-quality, large-scale imagery. Keep UI elements extremely subtle until interacted with.",
                                        dynamicInput: { type: "text", placeholder: "Specific typography preference?", label: "Custom Details" }
                                    }
                                }
                            }
                        }
                    },
                    "Shapes, Borders & Shadows": {
                        type: "group",
                        options: {
                            "Corner Radius": {
                                type: "group",
                                options: {
                                    "Sharp Edges": {
                                        type: "option",
                                        prompt: "Apply a 'Sharp Edges' styling rule globally. Set `border-radius: 0px` on all elements including buttons, cards, inputs, and images. This gives a very strict, corporate, or brutalist architectural feel.",
                                        dynamicInput: { type: "text", placeholder: "Any exceptions?", label: "Custom Details" }
                                    },
                                    "Soft / Subtle Rounded": {
                                        type: "option",
                                        prompt: "Apply a 'Soft / Subtle Rounded' styling rule globally. Use a small border-radius (around 4px to 8px) on interactive elements and cards. This provides a modern, clean, standard UI look that takes the harshness off sharp corners.",
                                        dynamicInput: { type: "text", placeholder: "Specific pixel radius?", label: "Custom Details" }
                                    },
                                    "Friendly / Highly Rounded": {
                                        type: "option",
                                        prompt: "Apply a 'Friendly / Highly Rounded' styling rule globally. Use a large border-radius (around 16px to 24px) for cards, images, and large containers. This makes the interface feel soft, approachable, and app-like.",
                                        dynamicInput: { type: "text", placeholder: "Specific pixel radius?", label: "Custom Details" }
                                    },
                                    "Pill-Shaped": {
                                        type: "option",
                                        prompt: "Apply a 'Pill-Shaped' styling rule primarily for buttons, badges, and chips. Set the border-radius high enough (e.g., `rounded-full` or `9999px`) so the left and right edges form perfect semi-circles.",
                                        dynamicInput: { type: "text", placeholder: "Apply to inputs as well?", label: "Custom Details" }
                                    }
                                }
                            },
                            "Border Styles": {
                                type: "group",
                                options: {
                                    "Borderless": {
                                        type: "option",
                                        prompt: "Apply a 'Borderless' styling rule. Remove explicit borders from cards, inputs, and buttons. Rely entirely on whitespace (padding/margins), distinct background colors, and subtle shadows to define boundaries between elements.",
                                        dynamicInput: { type: "text", placeholder: "How to handle inputs?", label: "Custom Details" }
                                    },
                                    "Delicate / Thin": {
                                        type: "option",
                                        prompt: "Apply a 'Delicate / Thin' border styling rule. Use very subtle, thin 1px borders with a light, low-contrast color (like light grey) on cards, dividers, and inputs to create a crisp, clean outline without adding visual weight.",
                                        dynamicInput: { type: "text", placeholder: "Border color?", label: "Custom Details" }
                                    },
                                    "Bold / Thick": {
                                        type: "option",
                                        prompt: "Apply a 'Bold / Thick' border styling rule. Use thick, dark, and highly visible borders (3px-4px) around containers, buttons, and images. This creates a strong, graphic, comic-book, or brutalist aesthetic.",
                                        dynamicInput: { type: "text", placeholder: "Border thickness/color?", label: "Custom Details" }
                                    }
                                }
                            },
                            "Shadows (Depth)": {
                                type: "group",
                                options: {
                                    "Soft & Diffused": {
                                        type: "option",
                                        prompt: "Apply a 'Soft & Diffused' shadow styling rule globally. Use large, blurry, low-opacity drop shadows. The shadows should look elegant and ethereal, making elements feel like they are floating gently above the background.",
                                        dynamicInput: { type: "text", placeholder: "Shadow color tint?", label: "Custom Details" }
                                    },
                                    "Hard & Solid": {
                                        type: "option",
                                        prompt: "Apply a 'Hard & Solid' shadow styling rule. Instead of blurred shadows, use solid blocks of color offset from the element (e.g., 4px right, 4px down, 0px blur). This gives a retro, pop-art, or sharp tactile look.",
                                        dynamicInput: { type: "text", placeholder: "Solid shadow color?", label: "Custom Details" }
                                    },
                                    "Flat (No Shadows)": {
                                        type: "option",
                                        prompt: "Apply a 'Flat' styling rule regarding depth. Strictly prohibit the use of drop shadows or box shadows anywhere in the design. Depth must be conveyed through color contrast and overlapping elements only.",
                                        dynamicInput: { type: "text", placeholder: "Any specific instructions?", label: "Custom Details" }
                                    }
                                }
                            }
                        }
                    },
                    "Animations & Transitions": {
                        type: "group",
                        options: {
                            "Interaction / Hover Effects": {
                                type: "group",
                                options: {
                                    "Subtle Fade": {
                                        type: "option",
                                        prompt: "Apply a 'Subtle Fade' animation rule for interactions. On hover or focus, elements (like buttons, links, cards) should only have a slight color change, opacity shift, or a very gentle 1-2px shadow increase, transitioning smoothly and quickly.",
                                        dynamicInput: { type: "text", placeholder: "Transition duration?", label: "Custom Details" }
                                    },
                                    "Playful & Bouncy": {
                                        type: "option",
                                        prompt: "Apply a 'Playful & Bouncy' animation rule for interactions. On hover, elements should scale up slightly (e.g., `scale: 1.05`), rotate a few degrees, or feature a spring-like bounce effect to feel highly interactive and fun.",
                                        dynamicInput: { type: "text", placeholder: "Specific transform effects?", label: "Custom Details" }
                                    },
                                    "3D / Transform": {
                                        type: "option",
                                        prompt: "Apply a '3D / Transform' animation rule. On hover, apply perspective effects, such as a slight tilt (rotateX/rotateY), a flip animation, or an intense shadow depth increase, making the elements feel like physical objects in a 3D space.",
                                        dynamicInput: { type: "text", placeholder: "Transform details?", label: "Custom Details" }
                                    }
                                }
                            },
                            "Page / Scroll Animations": {
                                type: "group",
                                options: {
                                    "Fade In & Up": {
                                        type: "option",
                                        prompt: "Apply a 'Fade In & Up' scroll animation rule. As the user scrolls down the page, new elements (images, text blocks, cards) should smoothly fade in from 0% opacity while translating slightly upwards into their final position.",
                                        dynamicInput: { type: "text", placeholder: "Animation trigger point?", label: "Custom Details" }
                                    },
                                    "Staggered Load": {
                                        type: "option",
                                        prompt: "Apply a 'Staggered Load' animation rule for lists or grids. When a section enters the viewport, its child elements (like a row of cards) should animate in one by one with a slight delay between each, creating a cascading reveal effect.",
                                        dynamicInput: { type: "text", placeholder: "Delay duration?", label: "Custom Details" }
                                    },
                                    "Parallax Scrolling": {
                                        type: "option",
                                        prompt: "Apply a 'Parallax' scroll animation rule. Background images or decorative background shapes should move at a slower speed relative to the foreground content as the user scrolls, creating an illusion of depth.",
                                        dynamicInput: { type: "text", placeholder: "Intensity of parallax?", label: "Custom Details" }
                                    }
                                }
                            },
                            "Overall Motion Feel": {
                                type: "group",
                                options: {
                                    "Snappy & Fast": {
                                        type: "option",
                                        prompt: "Apply a 'Snappy & Fast' global motion feel. Keep all CSS transitions and animations very short (e.g., 100ms - 150ms) with a linear or fast ease-out timing function. The UI should feel instantly responsive and technical.",
                                        dynamicInput: { type: "text", placeholder: "Preferred timing function?", label: "Custom Details" }
                                    },
                                    "Smooth & Fluid": {
                                        type: "option",
                                        prompt: "Apply a 'Smooth & Fluid' global motion feel. Use longer transition durations (e.g., 300ms - 500ms) with gentle, elegant easing functions (like ease-in-out or custom cubic-bezier curves). The UI should feel luxurious and deliberate.",
                                        dynamicInput: { type: "text", placeholder: "Preferred easing curve?", label: "Custom Details" }
                                    },
                                    "Reduced Motion": {
                                        type: "option",
                                        prompt: "Apply a 'Reduced Motion' global rule. Disable all decorative animations, scroll effects, and hover transforms. Keep only necessary state changes (like color swaps on hover) with zero transition time to prioritize accessibility and performance.",
                                        dynamicInput: { type: "text", placeholder: "Any allowed minimal animations?", label: "Custom Details" }
                                    }
                                }
                            }
                        }
                    }
                }
            },
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
