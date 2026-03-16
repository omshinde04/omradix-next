export default function robots() {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
            },
        ],
        sitemap: "https://www.omradixsolutions.in/sitemap.xml",
    };
}