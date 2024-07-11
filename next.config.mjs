/** @type {import('next').NextConfig} */
const nextConfig = {
    optimizeFonts: false,
    images: {
      loader: 'custom',
      path: '/',
    },
};

export default nextConfig;
