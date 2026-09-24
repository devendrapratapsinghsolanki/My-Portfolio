export const portfolioData = {
  personal: {
    name: "Devendra Pratap Singh Solanki",
    shortName: "Devendra Pratap",
    title: "Full Stack Developer",
    roles: [
      "Full Stack Developer",
      "Next.js & React Specialist",
      "SaaS Platform Architect",
      "REST API & Database Engineer"
    ],
    email: "pratpdevendr@gmail.com",
    phone: "+91-8869077580",
    location: "Bareilly (U.P.), India",
    portfolioUrl: "https://devendrapratap.in",
    displayUrl: "devendrapratap.in",
    github: "https://github.com/devendrapratapsinghsolanki",
    linkedin: "https://linkedin.com/in/pratpdevendr",
    resumePdf: "/Devendra_Pratap_Singh_Solanki_Resume.pdf",
    image: "/my-img.jpeg",
    availability: "Available for Full-Stack Opportunities",
    tagline: "Building high-performance SaaS applications, scalable web platforms, and component-driven user interfaces with modern React, Next.js, and Node.js ecosystems."
  },

  summary: `Software Engineer and Full-Stack Developer with hands-on internship experience building responsive, high-performance web applications and modern user interfaces. Skilled in React.js, Next.js, JavaScript, TypeScript, Tailwind CSS, Node.js, Express.js, and MySQL. Experienced developing SaaS platforms, fintech and CRM dashboards, business consultancy websites, and Payment Wallet websites, with a strong focus on clean UI/UX, responsive design, accessibility, and performance optimization.`,

  stats: [
    { label: "Page Load Speedup", value: "40%", sub: "Next.js & Tailwind optimization" },
    { label: "Client Engagement", value: "+30%", sub: "Reusable CRM dashboard UI" },
    { label: "System Uptime", value: "99%", sub: "Scalable backend architecture" },
    { label: "Core Web Vitals", value: "100%", sub: "Mobile & desktop responsive" }
  ],

  skillCategories: [
    {
      id: "languages",
      title: "Programming Languages",
      skills: [
        { name: "TypeScript", level: 90 },
        { name: "JavaScript (ES6+)", level: 95 },
        { name: "Python", level: 80 },
        { name: "HTML5", level: 96 },
        { name: "CSS3 / Modern CSS", level: 94 }
      ]
    },
    {
      id: "frontend",
      title: "Frontend Development",
      skills: [
        { name: "React.js", level: 95 },
        { name: "Next.js (App & Pages)", level: 92 },
        { name: "Tailwind CSS", level: 96 },
        { name: "Responsive Web Design", level: 98 },
        { name: "REST API Integration", level: 94 },
        { name: "shadcn/ui", level: 90 }
      ]
    },
    {
      id: "backend",
      title: "Backend & Database",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Express.js", level: 90 },
        { name: "Prisma ORM", level: 88 },
        { name: "MySQL", level: 88 },
        { name: "MongoDB", level: 85 },
        { name: "JWT Authentication", level: 92 }
      ]
    },
    {
      id: "tools",
      title: "Tools & DevOps",
      skills: [
        { name: "Git & GitHub", level: 95 },
        { name: "Postman", level: 92 },
        { name: "Vercel Deployment", level: 94 },
        { name: "Performance Optimization", level: 90 },
        { name: "Vite & Tooling", level: 92 }
      ]
    }
  ],

  experience: [
    {
      role: "Full-Stack Developer Intern",
      company: "Oscorm Inc",
      period: "Nov 2025 – May 2026",
      location: "Remote / Hybrid",
      summary: "Developed high-performance fintech platforms, CRM dashboards, and overseas education web applications.",
      achievements: [
        "Developed the front end of a fintech-based borrowing platform using Next.js and Tailwind CSS, creating responsive, user-friendly interfaces and improving page load time by 40%.",
        "Designed and built a CRM dashboard front end with reusable UI components, increasing client engagement by 30%.",
        "Built the back end of an Overseas Education web application using the MERN Stack implementing REST APIs and database connectivity.",
        "Collaborated with a cross-functional development team to deliver scalable web solutions, optimizing applications for 99% uptime.",
        "Participated in debugging, testing, and deploying web applications following modern development practices and version control workflows."
      ],
      techStack: ["Next.js", "React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "MySQL", "REST APIs", "Git"]
    }
  ],

  projects: [
    {
      id: "kaamsetu",
      title: "KaamSetu — Full-Stack SaaS Business Management Platform",
      category: "SaaS Platform",
      badge: "In Active Development",
      isLive: false,
      description: "A full-stack SaaS platform for Indian local service businesses to manage customers, technicians, service jobs, estimates, invoices, payments, warranties, and follow-ups through a unified dashboard.",
      techStack: ["Next.js", "React", "TypeScript", "Node.js", "Express.js", "Prisma", "MySQL", "JWT", "shadcn/ui", "Tailwind CSS"],
      liveUrl: null,
      githubUrl: "https://github.com/devendrapratapsinghsolanki/kaamsetu",
      highlights: [
        "Built a full-stack SaaS platform for Indian local service businesses to manage customers, technicians, service jobs, estimates, invoices, payments, warranties and follow-ups through a unified dashboard.",
        "Developed a responsive frontend using Next.js, React, TypeScript, Tailwind CSS and shadcn/ui, with reusable components, validated forms, interactive dashboards and service/job timeline interfaces.",
        "Engineered RESTful backend APIs using Node.js, Express.js and TypeScript with JWT authentication, bcrypt password hashing, and role-based authorization across 15+ core workflow modules.",
        "Designed a relational MySQL database using Prisma ORM covering businesses, customers, technicians, jobs, estimates, invoices, payments, warranties and follow-ups; architected for future mobile and AI-powered features."
      ],
      metrics: "15+ Core Workflow Modules • Prisma ORM • JWT Auth"
    },
    {
      id: "guruji-overseas",
      title: "Guruji Overseas — Overseas Education & Visa Consultancy Platform",
      category: "Production Web Platform",
      badge: "Live in Production",
      isLive: true,
      description: "A production-ready overseas education and visa consultancy platform delivering responsive destination discovery, IELTS/PTE preparation, counselling lead generation, and an integrated admin dashboard.",
      techStack: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "Vercel", "SEO Semantic"],
      liveUrl: "https://gurujioverseas.in",
      githubUrl: "https://github.com/devendrapratapsinghsolanki",
      highlights: [
        "Developed and deployed a production-ready overseas education and visa consultancy platform using Next.js, React.js, TypeScript and Tailwind CSS, with fully responsive layouts across mobile, tablet and desktop devices.",
        "Designed reusable, component-driven UI architecture covering 7+ study-abroad destinations, visa services, IELTS/PTE preparation, counselling and lead-generation sections.",
        "Implemented SEO-focused page structures and semantic HTML to improve discoverability, usability and conversion for counselling enquiries, and deployed via Git/GitHub to Vercel with a custom production domain.",
        "Built and integrated an admin dashboard for managing enquiries, content and site data, alongside a scalable frontend architecture that allows additional destinations and services to be added without restructuring the application."
      ],
      metrics: "Live on Vercel • 7+ Destinations • Custom Admin Dashboard"
    },
    {
      id: "crm-dashboard",
      title: "CRM Dashboard & Admin Management System — Oscorm Inc",
      category: "Enterprise CRM",
      badge: "Production Internship Project",
      isLive: true,
      description: "A responsive CRM dashboard for managing customers, leads, analytics, and business operations during a Full-Stack Development internship at Oscorm Inc.",
      techStack: ["Next.js", "Tailwind CSS", "JavaScript", "REST APIs", "Role-Based Auth"],
      liveUrl: "https://crm.oscorm.com",
      githubUrl: "https://github.com/devendrapratapsinghsolanki",
      highlights: [
        "Designed and developed a responsive CRM dashboard for managing customers, leads, and business operations during a Full-Stack Development internship.",
        "Implemented admin authentication, dashboard analytics, data management modules, and user-friendly UI components for efficient workflow handling.",
        "Worked on front-end and API integration, database operations, and secure role-based access features to improve system usability and performance. Built using Next.js, Tailwind CSS, and JavaScript."
      ],
      metrics: "+30% Client Engagement • Role-Based Access • Real-time Data"
    }
  ],

  education: [
    {
      degree: "B.Tech in Computer Science",
      institution: "Shree Siddhi Vinayak Group Institution of Technology",
      location: "Bareilly (U.P.), India",
      period: "2022 – 2026",
      score: "CGPA: 7.4 / 10",
      highlights: [
        "Core Coursework: Data Structures, Algorithms, Database Management Systems (DBMS), Web Development, Operating Systems.",
        "Hands-on project work and software development methodologies."
      ]
    }
  ],

  certifications: [
    {
      title: "Certification in Excel, Power BI, Python, and SQL",
      issuer: "Technical Training Program",
      category: "Data & Programming"
    },
    {
      title: "Summer Internship / Industrial Internship / Full-Stack Developer Internship",
      issuer: "Oscorm Inc",
      category: "Full Stack Development"
    }
  ],

  contactInfo: {
    email: "pratpdevendr@gmail.com",
    phone: "+91-8869077580",
    displayPhone: "+91 88690 77580",
    location: "Bareilly, Uttar Pradesh, India",
    linkedin: "https://linkedin.com/in/pratpdevendr",
    github: "https://github.com/devendrapratapsinghsolanki",
    portfolio: "https://devendrapratap.in"
  }
};
