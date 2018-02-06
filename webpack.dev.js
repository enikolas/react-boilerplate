const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');

const common = require('./webpack.common.js');

module.exports = merge(common, {
	devtool: 'cheap-module-eval-source-map',
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		port: 3000,
		hot: true
	},
	plugins: [
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin()
	],
	output: {
		filename: '[name].bundle.js'
	}
});
