'use strict'

const cssnanoConfig = {
  preset: 'default'
}

module.exports = context => {
  return {
    parser: context.env === 'DOCS' ? 'postcss-scss' : false,
    plugins: {
      'postcss-import': context.env === 'DOCS',
      'postcss-nested': context.env === 'DOCS',
      'autoprefixer': {
        cascade: false
      },
      'cssnano': context.env === 'production' ? cssnanoConfig : false,
      'rtlcss': context.env === 'RTL',
    }
  }
}
