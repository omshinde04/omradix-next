import { services } from "@/data/servicesData";
// import { projects } from "@/data/projectsData"; // future
// import { blogs } from "@/data/blogsData"; // future

export default function sitemap() {

    const baseUrl = "https://www.omradixsolutions.in";
    const currentDate = new Date();

    /* ================= STATIC ROUTES ================= */

    const staticRoutes = [
        {
            url: baseUrl,
            priority: 1.0,
            changeFrequency: "weekly"
        },
        {
            url: `${baseUrl}/about`,
            priority: 0.9,
            changeFrequency: "monthly"
        },
        {
            url: `${baseUrl}/services`,
            priority: 0.95,
            changeFrequency: "weekly"
        },
        {
            url: `${baseUrl}/projects`,
            priority: 0.9,
            changeFrequency: "weekly"
        },
        {
            url: `${baseUrl}/blogs`,
            priority: 0.85,
            changeFrequency: "weekly"
        },
        {
            url: `${baseUrl}/contact`,
            priority: 0.8,
            changeFrequency: "monthly"
        },

        /* LEGAL PAGES */
        {
            url: `${baseUrl}/privacy-policy`,
            priority: 0.5,
            changeFrequency: "yearly"
        },
        {
            url: `${baseUrl}/cookie-policy`,
            priority: 0.5,
            changeFrequency: "yearly"
        },
        {
            url: `${baseUrl}/terms-and-conditions`,
            priority: 0.5,
            changeFrequency: "yearly"
        }
    ];

    /* ================= SERVICES (DYNAMIC) ================= */

    const serviceRoutes = services.map((service) => ({
        url: `${baseUrl}/services/${service.slug}`,
        priority: 0.85,
        changeFrequency: "monthly"
    }));

    /* ================= FUTURE: PROJECT SLUGS ================= */

    // const projectRoutes = projects.map((project) => ({
    //     url: `${baseUrl}/projects/${project.slug}`,
    //     priority: 0.8,
    //     changeFrequency: "monthly"
    // }));

    /* ================= FUTURE: BLOG SLUGS ================= */

    // const blogRoutes = blogs.map((blog) => ({
    //     url: `${baseUrl}/blogs/${blog.slug}`,
    //     priority: 0.8,
    //     changeFrequency: "monthly"
    // }));

    /* ================= FINAL ROUTES ================= */

    const allRoutes = [
        ...staticRoutes,
        ...serviceRoutes,
        // ...projectRoutes,
        // ...blogRoutes
    ];

    return allRoutes.map((route) => ({
        url: route.url,
        lastModified: currentDate,
        priority: route.priority,
        changeFrequency: route.changeFrequency,
    }));

}