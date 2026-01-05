const fr = {
  head: {
    about: "À propos",
    formations: "Formations",
    experience: "Expériences",
    projects: "Projets",
    skills: "Compétences",
    contact: "Contact"
  },

  profil: {
    name: "Anass Hariri",
    speciality: "Ingénieur logiciel | Développeur Web Full-Stack | Développement et tests | DevOps",
    download: "Télécharger le CV",
    contact: "Contact",
    Phone: "Téléphone: "
  },

  about: {
    title: "À propos de moi",
    contact: "Me contacter",
    contact_2: "Contact",
    Phone: "Téléphone: ",
    blocks: {
      intro: {
        t1: "Ingénieur logiciel diplômé de ",
        h1: "Polytech Nantes",
        t2: " en ",
        h2: "génie informatique",
        t3: ", je possède une solide expertise en ",
        h3: "développement Full Stack",
        t4: ", en test logiciel et en pratiques ",
        h4: "DevOps",
        t5: ", avec un intérêt marqué pour l’acquisition de nouvelles compétences technologiques.",
      },
      grad: {
        t1: "J'ai effectué un stage de fin d’études chez ",
        h1: "Orange Innovation",
        t2: ", où j'ai contribué au développement d'une interface homme‑machine pour ",
        h2: "Orange Marine",
        t3: ", permettant d'automatiser et de réduire le temps des interventions de soudure de câbles sous‑marins. Mon travail comprenait le développement front-end avec ",
        h3: "Vue.js",
        t4: " et back-end avec ",
        h4: "FastAPI (Python)",
        t5: ", la création de tests logiciels avec ",
        h5: "Playwright",
        t6: ", et le déploiement via des ",
        h6: "pipelines GitLab CI/CD",
        t7: ".",
      },
      conclusion: {
        t1: "Motivé, rigoureux et passionné par le développement logiciel, je suis actuellement à la recherche d’un ",
        h1: "CDI",
        t2: " afin de mettre à profit mes compétences et contribuer à des projets à fort enjeu.",
      },
    },
  },

  formation: {
    intro: "Parcours académique",
    skills: "Compétences",
    formation_1: {
      institution: "Polytech Nantes",
      diplome: "Diplôme d’ingénieur, Informatique",
      periode: "Sep. 2022 – Sep. 2025",
      competences: "Génie logiciel, IA, DevOps",
    },

    formation_2: {
      institution: "CPGE La Résidence",
      diplome: "Classe préparatoire MP* (Maths/Physique)",
      periode: "Sep. 2020 – Juil. 2022",
      competences: "Mathématiques, Physique, Sciences de l’ingénieur",
    }
  },

  experience: {
    intro: "Expériences professionnelles",
    Key_Responsibilities: "Responsabilités principales :",
    skills: "Compétences :",
    experience_1: {
      title: "Développeur Full Stack & Testeur Logiciel",
      date: "Fév. 2025 – Août 2025",
      company: "Orange Innovation · Stage · Lannion · France",
      summary: "Participation au développement et à la validation d’un logiciel d’automatisation de mesures embarqué sur les navires câbliers d’Orange Marine. Les principales responsabilités incluaient :",
      tasks: [
        "Développement du frontend (Vue.js – TypeScript) et du backend (FastAPI – Python).",
        "Mise en place d’une suite de tests d’intégration automatisés avec Playwright pour assurer la fiabilité et la couverture des tests.",
        "Déploiement automatisé d’images Docker pour les environnements de test et de production.",
        "Mise à jour et maintenance du pipeline GitLab CI/CD pour garantir une intégration et un déploiement continus efficaces.",
        "Création d’un script Python d’automatisation pour l’exécution quotidienne des tests et le reporting automatique via Mattermost.",
        "Participation active aux comités opérationnels et respect des pratiques agiles basées sur Scrum."
      ],
      skills: [
        "Vue.js", "FastAPI – Python", "Playwright", "GitLab CI/CD", "Docker", "SonarLint", "Git"
      ]
    },
    experience_2: {
      title: "Développeur Full Stack",
      date: "Juin 2024 – Sep. 2024",
      company: "GeoScITY – Université de Liège · Stage · Liège · Belgique",
      summary: "Conception et développement d’un démonstrateur 3D interactif pour la visualisation de données urbaines. Les principales tâches comprenaient :",
      tasks: [
        "Développement de l’interface 3D des villes avec Cesium.js (frontend) et Flask – Python (backend).",
        "Intégration et automatisation du chargement des données CityGML (ville de Namur) dans 3DCityDB avec PostgreSQL sans nécessiter de modification du code existant."
      ],
      skills: [
        "Cesium.js", "Flask – Python", "PostgreSQL"
      ]
    }
  },

  projects: {
    intro: "Mes Projets",
    project_1: {
      title: "Jeu vidéo “Les Énigmes du Professeur Mojette”",
      date: "septembre 2023 – mai 2024",
      description: "- Plateforme interactive de jeux mathématiques et informatiques.\n- Développement de plusieurs catégories de jeux :\n• Tour de France (210 énigmes informatiques, géométriques et mathématiques réparties par région)\n• Jeux Mojette (implémentation de la Transformée de Mojette, traduite de PHP vers TypeScript)\n• Côté Carré (jeu de logique géométrique)\n- Réalisation Full Stack avec TypeScript, Angular, Python-Flask et MySQL.",
      skills: ["TypeScript", "Angular", "Python-Flask", "MySQL", "PHP"]
    },
    project_2: {
      title: "Application Hyblab – Kaylia Nemour",
      date: "janvier 2024 – mars 2024",
      description: "- Application mobile interactive dédiée à la gymnaste franco-algérienne Kaylia Nemour (JO 2024).\n- Projet collaboratif mené par une équipe composée de 2 designers, 5 développeurs et 2 journalistes.\n- Conception d’une interface interactive pour présenter son parcours, ses motivations et ses performances.\n- Développement de l’application en React.js pour rendre l’expérience utilisateur fluide.",
      skills: ["React.js", "UI/UX design", "Collaboration"]
    },
    project_3: {
      title: "Application Web d’administration",
      date: "mars 2023 – juin 2023",
      description: "- Gestion de projets pédagogiques avec interface sécurisée et authentification administrateur.\n- Gestion centralisée des étudiants, enseignants et projets.\n- Back-end en Node.js avec base de données MySQL.",
      skills: ["Node.js", "MySQL"]
    },
    project_4: {
      title: "Projet Google Hash Code (Santa Tracker)",
      date: "octobre 2022 – décembre 2022",
      description: "- Optimisation de la livraison de cadeaux sous contrainte de consommation énergétique.\n- Conception d’une stratégie optimale et implémentation en Python avec programmation orientée objet (POO).",
      skills: ["Python POO"]
    },
    project_5: {
      title: "Recherche d’itinéraires avec Dijkstra",
      date: "mai 2023",
      description: "- Développement d’un algorithme de plus court chemin pour la recherche d’itinéraires entre villes.\n- Implémentation en Java avec programmation orientée objet (POO).",
      skills: ["Java POO"]
    },
    project_6: {
      title: "Projet IA/ML médicale – CHU Nantes / LS2N",
      date: "octobre 2024 – février 2025",
      description: "- Segmentation des tubules rénaux à partir de peu de données.\n- Utilisation de modèles YOLOv9, SAM et redéfinition de U-Net.\n- Application de techniques d’augmentation et de calcul et traitement d’images.",
      skills: ["YOLOv9", "SAM", "U-Net", "Image Processing", "Data Augmentation"]
    }
  },

  skills: {
    intro: "Compétences Techniques",
    Paragraph: "Compétences techniques acquises au travers de projets académiques et professionnels.",
    Beginner: "Débutant",
    Intermediate: "Intermédiaire",
    Advanced: "Avancé"
  }





};

export default fr;
