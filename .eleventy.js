
module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('src/css/style.css');
    eleventyConfig.addPassthroughCopy("src/static/images");

    // Return your Object options:
    return {
        // markdownTemplateEngine: "njk",
        // htmlTemplateEngine: "njk",
        pathPrefix: "/everyday/",
        dir: {
            input: "src", // default is "."
            output: "_site" // default is "_site"
        }
    }
  };