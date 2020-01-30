const { override, addWebpackAlias, addBundleVisualizer, addBabelPlugins, addWebpackModuleRule } = require('customize-cra');
const path = require('path');

module.exports = override(
  addWebpackAlias({
    '~': path.resolve(__dirname, 'src/'),
    '@': path.resolve(__dirname, 'src/'),
  }),
  addBundleVisualizer({}, true),
  ...addBabelPlugins('@babel/plugin-proposal-nullish-coalescing-operator', '@babel/plugin-proposal-optional-chaining'),
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
    use: ['svg-sprite-loader', 'svgo-loader'],
  })
);
