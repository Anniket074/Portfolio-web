export type ProjectItem = {
  title: string;
  description: string;
  video?: string;
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
        title: "DanzerArt Motion Logo",
        description: "I created a 3D animated motion video logo intro for our own startup.",
        video: "https://drive.google.com/file/d/1gTI4cptBVvUz8SJjODyX_A2X6mFjqhte/view?usp=sharing"
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
  }
};
