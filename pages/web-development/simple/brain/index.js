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
                                            "Brand Colors (Solid)": { type: "group", options: {} },
                                            "Outline with Brand Icon": { type: "group", options: {} },
                                            "Pill-shaped with Gradient": { type: "group", options: {} },
                                            "Dark Mode Stealth": { type: "group", options: {} },
                                            "Minimalist Icon-Only": { type: "group", options: {} }
                                        }
                                    },
                                    "E-commerce / Cart": {
                                        type: "group",
                                        options: {
                                            "Urgent 'Buy Now' (Pulsing)": { type: "group", options: {} },
                                            "Wide 'Add to Cart' Block": { type: "group", options: {} },
                                            "Sleek Dark Mode Cart": { type: "group", options: {} },
                                            "Split Button": { type: "group", options: {} }
                                        }
                                    },
                                    "Navigation / Menu": {
                                        type: "group",
                                        options: {
                                            "Ghost / Invisible": { type: "group", options: {} },
                                            "Underline Slide (Hover)": { type: "group", options: {} },
                                            "Pill-shaped Active State": { type: "group", options: {} },
                                            "Retro Terminal Style": { type: "group", options: {} }
                                        }
                                    },
                                    "Floating / Icon": {
                                        type: "group",
                                        options: {
                                            "Circular Shadow Lift": { type: "group", options: {} },
                                            "Glassmorphism FAB": { type: "group", options: {} },
                                            "Expanding FAB": { type: "group", options: {} },
                                            "Glowing Neon FAB": { type: "group", options: {} }
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
