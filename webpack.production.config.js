const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js'
    },
    devtool: 'cheap-module-source-map',
    output: {
        path: `${__dirname}/dist`,
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|dist)/,
                loaders: ['babel', 'eslint?{failOnError:true}']
            },
            {
                test: /\.json$/,
                loader: 'json'
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract(
                    'style', // The backup style loader
                    'css?sourceMap!sass?sourceMap'
                )
            }
        ]
    },
    plugins: [
        new StyleLintPlugin({
            syntax: 'scss'
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: false
            },
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),
        new ExtractTextPlugin('./index.css')
        // new webpack.DllReferencePlugin({
        //     context: '.',
        //     manifest: require('../shared/dist/vendor-manifest.json')
        // })
    ]
};
