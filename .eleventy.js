module.exports = config => {
  config.setBrowserSyncConfig({
    files: [
      './public/css/**/*.css',
      './public/js/**/*.js'
    ]
  })

  config.addPassthroughCopy('src/images')
  config.addPassthroughCopy('src/js')

  config.addPassthroughCopy({
    'node_modules/alpinejs/dist/cdn.min.js': 'js/alpine.min.js'
  })

  return {
    dir: {
      input: 'src',
      output: 'public'
    }
  }
}
