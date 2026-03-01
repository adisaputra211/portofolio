export default function robots() {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
            },
        ],
        sitemap: 'https://www.adisaputra-tech.my.id/sitemap.xml',
    };
}
