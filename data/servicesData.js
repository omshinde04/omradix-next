import {
    Code,
    Globe,
    Smartphone,
    LineChart,
    Cloud,
    Bot,
    ShoppingCart,
    Palette,
    Megaphone,
    Wrench
} from "lucide-react";

export const services = [

    {
        slug: "business-websites",
        icon: Globe,
        title: "Business Websites",
        image: "/images/services/business-websites.jpg",

        shortDescription:
            "Professional websites designed to build trust, generate leads and represent your brand online.",

        description:
            "We design modern business websites that clearly communicate your services, build credibility and convert visitors into real customers. Our websites focus on performance, SEO and excellent user experience.",

        perfectFor: [
            "Small Businesses",
            "Startups",
            "Service Companies",
            "Corporate Brands"
        ],

        whatYouGet: [
            "Modern professional website",
            "Mobile responsive design",
            "Lead generation contact forms",
            "Fast loading pages",
            "SEO optimized structure",
            "CMS dashboard for updates"
        ],

        benefits: [
            "Build trust with customers",
            "Generate more inquiries",
            "Improve online visibility",
            "Strengthen brand credibility"
        ],

        deliverables: [
            "Complete website design",
            "Development and deployment",
            "Admin dashboard",
            "SEO setup",
            "Hosting support"
        ],

        timeline: "2–4 weeks",

        technologies: [
            "Next.js",
            "React",
            "Node.js",
            "Tailwind CSS"
        ],

        process: [
            "Requirement analysis",
            "UI/UX design",
            "Frontend development",
            "Deployment"
        ]

    },

    {
        slug: "custom-web-platforms",
        icon: Code,
        title: "Custom Web Platforms",
        image: "/images/services/web-platforms.jpg",

        shortDescription:
            "Advanced platforms built to automate business workflows and scale operations.",

        description:
            "We develop powerful web platforms that allow businesses to manage users, operations and data from a centralized system.",

        perfectFor: [
            "SaaS Startups",
            "Online Platforms",
            "Service Marketplaces",
            "Internal Company Tools"
        ],

        whatYouGet: [
            "Custom platform architecture",
            "Admin dashboards",
            "User authentication",
            "API integrations",
            "Payment systems"
        ],

        benefits: [
            "Automate workflows",
            "Centralize business operations",
            "Improve operational efficiency",
            "Scale product easily"
        ],

        deliverables: [
            "Full web application",
            "Admin dashboard",
            "Database setup",
            "API integration"
        ],

        timeline: "4–10 weeks",

        technologies: [
            "React",
            "Next.js",
            "Node.js",
            "PostgreSQL"
        ],

        process: [
            "Product planning",
            "System architecture",
            "Development",
            "Testing & deployment"
        ]

    },

    {
        slug: "mobile-application-development",
        icon: Smartphone,
        title: "Mobile Application Development",
        image: "/images/services/mobile-app.jpg",

        shortDescription:
            "Modern mobile apps designed to engage customers and expand your business reach.",

        description:
            "We build mobile applications that provide seamless experiences for users and connect directly with backend systems.",

        perfectFor: [
            "Startups",
            "Ecommerce Brands",
            "Service Platforms",
            "Customer Apps"
        ],

        whatYouGet: [
            "Android mobile application",
            "Modern UI design",
            "Backend integration",
            "Push notifications",
            "User authentication"
        ],

        benefits: [
            "Increase engagement",
            "Improve customer experience",
            "Expand digital reach"
        ],

        deliverables: [
            "Complete Android application",
            "Backend APIs",
            "Deployment support"
        ],

        timeline: "4–8 weeks",

        technologies: [
            "React Native",
            "Firebase",
            "Node.js"
        ],

        process: [
            "App planning",
            "UI/UX design",
            "App development",
            "Testing & release"
        ]

    },

    {
        slug: "ecommerce-development",
        icon: ShoppingCart,
        title: "E-Commerce Development",
        image: "/images/services/ecommerce.jpg",

        shortDescription:
            "Online stores designed to help businesses sell products efficiently.",

        description:
            "We build powerful ecommerce platforms that allow businesses to manage products, orders and payments efficiently.",

        perfectFor: [
            "Retail Businesses",
            "Product Brands",
            "Local Stores",
            "Startups"
        ],

        whatYouGet: [
            "Online store",
            "Product management system",
            "Payment gateway integration",
            "Order tracking",
            "Customer accounts"
        ],

        benefits: [
            "Sell products 24/7",
            "Reach global customers",
            "Increase sales revenue"
        ],

        deliverables: [
            "Ecommerce website",
            "Admin dashboard",
            "Payment gateway setup"
        ],

        timeline: "3–6 weeks",

        technologies: [
            "Next.js",
            "Stripe",
            "Node.js"
        ],

        process: [
            "Store planning",
            "Product structure",
            "Development",
            "Launch"
        ]

    },

    {
        slug: "data-analytics-dashboards",
        icon: LineChart,
        title: "Data Analytics & Dashboards",
        image: "/images/services/data-analytics.jpg",

        shortDescription:
            "Business dashboards that transform raw data into insights.",

        description:
            "We build powerful dashboards to help businesses track KPIs and make better decisions.",

        perfectFor: [
            "Growing Companies",
            "Sales Teams",
            "Marketing Teams"
        ],

        whatYouGet: [
            "Interactive dashboards",
            "Real-time analytics",
            "Custom reports"
        ],

        benefits: [
            "Better decision making",
            "Clear insights"
        ],

        deliverables: [
            "Analytics dashboards",
            "Data integration",
            "Reports automation"
        ],

        timeline: "2–4 weeks",

        technologies: [
            "Power BI",
            "Python",
            "SQL"
        ],

        process: [
            "Data analysis",
            "Dashboard design",
            "Integration",
            "Deployment"
        ]

    },

    {
        slug: "cloud-infrastructure",
        icon: Cloud,
        title: "Cloud Infrastructure",
        image: "/images/services/cloud.jpg",

        shortDescription:
            "Secure and scalable infrastructure for modern applications.",

        description:
            "We deploy scalable cloud systems ensuring reliability, security and performance.",

        perfectFor: [
            "SaaS Platforms",
            "Startups",
            "High traffic apps"
        ],

        whatYouGet: [
            "Server deployment",
            "Cloud hosting",
            "Monitoring systems"
        ],

        benefits: [
            "Better reliability",
            "Scalable infrastructure",
            "Improved performance"
        ],

        deliverables: [
            "Cloud setup",
            "CI/CD pipeline",
            "Deployment"
        ],

        timeline: "1–2 weeks",

        technologies: [
            "AWS",
            "Docker",
            "Kubernetes"
        ],

        process: [
            "Infrastructure planning",
            "Deployment",
            "Monitoring"
        ]

    },

    {
        slug: "ai-automation-systems",
        icon: Bot,
        title: "AI & Automation Systems",
        image: "/images/services/ai.jpg",

        shortDescription:
            "AI powered systems that automate workflows and improve efficiency.",

        description:
            "We integrate AI technologies like chatbots and automation tools to improve business productivity.",

        perfectFor: [
            "Customer Support Teams",
            "Ecommerce Stores",
            "Digital Platforms"
        ],

        whatYouGet: [
            "AI chatbots",
            "Automation systems",
            "AI assistants"
        ],

        benefits: [
            "Reduce manual tasks",
            "Improve response time"
        ],

        deliverables: [
            "AI integration",
            "Automation setup"
        ],

        timeline: "3–6 weeks",

        technologies: [
            "OpenAI",
            "LangChain",
            "Python"
        ],

        process: [
            "AI strategy",
            "Integration",
            "Testing"
        ]

    },

    {
        slug: "social-media-marketing",
        icon: Megaphone,
        title: "Social Media Marketing",
        image: "/images/services/social-media.jpg",

        shortDescription:
            "Grow your brand through strategic social media marketing.",

        description:
            "We manage social media growth strategies including content creation and campaigns.",

        perfectFor: [
            "Startups",
            "Brands",
            "Ecommerce stores"
        ],

        whatYouGet: [
            "Content strategy",
            "Account management",
            "Marketing campaigns"
        ],

        benefits: [
            "Increase brand awareness",
            "Grow audience"
        ],

        deliverables: [
            "Monthly content plan",
            "Performance reports"
        ],

        timeline: "Monthly",

        technologies: [
            "Meta Ads",
            "Instagram",
            "Analytics"
        ],

        process: [
            "Content planning",
            "Campaign execution",
            "Analytics"
        ]

    },

    {
        slug: "ui-ux-design",
        icon: Palette,
        title: "UI/UX Design",
        image: "/images/services/uiux.jpg",

        shortDescription:
            "Beautiful interfaces designed for usability and engagement.",

        description:
            "We create modern and intuitive user experiences for web and mobile platforms.",

        perfectFor: [
            "Startups",
            "Web apps",
            "Mobile apps"
        ],

        whatYouGet: [
            "UI design",
            "UX optimization",
            "Wireframes"
        ],

        benefits: [
            "Better usability",
            "Higher retention"
        ],

        deliverables: [
            "Design system",
            "Prototypes"
        ],

        timeline: "2–4 weeks",

        technologies: [
            "Figma",
            "Framer"
        ],

        process: [
            "Research",
            "Wireframes",
            "Design"
        ]

    },

    {
        slug: "website-maintenance-support",
        icon: Wrench,
        title: "Website Maintenance & Support",
        image: "/images/services/maintenance.jpg",

        shortDescription:
            "Ongoing maintenance to keep your website secure and optimized.",

        description:
            "We provide continuous monitoring, updates and performance improvements.",

        perfectFor: [
            "Business Websites",
            "Ecommerce Stores",
            "Corporate Platforms"
        ],

        whatYouGet: [
            "Security updates",
            "Performance optimization",
            "Bug fixes"
        ],

        benefits: [
            "Prevent downtime",
            "Improve security"
        ],

        deliverables: [
            "Monthly maintenance",
            "Technical support"
        ],

        timeline: "Ongoing",

        technologies: [
            "Monitoring tools",
            "Security tools"
        ],

        process: [
            "Monitoring",
            "Maintenance",
            "Optimization"
        ]

    }

];