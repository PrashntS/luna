# Luna Lovegood

module.exports = config:
  paths:
    watched: ['luna']

  plugins:
    autoReload:
      enabled: yes
    coffeelint:
      pattern: /^luna\/.*\.(coffee)$/
      useCoffeelintJson: yes
    jaded:
      staticPatterns: /^luna\/markup\/([\d\w]*)\.jade$/
    postcss:
      processors: [
        require('autoprefixer')(['last 8 versions'])
      ]
    stylus:
      plugins: [
        'jeet'
        'bootstrap-styl'
      ]

  npm:
    enabled: yes
    styles:
      'normalize.css': [
        'normalize.css'
      ]

  modules:
    nameCleaner: (path) ->
      path
        .replace /^luna\//, ''
        .replace /\.coffee/, ''

  files:
    javascripts:
      joinTo:
        'js/libraries.js': /^(?!luna\/)/
        'js/app.js': /^luna\//
    stylesheets:
      joinTo:
        'css/libraries.css': /^(?!luna\/)/
        'css/app.css': /^luna\//
