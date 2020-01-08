'use strict'

process.env.BABEL_ENV = 'renderer'

const path = require('path')
const { dependencies } = require('../package.json')
const webpack = require('webpack')

const MinifyPlugin = require("babel-minify-webpack-plugin")
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

var nodePath = 'dist/electron'
const env = process.env.NODE_ENV
if(env === "production"){
	if(process.platform === "darwin"){
		nodePath = "../Resources/app.asar.unpacked/__build__/";
	}
	else{
		nodePath = "resources/app.asar.unpacked/__build__";
	}
}
console.log(nodePath, 'nodePath')
/**
 * List of node_modules to include in webpack bundle
 *
 * Required for specific packages like Vue UI libraries
 * that provide pure *.vue files that need compiling
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/webpack-configurations.html#white-listing-externals
 */
let whiteListedModules = ['vue']

let rendererConfig = {
  devtool: '#cheap-module-eval-source-map',
  entry: {
    renderer: path.join(__dirname, '../src/renderer/main.js')
  },
  externals: [
    ...Object.keys(dependencies || {}).filter(d => !whiteListedModules.includes(d))
  ],
  module: {
    rules: [
      {
        test: /\.node$/,
        use: [
          // {
          // 	loader: "native-ext-loader",
          // 	options: {
          // 		rewritePath: path.resolve(__dirname, "dist")
          // 	}
          // },
          {
            loader: "node-addon-loader",
            options: {
              // 加上 basePath 后，最终路径 = output.path join basePath join name
              basePath: path.resolve(__dirname),
              rewritePath: nodePath,
              // rewritePath: "../Resources/app.asar.unpacked/__build__/",
              // relativePath: false,
              name: "addon/[name].[hash:8].[ext]",
            }
          }
          // {
          // 	loader: "file-loader",
          // 	options: {
          // 		outputPath: "addon/",
          // 		name: "[name].[hash:8].[ext]",
          // 	// publicPath: "../../app.asar.unpacked/addons"
          // 	}
          // }
        ]
      },
      {
        test: /\.(js|vue)$/,
        enforce: 'pre',
        exclude: /node_modules/,
        use: {
          loader: 'eslint-loader',
          options: {
            formatter: require('eslint-friendly-formatter')
          }
        }
      },
      {
        test: /\.scss$/,
        use: ['vue-style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.sass$/,
        use: ['vue-style-loader', 'css-loader', 'sass-loader?indentedSyntax']
      },
      {
        test: /\.less$/,
        use: ['vue-style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader']
      },
      {
        test: /\.html$/,
        use: 'vue-html-loader'
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader',
          options: {
            extractCSS: process.env.NODE_ENV === 'production',
            loaders: {
              sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax=1',
              scss: 'vue-style-loader!css-loader!sass-loader',
              less: 'vue-style-loader!css-loader!less-loader'
            }
          }
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          query: {
            limit: 10000,
            name: 'imgs/[name]--[folder].[ext]'
          }
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'media/[name]--[folder].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          query: {
            limit: 10000,
            name: 'fonts/[name]--[folder].[ext]'
          }
        }
      }
    ]
  },
  node: {
    __dirname: process.env.NODE_ENV !== 'production',
    __filename: process.env.NODE_ENV !== 'production'
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({filename: 'styles.css'}),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, '../src/index.ejs'),
      minify: {
        collapseWhitespace: true,
        removeAttributeQuotes: true,
        removeComments: true
      },
      nodeModules: process.env.NODE_ENV !== 'production'
        ? path.resolve(__dirname, '../node_modules')
        : false
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new CopyWebpackPlugin([{
      from: path.resolve(__dirname, "./../src/easemob/easemob/LIBCURL.LIB"),
      force: true,
      to: "addon/LIBCURL.LIB"
    }, {
      from: path.resolve(__dirname, "./../src/easemob/easemob/LIBCURL.DLL"),
      force: true,
      to: "addon/LIBCURL.DLL"
    }, {
      from: path.resolve(__dirname, "./../src/easemob/easemob/libcrypto.1.0.0.dylib"),
      force: true,
      to: "addon/libcrypto.1.0.0.dylib"
    }]),
    new webpack.ContextReplacementPlugin(/bindings$/, /^$/),
    new webpack.DefinePlugin({
      DEBUG: true,
      "process.env.NODE_ENV": JSON.stringify("development")
    })
  ],
  output: {
    filename: '[name].js',
    libraryTarget: 'commonjs2',
    path: path.join(__dirname, '../dist/electron')
  },
  resolve: {
    alias: {
      '@': path.join(__dirname, '../src/renderer'),
      $easemob: path.join(__dirname, '../src/easemob'),
      $utils: path.join(__dirname, '../src/utils'),
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['.js', '.vue', '.json', '.css', '.node']
  },
  externals: ["bindings"],
  target: 'electron-renderer'
}

/**
 * Adjust rendererConfig for development settings
 */
if (process.env.NODE_ENV !== 'production') {
  rendererConfig.plugins.push(
    new webpack.DefinePlugin({
      '__static': `"${path.join(__dirname, '../static').replace(/\\/g, '\\\\')}"`
    })
  )
}

/**
 * Adjust rendererConfig for production settings
 */
if (process.env.NODE_ENV === 'production') {
  rendererConfig.devtool = ''

  rendererConfig.plugins.push(
    new MinifyPlugin(),
    new CopyWebpackPlugin([
      {
        from: path.join(__dirname, '../static'),
        to: path.join(__dirname, '../dist/electron/static'),
        ignore: ['.*']
      }
    ]),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  )
}

module.exports = rendererConfig
