/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
      return [
        {
          source: '/(.*)',
          headers: [
            {
              key: 'Cache-Control',
              value: 'no-store, max-age=0', // Disable caching for all routes
            },
          ],
        },
      ];
    },
  };
  
export default nextConfig;
