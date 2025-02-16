const isProd = process.env.NODE_ENV === 'production';

export default {
    output: 'export',
    basePath: isProd ? '/personalWebsite' : '',
    assetPrefix: isProd ? '/personalWebsite/' : '',
    images: {
        unoptimized: true, // Required for static export to GitHub Pages
    },
};
