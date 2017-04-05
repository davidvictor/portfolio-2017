const path = require('path');

const webpack = require('webpack');
const merge = require('webpack-merge');
const TransferWebpackPlugin = require('transfer-webpack-plugin');

const parts = require('./webpack.parts');

const PATHS = {
	app:   path.join(__dirname, 'src'),
	build: path.join(__dirname, 'build'),
};

const commonConfig = merge([
	{
		context: __dirname,
		node:    {
			console:    true,
			fs:         'empty',
			net:        'empty',
			tls:        'empty',
			__filename: true,
			__dirname:  true
		},
		entry:   {
			app: path.join(__dirname, 'src/index.js'),
		},
		output:  {
			path:       PATHS.build,
			publicPath: '/',
			filename:   '[name].js',
			pathinfo:   true,
		},
		resolve: {
			extensions: ['.js', '.jsx', '.json', '.scss', '.css', '.md', '.graphql'],
			modules:    ['node_modules'],
			alias:      {
				'config':    path.resolve(__dirname, 'config'),
			},
		},
		plugins: [
			new webpack.optimize.OccurrenceOrderPlugin(true),
			new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
		],
	},
	parts.loadCSS(),
	parts.loadJavaScript(),
]);

const productionConfig = merge([
	{
		devtool: 'source-map',
		output:  {
			filename:      '[name].[hash:8].js',
			chunkFilename: '[name].[hash:8].js',
		},
	},
	parts.buildHtml(),
	parts.uglifyJs(),
	parts.extractBundles([{
		name:      'vendor',
		minChunks: ({userRequest}) => (
			userRequest &&
			userRequest.indexOf('node_modules') >= 0 &&
			userRequest.match(/\.js$/)
		)
	}]),
	parts.setFreeVariable('process.env.NODE_ENV', 'production'),
	parts.clean(PATHS.build),
	parts.assetBanner(),
	//parts.uploadS3(),
]);

const localConfig = merge([
	{
		devtool: 'eval-source-map',
		plugins: [
			new TransferWebpackPlugin([{
				from: 'public/images',
				to:   'images'
			}], path.resolve(__dirname, './')),
		]
	},
	parts.buildHtml(true),
	parts.devServer(),
	parts.setFreeVariable('process.env.NODE_ENV', 'local'),
]);

const testConfig = merge([
	{
		devtool: 'eval-source-map',
		output:  {
			filename:      '[name].js',
			chunkFilename: '[name].js',
		},
	},
	parts.buildHtml(),
	parts.extractBundles([{
		name:      'vendor',
		minChunks: ({userRequest}) => (
			userRequest &&
			userRequest.indexOf('node_modules') >= 0 &&
			userRequest.match(/\.js$/)
		)
	}]),
	parts.clean(PATHS.build),
	parts.assetBanner(),
	parts.setFreeVariable('process.env.NODE_ENV', 'test'),
	parts.checkDuplicates(),
	parts.getStats(),
]);

module.exports = function(env) {
	process.env.BABEL_ENV = env;
	if (env === 'production') {
		return merge(commonConfig, productionConfig);
	}
	if (env === 'local') {
		return merge(commonConfig, localConfig);
	}
	if (env === 'test') {
		return merge(commonConfig, testConfig);
	}
};
