const postCSSPlugin = require('eleventynano-plugin-postcss');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('images');
  eleventyConfig.addPassthroughCopy('scripts');

  eleventyConfig.addLayoutAlias('base', 'base.html');
  eleventyConfig.addPlugin(postCSSPlugin);

  return {
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: {
      input: '.',
      output: './_site'
    }
  }
}
