export default function sitemap() {
    const baseUrl = "https://www.omradixsolutions.in";

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            priority: 1,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            priority: 0.9,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            priority: 0.8,
        },
        {
            url: `${baseUrl}/privacy-policy`,
            lastModified: new Date(),
            priority: 0.5,
        },
        {
            url: `${baseUrl}/cookie-policy`,
            lastModified: new Date(),
            priority: 0.5,
        },
        {
            url: `${baseUrl}/terms-and-conditions`,
            lastModified: new Date(),
            priority: 0.5,
        },
        {
            url: `${baseUrl}/projects`,
            lastModified: new Date(),
            priority: 0.5,
        },
        {
            url: `${baseUrl}/services`,
            lastModified: new Date(),
            priority: 0.5,
        },

    ];
}