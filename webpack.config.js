const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = {
    target: 'node',
    entry: './src/interface/server/app.ts',
    module: {
        rules: [{
            test: /\.ts$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }]
    },
    optimization: {
        minimize: true
    },
    devtool: 'source-map',
    output: {
        filename: '[name].js',
        library: {
          type: 'commonjs'
        }
    },
    resolve: {
        extensions: ['.ts', '...'],
        plugins: [new TsconfigPathsPlugin()]
    }
}