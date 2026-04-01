import { services } from "../data/servicesData";
import { blogs } from "../data/blogsData";

export default function sitemap() {

    const baseUrl = "https://www.omradixsolutions.in";

    /* ================= STATIC ROUTES ================= */

    const staticRoutes = [
        {
            url: baseUrl,
            lastModified: "2026-04-01",
            priority: 1.0,
            changeFrequency: "weekly",
        },
        {
            url: `${baseUrl}/about`,
            lastModified: "2026-03-01",
            priority: 0.9,
            changeFrequency: "monthly",
        },
        {
            url: `${baseUrl}/services`,
            lastModified: "2026-04-01",
            priority: 0.95,
            changeFrequency: "weekly",
        },
        {
            url: `${baseUrl}/projects`,
            lastModified: "2026-03-20",
            priority: 0.9,
            changeFrequency: "weekly",
        },
        {
            url: `${baseUrl}/blogs`,
            lastModified: "2026-04-01",
            priority: 0.9,
            changeFrequency: "daily",
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: "2026-02-15",
            priority: 0.8,
            changeFrequency: "monthly",
        },

        /* LEGAL */
        {
            url: `${baseUrl}/privacy-policy`,
            lastModified: "2026-01-01",
            priority: 0.6,
            changeFrequency: "yearly",
        },
        {
            url: `${baseUrl}/cookie-policy`,
            lastModified: "2026-01-01",
            priority: 0.6,
            changeFrequency: "yearly",
        },
        {
            url: `${baseUrl}/terms-and-conditions`,
            lastModified: "2026-01-01",
            priority: 0.6,
            changeFrequency: "yearly",
        },
    ];

    /* ================= SERVICES ================= */

    const serviceRoutes = services.map((service) => ({
        url: `${baseUrl}/services/${service.slug}`,
        lastModified: "2026-04-01",
        priority: 0.9,
        changeFrequency: "monthly",
    }));

    /* ================= BLOGS (IMPORTANT FOR SEO) ================= */

    const blogRoutes = blogs.map((blog) => ({
        url: `${baseUrl}/blogs/${blog.slug}`,
        lastModified: "2026-04-01",
        priority: 0.85,
        changeFrequency: "monthly",
    }));

    return [
        ...staticRoutes,
        ...serviceRoutes,
        ...blogRoutes,
    ];
}