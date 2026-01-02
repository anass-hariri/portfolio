const en = {
  head: {
    about: "About",
    formations: "Formations",
    experience: "Experiences",
    projects: "Projects",
    skills: "Skills",
    contact: "Contact"
  },

  profil: {
    name: "Anass Hariri",
    speciality: "Software Engineer | Full-Stack Web Developer | Development & Testing | DevOps",
    download: "Download CV",
    contact: "Contact"
  },

    about: {
    title: "About Me",
    contact: "Contact Me",
    blocks: {
      intro: {
        t1: "Software engineer graduated from ",
        h1: "Polytech Nantes",
        t2: " in ",
        h2: "Computer Engineering",
        t3: ", I have solid expertise in ",
        h3: "Full Stack development",
        t4: ", software testing and ",
        h4: "DevOps practices",
        t5: ", with a strong interest in acquiring new technological skills.",
      },
      grad: {
        t1: "I completed an end-of-studies internship at ",
        h1: "Orange Innovation",
        t2: ", where I contributed to the development of a human-machine interface for ",
        h2: "Orange Marine",
        t3: ", aimed at automating and reducing the time required for submarine cable welding operations. My work included ",
        h3: "front-end development with Vue.js",
        t4: " and ",
        h4: "back-end development with FastAPI (Python)",
        t5: ", creating software tests with ",
        h5: "Playwright",
        t6: ", and deployment through ",
        h6: "GitLab CI/CD pipelines",
        t7: ".",
      },
      conclusion: {
        t1: "Motivated, rigorous, and passionate about software development, I am currently seeking a ",
        h1: "permanent position (CDI)",
        t2: " to leverage my skills and contribute to high-impact projects.",
      },
    },
  },

  formation:{
    intro: "Academic Background",
    skills: "skills",
    formation_1:{
      institution: "Polytech Nantes",
      diplome: "Engineering Degree, Computer Science",
      periode: "sep. 2022 – sep. 2025",
      competences: "Software Engineering, AI, DevOps",
    },

    formation_2:{
      institution: "CPGE La Résidence",
      diplome: "Preparatory Class MP* (Maths/Physics Track)",
      periode: "Sep. 2020 – Jul. 2022",
      competences: "Mathematics, Physics, Engineering Sciences",
    }
  },

  experience:{
    intro: "Professional Experience",
    Key_Responsibilities:"Key Responsibilities:",
    skills:"Skills:",
    experience_1:{
      title: "Full Stack Developer & Software Tester",
      date: "Feb 2025 – Aug 2025",
      company: "Orange Innovation · Internship · Lannion · France",
      summary: "Contributed to the development and validation of an embedded measurement automation software for Orange Marine cable-laying vessels. Key responsibilities included:",
      tasks: [
        "Developing the frontend (Vue.js – TypeScript) and backend (FastAPI – Python).",
        "Implementing an automated integration test suite using Playwright to ensure reliability and coverage.",
        "Deploying automated Docker images for both testing and production environments.",
        "Updating and maintaining the GitLab CI/CD pipeline to support smooth continuous integration and deployment.",
        "Creating a Python automation script for daily test execution and automatic reporting via Mattermost.",
        "Participating actively in operational committees and following Scrum-based agile practices."
      ],
      skills: [
        "Vue.js", "FastAPI - Python", "Playwright", "Gitlab CI/CD", "Docker", "SoaneLint", "Git"
      ]
    },
    experience_2:{
      title: "Full Stack Developer",
      date: "jun 2025 – sep 2024",
      company: "GeoScITY – University of Liège · Internship · Liège · Belgium",
      summary: "Designed and developed an interactive 3D demonstrator for urban data visualization. My main tasks included:",
      tasks: [
        "Developing the 3D city interface using Cesium.js (frontend) and Flask – Python (backend).",
        "Integrating and automating the loading of CityGML data (city of Namur) into 3DCityDB with PostgreSQL without needing to modify the existing code."
      ],
      skills: [
        "Cesium.js", "Flask - Python", "PostgresSQL"
      ]
    }
  },

  projects: {
    intro: "My Projects",
    project_1: {
      title: "Video Game “Les Énigmes du Professeur Mojette”",
      date: "September 2023 – May 2024",
      description: "- Interactive platform for math and computer science games.\n- Development of several game categories:\n• Tour de France (210 computer, geometry, and math puzzles distributed by region)\n• Mojette Games (implementation of the Mojette Transform, translated from PHP to TypeScript)\n• Côté Carré (geometric logic game)\n- Full Stack implementation with TypeScript, Angular, Python-Flask, and MySQL.",
      skills: ["TypeScript", "Angular", "Python-Flask", "MySQL", "PHP"]
    },
    project_2: {
      title: "Hyblab Application – Kaylia Nemour",
      date: "January 2024 – March 2024",
      description: "- Interactive mobile app dedicated to French-Algerian gymnast Kaylia Nemour (Olympics 2024).\n- Collaborative project with a team of 2 designers, 5 developers, and 2 journalists.\n- Designed an interactive interface to showcase her journey, motivations, and performances.\n- Developed the app in React.js for a smooth user experience.",
      skills: ["React.js", "UI/UX design", "Collaboration"]
    },
    project_3: {
      title: "Web Administration Application",
      date: "March 2023 – June 2023",
      description: "- Management of educational projects with a secure admin authentication interface.\n- Centralized management of students, teachers, and projects.\n- Back-end developed in Node.js with a MySQL database.",
      skills: ["Node.js", "MySQL"]
    },
    project_4: {
      title: "Google Hash Code Project (Santa Tracker)",
      date: "October 2022 – December 2022",
      description: "- Optimization of gift delivery under energy consumption constraints.\n- Designed an optimal strategy and implemented it in Python using Object-Oriented Programming (POO).",
      skills: ["Python POO"]
    },
    project_5: {
      title: "Route Search with Dijkstra",
      date: "May 2023",
      description: "- Developed a shortest-path algorithm to find routes between cities.\n- Implemented in Java using Object-Oriented Programming (POO).",
      skills: ["Java POO"]
    },
    project_6: {
      title: "Medical AI/ML Project – CHU Nantes / LS2N",
      date: "October 2024 – February 2025",
      description: "- Segmentation of kidney tubules from limited data.\n- Used YOLOv9, SAM, and redefined U-Net models.\n- Applied image processing and augmentation techniques.",
      skills: ["YOLOv9", "SAM", "U-Net", "Image Processing", "Data Augmentation"]
    }
  },

  skills:{
    intro: "Technical Skills",
    Paragraph: "Technical skills acquired through academic and professional projects.",
    Beginner: "Beginner",
    Intermediate: "Intermediate",
    Advanced: "Advanced"
  }



  
};

export default en;
