/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'ru'],
    },
    images: {
        domains: ['raw.githubusercontent.com'],
    },
}

module.exports = nextConfig
