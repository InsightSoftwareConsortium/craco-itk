const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = () => ({
  overrideWebpackConfig: ({ webpackConfig, context: { env, paths } }) => {
    //console.log(webpackConfig)
    webpackConfig.node = {
      ...webpackConfig.node,
      // Resolve node module use of fs
      fs: "empty"
    };

    const itkSource = path.join(paths.appNodeModules, 'itk');
    const itkDestination = path.join(paths.appBuild, 'itk');
    webpackConfig.plugins.push(
      new CopyWebpackPlugin([
        {
          from: path.join(itkSource, 'WebWorkers'),
          to: path.join(itkDestination, 'WebWorkers')
        },
        {
          from: path.join(itkSource, 'ImageIOs'),
          to: path.join(itkDestination, 'ImageIOs')
        },
        {
          from: path.join(itkSource, 'MeshIOs'),
          to: path.join(itkDestination, 'MeshIOs')
        },
        {
          from: path.join(itkSource, 'PolyDataIOs'),
          to: path.join(itkDestination, 'PolyDataIOs')
        }
      ])
    );

    webpackConfig.resolve.alias['./itkConfig$'] = path.resolve(__dirname, 'itkConfig.js')

    return webpackConfig;
  },

  overrideDevServerConfig: ({ devServerConfig, cracoConfig, pluginOptions, context: { env, paths, allowedHost } }) => {

    // For the itk.js modules
    devServerConfig.contentBase = [devServerConfig.contentBase, paths.appNodeModules]

    // Always return the config object.
    return devServerConfig;
  }

});
