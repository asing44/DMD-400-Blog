module.exports = (config) => {
  config.addPassthroughCopy({ 'src/assets/js': 'assets/js' });
  config.addPassthroughCopy({ 'src/assets/rive': 'assets/rive/' });
  config.addPassthroughCopy({ 'src/assets/img': 'assets/img' });
  config.addPassthroughCopy({ 'src/posts/img/**/!(*.DS_Store)': 'assets/img' });

  config.addWatchTarget("src/assets/js/");

  config.addLayoutAlias('default', 'layouts/default.njk');
  config.addLayoutAlias('post', 'layouts/post.njk');

  config.addFilter('readableDate', require('./lib/filters/readableDate'));
  config.addFilter('minifyJs', require('./lib/filters/minifyJs'));

  config.addTransform('minifyHtml', require('./lib/transforms/minifyHtml'));

  config.addCollection('posts', require('./lib/collections/posts'));
  config.addCollection('tagList', require('./lib/collections/tagList'));
  config.addCollection('pagedPosts', require('./lib/collections/pagedPosts'));
  config.addCollection('pagedPostsByTag', require('./lib/collections/pagedPostsByTag'));

  config.setBrowserSyncConfig({
    open: true,
    online: true,
    server: {
      baseDir: "dist/DMD-400-Blog"
    },
  });

  return {
    dir: {
      input: 'src',
      output: 'dist'
    },
    templateFormats: ['md', 'njk', 'html'],
    dataTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    pathPrefix: "/DMD-400-Blog/"
  };
};
