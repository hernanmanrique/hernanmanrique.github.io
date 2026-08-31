// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "Projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Education, research experience, publications, awards, and languages.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "projects-derrames-de-petróleo-y-afectación-a-la-salud-materno-infantil-en-la-amazonía-peruana",
          title: 'Derrames de petróleo y afectación a la salud materno infantil en la Amazonía...',
          description: "CIES-funded study (2018 Annual Research Competition) with Fiorella Parra and Vania Martínez on how oil spills affect maternal and child health in indigenous communities of the Peruvian Amazon, including fieldwork in the Cuninico Native Community.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/cies-derrames/";
            },},{id: "projects-minería-ilegal-y-cultivo-de-coca-en-la-reserva-comunal-el-sira",
          title: 'Minería ilegal y cultivo de coca en la Reserva Comunal El Sira',
          description: "CIES-funded study (2023 Annual Research Competition) with Gonzalo Delgado and Daniel Hernando on how illegal mining and coca cultivation penetrate the buffer zone of the El Sira Communal Reserve, and their impacts on forest loss.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/cies-el-sira/";
            },},{id: "projects-between-conservation-and-extraction",
          title: 'Between Conservation and Extraction',
          description: "FWO-funded PhD research (KU Leuven, 2021–2025) addressing the socioecological dynamics of illicit economies and opportunities for rural development in Protected Areas of the Peruvian Amazon.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/kuleuven-phd/";
            },},{id: "projects-illicit-flows-and-security-in-latin-america-and-the-caribbean",
          title: 'Illicit Flows and Security in Latin America and the Caribbean',
          description: "Research project with the Global Security Programme, University of Oxford, funded by CAF – Development Bank of Latin America and the Caribbean, examining illicit flows and their security implications across the region.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/oxford-caf-latam/";
            },},{id: "projects-contested-cross-border-spaces-illicit-flows-and-order-in-the-contemporary-world",
          title: 'Contested Cross-border Spaces, Illicit Flows, and Order in the Contemporary World',
          description: "Minerva Research Initiative-funded project (Global Security Programme, University of Oxford) on how state and non-state armed actors govern contested cross-border spaces, and how illicit flows intersect with regional instability. Hernán&#39;s work is funded through the project&#39;s XCEPT-supported research stream.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/oxford-cross-border-spaces/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/CV-Hernan-Manrique.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%68%65%72%6E%61%6E.%6D%61%6E%72%69%71%75%65@%70%6D%62.%6F%78.%61%63.%75%6B", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=6iDYX1AAAAAJ", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/hernán-manrique-lópez-06ab8a199", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
