export const Projects={ /* containing the info for all projects organized into objects */

  "ReXplore": {
    name: "ReXplore", /* */
    category: "UI/UX Design", /* used to organize with into toggles*/
    desc: "Exploring how to improve travel planning using insights from locals.", /* shows when clicked into project */
    tagline: "Exploring how to improve travel planning using insights from locals.", /* shows on entry on profile page */
    headerSrc: "Images-ReXplore/ReXplore.png", /* image for project entry */
    headerAlt: "",
    headerTag: "Use Prototype", /* text in header with external link */
    link: "https://www.figma.com/proto/MUQPWZrCKchjPh5e3rMP3R/Portfolio?node-id=205%3A7845&page-id=205%3A7683&scaling=scale-down&starting-point-node-id=205%3A9054&viewport=729%2C429%2C0.27", /* */
    embeds: [], 
    videos: [],
    imageSections: {}
  },
  

  "JamLink": {
    name: "JamLink",
    category: "UI/UX Design", 
    desc: "A music streaming service with the connective capability of a social platform.",  
    tagline: "A music streaming service with the connective capability of a social platform.",
    headerSrc: "Images-jamLink/jamLink.jpg",
    headerAlt: "",
    headerTag: "Use Prototype",
    link: "https://www.figma.com/proto/MUQPWZrCKchjPh5e3rMP3R/Portfolio?node-id=205%3A7845&page-id=205%3A7683&scaling=scale-down&starting-point-node-id=205%3A9054&viewport=729%2C429%2C0.27",
    embeds: [ /* array of embeds to be rendered with name and corresponding link */
      {name: "Prototype", src: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FMUQPWZrCKchjPh5e3rMP3R%2FPortfolio%3Fpage-id%3D205%253A7683%26node-id%3D205-9054%26viewport%3D266%252C391%252C0.06%26scaling%3Dscale-down%26starting-point-node-id%3D205%253A9054"},
      {name: "Presentation", src: "https://docs.google.com/presentation/d/e/2PACX-1vTSI85LjmySOL4xbIWrOxf9J8H5DLihx1iybJPJmkZcQU411zK4EFEIO-jBstNaMzaHVYov_AzCA3Cd/embed?start=false&loop=false&delayms=3000"}
    ],
    videos: [],
    imageSections: {} 
  },


  "eat": {
    name: "eat",
    category: "UI/UX Design", 
    desc: "An app that we created in repsonse to a consideration of how Virtual/Augmented Reality and the Metaverse has opened new possibilites for human connection. We chose to explore how the new technology could impct how we share, discover, and experience restaurants.",  
    tagline: "A new way to discover and share restaurants.",
    headerSrc: "Content-eat/eatCover.jpg",
    headerAlt: "",
    headerTag: "View Process",
    link: "https://docs.google.com/presentation/d/e/2PACX-1vRaqxaeobR5j-uuB90Ri0OtiU0ApIZDWog73_EuJ6FQe8YSMru66cy7lbKZce9-83d_KmHvAQVn8SxP/embed?start=false&loop=false&delayms=3000",
    embeds: [
      {name: "Prototype", src:"https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FMUQPWZrCKchjPh5e3rMP3R%2FPortfolio%3Fpage-id%3D205%253A5634%26node-id%3D205-6235%26viewport%3D856%252C453%252C0.12%26scaling%3Dscale-down%26starting-point-node-id%3D205%253A6235%26show-proto-sidebar%3D1"},
      {name: "Final Presentation", src: "https://docs.google.com/presentation/d/e/2PACX-1vTIfbml5J4i7N8ZgOMbjy3Je5S11Ke3t_qPFx_FgYze8jEIkk5TTJXMRMUYNOf692er6Daj4NljeF8X/embed?start=false&loop=false&delayms=3000"}
    ],
    videos: [
      {id: "1", name: "Final Presentation Video", src: "Content-eat/Eat_FinalVideo.mp4"},
    ],
    imageSections: {}
    },


  "involveMINT": {
    name: "involveMINT",
    category: "UI/UX Design", 
    desc: "As a UX Design Intern for InvolveMINT, I was tasked with updating the site's UI. I collaborated with a small team to create workflows, screens, and components in Figma.", 
    tagline: "A full redesign of the site for the Pittsburgh non-profit social organization InvolveMINT.",
    headerSrc: "Images-Profile/involveMINT.jpg",
    headerAlt: "",
    headerTag: "View Live Site",
    link: "https://involvemint.io/",
    embeds: [],
    videos: [],
    imageSections: { /* array of images arranged into sections to control the separation of content */
      "Home": [
        {headerSrc:  "Images-Involvemint/old home.jpg", alt: "An image of the old InvolveMINT Home page"},
        {headerSrc:  "Images-Involvemint/new home.jpg", alt: "An image of the new InvolveMINT Home page"}
      ],

      "How It Works": [
        {headerSrc:  "Images-Involvemint/old how it works.jpg", alt: "An image of the old InvolveMINT How it Works page"},
        {headerSrc:  "Images-Involvemint/new how it works.jpg", alt: "An image of the old InvolveMINT How it Works page"}
      ],

       "Team": [
         {headerSrc:  "Images-Involvemint/old team.jpg", alt: "An image of the old InvolveMINT Team page"},
         {headerSrc:  "Images-Involvemint/new team.jpg", alt: "An image of the new InvolveMINT Team page"}
      ],

       "Footer": [
          {headerSrc:  "Images-Involvemint/before footer.jpg", alt: "An image of the old InvolveMINT footer"},
          {headerSrc:  "Images-Involvemint/after footer.jpg", alt: "An image of the old InvolveMINT footer"},
      ],


    },
  },


  "Feedback Interface": {
    name: "Feedback Interface",
    category: "UI/UX Design", 
    desc: "A dashboard to facilitate live feedback for a hypothetical set of presentations in a classroom. We created an interface for the teacher as well as the student, based on their differing needs.", 
    tagline: "Facilitating feedback among students and teachers during a live presentation.",
    headerSrc: "Images-Profile/feedback.png",
    headerAlt: "",
    headerTag: "View Process",
    link: "https://issuu.com/eburke88/docs/process_book_unit_3",
    embeds: [
      {name: "Prototype", src: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FMUQPWZrCKchjPh5e3rMP3R%2FPortfolio%3Fpage-id%3D206%253A3799%26node-id%3D206-3998%26viewport%3D532%252C365%252C0.03%26scaling%3Dmin-zoom%26starting-point-node-id%3D206%253A3998%26show-proto-sidebar%3D1"}
    ],
    videos: [],
    imageSections: {}
  },


  "Surveillance Capitalism Intervention": {
    name: "Surveillance Capitalism Intervention",
    category: "UI/UX Design", 
    desc: "This intervention aims to educate children about the issues of surveillance capitalism by breaking down Terms and Conditions that are designed to be unreadable. ", 
    tagline: "Addressing unawareness of Terms and Conditions due to systematic unreadability.",
    headerSrc: "Images-Profile/TaC.png",  
    headeraAlt: "An image of the old InvolveMINT footer",
    headerTag: "View Process",
    link: "https://issuu.com/eburke88/docs/process_book_final",
    embeds: [
      {name: "Prototype", src: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FMUQPWZrCKchjPh5e3rMP3R%2FPortfolio%3Fpage-id%3D206%253A6660%26node-id%3D206-7271%26viewport%3D674%252C565%252C0.02%26scaling%3Dscale-down%26starting-point-node-id%3D206%253A7271"},
    ],
    videos: [],
    imageSections: {}
  },


  "Desktop Organizer": {
    name: "Desktop Organizer",
    category: "Product Design", 
    desc: "A weekend long sprint to design and prototype a personal desktop organizer.", 
    tagline: "A weekend long sprint to design and prototype a personal desktop organizer.",
    headerSrc: "./Images-DesktopOrganizer/desktopOrganizerCover.jpg",
    headerAlt: "",
    headerTag: "View Process",
    link: "https://issuu.com/eburke88/docs/desktop_organizer-compressed?utm_medium=referral&utm_source=cdn.embedly.com",
    embeds: [],
    videos: [],
    imageSections: {
      "Final Prototype": [
        {headerSrc: "Images-DesktopOrganizer/Above.png", alt: "A view of the organizer from above"},
        {headerSrc:  "Images-DesktopOrganizer/grabGlasses.jpg", alt: "An image of an arm reaching up to grab glasses from the side of the organizer",},
        {headerSrc:  "Images-DesktopOrganizer/grabRuler.png", alt: "An image of an arm reaching up to grab a ruler from inside of the organizer",},
        {headerSrc:  "Images-DesktopOrganizer/plugin.jpg", alt: "A close up image of a phone charging cord stuck into the bottom of the organizer"}, 
        {headerSrc:  "Images-DesktopOrganizer/pluginside.jpg", alt: "An image of a computer charging cord held by the loop on the side of the desktop organizer."},
        {headerSrc:  "Images-DesktopOrganizer/desktopOrganizerCover.jpg", alt: "An image of the desktop organizer front on, with a ruler, notebook, airpods, a phone, and writing utensils inside."}  
      ],
    }
  },


  "'Steel Hang' Lamp": {
    name: "'Steel Hang' Lamp",
    category: "Product Design", 
    desc: "A lamp design inspired by the appearance, ethos, and history of the city of Pittsburgh, Pennsylvania.",  
    tagline: "A lamp design inspired by the appearance, ethos, and history of the city of Pittsburgh, Pennsylvania.",
    headerSrc: "Images-SteelHang/lamprender.jpg", 
    headerAlt: "An image of the lamp rendered into the context of a kitchen room with a table and chair below in evening lighting.",
    headerTag: "View Process",
    link: "https://issuu.com/eburke88/docs/lamp_design?utm_medium=referral&utm_source=cdn.embedly.com",
    embeds: [],
    videos: [],
    imageSections: {
      "Final Prototype": [
        {headerSrc: "Images-SteelHang/side.jpg", alt: "An image of the lamp from the side."},
        {headerSrc: "Images-SteelHang/front.jpg", alt: "An image of the lamp from the front."},
        {headerSrc: "Images-SteelHang/close.jpg", alt: "An image of the lamp from the side."},
      ],

      "Final Render": [
        {headerSrc: "Images-SteelHang/lamprender.jpg", alt: "An image of the lamp rendered into the context of a kitchen room with a table and chair below in evening lighting."}
      ]
    }
  },


  "Nat Geo Mock Design": {
    name: "Nat Geo Mock Design",
    category: "Information Design", 
    desc: "This project was assigned as a culmination of our previous projects, in which we were tasked with choosing content for a specific magazine of our choice, including text, pull quotes, and images, and arranging them into three spreads as a feature article that resembles the grid style of the magazine.",  
    tagline: "A collection of information in the style of Nat Geo.",  
    headerSrc: "Images-Profile/urban.jpg",
    headerAlt: "",
    headerTag: "View Process",
    link: "https://medium.com/@eamonnpame/project-5-a2202c17894a",
    embeds: [],
    videos: [],
    imageSections: {
      "Primary": [
        {headerSrc: "Images-NatGeo/National Geographic Final 1.0.jpg", alt: ""},
        {headerSrc: "Images-NatGeo/National Geographic Final 1.1.jpg", alt: ""},
        {headerSrc: "Images-NatGeo/National Geographic Final 1.2.jpg", alt: ""},
        {headerSrc: "Images-NatGeo/National Geographic Final 1.3.jpg", alt: ""}
      ]
    }
  },

  "Themed Concert Content": {
    name: "Themed Concert Content",
    category: "Information Design", 
    desc: "A series of promotional deliverables for a hypothetical music festival.",  
    tagline: "A series of promotional deliverables for a hypothetical music festival.", 
    headerSrc: "Images-Flower/flowerFest.jpg",
    headerAlt: "",
    headerTag: "View Process",
    link: "https://medium.com/@eamonnpame/project-4-8a0093dc50ac",
    embeds: [],
    videos: [],
    imageSections: {
      "Primary": [
        {headerSrc: "Images-Flower/final instagram.jpg", alt: ""},
        {headerSrc: "Images-Flower/final poster.jpg", alt: ""},
        {headerSrc: "Images-Flower/flowerFest.jpg", alt: ""},
      ]
    }
  },

  "WEF Site Design": {
    name: "WEF Site Design",
    category: "Information Design", 
    desc: "World Economic Forum Site Design",  
    tagline: "World Economic Forum Site Design",  
    headerSrc: "Images-Profile/WEC.png",
    headerAlt: "",
    headerTag: "View Process",
    link: "https://issuu.com/eburke88/docs/process_book?utm_medium=referral&utm_source=cdn.embedly.com",
    embeds: [
      {name: "Prototype", src: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FMUQPWZrCKchjPh5e3rMP3R%2FPortfolio%3Fpage-id%3D207%253A44795%26node-id%3D207-44957%26viewport%3D587%252C677%252C0.05%26scaling%3Dmin-zoom%26starting-point-node-id%3D207%253A44957"},
    ],
    videos: [],
    imageSections: {}
  },

  "Computational Art": {
    name: "Computational Art",
    category: "Digital Media", 
    desc: "Artworks created through programming.", 
    tagline: "Artworks created through programming.",
    headerSrc: "Images-Profile/computational.jpg",
    headerAlt: "",
    headerTag: "",
    embeds: [],
    videos: [],
    imageSections: {
      "Artworks": [
        {headerSrc: "Images-Computational/computational portrait.png", alt: ""},
        {headerSrc: "Images-Computational/covidstory.png", alt: ""},
        {headerSrc: "Images-Computational/clock.png", alt: ""},
        {headerSrc: "Images-Computational/factory.png", alt: ""},
        {headerSrc: "Images-Computational/beach.png", alt: ""},
        {headerSrc: "Images-Computational/alien.png", alt: ""},
        {headerSrc: "Images-Computational/fireworks.png", alt: ""},
      ]
    }
  },

  "Precedent Expansion": {  
    name: "Precedent Expansion",
    category: "Digital Media", 
    desc: "In analyzing the building precedent of the Gammel Hellerup high school gymnasium in Hellerup, Denmark, I was interested in the roof of the building. The fact that the body of the building is underground means that the structure is quite simple save the unique sloped roof. More specifically, I was interested in the condition of the four sides of the building being flat and straight while the middle is sloped. The interplay between the rigid sides and the dynamic, flowing roof to me gave the impression of liquid within a container. The shape of the roof reminded me of a living creature travelling just under the water’s surface. This concept of water, especially moving within a container and coming into contact with the immovable sides became the basic inspiration for expanding upon the structural concept of the gymnasium. I imagined different snapshots of water shifting, and then applied a process and logic to it. Naturally, the first step was to shift the water into a different position. I chose to do this by bringing it to the sides of the “container” through splitting, rotating, and translating. Next I chose to dramatize these new curves to create a heightened sense of volume and tension between the surface and the sides. To alter the actual footprint of the building, I used taper to create a contrast not only in the vertical but also the horizontal direction, between the two sides of the building. From here, I used this dynamic shape as a base unit for a larger system, looking to create interesting gaps between the shapes.",  
    tagline: "Taking the structural logic of a pre-existing building and expanding upon that logic to create a new structure.",  
    headerSrc: "Images-Gym/gym.jpg",
    headerAlt: "",
    headerTag: "View Process",
    link: "https://docs.google.com/presentation/d/e/2PACX-1vQ595oLu6sa3oR8R6pIQN9UuIpdABbu9-G_qXtd82I09N_VShZVrOBjvPAG8IFeH9fXEvWIy-Zkh8yo/pub?start=false&loop=false&delayms=3000",
    embeds: [],
    videos: [],
    imageSections: {
      "Inside Render": [
        {headerSrc: "Images-Gym/dm cover.jpg", alt: ""},
      ],
      "Outside Render": [
        {headerSrc: "Images-Gym/gym.jpg", alt: ""},
      ]
    }
  },

  "Bell Pepper Generative Design": {
    name: "Bell Pepper Generative Design",
    category: "Digital Media", 
    desc: "Creating a struture by abstracting the generative logic of a bell pepper using Rhino 6, and creating imaginative renderings of the structure at different scales and contexts using Photoshop.",
    tagline: "Creating a struture by abstracting the generative logic of a bell pepper.",
    headerSrc: "Images-Profile/pepper.jpg",
    headerAlt: "",
    headerTag: "View Process",
    link: "https://docs.google.com/presentation/d/e/2PACX-1vTndZ3Msdr7d6xh2kF_8r_Knm5BGp-HiQLh24dsjrJljMBccuhrpw7F3A5CPTxFYUOPDao2-zvFaBfB/pub?start=false&loop=false&delayms=3000",
    embeds: [],
    videos: [],
    imageSections: {
      "Rhino Model Renders": [
        {headerSrc: "Images-Pepper/dm 3 1.jpg", alt: ""},
        {headerSrc: "Images-Pepper/dm 3 2.jpg", alt: ""},
        {headerSrc: "Images-Pepper/dm 3 3.jpg", alt: ""},
        {headerSrc: "Images-Pepper/dm 3 4.jpg", alt: ""},
      ],
      "Imaginative Renders": [
        {headerSrc: "Images-Pepper/peppershop.jpg", alt: ""},
        {headerSrc: "Images-Pepper/peppershop 2.jpg", alt: ""},
      ]
    }
  },

};


export const PopularProjects=[
  {id: "1", name: "ReXplore", categories: "UX/UI Design, User Research", src: "Images-ReXplore/ReXplore.png",  alt: "",},
  {id: "2", name: "eat", categories: "UX/UI Design, User Research, Product Design", src: "Content-eat/eatCover.jpg",  alt: "",},
  {id: "3", name: "JamLink", categories: "Product Design, UX/UI Design, Branding", src: "Images-jamLink/jamLink.jpg",  alt: "",}
]


