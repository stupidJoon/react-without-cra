const path = require('path');

module.exports = {
  entry: {
    main: './src/index.tsx'
  },
  output: {
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.tsx']
  },
  module: {
    rules: [
      {
        test: /\.tsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}
