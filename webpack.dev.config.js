/*
 * ludic-box2d dev config
 */


var path = require('path');
// var fs = require('fs');

module.exports = {
  entry: "./src/main.js",
  output: {
    libraryTarget: 'commonjs2',
    path: __dirname + '/dist',
    filename: "main.js"
  },
  target: 'web',
  node: {
    fs: 'empty',
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
      'b2d$': 'src/box2d/b2d.js',
      // 'box2d$': path.resolve(__dirname, 'node_modules/box2d/build/Box2d_v2.3.1_min.js')
    },
    extensions: ['.js', '.scss', '.json'],
  },
  externals: {
    // 'box2d': {
    //   amd: 'box2d'
    // },
    'box2d': 'box2d',
    // 'ludic': 'ludic',
    'ludic': {
      amd: 'ludic',
      commonjs: 'ludic',
      commonjs2: 'ludic',
    },
  },
  devtool: '#source-map'
};
