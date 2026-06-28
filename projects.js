/*
  projects.js — all project data in one place
  ─────────────────────────────────────────────
  Add new projects at the TOP of the array — they appear first on the site.

  Each project:
    slug:          folder name inside /projects/  (must match exactly)
    title:         display name
    category:      interact / animate / paint / design / teach / read / write
    collaborators: optional — leave as "" if solo
    description:   use backtick string, line breaks preserved
    video:         YouTube embed URL or "" if none
                   Format: "https://www.youtube.com/embed/VIDEO_ID"
    main:          filename of the hero image — can be .jpg, .png, .webp, etc.
    gallery:       list of image filenames inside the project folder.
                   Use the exact filename including extension (.jpg, .png, .webp…)
*/

window.PROJECTS = [

  {
    slug: "think-speak-think",
    title: "Think-Speak-Think (2026)",
    medium: "interactive sound installation", 
    exhibited: "Hyphen Space, Dallas, TX | April 2026",
    category: "interact",
    collaborators: "Diamond Nguyen, Rabeeha Adnan and Neal Ma",
    description: `How do we show up when it seems safer to not?

In an atmosphere of perpetual precarity, surveillance, and dominant narratives that affect how we navigate the world, showing up becomes deeply political. Think-Speak-Think responds to this condition of being and invites people to gather together and indulge, frankly — welcoming people to share, listen, and be.

The installation comprises three features: a vocal booth to record one's voice, speakers that project the voice asynchronously in a public section of the space, and anonymity. Its first iteration materialized at Hyphen Space, a creative space and cafe in Downtown Dallas, TX.`,
    video: "https://www.youtube.com/embed/nTSNtDHlPgM",
    main: "main.png",
    gallery: ["01.png", "02.png", "03.png", "04.png", "05.png", "06.png"],
  },

  {
    slug: "lost-birds",
    title: "Lost Birds (2026)",
    medium: "interactive sound projection",
    category: "interact",
    collaborators: "Diamond Nguyen",
    description: `Lost Birds (Chim Lạc) is an immersive, sound-responsive installation that places visitors inside a living flock. Projected across multiple surfaces, a school of birds moves through the space in fluid formation — responsive to the sonic environment the audience itself creates. When the space is quiet, the birds fly in harmony. As crowd noise rises, their paths fragment. Order gives way to turbulence. The flock scatters. 

The piece draws its name from the Lạc Bird — a mythical figure engraved on the Đông Sơn Bronze Drum, one of the oldest symbols of Vietnamese cultural identity. In the drum's second outer ring, the bird appears in repeating pattern, circling without end. That continuity here is interrupted. The birds are not destroyed — they are displaced, searching for coherence in a space shaped entirely by human presence. Lạc also means ‘lost’ - lost in direction when noise takes over the space and interrupts the peaceful rhythm. `,
    video: "",
    link: "lostbirds.html",
    main: "main.png",
    gallery: ["01.png", "02.gif"],
  },

  {
    slug: "project-mending",
    title: "Project Mending (2026)",
    medium: "socially engaged art", 
    exhibited: "Renner Branch Frankford Library, Dallas, TX | April 26, 2026",
    category: "interact",
    collaborators: "Diamond Nguyen",
    description: `The project Mending stems from the simple act of daily maintenance and care for mundane things. It also serves as an act of resistance against consumerism and capitalism. Every thread going through fabric by hand is a symbol of love: to fix things that are torn, to spend time that is valuable on things that are about to be discarded. In a life where it is so easy to buy new things and discard the old quickly, I want to slow down and give the old things a second chance. Every piece of clothing that gets repaired will also get adorned with embroidered patterns to make it special. Once repaired, it is no longer a product of mass production, but a unique entity made with love and care. It is also a conversation starter for the artist and participants to learn about mending as a practice they can easily adopt on their own. 
    
    The project aims not only to provide a service and extend the life of fabric, but to cultivate a practice of care, carving out the interstice against consumption. The project offers a way to create, connect, and inspire change.`,
    video: "https://www.youtube.com/embed/sATJAE1SnuE",
    main: "main.jpeg",
    gallery: ["01.jpeg", "02.jpeg", "03.jpeg","04.jpeg", "05.jpeg", "06.jpeg",  "07.jpeg", "08.jpeg", "09.jpeg", "10.jpeg", "11.jpeg", "12.jpeg", "13.png"],
  },

  {
    slug: "the-moon",
    title: "The Moon (2025)",
    medium: "interactive sound installation", 
    exhibited: "ATC Gallery, UTD, Dallas, TX | May 19–23, 2025",
    category: "interact",
    collaborators: "Diamond Nguyen and Baotran Vo",
    description: `The Moon is an abstract interpretation of the Vietnamese folk story Thằng Cuội. This collaborative work by Baotran Vo and Diamond Nguyen explores innovative and experimental approaches to physical animation while preserving the aesthetic and poetic experience of longing for one's hometown and cultural roots. The concept was developed jointly. Baotran led the 2D layer design and handled both the physical and digital programming aspects of the project. Diamond transformed the 2D designs into 3D models, utilized 3D printing techniques, conducted initial research on mechanical functions and gear mechanisms, and managed the physical assembly`,
    video: "https://www.youtube.com/embed/6tG6u79uIG0",
    main: "main.jpg",
    gallery: ["01.png", "02.png", "03.png", "04.png", "05.png", "06.png", "07.png", "08.png", "09.png"],
  },

  {
    slug: "long-ing",
    title: "Long-ing (2025)",
    category: "interact",
    medium: "interactive light and sound installation",
    exhibited: `Bath House Cultural Center, Dallas, TX | August 2026
Midnight in Nowhere, Canton, TX | November 2025
Prairie Creek Park, Richardson, TX | May 2025
ATC Gallery, UTD, Dallas, TX | April 17, 2025
Midnight in Nowhere, Canton, TX | March 8, 2025`,
    collaborators: "Diamond Nguyen, Baotran Vo, and Kristen Duong",
    description: `Longing is an interactive light and sound installation that draws its essence from Vietnamese landscapes and cultural memory. This piece delves into the profound connection between nature and self, memory and place, evoking a deep sense of belonging and ancestral presence. The performance is the newest iteration of Longing, experimenting with the relationship between human movement, nature, and technology.

The title Longing is a poignant play on words, referencing the Vietnamese term "Lồng" from "Đèn Lồng" (lantern lights). Inspired by the serene beauty of rice fields, the vastness of coastlines, and the rhythmic force of monsoons, Longing invites participants into a meditative space for reflection. Through its evocative elements, the installation aims to awaken a sense of cultural heritage and the universal human desire for connection. The interactive performance aspect further immerses the audience, allowing their movements to influence and become part of the unfolding experience, blurring the lines between observer and participant.

The project is awarded $7,500 ArtsActivate grant from City of Dallas to develop a new iteration of the installation at Bath House Cultural Center in August 2026.`,
    video: "https://www.youtube.com/embed/kK5iaDE8iWw",
    main: "main.png",
    gallery: ["01.png", "02.png", "03.png", "04.png", "05.png", "06.png", "07.png", "08.png"],
  },
  {
    slug: "stillness",
    title: "Tĩnh (Stillness) (2025)",
    category: "paint",
    medium: "oil on canvas",
    collaborators: "Diamond Nguyen",
    description: `30" x 24"

    Tĩnh (Stillness) is an oil painting that captures the essence of tranquility and contemplation. The piece explores themes of inner peace, the passage of time, and the beauty of quiet moments through the careful observation and representation of serene landscapes. 
    
    Halfway up, floating. I’m hanging on for a moment. Life is so precious, yet heavy. It weighs me down. I’m hanging there... `,
    video: "",
    main: "main.jpg",
    gallery: ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg"],
  },


  {
    slug: "smolder",
    title: "Smolder (2025)",
    medium: "vocal and music performance",
    exhibited: "ARC Gallery, Dallas, TX | December 11, 2025",
    category: "performance",
    collaborators: "Diamond Nguyen, Dean Terry, and Daniel Kim",
    description: `Vocal and music performance with Dean Terry (bass) and Daniel Kim (drums). The performance is part of the Movements - Performance Night. Smolder explores the emotional and physical intensity of human experiences during moments of passion, conflict, and transformation. Through a combination of vocal expression and instrumental improvisation, the performance seeks to evoke a visceral response from the audience, inviting them to reflect on their own inner landscapes and the complexities of human emotion.`,
    video: "",
    main: "main.png",
    gallery: ["01.png"],
  },

  {
    slug: "tui",
    title: "Tui (Tui-túi / I-Bag) (2025)",
    medium: "Fabric installation and performance",
    exhibited: `ATC Lobby, UTD, Dallas, TX | February 26, 2026
    Goldmark Cultural Center, Dallas, TX  | December 10–14, 2025`,
    category: "interact",
    collaborators: "Diamond Nguyen",
    description: `"Tui" (Tui-túi / I-Bag) explores the idea of the baggage that humans carry throughout their lives: their thoughts, their sufferings. We are like bags, trying to carry as much as we can, but sometimes we break, and things overflow.`,
    video: "",
    main: "main.png",
    gallery: ["01.png", "02.png", "03.png", "04.png", "05.png", "06.png", "07.png", "08.png", "09.png", "10.png", "11.png", "12.png", "13.png", "14.png", "15.png", "16.png", "17.png", "18.png", "19.png", "20.png"],
  },

  {
    slug: "when-memories-touch",
    title: "When Memories Touch (2025)",
    medium: "Touch-based interactive installation",
    exhibited: `SP/N Gallery, Richardson, TX | December 12–20, 2025`,
    category: "interact",
    collaborators: "Diamond Nguyen and Baotran Vo",
    description: `When Memories Touch is a touch-based interactive installation that explores the relationship between memory, touch, and human connection. The piece invites participants to engage with a series of gameplay scenarios that trigger auditory and visual responses, creating a multisensory experience that evokes personal memories and emotions. Through this interaction, the installation aims to foster empathy and understanding, highlighting the profound impact of touch on our perception of the world and our relationships with others. The experience is part of Echoes of Mind, the MFA thesis graduate solo show of Baotran Vo.`,
    video: "https://www.youtube.com/embed/19Eu2CP5HAo?si=zJjKm4dkWQlJu7C4",
    main: "main.png",
    gallery: ["01.png", "02.png"],
  },

  {
    slug: "talk-to-the-moon",
    title: "Talk to the Moon (2025)",
    medium: "interactive visual and sound installation",
    exhibited: `ARTFUSS Gallery, Dallas, TX | October – November, 2026
    New Media Contemporary Gallery, Dallas, TX | April, 2025
    ATC Gallery, UTD, Richardson, TX  | February 24 – March 2, 2025`,
    category: "interact",
    collaborators: "Diamond Nguyen and Baotran Vo",
    description: `Talk to the Moon is an interactive installation that invites participants to engage in a dialogue with the moon. The piece explores themes of communication, reflection, and the human desire to connect with the cosmos. Through sound and visual elements, visitors can express their thoughts and emotions, which are then transformed into a unique auditory and visual experience using hand gestures to paint the full moon. The installation encourages introspection and fosters a sense of wonder, allowing participants to contemplate their place in the universe and the mysteries of the night sky.`,
    video: "https://www.youtube.com/embed/fCHfR-rf6vM?si=tolMc5HQdmMzPbRo",
    main: "main.png",
    gallery: ["01.png", "02.png"],
  },

  {
    slug: "the-climb",
    title: "The Climb (2025)",
    medium: "AR interactive 3D zoetropic experience",
    exhibited: `ATC Gallery, UTD, Dallas, TX | February 24 – March 2, 2025`,
    category: "interact",
    collaborators: "Diamond Nguyen",
    description: `The Climb is an AR interactive 3D zoetropic experience about the journey of hiking up a mountain in the northwestern region of Vietnam. The journey showcases the beauty of the landscape and the physically demanding journey of the human experience, yet the local people do it every day as a means of earning their living. You follow the guide of a H’mong teenager porter named Bau, who carries all your necessities in her woven basket. Along the way, you will see the life of the locals and the beauty of the landscape, with terraced paddy fields and blooming local bauhinia flowers (hoa ban). Many view the lives of ethnic minorities as poor and difficult. However, I see poverty as a way of living simply and humbly, embracing ourselves, others, and life as it is. It’s about letting go of possessiveness and power, keeping an open heart, and finding connection through mutual support. In Vietnam's northwest, though life may lack material comforts and many teenagers leave school to support their families, there is a kindness and joy in their simplicity that reflects a deeper richness. Through this piece, I want to portray on their hardships with a sense of hope and beauty.`,
    video: "https://youtube.com/embed/tiy3tq9QtwI?si=NfoXSRJt96g6MaLB",
    main: "main.png",
    gallery: ["01.png", "02.jpeg", "03.jpeg", "04.png", "05.png", "06.png", "07.png", "08.png", "09.png"],
  },

  {
    slug: "kindness-playground",
    title: "Kindness Playground (2025)",
    medium: "Digital Animation and AR experience",
    exhibited: `ATC Gallery, UTD, Dallas, TX | March 24–31, 2025`,
    category: "animate",
    collaborators: "Diamond Nguyen",
    description: `Kindness Playground is a digital animation and AR experience that invites participants to explore a whimsical world filled with color, movement, and interactive elements. The project aims to engage audiences of all ages in a playful and immersive environment, encouraging creativity and exploration through the use of augmented reality technology.`,
    video: "https://youtube.com/embed/n7l8Ndd5zrE?feature=share",
    main: "main.png",
    gallery: ["01.png", "02.png"],
  },
  
  {
    slug: "magic-sponge",
    title: "Magic Sponge (2025)",
    medium: "Stop-motion animation",
    category: "animate",
    collaborators: "Diamond Nguyen",
    description: `Magic Sponge is a stop-motion animation that tells the story of a magical sponge that comes to life and does the dishes behind the close doors. Through meticulous frame-by-frame animation, the project explores themes of imagination, creativity, and the transformative power of everyday objects.`,
    video: "https://www.youtube.com/embed/wZGl_nhiBoQ?si=9dymYbvxXc-Lrdbr",
    main: "main.png",
    gallery: ["01.png"],
  },

  {
    slug: "growth",
    title: "Growth (2025)",
    medium: "Stop-motion animation",
    category: "animate",
    collaborators: "Diamond Nguyen",
    video: "https://www.youtube.com/embed/nJknMQHH3yc?si=B_6vHyCM0ft5yBYZ",
    description: `Growth is a stop-motion animation that explores the complex relationship between a daughter and her mother over time. The invisible link, the push and pull, the love and the pain, the growth and the change. The sand animation provides a tactile and intimate experience, allowing the audience to feel the emotions and transformations of the moment as they navigate their journey together.`,
    main: "main.png",
    gallery: ["01.png"],
  },

  {
    slug: "vietnamese-fruits",
    title: "Cây trái bốn mùa (Vietnamese Fruits) (2024)",
    category: "paint",
    medium: "oil on canvas",
    collaborators: "Diamond Nguyen",
    description: `64" x 30.7"

    Cây trái bốn mùa (Vietnamese Fruits) presents a unique Vietnamese take on the traditional still life genre, a subject explored by many renowned Western artists. Featuring a vibrant array of Vietnamese fruits arranged in a long horizontal format, the composition resembles a feast, celebrating the richness and diversity of Vietnamese agriculture. Beyond showcasing the natural bounty, the painting highlights the deep relationship between the Vietnamese people and their land. Despite the hardships faced after the wars, the diligent Vietnamese have worked tirelessly to cultivate and produce these abundant harvests. The painting is a tribute to the resilience and hard work of the people, celebrating a successful harvest season. It expresses gratitude to the motherland for nurturing its people and serves as a reminder to preserve and continue these fruitful traditions for future generations.`,
    video: "",
    main: "main.jpg",
    gallery: ["01.jpg"],
  },

  {
    slug: "ra-khoi",
    title: "Ra Khơi (Out to Sea) (2024)",
    category: "paint",
    medium: "oil on canvas",
    collaborators: "Diamond Nguyen",
    description: `7" x 4.7"

    Ra Khơi (Out to Sea) is an oil painting that captures the moment of a lone boat venturing into the vastness of the sea. The painting evokes a sense of solitude, courage, and the human spirit's resilience in the face of the unknown. The interplay of light and shadow on the water's surface reflects the ever-changing nature of life and the journey we all undertake.`,
    video: "",
    main: "main.jpg",
    gallery: ["01.jpg"],
  },

  {
    slug: "qua",
    title: "Quả (Fruits) (2024)",
    category: "paint",
    medium: "oil on canvas",
    collaborators: "Diamond Nguyen",
    description: `4.7" x 3.5"

    Quả (Fruits) is an oil painting that celebrates the vibrant colors and textures of various fruits. The piece explores themes of abundance, nature's beauty, and the fleeting nature of life through the careful observation and representation of these everyday objects.`,
    video: "",
    main: "main.jpg",
    gallery: ["01.jpg"],
  },

  {
    slug: "ai-actors",
    title: "AI Actors (2023)",
    category: "animate",
    medium: "Video editing and digital animation",
    collaborators: "Oxolo",
    description: `As a visual artist for the AI-driven Oxolo tool, I take raw footage and transform it into a refined product. The actor, usually against a green screen, relies on my expertise for optimal visuals and presentation. Here’s what I bring to the table:

1. Color Grading: Enhancing the visual allure of our videos, ensuring they're vibrant and balanced.
2. Green Screen Removal: Seamlessly integrating actors into diverse settings, making the content versatile.
3. Sequence Selection: Picking out the most compelling shots, ensuring the content remains engaging.
4. Lip-sync Preparation: Optimizing videos for our state-of-the-art lip-sync training, guaranteeing clear and natural outputs.

My role at Oxolo isn't just about editing, it's about ensuring our clients get top-tier content. Through meticulous work, I strive to deliver videos that empower businesses to communicate their narratives efficiently and effectively.

Role: Visual Artist and video editing`,
    video: "https://www.youtube.com/embed/yrmvBCVVP_4?si=_rQ878UP_kNv0l3v",
    main: "main.png",
    gallery: ["01.png", "02.png", "03.png", "04.jpg"],
  },

  {
    slug: "digital-narratives",
    title: "Digital Narratives (2022-2023)",
    category: "teach",
    medium: "Associate Lecturer",
    collaborators: "RMIT University, Vietnam",
    description: `COMM2596 | Digital Narrative Theory and Practice 
    (2022-2023)
    
    Unearth the power of narrative structures within digital media design in this transformative course. Delve deep into the human experience, exploring how storytelling strategies translate complex perspectives into immersive digital narratives. This course's pivotal focus revolves around global narrative codes and conventions, integrating captivating visuals, compelling text, and resonating sound for a holistic digital experience. Utilize these narratives structures to design impactful, culturally aware content that resonates with diverse target audiences across multiple digital media formats.

Here's the layout of 12-Week syllabus:

Week 1: Introduction to Digital Narrative
Week 2: Digital Narrative Structures
Week 3: Presentation of Assigment 1
Week 4: Production planning and Storyboarding
Week 5: Interactive Narrative and Composition
Week 6: Narrative Codes and Conventions
Week 7: Independent Learning Week
Week 8: Presentation of Assigment 2
Week 9: Narrative Theme and Motif
Week 10: Transmedia Storytelling
Week 11: Audience Experience and New Technologies
Week 12: Final Presentation`,
    medium: "Associate Lecturer",
    video: "https://www.youtube.com/embed/V5s-WBefB-8?si=CbhLJeUN7oS5838u",
    main: "main.jpg",
    gallery: [
  { file: "01.jpg", caption: "Key visual by Lam Vo" },
  { file: "02.jpg", caption: "Key visual by Chau Luu" },
  { file: "03.jpg", caption: "Key visual by Nhi Nguyen"},
  { file: "04.jpg", caption: "Key visual by Ngoc Nguyen"},
  { file: "05.jpg", caption: "Key visual by Hung Tran"},
] },

 {
    slug: "2d-animation",
    title: "2D Animation (2022)",
    category: "teach",
    collaborators: "RMIT University, Vietnam",
    description: `GRAP3002 | 2D Graphical Animation
    (2022)
    
    In this course the students will develop the technical and conceptual skills related to the production of 2D animation. Specifically, they will learn the design principles behind such things as motion, colour, character and narrative and how they manifest in 2D animation. This course will address both traditional media (e.g. pencil on paper) and digital media (e.g. vector animation).

Here's the layout of 12-Week syllabus:

Week 1-2 : Motion and Sequence Drawing
Week 3-6: Action Animation
Week 8-12: Animation Production`,
    medium: "Associate Lecturer",
    video: "https://www.youtube.com/embed/WdGC50Piogg?si=S1qwjOpZ91brLGH2",
    main: "main.png",
    gallery: [
  { file: "01.png", caption: "Self-pawtrait by Phuong Le" },
  { file: "02.png", caption: "Mia by Ha Nguyen" },
  { file: "03.png", caption: "Daydream by Tu Vo"},
  { file: "04.png", caption: "Starlight by Ngoc Vu"},
  { file: "05.png", caption: "Another great day by Hien Vu"},
] },

 {
    slug: "3d-animation",
    title: "3D Animation (2022)",
    category: "teach",
    collaborators: "RMIT University, Vietnam",
    description: `VART3578 | 3D Animation
    (2022)
    
    Immerse in the world of 3D Animation with my hands-on course employing Blender 3D. This journey will take the students through the core concepts of Character Modelling, Texture, Lighting, Animation Principles, and myriad advanced techniques.

On course completion, the students will have the power to breathe life into characters and narrate compelling stories with emotional depth, guided by the timeless three-act story structure.

Beyond storytelling, the course equips the students for real-world industry applications, empowering them to make their mark in dynamic fields such as gaming, virtual production, and motion capture. Unleash their creative potential and let their digital stories come alive!

Here's the layout of 12-Week syllabus:

Week 1: Course Introduction
Week 2: Principles for 3D Animation
Week 3: 3D Animation Tools / Milestone 1
Week 4: Topology and Lipsync
Week 5: Character Keyframing 1
Week 6: Character Keyframing 2 / Milestone 2
Week 7: Independent Learning Week
Week 8: Materials, Textures and Stylized lighting for 3D Animation
Week 9: Animation Stylization and Compositing
Week 10: Render Optimizations, Layers, and Workflows
Week 11: Post Techniques for Animation
Week 12: Final Presentation`,
    medium: "Associate Lecturer",
    video: "https://www.youtube.com/embed/jZEEOBbv-M0?si=xomatmo1rVy8BbIW",
    main: "main.png",
    gallery: [
  { file: "01.png", caption: "by Tran Duc Hung and Hoang Le Quynh Nhi" },
  { file: "02.png", caption: "by Team Oops" },
  { file: "03.png", caption: "by Le Ngan Ngoc Thanh"},
  { file: "04.png", caption: "by Tran Quy Son"},
] },

 {
    slug: "vj-live-performance",
    title: "VJ Live Performance",
    category: "teach",
    collaborators: "RMIT University, Vietnam",
    description: `COMM2752 | Digital Media Specialisation 
    (2022)
    
   Delve into the dynamic world of real-time events in this immersive course. Transform ideas into spectacular shows featuring VJ, projection mapping, kinetic sculptures, and more.

Here's the layout of 12-Week syllabus:

Week 1: Introduction to Real-time Events and Visual Loop
Week 2: 3D Motion Graphics
Week 3: Resolume, UI, Preference, Composition
Week 4: Presentation of Assignment 1 - Visual Loops Development
Week 5: Projection Mapping
Week 6: External Controllers
Week 7: Self Directed Learning
Week 8: Presentation of Assignment 2 Projection Mapping Experimentation
Week 9: Audio FFT (mic) /Audio reactive sources
Week 10: Record /Render /OBS
Week 11: Practice Session
Week 12: Presentation of Assignment 3: Final Real-time Performance`,
    medium: "Associate Lecturer",
    video: "https://www.youtube.com/embed/6Gd1d9RCULs?si=NxHnTWm99sFh4G8S",
    main: "main.jpg",
    gallery: [
  { file: "01.jpg", caption: "VJ set by Dan Pham" },
  { file: "02.jpg", caption: "VJ set by Vo Nhat Tuan and Andrew Choi" },
  { file: "03.jpg", caption: "VJ set by Tran Dam Phuong Nam, Ngo Anh Hao, Dang Tran and Le Huynh Trong Hau_01"},
  { file: "04.jpg", caption: "Setting up the VJ station"},
  { file: "05.jpg", caption: "Setting up"}
] },


  {
    slug: "fantastic-fables",
    title: "Fantastic Fables: The Southern Seas (2020)",
    medium: "Digital 2D Animation",
    exhibited: "Viddsee",
    category: "animate",
    collaborators: "Sproud",
    description: ` Fantastic Fables is a fictional animated series based upon Singaporean tales and hallmarks. 4 beloved local fables, take on a new lease of life as they are reimagined in 4 visually striking genre, Space Opera, Steampunk, Cyberpunk and Post-apocalyptic. In this series, I worked as the main animator for two episodes: N4D1M and The Merlion Hunt. N4D1M is about the story of a future civilization when humans, robots, and avatars coexist. One day, a virus with the shape of a swordfish appeared and killed several avatars as well as the human hosts. Nadim, the protagonist robot, was the one who sacrificed himself to create a virtual shell against the virus attack. While The Merlion Hunt is about the adventure back to the Earth to retrieve lost merlions, Singapore's iconic symbol.

Role: Animator`,
    main: "main.jpg",
    video: "",
    link: "https://www.viddsee.com/player/k9jzi",
    gallery: ["01.jpg", "02.jpg", "03.jpg"],
  },

  {
    slug: "binh-ngo-dai-chien",
    title: "Bình Ngô Đại Chiến (The Pacification Of The Wu) (2020)",
    medium: "Digital 2D Animation",
    exhibited: "YouTube | December 22, 2020",
    category: "animate",
    collaborators: "VSKH",
    description: ` I joined the team Việt Sử Kiêu Hùng (VSKH) as an animator to make the movie Bình Ngô Đại Chiến (The Pacification Of The Wu). VSKH is a non-profit project with the mission to enhance the young generation's interest in learning about Vietnamese history through animated series portraying prominent figures, battles, and events. The most ambitious part of the project, the full-length 60-minute animation Bình Ngô Đại Chiến raised 1-billion-Vietnam-Dong (~50,000 USD) for the production process.

After premiering on YouTube on December 22, 2020, the animation instantly gained overwhelming attention with more than 7.4M views now in 2026 and stayed among the top trending videos in Vietnam.

Role: Animator`,
    main: "main.jpg",
    video: "https://www.youtube.com/embed/vyJFz33l6BU?si=HqSJCrTTBm2Tptfj",
    gallery: ["01.jpg", "02.jpg", "03.jpg", "04.jpg"],
  },

  {
    slug: "sky-portal",
    title: "Sky Portal (2019)",
    category: "interact",
    medium: "interactive installation",
    exhibited: "Gardens by the Bay, Singapore | 2019",
    collaborators: "IcebergX",
    description: `Located at Gardens by the Bay, one of the top 3 attractions in Singapore, we launched an interactive and augmented experience called Sky Portal, which comprised two installations inside the lift and at the rooftop area. Sky Portal transported us into another dimension between thoughts, peoples, and realms. While the ceiling display in the lift gave the visitors a sneak peek into the unreal journey inside the giant tree trunk, the four digital displays at the rooftop transformed the beautiful vista of the Singapore Bay area into supernatural scenery. Visitors would also interact with the alternative reality through the sensor systems installed.

Technology: Motion detector sensor, Depth camera, Realtime render engine, 4K realtime camera

Role: Concept Design, Storyboarding Artist and Lead Visual Artist`,
    video: "https://www.youtube.com/embed/3Axca-7tfvw?si=ckle7L0svEDVww8A",
    main: "main.png",
    gallery: ["01.png", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg"],
  },

  {
    slug: "living-space",
    title: "Living Space (2018)",
    category: "interact",
    medium: "interactive installation",
    exhibited: "Housing Development Board (HDB) Gallery, Singapore | 2018",
    collaborators: "IcebergX",
    description: `The entire obsolete gallery of the Housing Development Board (HDB) in Singapore was revamped into an immersive and interactive exhibition called LIVINGSPACE. The narrative of the whole exhibition was to reveal the complex planning process for public housing development in Singapore. There were in total eight sections including HomeScape, Journey, Plan, Eco, Create, Share, Theatre, and Future. By walking through these exhibits, visitors would discover the meticulous planning, innovation, and creativity in not only building communities but also housing a nation. After completion in 2018, the project received overwhelmed support from the public with an increase of more than 300% of visitations compared to the previous year.

Technology: Motion detector sensor, Near proximity sensor, Projection mapping, Electrically conductive paint

Role: Concept Design, Production, and Lead Visual Artist`,
    video: "https://www.youtube.com/embed/O6HAIIx8_IY?si=SPWUh5fhXlTcqRAt",
    main: "main.jpg",
    gallery: ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg", "07.jpg", "08.jpg", "09.jpg", "10.jpg", "11.jpg", "12.png", "13.jpg"],
  },

  {
    slug: "oue",
    title: "OUE (2017)",
    category: "interact",
    medium: "interactive installation",
    exhibited: "OUE Downtown Gallery, Singapore | 2017",
    collaborators: "IcebergX",
    description: `We built an interactive animated spectacle named Ponderwonderaweditto around the circus theme at OUE Downtown Gallery, one of Singapore’s exciting new retail and office environments in the Central Business District. The show had three sections: the introduction of ancient Chinese scripts, the main show of a generative circus wonderland projected over 32x12 meter glass facade, and the outro of over 30-thousand butterflies that would be attracted and dispersed using hand gestures. Visitors could enjoy the visual-interactive spectacle from both the outside and inside the building. Ponderwonderaweditto was one of the world’s largest interactive permanent projections on frosted glass.

Technology: Motion detector sensor, Near proximity sensor, Projection mapping

Role: Concept, Production, Visual Artist, and Assistant Programmer`,
    video: "https://www.youtube.com/embed/Evz7kzclcQM?si=F91CScMyoSc4Hekc",
    main: "main.jpg",
    gallery: ["02.jpg", "03.jpg", "04.jpg", "05.jpg"],
  },

  {
    slug: "astar",
    title: "Astar (2016)",
    category: "interact",
    medium: "interactive installation", 
    collaborators: "IcebergX",
    description: `This was the first personal interactive piece that I produced. The idea was to have a mouse-free and impressive presentation that not only captured the audiences’ attention but also suspended the disbelief. I used a hemisphere foam as the centerpiece and created compatible visual effects around the shape. The presenter would be able to use their distinguished gestures and sounds to trigger the visuals. The 3D effects enabled audiences to enter another dimension and enjoy the short narrative of A*STAR as an innovative agency in Singapore.

Technology: TouchDesigner, Kinect, Projection Mapping

Role: Concept, Visual Artist, and Programmer`,
    video: "https://www.youtube.com/embed/XoWjo31y4_8?si=OHiZIKF6iX-XOhKt",
    main: "main.jpg",
    gallery: ["02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg", "07.jpg", "08.jpg"],
  },

  {
    slug: "mindblown",
    title: "Mindblown (2016)",
    medium: "Digital 2D Animation",
    exhibited: "YouTube | 2016",
    category: "animate",
    collaborators: "Kult",
    description: `The animated series Mindblown was created during my internship at Kult3D Gallery together with another animation intern Yew Ee Venn. Every quarter the gallery commissioned talented local artists to do themed illustrations for their magazine. Mindblown was the first edition that we turned flat graphics into a lively animation. The series gained instant attention from the audiences with thousands of views on Facebook and doubled the followers after a month.

Role: Animator`,
    main: "main.jpg",
    video: "https://www.youtube.com/embed/eE4dWuadaFU?si=DSa5K3UB59cpr7fc",
    gallery: ["01.jpg"],
  },

  {
    slug: "manmade",
    title: "Manmade (2015)",
    medium: "Underwater visual effect (VFX) short film ",
    exhibited: "Graduation Showcase, ArtScience Museum, Singapore | May 2015",
    category: "animate",
    collaborators: "Diamond Nguyen and Shannen Madeline Chen",
    description: `Collaborating with Shannen, I produced the underwater visual effect (VFX) short film named ManMade for our final year project in Digital Animation. ManMade combined both live-action footages and 3D character animation portraying the journey of a young boy under the sea to explore the adaption of sea creatures in response to pollution and environmental changes. The project was the first underwater VFX short film produced from the School of Arts, Design, Media, Nanyang Technological University, Singapore and was featured at the Sunday Showcase at ArtScience Museum, Singapore on May 2015. I treasured the time working on this project as I had many first-hand experiences from location scouting, casting, shooting, and logistics on top of the animation production.

Many thanks to our project supervisor Benjamin Seide, our Animation faculty, our beloved Animation friends, our talented cast Rosha Chandra - the actor, Daniel Chong - the D.O.P, Tobias Hoffmann - the music composer and Jared - the diver.

Role: Producer, Director, and Animator`,
    main: "main.jpg",
    video: "https://www.youtube.com/embed/WFlKHvH5APg?si=0mNfD8DuxmTTSRjv",
    gallery: ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"],
  },

  {
    slug: "archive",
    title: "Archive (2014 and before)",
    category: "paint",
    medium: "mixed media",
    collaborators: "Diamond Nguyen",
    description: `This is an archive of my old paintings and drawings before 2014. It includes a variety of works that showcase my artistic journey and development over the years, reflecting my evolving style, techniques, and thematic interests.`,
    video: "",
    main: "main.jpg",
    gallery: ["02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg", "07.jpg", "08.jpg", "09.jpg"],
  },

];

/*
  window.ABOUT — content for the "about" modal
  ─────────────────────────────────────────────
  photo:  path to your headshot image
  name:   your display name
  role:   short title/role line under the name
  bio:    array of strings — one string per paragraph
  links:  array of { label, url } — shown as small text links at the bottom
*/
window.ABOUT = {
  photo: "about/diamond.jpg",
  name: "About",
  role: "Artist & Educator",
  bio: [
    "Thank you for visiting my virtual home among billions of websites on the internet!",
    "I'm Diamond Nguyen, a dedicated multimedia artist and educator, currently pursuing my PhD in Arts, Technology, and Emerging Communications at The University of Texas at Dallas, Texas, USA.",
    "My background is rooted in digital animation and has expanded toward interactive installation. My current research interests focus on collaborative labor and the ephemeral materiality of interactive art.",
    "Whether you are a fellow artist, an educator, a potential collaborator, or a curious visitor, I invite you to connect with me. You can reach me via email at diamondngtkc[at]gmail[dot]com. I look forward to exploring how we can pioneer change and ignite innovation in the world of digital arts together.",
 ],
  links: [
    { label: "cv", url: "https://drive.google.com/file/d/1XlmWlreKiOA8zbd3dq1LxDqjcu7aaAZR/view?usp=sharing" },
  ],
};
