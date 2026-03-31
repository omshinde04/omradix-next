import { services } from "../data/servicesData";
// import { projects } from "../data/projectsData"; // future
// import { blogs } from "../data/blogsData"; // future

export default function sitemap() {

    const baseUrl = "https://www.omradixsolutions.in";

    /* ================= STATIC ROUTES ================= */

    const staticRoutes = [
        {
            url: baseUrl,
            lastModified: new Date(),
            priority: 1.0,
            changeFrequency: "weekly",
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            priority: 0.9,
            changeFrequency: "monthly",
        },
        {
            url: `${baseUrl}/services`,
            lastModified: new Date(),
            priority: 0.95,
            changeFrequency: "weekly",
        },
        {
            url: `${baseUrl}/projects`,
            lastModified: new Date(),
            priority: 0.9,
            changeFrequency: "weekly",
        },
        {
            url: `${baseUrl}/blogs`,
            lastModified: new Date(),
            priority: 0.85,
            changeFrequency: "weekly",
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            priority: 0.8,
            changeFrequency: "monthly",
        },

        /* LEGAL */
        {
            url: `${baseUrl}/privacy-policy`,
            lastModified: new Date(),
            priority: 0.5,
            changeFrequency: "yearly",
        },
        {
            url: `${baseUrl}/cookie-policy`,
            lastModified: new Date(),
            priority: 0.5,
            changeFrequency: "yearly",
        },
        {
            url: `${baseUrl}/terms-and-conditions`,
            lastModified: new Date(),
            priority: 0.5,
            changeFrequency: "yearly",
        },
    ];

    /* ================= SERVICES (DYNAMIC) ================= */

    const serviceRoutes = services.map((service) => ({
        url: `${baseUrl}/services/${service.slug}`,
        lastModified: new Date(),
        priority: 0.9, // increased (important pages)
        changeFrequency: "monthly",
    }));

    /* ================= FUTURE: PROJECT SLUGS ================= */

    // const projectRoutes = projects.map((project) => ({
    //     url: `${baseUrl}/projects/${project.slug}`,
    //     lastModified: new Date(),
    //     priority: 0.85,
    //     changeFrequency: "monthly",
    // }));

    /* ================= FUTURE: BLOG SLUGS ================= */

    // const blogRoutes = blogs.map((blog) => ({
    //     url: `${baseUrl}/blogs/${blog.slug}`,
    //     lastModified: new Date(),
    //     priority: 0.85,
    //     changeFrequency: "monthly",
    // }));

    /* ================= FINAL ================= */

    const allRoutes = [
        ...staticRoutes,
        ...serviceRoutes,
        // ...projectRoutes,
        // ...blogRoutes
    ];

    return allRoutes;
}