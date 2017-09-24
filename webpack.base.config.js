/*
 * ludic-box2d dev config
 */


var path = require('path');
// var fs = require('fs');

module.exports = {
  entry: "./src/main.js",
  output: {
    library: 'ludic-box2d',
    libraryTarget: 'umd',
    path: __dirname + '/dist',
    filename: "ludic-box2d.umd.js"
  },
  target: 'web',
  node: {
    // fs: 'empty',
    // net: 'empty',
  },
  module: {
    noParse: [
      /Box2D_v2/,
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: [
            ["es2015",{modules:false}],
            "stage-1",
          ]
        },
      },
      {
        test: /\.css$/,
        loader: "style!css",
      },
      // {
      //   test: require.resolve('box2d'),
      //   // loader: "imports-loader?require=>false",
      //   loader: "script-loader",
      // },
    ]
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src/'),
      // 'box2d$': path.resolve(__dirname, 'node_modules/box2d/build/Box2d_v2.3.1_min.js')
    },
    extensions: ['.js', '.scss', '.json'],
  },
  externals: {
    'box2d': 'box2d',
    'ludic': 'ludic',
  },
  devtool: '#source-map'
};
