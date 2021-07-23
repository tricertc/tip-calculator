module.exports = config => {
  config.setBrowserSyncConfig({
    files: [
      './public/css/**/*.css',
      './public/js/**/*.js'
    ]
  })

  config.addPassthroughCopy('src/images')
  config.addPassthroughCopy('src/js')

  return {
    dir: {
      input: 'src',
      output: 'public'
    }
  }
}
