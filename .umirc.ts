import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'antd-select-pagination-scroll',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  base: process.env.NODE_ENV === 'production' ? '/antd-select-pagination-scroll' : '/',
  hash: true,
  lessLoader: {
    modifyVars: {
      '@xm-prefix': 'antd-select-pagination-scroll',
    },
    javascriptEnabled: true,
  },
  cssLoader: {
    localsConvention: 'camelCase',
  },
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
    ],
  ],
});
