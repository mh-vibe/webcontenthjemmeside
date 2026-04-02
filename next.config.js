const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin('./src/i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['framerusercontent.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'framerusercontent.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'webcontent.app',
          },
        ],
        destination: 'https://webcontent.dk/en/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.webcontent.app',
          },
        ],
        destination: 'https://webcontent.dk/en/:path*',
        permanent: true,
      },
    ];
  },
};

module.exports = withNextIntl(nextConfig);
