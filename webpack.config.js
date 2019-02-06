var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: "./src/app.ts",
    output: {
        path: __dirname,
        filename: "./build/bundle.min.js"
    },
    resolve: {
      extensions: ['css','.ts', 'js'],
        alias: {
            phaser: path.join(__dirname, 'node_modules/phaser/dist/phaser.min.js')
            
           
        }
    },
    plugins: [
     /* new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            output: {comments: false},
            screw_ie8: true
        })*/
    ],
    module: {
        rules: [
              
              { test: require.resolve('./node_modules/phaser/dist/phaser.min.js'),
                use: [{
                loader: 'expose-loader',
                options: 'Phaser'
               }]
            },
           
            { test: /.ts$/, loader: 'awesome-typescript-loader', exclude: '/node_modules/'}
        ]
    }
};
