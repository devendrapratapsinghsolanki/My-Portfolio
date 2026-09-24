export const portfolioData = {
  personal: {
    name: "Devendra Pratap Singh Solanki",
    shortName: "Devendra Pratap",
    title: "Full Stack Developer",
    roles: [
      "Full Stack Developer",
      "Next.js & React Specialist",
      "SaaS & Fintech Architect",
      "REST API & Database Engineer",
      "Data Analytics & BI Builder"
    ],
    email: "pratpdevendr@gmail.com",
    phone: "+91-8869077580",
    location: "Noida (Uttar Pradesh), India",
    portfolioUrl: "https://devendrapratap.in",
    displayUrl: "devendrapratap.in",
    github: "https://github.com/devendrapratapsinghsolanki",
    linkedin: "https://linkedin.com/in/pratpdevendr",
    resumePdf: "/Devendra_Pratap_Singh_Solanki_Resume.pdf",
    image: "/my-img.jpeg",
    availability: "Available for Full-Stack Opportunities",
    tagline: "Building scalable SaaS architectures, high-performance web platforms, and data-driven dashboards with modern JavaScript, TypeScript, and SQL ecosystems."
  },

  summary: `Software Engineer and Full-Stack Developer with hands-on internship experience building responsive, high-performance web applications and modern user interfaces. Skilled in React.js, Next.js, JavaScript, TypeScript, Tailwind CSS, Node.js, Express.js, and MySQL. Experienced developing SaaS platforms, fintech and CRM dashboards, business consultancy websites, and Payment Wallet websites, with a strong focus on clean UI/UX, responsive design, accessibility, and performance optimization.`,

  stats: [
    { label: "Page Load Speedup", value: "40%", sub: "Next.js & Tailwind optimization" },
    { label: "Client Engagement", value: "+30%", sub: "Reusable CRM dashboard UI" },
    { label: "System Uptime", value: "99%", sub: "Scalable backend architecture" },
    { label: "Projects Completed", value: "7+", sub: "Full-Stack, Fintech & Analytics" }
  ],

  skillCategories: [
    {
      id: "languages",
      title: "Programming Languages",
      skills: [
        { name: "TypeScript", level: 90 },
        { name: "JavaScript (ES6+)", level: 95 },
        { name: "Python", level: 85 },
        { name: "SQL", level: 88 },
        { name: "HTML5 & CSS3", level: 96 }
      ]
    },
    {
      id: "frontend",
      title: "Frontend Engineering",
      skills: [
        { name: "React.js", level: 95 },
        { name: "Next.js (App & Pages)", level: 92 },
        { name: "Tailwind CSS", level: 96 },
        { name: "shadcn/ui", level: 90 },
        { name: "REST API Integration", level: 94 },
        { name: "Responsive Web Design", level: 98 }
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
        { name: "PostgreSQL & Supabase", level: 85 },
        { name: "MongoDB", level: 85 }
      ]
    },
    {
      id: "tools",
      title: "Tools & Analytics",
      skills: [
        { name: "Git & GitHub", level: 95 },
        { name: "Power BI & DAX", level: 86 },
        { name: "Postman API", level: 92 },
        { name: "Vercel Deployment", level: 94 },
        { name: "Performance Optimization", level: 90 }
      ]
    }
  ],

  experience: [
    {
      role: "Full-Stack Developer Intern",
      company: "Oscorm Inc",
      period: "Nov 2025 – May 2026",
      location: "Remote / Hybrid",
      summary: "Spearheaded frontend and backend development for production fintech borrowing platforms, enterprise CRM systems, and overseas education web applications.",
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
      id: "valoron-wallet",
      title: "Valoron Wallet — Full-Stack Double-Entry Wallet Platform",
      category: "Fintech & SaaS",
      badge: "Live on Vercel",
      isLive: true,
      description: "A production-grade double-entry creator wallet platform featuring integer paise accounting (zero float drift), audit ledgers, real-time balances, and secure transaction workflows.",
      techStack: ["Next.js 16", "TypeScript", "PostgreSQL", "Supabase", "Tailwind CSS", "Double-Entry Ledger"],
      liveUrl: "https://valoron-wallet.vercel.app",
      githubUrl: "https://github.com/devendrapratapsinghsolanki/valoron-wallet-assessment",
      highlights: [
        "Built a production-grade double-entry creator wallet platform using Next.js 16 App Router, TypeScript, and Supabase PostgreSQL.",
        "Implemented integer paise accounting (BIGINT) guaranteeing zero floating-point money rounding errors.",
        "Engineered double-entry ledger invariants ensuring every transaction creates equal and opposite append-only audit entries.",
        "Designed responsive, real-time creator balance dashboards and withdrawal simulation workflows."
      ],
      metrics: "Integer Paise Accounting • Double-Entry Ledger • PostgreSQL"
    },
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
      title: "Guruji Overseas — Overseas Education & Visa Platform",
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
      badge: "Enterprise Internship",
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
    },
    {
      id: "travel-booking",
      title: "Flight & Travel Booking Management System",
      category: "Web Application",
      badge: "Full-Featured Platform",
      isLive: false,
      description: "A comprehensive online flight and travel booking platform inspired by MakeMyTrip, featuring flight search, seat selection, ticketing, passenger management, and reservation history.",
      techStack: ["Laravel", "PHP", "Blade", "MySQL", "Bootstrap", "REST APIs"],
      liveUrl: null,
      githubUrl: "https://github.com/devendrapratapsinghsolanki/travel-booking-management-system",
      highlights: [
        "Engineered a full-featured online flight booking web application allowing users to search, book, and manage flight tickets seamlessly.",
        "Built relational MySQL database schemas for flights, airports, schedules, seat availability, bookings, and customer profiles.",
        "Implemented dynamic search filters, seat selection UI, automated invoice generation, and user booking history tracking."
      ],
      metrics: "Flight Search & Booking • Seat Selection • Relational Schema"
    },
    {
      id: "omato-analytics",
      title: "Omato Food Delivery Analytics Dashboard",
      category: "Data Analytics & BI",
      badge: "Power BI Analytics",
      isLive: false,
      description: "An interactive Power BI business analytics dashboard analyzing 15K+ orders to uncover sales performance, customer preferences, payment trends, and delivery efficiency.",
      techStack: ["Power BI", "DAX", "Power Query", "Data Modeling", "Excel"],
      liveUrl: null,
      githubUrl: "https://github.com/devendrapratapsinghsolanki/Omato-Food-Delivery-Dashboard",
      highlights: [
        "Created an interactive business analytics dashboard analyzing 15,000+ ordered quantities across 3,000+ delivery transactions.",
        "Developed custom DAX calculations, KPI metrics, and Power Query ETL pipelines for deep operational analysis.",
        "Identified key revenue drivers, peak order windows, popular food categories, and payment channel distributions."
      ],
      metrics: "15K+ Orders Analyzed • DAX Measures • Power Query ETL"
    },
    {
      id: "amazon-sales-analysis",
      title: "Amazon Sales Data Analysis & BI Project",
      category: "Data Analytics & BI",
      badge: "Python & Power BI",
      isLive: false,
      description: "An end-to-end data analytics pipeline analyzing Amazon sales data with Python ETL (Pandas/NumPy) for data cleaning and interactive Power BI dashboards for executive insights.",
      techStack: ["Python", "Pandas", "NumPy", "Power BI", "SQL", "Data Cleaning"],
      liveUrl: null,
      githubUrl: "https://github.com/devendrapratapsinghsolanki/amazon-sales-analysis-project",
      highlights: [
        "Built an end-to-end data pipeline cleaning and analyzing large-scale Amazon e-commerce sales datasets with Python Pandas.",
        "Designed interactive Power BI dashboards visualizing monthly sales trends, category profit margins, and fulfillment methods.",
        "Extracted actionable business recommendations on inventory turnover and shipping performance."
      ],
      metrics: "Python ETL Pipeline • Power BI Visuals • Profit Analysis"
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
        "Hands-on project work and software engineering methodologies."
      ]
    }
  ],

  certifications: [
    {
      title: "Certification in Excel, Power BI, Python, and SQL",
      issuer: "Technical Training Program",
      category: "Data Analytics & Programming"
    },
    {
      title: "Summer Internship / Industrial Internship / Full-Stack Developer Internship",
      issuer: "Oscorm Inc",
      category: "Full Stack Web Engineering"
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
