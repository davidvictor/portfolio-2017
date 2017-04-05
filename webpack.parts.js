const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const S3Plugin = require('webpack-s3-plugin');
const StatsPlugin = require('stats-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const GitRevisionPlugin = require('git-revision-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const WebpackBuildNotifierPlugin = require('webpack-build-notifier');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin');

const gitRevisionPlugin = new GitRevisionPlugin({
	lightweightTags: true,
});

const extractStyle = new ExtractTextPlugin({
	filename:  `[name].[hash:8].css`,
	allChunks: true
});

const extractGlobalStyle = new ExtractTextPlugin({
	filename:  `global.[hash:8].css`,
	allChunks: true
});

const gitTag = gitRevisionPlugin.commithash().slice(0, 5);

//console.log(gitTag);

exports.buildHtml = function(local) {
	const index = local ? 'src/template/index-local.html' : 'src/template/index.html';
	return {
		plugins: [
			new HtmlWebpackPlugin({
				title:    'David Victor 🕴 Product Innovator',
				template: path.resolve(__dirname, index),
				filename: 'index.html',
			}),
		],
	};
};

exports.devServer = function() {
	return {
		devServer: {
			contentBase:        'build',
			hotOnly:            true,
			open:               false,
			stats:              'errors-only',
			port:               3000,
			publicPath:         '/',
			proxy:              {
				'/graphql': {
					target: 'http://localhost:9000/graphql',
					secure: false
				},
				'/auth/*':  {
					target: 'http://localhost:3399',
					secure: false
				}
			},
			historyApiFallback: true,
			overlay:            {
				errors:   true,
				warnings: true,
			},
		},
		//entry:     [
		//'webpack-dev-server/client?http://localhost:3000',
		//'webpack/hot/dev-server',
		//	],
		plugins:   [
			new webpack.HotModuleReplacementPlugin(),
			new webpack.NamedModulesPlugin(),
			new BrowserSyncPlugin({
				host:   '10.0.1.41',
				port:   3001,
				proxy:  'http://localhost:3000/',
				ui:     false,
				notify: false,
			}, {
				reload: true
			}),
			new WebpackBuildNotifierPlugin({
				title:                   "Fucking Webpack",
				sound:                   "Pop",
				failureSound:            "Basso",
				activateTerminalOnError: false,
			}),
		],
	};
};

exports.loadCSS = function() {
	return {
		module:  {
			rules: [
				{
					test:    /\.css$/,
					use:     extractGlobalStyle.extract({
						fallback: 'style-loader',
						loader:   [
							'css-loader',
						],
					}),
					include: [
						/node_modules/,
					]
				},
				{
					test:    /\.scss$/,
					loader:  extractStyle.extract({
						fallback: 'style-loader',
						use:      [
							{
								loader: 'css-loader',
								query:  {
									modules:        true,
									sourceMap:      true,
									importLoaders:  true,
									localIdentName: '[name]_[local]_[hash:base64:5]',
								},
							},
							{
								loader:  'postcss-loader',
								options: {
									plugins: function() {
										return [
											require("autoprefixer")
										];
									}
								}
							},
							{
								loader: 'sass-loader',
								query:  {
									//modules:        true,
									sourceMap:      true,
									outputStyle:    'compressed',
									sourceComments: false,
									//localIdentName: '[name]_[local]_[hash:base64:5]',
								},
							}
						],
					}),
					exclude: [
						/src\/styles\/global\.scss/,
						/node_modules/,
					]
				},
				{
					test:    /\.scss$/,
					use:     extractStyle.extract({
						fallback: 'style-loader',
						use:      [
							'css-loader',
							{
								loader:  'postcss-loader',
								options: {
									plugins: function() {
										return [
											require("autoprefixer")
										];
									}
								}
							},
							{
								loader: 'sass-loader',
								query:  {
									sourceMap:      false,
									outputStyle:    'compressed',
									sourceComments: false,
								}
							}
						],
					}),
					include: [
						/node_modules/,
					],
					exclude: [
						/src\/styles\/global\.scss/,
					],
				},
				{
					test:    /\.scss$/,
					use:     extractGlobalStyle.extract({
						fallback: 'style-loader',
						use:      [
							'css-loader',
							{
								loader:  'postcss-loader',
								options: {
									plugins: function() {
										return [
											require("autoprefixer")
										];
									}
								}
							},
							{
								loader: 'sass-loader',
								query:  {
									sourceMap:      false,
									outputStyle:    'compressed',
									sourceComments: false,
								}
							}
						],
					}),
					include: [
						/src\/styles\/global\.scss/,
					]
				},
			],
		},
		plugins: [
			extractGlobalStyle,
			extractStyle,
			new webpack.LoaderOptionsPlugin({
				test:    /\.(scss|css)$/,
				options: {
					context: __dirname,
					postcss: [autoprefixer],
				}
			})
		]
	};
};

exports.loadJavaScript = function() {
	return {
		module:  {
			rules: [
				{
					test:    /\.(js$|jsx$)/,
					include: [
						path.resolve(__dirname, 'src/'),
						path.resolve(__dirname, 'config/'),
					],
					loader:  'babel-loader',
					query:   {
						presets: ['es2015', 'react'],
						plugins: [
							'lodash',
							'transform-class-properties',
							'transform-object-rest-spread',
							'transform-decorators-legacy',
							'transform-runtime',
							'jsx-control-statements',
						]
					}
				},
			],
		},
		plugins: [
			new LodashModuleReplacementPlugin,
		]
	};
};

exports.loadGraphQl = function() {
	return {
		module: {
			rules: [
				{
					test:    /\.(graphql|gql)$/,
					use:     'graphql-tag/loader',
					exclude: [/node_modules/,]
				},
			],
		},
	};
};

exports.loadHtml = function() {
	return {
		module: {
			rules: [
				{
					test: /\.html$/,
					use:  'html-loader',
				}
			],
		},
	};
};

exports.loadFile = function() {
	return {
		module: {
			rules: [
				{
					test:   /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
					loader: 'file'
				}
			],
		},
	};
};

exports.clean = function(path) {
	return {
		plugins: [
			new CleanWebpackPlugin([path]),
		],
	};
};

exports.assetBanner = function() {
	return {
		plugins: [
			new webpack.BannerPlugin({
				banner: gitRevisionPlugin.version(),
			}),
		],
	};
};

exports.extractBundles = function(bundles) {
	const entry = {};
	const plugins = [];
	
	bundles.forEach((bundle) => {
		const {name, entries} = bundle;
		
		if (entries) {
			entry[name] = entries;
		}
		
		plugins.push(
			new webpack.optimize.CommonsChunkPlugin(bundle)
		);
	});
	
	return {entry, plugins};
};

exports.setFreeVariable = function(key, value) {
	const env = {};
	env[key] = JSON.stringify(value);
	return {
		plugins: [
			new webpack.DefinePlugin(env),
		],
	};
};

exports.uglifyJs = function(mangle) {
	let ops;
	if (mangle) {
		ops = {
			minimize:   true,
			sourceMap:  true,
			mangle:     {
				except:      ['webpackJsonp'],
				screw_ie8:   true,
				keep_fnames: true,
			},
			comments:   false,
			compressor: {
				warnings: false,
			}
		}
	} else {
		ops = {
			minimize:   false,
			sourceMap:  true,
			mangle:     false,
			comments:   false,
			compressor: {
				warnings: false,
			}
		}
	}
	return {
		plugins: [
			new webpack.optimize.UglifyJsPlugin(ops),
		]
	}
};

exports.useCDN = function() {
	return {
		output: {
			publicPath: 'https://cdn.amptu.be/assets',
		}
	}
};

exports.uploadS3 = function() {
	//if (!env) {
	//	console.log('NO s3 upload env specified');
	//	return
	//}
	return {
		output:  {
			publicPath: `//beta.davidvictor.me/`,
		},
		plugins: [
			new CompressionPlugin({
				asset:     "[path].gz[query]",
				algorithm: "gzip",
				test:      /\.js$|\.css$/,
				threshold: 10240,
				minRatio:  0.8
			}),
			new S3Plugin({
				//exclude:         /.*\.html$/,
				basePath:        ``,
				s3Options:       {
					accessKeyId:     'AKIAIIKHGJNPGLCD43JQ',
					secretAccessKey: '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',
					region:          'us-west-1'
				},
				s3UploadOptions: {
					Bucket: 'beta.davidvictor.me',
					/**
					 * @return {string}
					 */
					ContentEncoding(fileName) {
						if (/\.gz/.test(fileName))
							return 'gzip';
					},
					/**
					 * @return {string}
					 */
					ContentType(fileName) {
						if (/\.js/.test(fileName)) {
							return 'application/javascript';
						} else if (/\.css/.test(fileName)) {
							return 'text/css';
						} else {
							return 'text/plain';
						}
					}
				},
			}),
		]
	}
};

exports.checkDuplicates = function() {
	return {
		plugins: [
			new DuplicatePackageCheckerPlugin()
		]
	}
};

exports.getStats = function() {
	return {
		profile: true,
		plugins: [
			new StatsPlugin('stats.json', {
				chunkModules: true,
				//exclude: [/node_modules[\\\/]react/]
			})
		]
	}
};
