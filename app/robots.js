export default function robots() {
    return {
        rules: [
            {
                userAgent: "*",
                allow: [
                    "/",
                    "/about",
                    "/services",
                    "/services/",
                    "/projects",
                    "/blogs",
                    "/contact",
                ],
                disallow: [
                    "/api/",
                    "/_next/",
                    "/admin/",
                    "/private/",
                    "/tmp/",
                    "/*.json$",
                    "/*?*",
                ],
            },

            /* GOOGLE BOT (PRIORITY) */
            {
                userAgent: "Googlebot",
                allow: "/",
                disallow: [
                    "/api/",
                    "/_next/",
                ],
            },
        ],

        sitemap: "https://www.omradixsolutions.in/sitemap.xml",

        host: "https://www.omradixsolutions.in",
    };
}