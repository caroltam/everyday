module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('./src/css/style.css');
    // Return your Object options:
    return {
      pathPrefix: "everyday",
      dir: {
        input: "src", // default is "."
        output: "_site" // default is "_site"
      }
    }
  };