const Amsify = require('suggestags')

const tags = new Amsify($('input[name="techs"]'))

tags._settings({
  suggestions: ['Black', 'White', 'Red', 'Blue', 'Green', 'Orange']
})
tags._init()
