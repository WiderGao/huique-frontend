module.exports = {
  pages: {
    desktop: {
      entry: 'src/desktop/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'Index Page',
      chunks: ['chunk-vendors', 'chunk-common', 'desktop']
    },
  }
}
