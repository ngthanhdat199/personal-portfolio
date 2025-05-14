// filepath: /Users/tony/Desktop/Projects/personal-portfolio/src/constants/index.js
export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Alex Chen',
    position: 'CTO at CloudTech Solutions',
    img: 'assets/review1.png',
    review:
      'Working with Thinh was an outstanding experience. His deep understanding of cloud infrastructure across multiple platforms and exceptional Golang skills helped us build a scalable, resilient system that significantly improved our operational efficiency.',
  },
  {
    id: 2,
    name: 'Sarah Nguyen',
    position: 'VP Engineering at DataStream',
    img: 'assets/review2.png',
    review:
      'Thinh\'s expertise in Kubernetes and cloud-native development is truly impressive. He delivered robust infrastructure solutions that seamlessly handle our high throughput requirements while maintaining exceptional reliability and performance. A true professional!',
  },
  {
    id: 3,
    name: 'David Park',
    position: 'Lead Architect at InfraOps',
    img: 'assets/review3.png',
    review:
      'I can\'t say enough good things about Thinh\'s work. His ability to design and implement complex multi-cloud solutions while mentoring junior engineers demonstrates both technical excellence and leadership. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Mei Wong',
    position: 'Director of Engineering at TechScale',
    img: 'assets/review4.png',
    review:
      'Thinh is an exceptional cloud infrastructure engineer. His work on our Kafka pipelines and disaster recovery systems was instrumental in achieving our 99.99% uptime SLA. His deep knowledge of Go, cloud platforms, and infrastructure automation is impressive.',
  },
];

export const myProjects = [
  {
    title: 'Web3-based Recruitment System',
    desc: 'A revolutionary CV verification system leveraging Ethereum smart contracts and on-device federated learning to prevent resume fraud while maintaining user privacy by keeping raw images on user devices.',
    subdesc:
      'Architected scalable Express.js/MongoDB microservices and a React frontend to streamline secure, high‑performance recruitment workflows at just 0.05 ETH per process.',
    href: 'https://github.com/thinhngotony/Recruitment-System-IEEE',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'MongoDB',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'Ethereum',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Express.js',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'Recognition and Realtime Streaming',
    desc: 'Engineered a CUDA-accelerated Python facial-recognition pipeline using Haar Cascade and CNN algorithms with face_recognition, TensorFlow-GPU, and OpenCV-Contrib-Python for robust image analysis.',
    subdesc:
      'Benchmarked on NVIDIA Jetson Nano, Raspberry Pi, and x86 laptops with NVIDIA GTX 1050 GPU for real-time streaming, achieving significant improvements in accuracy and throughput.',
    href: 'https://github.com/thinhngotony/Facial-Recognition',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'Python',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TensorFlow',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'CUDA',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'OpenCV',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'Multi-Cloud SaaS Infrastructure',
    desc: 'Designed and implemented SaaS solutions across multiple cloud platforms including Azure, AWS, Alicloud, Openstack, Huawei Cloud Stack, and Proxmox. Developed CRUD APIs using Go and cloud-native SDKs.',
    subdesc:
      'Utilized Golang and KubeKey to engineer high-throughput Kafka pipelines and automate Kubernetes cluster lifecycle management, including worker-node autoscaling and Helm/YAML add-on deployments.',
    href: '#',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'Golang',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'Kubernetes',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'Cloud',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Kafka',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'RFID Systems & API Development',
    desc: 'Developed and optimized APIs using Golang, Gin framework, Swagger, and Postman, enabling seamless interaction with databases and Google Cloud Platform services for robust RFID system monitoring.',
    subdesc:
      'Built desktop applications using C# with .NET framework and deployed RFID systems and server services on Proxmox, ensuring operational reliability and performance at scale.',
    href: '#',
    texture: '/textures/project/project4.mp4',
    logo: '/assets/project-logo4.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'Golang',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'C#',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'GCP',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'RFID',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'Cloud Infrastructure Disaster Recovery',
    desc: 'Designed and developed comprehensive disaster recovery (DR) features for virtual machines, ensuring high availability and seamless failover capabilities across both private and public cloud environments.',
    subdesc:
      'Built scalable API server solutions using Golang, leveraging advanced features like Goroutines and gRPC Gateway for optimized performance and concurrency in mission-critical environments.',
    href: '#',
    texture: '/textures/project/project5.mp4',
    logo: '/assets/project-logo5.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'Golang',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'gRPC',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'Cloud',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'API',
        path: '/assets/framer.png',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Skylab Holdings',
    pos: 'Cloud Infrastructure Engineer',
    duration: 'May 2023 - Present',
    title: "Led the design and implementation of SaaS solutions across multiple cloud platforms. Engineered high-throughput Kafka pipelines and automated Kubernetes cluster management using Golang and KubeKey.",
    icon: '/assets/framer.svg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'AI Power',
    pos: 'Software Engineer',
    duration: 'January 2022 - May 2023',
    title: "Developed and optimized APIs using Golang, Gin framework, and integrated with GCP services. Built desktop applications with C# and .NET, and deployed RFID systems on Proxmox.",
    icon: '/assets/figma.svg',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Gocviet Co., Ltd',
    pos: 'Full-stack Developer',
    duration: 'January 2021 - January 2023',
    title: "Contributed to website development using PHP, HTML, and CSS. Customized WordPress themes, managed Hostinger VPS infrastructure, and optimized server performance with Cloudflare.",
    icon: '/assets/notion.svg',
    animation: 'salute',
  },
];
