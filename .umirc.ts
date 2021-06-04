import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'envcloud-utils-downloads',
  favicon:
    './images/logo.png',
  logo: '/util-download/images/logo.png',
  outputPath: 'docs-dist',
  base: '/util-download',
  publicPath: '/util-download/',
  proxy: {
    '/cloud': {
      target: 'http://ljfl.cc.envcloud.com.cn',
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
