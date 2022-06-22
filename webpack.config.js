//generate a HTML5 file including all webpack bundles in the body using script tags
const HtmlWebpackPlugin = require('html-webpack-plugin');
//path is used to resolve properly across the OS
const path = require('path');
module.exports = {
    //bundle *.js from this entry point
    entry: path.resolve(__dirname, './src/index.js'),
    //create output file to be linked to index.html
    output: {
        filename: '[name].bundle.js',
	path: path.resolve(__dirname, 'build'),
	clean: true,
    },
    //tell Webpack to generate src maps
    devtool: 'inline-source-map',
    module: {
	rules: [
	    //process any .js or .jsx file with Babel and Eslint loader
	    {
		test: /\.(js|jsx)$/,
		exclude: /node_modules/,
		use: [
		    //use babel-loader to transpile these file types
		    'babel-loader',
		    //use esling-loader to hook JavaScript linter ESLint into Webpack
		    'eslint-loader'
		]
	    },
	    //process any .css file with CSS loader
	    {
		test: /\.css$/,
		use: [
		    'style-loader',
		    'css-loader',
		],
	    },
	    //url-loader is required to pull images an fonts for bootstrap
	    {
		test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
		use: [
		    'url-loader',
		],
	    },
	    {
		test: /\.less$/,
		use: [
		    'style-loader',
		    'css-loader',
		    'less-loader',
		],
	    },
	]
    },
    plugins: [
	// create an plugin instance so that you can use it several times anywhere
	new HtmlWebpackPlugin({
	    title: 'Production',
	    template: path.resolve(__dirname, "./public/index.html")
	}),
    ],
    devServer: {
	static: {
	    //tell server to serve from this place
	    directory: path.join(__dirname, '/build'),
	},
    },
};
