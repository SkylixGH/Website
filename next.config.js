/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'ru'],
    },
    images: {
        domains: ['png.pngtree.com', 'github.com'],
    },
}

module.exports = nextConfig
