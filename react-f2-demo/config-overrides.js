const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');
const autoprefixer = require('autoprefixer');

function cssModule() {
  return function (config, env) {
    const commonRules = [
      require.resolve('style-loader'),
      {
        loader: require.resolve('css-loader'),
        options: {
          modules: true,
          localIdentName: '[path][name]__[local]__[hash:base64:5]',
          importLoaders: 1,
        },
      },
      {
        loader: require.resolve('postcss-loader'),
        options: {
          ident: 'postcss',
          plugins: () => [
            require('postcss-flexbugs-fixes'),
            autoprefixer({
              browsers: [
                '>1%',
                'last 4 versions',
                'Firefox ESR',
                'not ie < 9', // React doesn't support IE8 anyway
              ],
              flexbox: 'no-2009',
            }),
          ],
        },
      },
    ]
    const cssRules =
      {
        test: /\.css$/,
        exclude: /node_modules/, /* 排除依赖包引入的css，否则无法正常引入包样式 */
        use: [
          ...commonRules
        ],
      };
      const lessRules = {
        test: /\.less$/,
        exclude: /node_modules/, /* 排除依赖包引入的less，否则无法正常引入包样式 */
        use: [
          ...commonRules,
          {
            loader: "less-loader"
          }
        ]
      }
    const oneOfRule = config.module.rules.find(rule => rule.oneOf !== undefined);
    if (oneOfRule) {
      oneOfRule.oneOf.unshift(cssRules, lessRules);
    } else {
      config.module.rules.push(cssRules, lessRules);
    }
    return config;
  };
}
function chunkFilename() {
  return function (config, env) {
    config.output.chunkFilename = 'static/js/[name].[chunkhash:8].js';
    return config;
  };
}
module.exports = function override(config, env) { // do stuff with the webpack config...
  config = injectBabelPlugin(['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }], config);
  config = injectBabelPlugin("react-require", config); // 针对stateless 组件
  // config = injectBabelPlugin("add-module-exports", config); // 引入组件不需要再写default
  if (env === "development") {
    config = injectBabelPlugin("dva-hmr", config); // dva动态更新
  }
  config = rewireLess.withLoaderOptions({
    modifyVars: { "@primary-color": "#1DA57A" },
  })(config, env);
  config = chunkFilename()(config, env);
  config = cssModule()(config, env);
  return config;
};
