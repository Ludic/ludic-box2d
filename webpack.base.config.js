/*
 * ludic-box2d dev config
 */

var path = require('path');

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
    fs: 'empty',
  },
  module: {
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
      //   test: require.resolve('@ludic/box2d/build/Box2D_v2.3.1_min.wasm.js'),
      //   use: 'exports-loader?Box2D',
      // },
      // {
      //   test: require.resolve('@ludic/box2d/build/Box2D_v2.3.1_min.wasm.wasm'),
      //   loaders: ['arraybuffer-loader'],
      // },
    ]
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src/'),

      // 'box2d$': path.resolve(__dirname, 'node_modules/box2d/build/Box2d_v2.3.1_min.js')
    },
    extensions: ['.js', '.scss', '.json'],
    // modules: [path.join(__dirname, 'node_modules'), 'node_modules'],
  },
  externals: {
    'box2d': 'box2d',
    '@ludic/ludic': {
      commonjs: '@ludic/ludic',
      commonjs2: '@ludic/ludic',
    },
    'box2d.wasm.js': {
      commonjs: '@ludic/box2d/build/Box2D_v2.3.1_min.wasm.js',
      commonjs2: '@ludic/box2d/build/Box2D_v2.3.1_min.wasm.js',
    },
    'box2d.wasm.wasm': {
      commonjs: '@ludic/box2d/build/Box2D_v2.3.1_min.wasm.wasm',
      commonjs2: '@ludic/box2d/build/Box2D_v2.3.1_min.wasm.wasm',
    },
  },
  devtool: '#source-map'
};
