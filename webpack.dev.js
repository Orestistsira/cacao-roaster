// webpack.dev.js
const webpackCommon = require('./webpack.common');
const path = require('path');

module.exports = {
  ...webpackCommon,
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    compress: true,
    port: 3000,
    open: true,
    historyApiFallback: {
      rewrites: [
        { from: /^\/$/, to: '/index.html' },
        { from: /^\/playbook--[\w-]+$/, to: '/index.html' }, // Handles /playbook--<UUID>
        { from: /^\/history\/\w+$/, to: '/index.html' }, // Handles /history/playbook_id
        { from: /./, to: '/404.html' }, // Handles everything else
      ],
    },
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        pathRewrite: { '^/api': '' },
      },
    },
  },
};
