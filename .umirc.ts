import { defineConfig } from 'dumi';

export default defineConfig({
  title: '@env/util-download',
  favicon:
    './images/logo.png',
  logo: './images/logo.png',
  outputPath: 'docs-dist',
  proxy: {
    '/cloud/njgcq/': {
      target: 'http://218.2.157.51:8003',
      timeout: 1000 * 60 * 10,
      changeOrigin: true,
    },
  },
  extraBabelPlugins: [
    [
      'import',
      { libraryName: 'antd', libraryDirectory: 'lib', style: 'css' },
      'antd',
    ],
  ],
  // more config: https://d.umijs.org/config
});
