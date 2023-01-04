'use strict'

const cssnanoConfig = {
  preset: 'default'
}

module.exports = context => {
  const scss = context.file.extname === '.scss';
  const docEnv = context.env === 'DOCS'

  return {
    parser: scss ? 'postcss-scss' : false,
    plugins: {
      'autoprefixer': { cascade: false },
      'postcss-sort-media-queries': {},
      'postcss-advanced-variables': docEnv,
      'postcss-map-get': docEnv,
      'postcss-nested': docEnv,
      'cssnano': context.env === 'production' ? cssnanoConfig : false,
      'rtlcss': context.env === 'RTL',
    }
  }
}
