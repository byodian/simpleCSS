const postCSSPlugin = require('eleventynano-plugin-postcss');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('docs/images');
  eleventyConfig.addPassthroughCopy('docs/scripts');
  eleventyConfig.addPassthroughCopy('dist');

  eleventyConfig.addLayoutAlias('base', 'base.html');
  eleventyConfig.addPlugin(postCSSPlugin, {
    format: 'scss'
  });

  eleventyConfig.addWatchTarget('./dist/')

  return {
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: {
      input: './docs',
      output: '_site'
    }
  }
}
