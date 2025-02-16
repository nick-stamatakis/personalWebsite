/** @type {import('next').NextConfig} */
const nextConfig = {};
const isProd = process.env.NODE_ENV === 'production';

export default {
    output: 'export',
    basePath: isProd ? '/personalWebsite' : '',
    assetPrefix: isProd ? '/personalWebsite/' : '',
};