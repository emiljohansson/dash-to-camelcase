'use strict'

const capitalize = require('capitalize')

module.exports = string => string
  .split('-')
  .map((word, i) => {
    if (i < 1) {
      return word
    }
    return capitalize(word)
  })
  .join()
  .replace(/,/g, '')
