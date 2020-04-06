/* eslint-disable @typescript-eslint/no-var-requires */
const {
  override,
  addWebpackAlias,
  addBundleVisualizer,
  addBabelPlugins,
  addWebpackModuleRule,
} = require('customize-cra');
const path = require('path');

module.exports = override(
  addWebpackAlias({
    '~': path.resolve(__dirname, 'src/'),
    '@': path.resolve(__dirname, 'src/'),
    components: path.resolve(__dirname, 'src/components/'),
    store: path.resolve(__dirname, 'src/store/'),
    utils: path.resolve(__dirname, 'src/utils/'),
    pages: path.resolve(__dirname, 'src/pages/'),
    common: path.resolve(__dirname, 'src/common/'),
  }),
  addBundleVisualizer({}, true),
  ...addBabelPlugins('@babel/plugin-proposal-nullish-coalescing-operator', '@babel/plugin-proposal-optional-chaining'),
  addWebpackModuleRule({
    test: /\.(png|jp(e*)g|svg|gif)$/,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: 'images/[hash]-[name].[ext]',
        },
      },
    ],
  }),
  addWebpackModuleRule({
    test: /\.sass$/,
    use: [
      'style-loader',
      'css-loader',
      'sass-loader',
      {
        loader: 'sass-resources-loader',
        options: {
          resources: ['./src/assets/sass/dev.sass'],
        },
      },
    ],
  }),
  addWebpackModuleRule({
    test: /\.svg$/,
    include: [path.resolve(__dirname, 'src/assets/img/icons')],
    use: ['svg-sprite-loader', 'svgo-loader'],
  })
);
