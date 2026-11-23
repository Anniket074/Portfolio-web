export type ProjectItem = {
  title: string;
  description: string;
  video?: string;
  vertical?: boolean;
};

export type CategoryData = {
  title: string;
  description: string;
  items: ProjectItem[];
};

export const categories: Record<string, CategoryData> = {
  vr: {
    title: "VR Projects",
    description: "The following are the games I have created for my clients on different freelancing websites. These are only a few that I can show; other projects are not allowed by the clients to showcase. Hope you like these projects. Please give your valuable feedback for further improvement.",
    items: [
      {
        title: "SpaceWar VR",
        description: "This game is based on Space war in which you have to attack the enemy's base using a Fighter Aircraft, whereas the Enemy has advanced High-tech Laser machine guns and patrolling flying robots. You need to successfully conquer the enemy base to win the space battle.",
        video: "https://youtu.be/3U8uC94ovqM"
      },
      {
        title: "Solar System Simulation",
        description: "In this VR game, I have created a Solar System Simulation in which planets interact in their respective orbits, so they perfectly revolve around the sun. In this project, the gravitational effects are also demonstrated.",
        video: "https://youtube.com/shorts/jjIceHAkmr0?feature=share"
      },
      {
        title: "Battleground FPS VR",
        description: "Developed an action-packed VR FPS where players defend multiple zones (e.g., industrial areas) against waves of enemies using weapons like pistols and automatic rifles. Implemented realistic shooting mechanics, enemy AI, and immersive first-person combat using Unity XR Toolkit and C#.",
        video: "https://youtu.be/6Qn-G0YMo9k"
      },
      {
        title: "Crunch Dunk VR (Doritos Collaboration)",
        description: "Developed a branded VR arcade experience in collaboration with Doritos, where players toss their favorite flavored chips into a basket within a 60-second challenge. Integrated real-time scoring and user data tracking using Google Firebase for analytics and performance storage.",
        video: "https://youtu.be/_etkj6H0dFU"
      },
      {
        title: "David vs Goliath VR",
        description: "Developed an immersive VR combat game where players take on the role of David to battle Goliath using realistic bow-and-arrow mechanics. Implemented physics-based archery, first-person interaction, and engaging boss AI using Unity XR Toolkit and C#.",
        video: "https://youtube.com/shorts/J9WMb-JMT6k?feature=share"
      },
      {
        title: "Element Entropy VR",
        description: "Developed an interactive VR experience where users visualize entropy changes of chemical elements within a 3D cube environment while exploring their atomic structures. Implemented real-time data visualization, immersive UI, and 3D atomic models using Unity XR Toolkit and C#.",
        video: "https://youtu.be/0LqYhPQ9syw"
      },
      {
        title: "Takeshi's CastleVR",
        description: "This project is a Virtual Simulation of the Japanese Show 'Takeshi's Castle', where the player has to cross different Levels in order to win the Game, passing through various guards.",
        video: "https://youtu.be/-KXXO3CQYQU"
      },
      {
        title: "Maze VR",
        description: "This project is a Virtual Simulation of a Maze, where the player has to find their way to the exit. While running into the maze, the player has to remember the different numbers written on the walls of the maze. Lastly, the player has to choose the correct numbers to end the game.",
        video: "https://youtu.be/t5IBD2ywUCA"
      },
      {
        title: "GYM VR",
        description: "This project is a visual representation of a Gymnasium, featuring different equipment like barbells, dumbbells, ladders, poles, basketballs, and walls. This project helps to improve the fitness of the player as there are tutorials for beginners.",
        video: "https://youtu.be/gtlyDrA3mrE"
      },
      {
        title: "Find My Key - VR",
        description: "Your neighbor's children are very mischievous, hiding your house key somewhere, and now you have to collect coins to get the hints to find your door key. Good Luck!",
        video: "https://youtu.be/Px2rzZOWnTg"
      }
    ]
  },
  "2d": {
    title: "2D Game Projects",
    description: "Here you can see my basic 2D games based on simple mechanics which I made while learning 2D game development and designing. Please take a look and give your valuable feedback.",
    items: [
      {
        title: "Hill Climb Replica",
        description: "As you know, in this game we have to cross the finish line without losing our driver's life. We also have to collect all the coins that come in our track to increase our highscore.\n\nControls - Touchscreen, Thrust and Brake.\nCore concept - Vehicle Mechanics, 2D Tiles, Input system.",
        video: "https://youtu.be/ZXrxIl7H3EE"
      },
      {
        title: "Brick Breaker",
        description: "Aim - To break the bricks by shooting the ball.\nControls - Touch Screen to aim.\nConcepts - Raycast2D, Scoring, Material Scripting.",
        video: "https://youtube.com/shorts/9TcQlZzst2Y?feature=share"
      },
      {
        title: "Running Saga",
        description: "The aim of this game is to help Mr. Hopper reach the finish flag with at least coins worth 125 to go to the next level. There are three types of coins: Bronze (5), Silver (10), Gold (20). Save Mr. Hopper from traps while traveling.\n\nCore Concept - Platformer mechanics.",
        video: "https://youtu.be/5xSBbt3rdaM"
      },
      {
        title: "Rocket Launch",
        description: "You need to land the rocket successfully at its landing pad. Beware of obstacles.",
        video: "https://youtu.be/6PiVl8fWNPE"
      },
      {
        title: "Save Me !! My friend",
        description: "The game is all about saving the life of a person who is about to hang. Your correct guess will save him, otherwise, every wrong letter will progress his hanging.\nPlease be careful while giving your answer.",
        video: "https://youtu.be/WkDgLKALYw0"
      },
      {
        title: "Replica of Flappy Bird",
        description: "You need to control the bird and help him to escape the poles successfully in order to survive and score high.",
        video: "https://youtube.com/shorts/k5ichcXu8bQ?feature=share"
      },
      {
        title: "Guess The Number",
        description: "Objective: Here you have to guess a number within a certain range.\nControls: Input via Keyboard.",
        video: "https://youtube.com/shorts/gHEvkmBO1_A?feature=share"
      }
    ]
  },
  motion: {
    title: "3D Motion & Commercials",
    description: "Cinematic 3D commercial teasers, product showcases, and procedural motion design crafted with high-fidelity rendering, custom audio soundscapes, and advanced motion choreography.",
    items: [
      {
        title: "iPhone 18 Pro — Official Teaser Trio Commercial",
        description: "A 20-second cinematic commercial teaser showcasing three iPhone 18 Pro hero devices (Sierra Blue, Burgundy, and Space Black) with matching dynamic OLED displays.\n\nKey Highlights:\n• Complete 360-degree orbital camera choreography capturing the Grade 5 titanium chassis, refined camera plateau with LiDAR scanner, and customizable Action Button.\n• 480 frames rendered in Blender 5.1 EEVEE-Next with real-time raytraced global illumination and fast GI.\n• Custom studio lighting with procedural background composited via alpha transparency.\n• Parametric sound design synthesized directly in 48kHz stereo — detuned sub-bass drones, mechanical shutter clicks, and trailer climax impacts.\n• Dynamic typography overlays highlighting flagship hardware features.",
        video: "https://youtu.be/viFzPBUlovA"
      },
      {
        title: "DanzerArt Motion Logo",
        description: "A 3D animated motion logo reveal and brand identity intro crafted for the DanzerArt creative studio startup.\n\nKey Highlights:\n• Dynamic 3D typography and geometric logo transformation using customized easing and spatial choreography.\n• Physically-based shader materials with sleek metallic bevels, dynamic specular highlights, and ambient light bounces.\n• Cinematic camera motion with depth-of-field focus pull to deliver high-impact brand recognition.\n• Synchronized audio design matched to the logo's reveal cadence for intros, digital showcases, and video presentations.",
        video: "https://youtu.be/1rKOC5aytIo"
      }
    ]
  },
  "3d": {
    title: "3D Game / Models",
    description: "Here, you can see my 3D projects. Some of them are projects I made for clients, and some are for learning purposes. Please go through and give your valuable feedback.",
    items: [
      {
        title: "Earth Defender",
        description: "Earth Defender: Asteroid Rain is a 3D arcade-style space defense game where players protect Earth from incoming asteroids.\nThe gameplay is powered by real-time data using NASA’s NeoWs API, making each asteroid dynamically generated.\nKey mechanics include shooting, collision physics, and an Earth health system for survival-based gameplay.\nThe project demonstrates API integration, data-driven design, and scalable game architecture in Unity.",
        video: "https://youtu.be/b3iCoI4B0E0"
      },
      {
        title: "Stackmaster 3D",
        description: "It’s a simple yet engaging stacking game where players spawn blocks and aim to stack them perfectly on top of each other. Along with gameplay development, I focused on implementing a monetization system using Google Ads (via Unity), integrating Rewarded Ads, Interstitial Ads, and Banner Ads.",
        video: "https://youtube.com/shorts/XaS8PDmGp1w?feature=share"
      },
      {
        title: "Top Down Shooting",
        description: "A prototype segment of my project working on a TopDown shooting game system for one of our clients.",
        video: "https://youtu.be/QrZj_QP6rXU"
      },
      {
        title: "Mechanic Arm & Pistol",
        description: "These 3D models are fully game-ready and completely compatible with both Unity's URP and HDRP rendering pipelines.",
        video: "/3D Media/Mechanic Arm & Pistol.png"
      },
      {
        title: "Low Poly Models",
        description: "A collection of aesthetic low-poly models, featuring 8 different structural variants, developed precisely for a client.",
        video: "/3D Media/Low Poly Models.jpeg"
      }
    ]
  },
  mobile: {
    title: "3D Mobile Games",
    description: "Five complete hyper-casual 3D mobile games that I designed, built and tuned on my own — covering physics, scoring and combo systems, level progression, currency and shop systems, and mobile UI. All footage below is captured from my own builds.",
    items: [
      {
        title: "Typhoon Crush 3D",
        description: "A physics arcade game where a swirling vortex drags scattered blocks across the board and consumes them.\n\nBuilt:\n• Force-based physics with a moving attractor that pulls rigidbodies in\n• Combo chain that reached past x120 during a single run\n• Coin economy with an in-game shop\n• Level progression with pause controls\n\nLearned: the combo counter has to react faster than the physics settles. When it updated after the blocks came to rest, chaining stopped feeling earned — it now fires on contact.",
        video: "https://youtu.be/LSJwnYG6ZAo",
        vertical: true
      },
      {
        title: "Ricochet",
        description: "A bouncing shot puzzle spanning 25 levels, where every shot has to be planned off the walls.\n\nBuilt:\n• Trajectory preview that traces every wall bounce before the shot is fired\n• Raycast and reflection maths kept exactly in sync with the real physics\n• Shots and targets counters driving the win and lose states\n• Level select reached from the in-game menu\n\nLearned: the preview has to match the real shot exactly. One degree of difference and players stop trusting the aim guide entirely, so the prediction had to be treated as part of the physics rather than as decoration.",
        video: "https://youtu.be/mSynP6Cr5E0",
        vertical: true
      },
      {
        title: "Match 3D",
        description: "A 3D pair-matching puzzle built around fast, unambiguous validation.\n\nBuilt:\n• Two comparison slots that validate a pair the moment both pieces are chosen\n• Full menu flow: continue, level select, settings and quit\n• Separate music and SFX volume sliders plus a vibration toggle\n• Progress saved between sessions\n\nLearned: a wrong pair has to be rejected instantly and visibly. Any delay makes the player second-guess their own input, and that hesitation is what makes a matching game feel unfair rather than hard.",
        video: "https://youtu.be/lMsLQg9wj7E",
        vertical: true
      },
      {
        title: "Paint Roller 3D",
        description: "A grid painting puzzle spanning 29 levels.\n\nBuilt:\n• Tile grid where the roller paints every cell it travels over\n• Raised obstacles that block the path and force the route to be planned before moving\n• 29-level progression with an in-game progress bar\n• Audio, settings and exit controls built into the level screen\n\nLearned: at 29 levels the bottleneck stops being the mechanic and becomes the pipeline. Fast authoring, testing and reordering of stages mattered far more than adding new mechanics.",
        video: "https://youtu.be/Zb-V3fWADAM",
        vertical: true
      },
      {
        title: "Color Sink 3D",
        description: "A gravity sorting puzzle where coloured pieces settle into matching groups around a central sink.\n\nBuilt:\n• Gravity settling for cube and sphere pieces into matching colour groups\n• A central sink that consumes and clears matched pieces\n• Level progression across 24+ stages with level resets\n• Settings reachable mid-run\n\nLearned: players need to see the sink doing its job. When a piece vanished without clear feedback, the board read as broken rather than solved, so the feedback around the mechanic mattered more than the matching itself.",
        video: "https://youtu.be/DSCluwVv1YU",
        vertical: true
      }
    ]
  }
};
