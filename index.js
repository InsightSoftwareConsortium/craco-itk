const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = () => ({
  overrideWebpackConfig: ({ webpackConfig, context: { env } }) => {
    //console.log(webpackConfig)
    webpackConfig.node = {
      ...webpackConfig.node,
      // Resolve node module use of fs
      fs: "empty"
    };

    const itkSource = path.join('node_modules', 'itk');
    const itkDestination = 'itk';
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
        }
      ])
    );

    return webpackConfig;
  }
});
