const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: isProd ? '/VizFlow_nextjs-echarts-mermaid-viewer' : '',
  assetPrefix: isProd ? '/VizFlow_nextjs-echarts-mermaid-viewer/' : '',
  output: 'export',
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? '/VizFlow_nextjs-echarts-mermaid-viewer' : '',
  },
};

module.exports = nextConfig;