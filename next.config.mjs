import mdx from '@next/mdx';
import createNextIntlPlugin from 'next-intl/plugin';

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {},
});

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'md', 'mdx', 'en'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'img.amiami.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  experimental: {
    typedRoutes: false,
  },
  webpack(config) {
    return config;
  },
};

export default withNextIntl(withMDX(nextConfig));