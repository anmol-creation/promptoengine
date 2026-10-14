
export const fixImageCategory = {
    type: 'group',
    options: {
        "Aspect Ratio": {
            type: "group",
            options: {
                "Square Post (1:1)": { type: "static", prompt: "Set aspect ratio to 1:1. Render a clean Instagram square post layout template with a central image placeholder frame." },
                "Instagram Portrait (4:5)": { type: "static", prompt: "Set aspect ratio to 4:5. Render a tall Instagram portrait post layout template with a large central image placeholder frame." },
                "Story / Reel (9:16)": { type: "static", prompt: "Set aspect ratio to 9:16. Render a vertical mobile Story or Reel layout template covering the full screen with UI elements." },
                "YouTube Thumbnail (16:9)": { type: "static", prompt: "Set aspect ratio to 16:9. Render a wide YouTube video thumbnail layout template." },
                "Standard Photo (4:3)": { type: "static", prompt: "Set aspect ratio to 4:3. Render a classic standard landscape photography frame." },
                "Classic Portrait (3:4)": { type: "static", prompt: "Set aspect ratio to 3:4. Render a classic vertical portrait photography frame." },
                "Pinterest Pin (2:3)": { type: "static", prompt: "Set aspect ratio to 2:3. Render a long vertical Pinterest pin layout template." },
                "Cinematic Wide (21:9)": { type: "static", prompt: "Set aspect ratio to 21:9. Render an ultra-wide cinematic movie frame template with black bars." }
            }
        },
        "Fix Background": {
            type: "group",
            options: {
                "Replace Background": {
                    type: "group",
                    vehicleEnabled: false,
                    options: {
                        "Type": { type: "input", prompt: "Background: \${input}" },
                        "Auto AI": { type: "static", prompt: "Automatically optimize and enhance the image." },

                        "Nature & Landscapes": {
                            type: "group",
                            options: {
                                "Mountains & Hills": {
                                    type: "group",
                                    options: {
                                        "Snowy Alps Peak": { type: "static", prompt: "with a snow-capped Alps mountain peak background" },
                                        "Himalayan Sunrise": { type: "static", prompt: "with a glowing Himalayan mountain sunrise background" },
                                        "Lush Green Hills": { type: "static", prompt: "rolling lush green hills and valleys" },
                                        "Rocky Canyon": { type: "static", prompt: "deep rocky canyon landscape" },
                                        "Volcanic Crater": { type: "static", prompt: "dramatic volcanic crater in the background" },
                                        "Mist-Covered Peaks": { type: "static", prompt: "mysterious mist-covered mountain peaks" },
                                        "Autumn Mountain Trail": { type: "static", prompt: "mountain trail surrounded by orange autumn leaves" },
                                        "Desert Mesa": { type: "static", prompt: "arid desert mesa with red rocks" },
                                        "High Altitude Plateau": { type: "static", prompt: "barren high altitude plateau under clear blue sky" },
                                        "Grassy Highland": { type: "static", prompt: "sweeping grassy highland with a gentle breeze" }
                                    }
                                },
                                "Rivers & Lakes": {
                                    type: "group",
                                    options: {
                                        "Calm Alpine Lake": { type: "static", prompt: "calm reflective alpine lake" },
                                        "Raging River Rapids": { type: "static", prompt: "fast-flowing raging river rapids" },
                                        "Peaceful Forest Stream": { type: "static", prompt: "peaceful shallow stream winding through a forest" },
                                        "Sunset Lake Pier": { type: "static", prompt: "wooden pier on a lake during sunset" },
                                        "Frozen Winter Lake": { type: "static", prompt: "frozen icy lake in a winter landscape" },
                                        "Tropical Blue Lagoon": { type: "static", prompt: "crystal clear tropical blue lagoon" },
                                        "Muddy Jungle River": { type: "static", prompt: "wide muddy river winding through a dense jungle" },
                                        "Desert Oasis Pool": { type: "static", prompt: "hidden desert oasis with a small clear pool" },
                                        "Mountain Spring": { type: "static", prompt: "crystal clear mountain spring bubbling over rocks" },
                                        "Misty Morning River": { type: "static", prompt: "wide river covered in thick morning mist" }
                                    }
                                },
                                "Waterfalls": {
                                    type: "group",
                                    options: {
                                        "Majestic Tall Waterfall": { type: "static", prompt: "majestic tall waterfall cascading down a cliff" },
                                        "Tropical Jungle Falls": { type: "static", prompt: "hidden tropical jungle waterfall with lush greenery" },
                                        "Wide Step Waterfall": { type: "static", prompt: "wide cascading step waterfall over rocks" },
                                        "Icy Winter Falls": { type: "static", prompt: "partially frozen icy waterfall in winter" },
                                        "Fairy Pool Falls": { type: "static", prompt: "small gentle waterfall feeding a clear fairy pool" },
                                        "Cave Waterfall": { type: "static", prompt: "underground cave with a glowing waterfall" },
                                        "Rainbow Waterfall": { type: "static", prompt: "powerful waterfall with a visible rainbow in the mist" },
                                        "Autumn Waterfall": { type: "static", prompt: "waterfall surrounded by vibrant red autumn trees" },
                                        "Gorge Waterfall": { type: "static", prompt: "waterfall plunging deep into a narrow rocky gorge" },
                                        "Volcanic Hot Springs Falls": { type: "static", prompt: "steaming hot springs waterfall over dark volcanic rocks" }
                                    }
                                },
                                "Forests & Woods": {
                                    type: "group",
                                    options: {
                                        "Dense Pine Forest": { type: "static", prompt: "deep inside a dense dark pine forest" },
                                        "Sunlit Birch Woods": { type: "static", prompt: "bright birch woods with sunlight filtering through leaves" },
                                        "Mystic Foggy Woods": { type: "static", prompt: "creepy mystic foggy woods with twisted trees" },
                                        "Tropical Rainforest": { type: "static", prompt: "humid and dense tropical rainforest full of vines" },
                                        "Bamboo Forest": { type: "static", prompt: "tall serene green bamboo forest" },
                                        "Redwood Giant Trees": { type: "static", prompt: "standing beneath towering giant redwood trees" },
                                        "Golden Autumn Forest": { type: "static", prompt: "forest covered entirely in golden and red autumn leaves" },
                                        "Snowy Winter Woods": { type: "static", prompt: "quiet woods covered in a thick blanket of fresh snow" },
                                        "Enchanted Fairy Forest": { type: "static", prompt: "glowing enchanted forest with magical floating lights" },
                                        "Swampy Mangrove": { type: "static", prompt: "swampy mangrove forest with roots dipping into water" }
                                    }
                                },
                                "Sky & Atmosphere": {
                                    type: "group",
                                    options: {
                                        "Clear Blue Sky": { type: "static", prompt: "boundless clear blue sky with no clouds" },
                                        "Dramatic Storm Clouds": { type: "static", prompt: "dark dramatic gathering storm clouds" },
                                        "Golden Hour Sunset": { type: "static", prompt: "vibrant golden hour sunset sky with orange hues" },
                                        "Pastel Sunrise": { type: "static", prompt: "soft pastel pink and purple sunrise sky" },
                                        "Starry Night Sky": { type: "static", prompt: "clear starry night sky full of stars" },
                                        "Milky Way Galaxy": { type: "static", prompt: "breathtaking view of the Milky Way galaxy in the night sky" },
                                        "Aurora Borealis": { type: "static", prompt: "glowing green Aurora Borealis Northern Lights in the sky" },
                                        "Fluffy Cumulus Clouds": { type: "static", prompt: "bright day sky filled with fluffy white cumulus clouds" },
                                        "Overcast Grey Sky": { type: "static", prompt: "moody and flat overcast grey sky" },
                                        "Blood Red Eclipse Sky": { type: "static", prompt: "surreal blood red sky during a solar eclipse" }
                                    }
                                },
                                "Beaches & Coasts": {
                                    type: "group",
                                    options: {
                                        "White Sand Beach": { type: "static", prompt: "pristine white sand beach with turquoise water" },
                                        "Rocky Cliff Coastline": { type: "static", prompt: "dramatic rocky cliff coastline with crashing waves" },
                                        "Black Sand Volcanic Beach": { type: "static", prompt: "exotic black sand volcanic beach" },
                                        "Bioluminescent Night Beach": { type: "static", prompt: "beach at night with glowing blue bioluminescent waves" },
                                        "Pebble Shore": { type: "static", prompt: "quiet coastal shore covered in smooth pebbles" },
                                        "Tropical Palm Beach": { type: "static", prompt: "tropical beach lined with tall leaning palm trees" },
                                        "Foggy Lighthouse Coast": { type: "static", prompt: "foggy moody coastline with a distant lighthouse" },
                                        "Surfer's Wave Beach": { type: "static", prompt: "active beach with large crashing surfer waves" },
                                        "Sunset Ocean Horizon": { type: "static", prompt: "calm beach looking out at an ocean sunset horizon" },
                                        "Hidden Cove": { type: "static", prompt: "secluded hidden beach cove surrounded by tall rocks" }
                                    }
                                }
                            }
                        },

                        "Urban & Public Places": {
                            type: "group",
                            options: {
                                "Streets & Roads": {
                                    type: "group",
                                    options: {
                                        "Busy Indian Market Street": { type: "static", prompt: "busy Indian market street, colorful shops, lively crowd" },
                                        "Neon Cyberpunk Street": { type: "static", prompt: "futuristic neon cyberpunk street at night, glowing signs" },
                                        "Rainy Cobblestone Street": { type: "static", prompt: "wet European cobblestone street during a light rain" },
                                        "Modern Highway": { type: "static", prompt: "long open modern highway on a clear sunny day" },
                                        "Empty Gritty Alleyway": { type: "static", prompt: "gritty empty urban alleyway with dramatic shadows" },
                                        "Suburban Neighborhood Road": { type: "static", prompt: "quiet suburban neighborhood road with trees and houses" },
                                        "Snowy City Street": { type: "static", prompt: "city street covered in fresh snow with winter lights" },
                                        "Desert Route 66 Highway": { type: "static", prompt: "classic Route 66 desert highway stretching to the horizon" },
                                        "Festive Street with Lanterns": { type: "static", prompt: "street decorated with glowing festive lanterns and banners" },
                                        "Flooded City Street": { type: "static", prompt: "post-rain flooded city street reflecting neon lights" }
                                    }
                                },
                                "Transit & Stations": {
                                    type: "group",
                                    options: {
                                        "Railway Platform (India)": { type: "static", prompt: "busy Indian railway station platform, trains and crowd" },
                                        "Modern Metro Station": { type: "static", prompt: "clean underground modern metro station with sleek trains" },
                                        "Airport Departure Terminal": { type: "static", prompt: "bright modern airport departure terminal waiting area" },
                                        "Local Bus Stand": { type: "static", prompt: "crowded local city bus stand with buses" },
                                        "Vintage Train Station": { type: "static", prompt: "classic vintage train station with steam and old architecture" },
                                        "Subway Car Interior": { type: "static", prompt: "inside a moving urban subway train car" },
                                        "Airport Runway View": { type: "static", prompt: "looking out a large window at an airport runway" },
                                        "Ferry Terminal": { type: "static", prompt: "busy ferry terminal by the water" },
                                        "High-Speed Bullet Train Platform": { type: "static", prompt: "futuristic high-speed bullet train platform" },
                                        "Empty Night Bus Stop": { type: "static", prompt: "lonely bus stop illuminated by a single streetlamp at night" }
                                    }
                                },
                                "Hangout Spots": {
                                    type: "group",
                                    options: {
                                        "Cozy Coffee Shop": { type: "static", prompt: "inside a warm and cozy neighborhood coffee shop" },
                                        "Luxury Fine-Dining Restaurant": { type: "static", prompt: "inside a fine-dining luxury restaurant with dim romantic lighting" },
                                        "Modern Shopping Mall": { type: "static", prompt: "inside a massive modern shopping mall with glass displays" },
                                        "Local Street Shop / Kirana": { type: "static", prompt: "standing outside a vibrant local street shop" },
                                        "Lively Pub / Bar": { type: "static", prompt: "inside a lively pub with neon signs and a wooden counter" },
                                        "Outdoor Cafe Terrace": { type: "static", prompt: "sitting at an outdoor cafe terrace on a sunny afternoon" },
                                        "Neon Arcade Room": { type: "static", prompt: "inside a retro arcade room glowing with colorful game screens" },
                                        "Rooftop Lounge": { type: "static", prompt: "at a chic rooftop lounge overlooking the city at night" },
                                        "Crowded Food Court": { type: "static", prompt: "inside a bustling mall food court with various stalls" },
                                        "Library Cafe": { type: "static", prompt: "inside a quiet cafe surrounded by bookshelves" }
                                    }
                                }
                            }
                        },

                        "Indoors & Home": {
                            type: "group",
                            options: {
                                "Living Spaces": {
                                    type: "group",
                                    options: {
                                        "Modern Aesthetic Living Room": { type: "static", prompt: "inside a modern aesthetic living room with a sleek sofa" },
                                        "Cozy Bedroom with Fairy Lights": { type: "static", prompt: "inside a cozy bedroom decorated with warm fairy lights" },
                                        "Clean Modern Kitchen": { type: "static", prompt: "inside a bright, clean modern kitchen with marble counters" },
                                        "Home Balcony City View": { type: "static", prompt: "standing on a home balcony overlooking the city skyline" },
                                        "Open Rooftop Terrace": { type: "static", prompt: "on an open rooftop terrace during sunset" },
                                        "Vintage Study Room": { type: "static", prompt: "inside a vintage study room with a leather chair and globes" },
                                        "Luxury Bathroom": { type: "static", prompt: "inside a luxury spa-like bathroom with a large tub" },
                                        "Messy Teen Bedroom": { type: "static", prompt: "inside a cluttered messy teenage bedroom with posters" },
                                        "Rustic Farmhouse Living Room": { type: "static", prompt: "inside a rustic farmhouse living room with a stone fireplace" },
                                        "Minimalist Zen Room": { type: "static", prompt: "inside a minimalist Japanese zen room with tatami mats" }
                                    }
                                },
                                "Work & Creative": {
                                    type: "group",
                                    options: {
                                        "Corporate Office Desk": { type: "static", prompt: "at a modern corporate office workspace with monitors" },
                                        "Classic Library": { type: "static", prompt: "inside a classic library with tall wooden bookshelves" },
                                        "Messy Art Studio": { type: "static", prompt: "inside a messy creative art studio with paint canvases" },
                                        "Music Recording Studio": { type: "static", prompt: "inside a professional music recording studio with soundboards" },
                                        "Science Laboratory": { type: "static", prompt: "inside a high-tech science laboratory with glowing tubes" },
                                        "Modern Co-working Space": { type: "static", prompt: "inside a trendy open-plan co-working space" },
                                        "Woodworking Workshop": { type: "static", prompt: "inside a dusty woodworking workshop with tools" },
                                        "Fashion Design Studio": { type: "static", prompt: "inside a fashion studio with mannequins and fabric rolls" },
                                        "Photo Studio Setup": { type: "static", prompt: "inside a photography studio with lighting umbrellas and backdrops" },
                                        "Gaming Setup Room": { type: "static", prompt: "inside a dark room with a glowing RGB PC gaming setup" }
                                    }
                                }
                            }
                        },

                        "Walls & Backdrops": {
                            type: "group",
                            options: {
                                "Exposed Red Brick Wall": { type: "static", prompt: "standing in front of a rustic exposed red brick wall" },
                                "Colorful Graffiti Wall": { type: "static", prompt: "standing in front of a vibrant street art graffiti wall" },
                                "Clean Minimalist White Wall": { type: "static", prompt: "standing in front of a pure clean minimalist white wall" },
                                "Blooming Floral Wall": { type: "static", prompt: "standing in front of a beautiful wall entirely covered in blooming flowers" },
                                "Glowing Neon Light Wall": { type: "static", prompt: "standing in front of a dark wall decorated with glowing neon light shapes" },
                                "Weathered Concrete Wall": { type: "static", prompt: "standing in front of a distressed weathered concrete wall" },
                                "Luxurious Marble Wall": { type: "static", prompt: "standing in front of an elegant polished marble wall" },
                                "Wooden Slats Wall": { type: "static", prompt: "standing in front of a modern warm wooden slats wall" },
                                "Vines & Ivy Covered Wall": { type: "static", prompt: "standing in front of an old wall overgrown with green ivy" },
                                "Metallic Cyberpunk Wall": { type: "static", prompt: "standing in front of a futuristic metallic wall with glowing panels" }
                            }
                        },

                        "Famous Cities & Landmarks": {
                            type: "group",
                            options: {
                                "India": {
                                    type: "group",
                                    options: {
                                        "Delhi - India Gate": { type: "static", prompt: "background replaced with India Gate in Delhi at golden hour" },
                                        "Delhi - Red Fort": { type: "static", prompt: "background replaced with the grand Red Fort in Delhi" },
                                        "Delhi - Connaught Place": { type: "static", prompt: "background replaced with the white pillars of Connaught Place, Delhi" },
                                        "Mumbai - Gateway of India": { type: "static", prompt: "background replaced with the Gateway of India and the Arabian Sea" },
                                        "Mumbai - Marine Drive": { type: "static", prompt: "background replaced with Marine Drive in Mumbai at sunset" },
                                        "Agra - Taj Mahal": { type: "static", prompt: "background replaced with the majestic Taj Mahal, perfect symmetry" },
                                        "Jaipur - Hawa Mahal": { type: "static", prompt: "background replaced with the pink intricate facade of Hawa Mahal" },
                                        "Kolkata - Howrah Bridge": { type: "static", prompt: "background replaced with the massive steel structure of Howrah Bridge" },
                                        "Hyderabad - Charminar": { type: "static", prompt: "background replaced with the historic Charminar in Hyderabad" },
                                        "Varanasi - Ghats": { type: "static", prompt: "background replaced with the spiritual steps of the Varanasi Ghats at dawn" }
                                    }
                                },
                                "Global": {
                                    type: "group",
                                    options: {
                                        "Paris - Eiffel Tower": { type: "static", prompt: "background replaced with the Eiffel Tower in Paris, romantic vibe" },
                                        "New York - Times Square": { type: "static", prompt: "background replaced with the bright neon billboards of Times Square, New York" },
                                        "Dubai - Burj Khalifa": { type: "static", prompt: "background replaced with the towering Burj Khalifa in Dubai" },
                                        "London - Big Ben": { type: "static", prompt: "background replaced with Big Ben and the London Eye" },
                                        "Rome - Colosseum": { type: "static", prompt: "background replaced with the ancient ruins of the Colosseum in Rome" },
                                        "Tokyo - Shibuya Crossing": { type: "static", prompt: "background replaced with the busy Shibuya Crossing in Tokyo" },
                                        "Sydney - Opera House": { type: "static", prompt: "background replaced with the Sydney Opera House and harbor" },
                                        "Rio - Christ the Redeemer": { type: "static", prompt: "background replaced with the Christ the Redeemer statue overlooking Rio" },
                                        "Egypt - Pyramids of Giza": { type: "static", prompt: "background replaced with the ancient Pyramids of Giza in the desert" },
                                        "China - Great Wall": { type: "static", prompt: "background replaced with the Great Wall of China stretching across mountains" }
                                    }
                                }
                            }
                        },

                        "Temples & Spiritual": {
                            type: "group",
                            options: {
                                "Ancient Stone Temple": { type: "static", prompt: "background replaced with a highly detailed ancient Indian stone temple with carvings" },
                                "Golden Temple (Amritsar)": { type: "static", prompt: "background replaced with the grand Golden Temple reflecting in the holy water pool" },
                                "Peaceful River Ghat": { type: "static", prompt: "background replaced with a peaceful riverbank ghat illuminated by floating diyas" },
                                "Himalayan Mountain Shrine": { type: "static", prompt: "background replaced with a small spiritual shrine high up in the misty Himalayas" },
                                "South Indian Gopuram": { type: "static", prompt: "background replaced with a colorful towering South Indian temple Gopuram" },
                                "Zen Buddhist Garden": { type: "static", prompt: "background replaced with a tranquil Zen Buddhist rock garden" },
                                "Cave Temple": { type: "static", prompt: "background replaced with a mystical carved stone cave temple lit by torches" },
                                "Forest Ashram": { type: "static", prompt: "background replaced with a peaceful rustic ashram surrounded by nature" },
                                "Giant Buddha Statue": { type: "static", prompt: "background replaced with a massive serene Buddha statue outdoors" },
                                "Church Altar": { type: "static", prompt: "background replaced with a grand gothic church interior with stained glass windows" }
                            }
                        }
                    }
                },
                "Green Screen Background": {
                    type: "static",
                    prompt: "Replace background with a solid green screen. Ensure even lighting on the background, no texture, no gradients. Clean subject edges for easy keying."
                },
                "Improve Background": {
                    type: "static",
                    prompt: [
                        "Improve the existing background by correcting colors, fixing lighting, adjusting sharpness, and removing noise or artifacts. Preserve the original background identity; do not remove or replace it.",
                        "Enhance the quality of the current background. Fix noisy areas and balance lighting, but strictly maintain the original background elements and structure.",
                        "Refine background details and colors to look more professional. Remove visual artifacts while keeping the exact same background environment intact."
                    ]
                },
                "Blur Background": {
                    type: "static",
                    prompt: [
                        "Apply natural background blur only. Do not blur or alter the subject. Preserve original background structure and colors.",
                        "Add a realistic depth of field blur to the background environment. Keep the main subject perfectly sharp and unchanged.",
                        "Softly blur the surroundings while maintaining sharp focus on the subject. Ensure the original background hues and shapes remain recognizable."
                    ]
                }
            }
        },
        "Remove Distractions": {
            type: "static",
            prompt: [
                "Remove distracting background elements such as unnecessary people, clutter, wires, random objects, or visual noise that reduce image quality, while preserving the main subject and important scene elements.",
                "Clean up the environment by eliminating random background distractions and noise, ensuring the primary subject remains the absolute focus.",
                "Declutter the background. Erase photobombers, stray objects, and unnecessary details without modifying the original subject."
            ]
        },
        "Improve Quality": {
            type: "static",
            prompt: [
                "Improve overall clarity and sharpness. Reduce noise.",
                "Enhance the overall image resolution, making details crisper and eliminating visual grain.",
                "Boost image quality by sharpening soft areas and removing any pixelation or artifacts."
            ]
        },
        "Fix Face": {
            type: "group",
            options: {
                "Fix Clarity": {
                    type: "static",
                    prompt: [
                        "Improve face clarity. Preserve subject identity.",
                        "Sharpen facial features while keeping the exact likeness of the person.",
                        "Enhance facial details and clarity without morphing the original identity."
                    ]
                },
                "Fix Skin Tone": {
                    type: "static",
                    prompt: [
                        "Balance natural skin tone. Preserve subject identity.",
                        "Correct the skin coloration to look natural and even. Maintain the subject's true likeness.",
                        "Adjust skin hues for a realistic tone while preserving the original facial identity."
                    ]
                }
            }
        },
        "Fix Lighting": {
            type: "static",
            prompt: [
                "Balance exposure with respect to the subject.",
                "Correct the lighting and exposure to ensure the subject is well-lit and clearly visible.",
                "Adjust the light levels naturally so the main subject stands out without overexposure."
            ]
        },
        "Color Correction": {
            type: "static",
            prompt: [
                "Automatically balance the colors in this image. Fix any unnatural tints, adjust white balance, and ensure vibrant yet realistic and true-to-life colors.",
                "Restore the natural color palette of the image. Neutralize color casts and enhance overall color depth without oversaturating.",
                "Apply professional auto-color correction. Ensure skin tones and environmental colors appear completely natural and balanced."
            ]
        },
        "Restore Old Photo": {
            type: "static",
            prompt: [
                "Restore this old or damaged photo. Remove scratches, dust, and artifacts, and gently enhance clarity while preserving the original historical look and feel.",
                "Carefully repair this vintage photograph. Fix physical damage marks, reduce noise, and smoothly restore faded details without altering the subject's identity.",
                "Breathe new life into this old image. Auto-repair tears, scratches, and grain, bringing back original clarity and lost details seamlessly."
            ]
        },
        "Natural Body Structure": {
            type: "static",
            prompt: [
                "Fix and correct any AI-generated structural anomalies in the subject's body. Ensure perfect human anatomy, especially fixing distorted eyes, hands, and proportions naturally.",
                "Restore perfect anatomical correctness to the subject. Fix extra or missing fingers, asymmetrical facial features, and ensure the body structure looks 100% natural and realistic.",
                "Correct physical distortions in the image. Ensure the subject's hands, eyes, and overall posture obey natural human anatomy without introducing new artifacts."
            ]
        }
    }
};
