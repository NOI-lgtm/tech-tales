module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");

  eleventyConfig.addFilter(
    "dateDisplay",
    require("./src/filters/date-display.js")
  );

  eleventyConfig.addCollection("posts", function (collectionApi) {
    return collectionApi
      .getFilteredByGlob("src/posts/*.md")
      .filter((item) => {
        return !item.inputPath.endsWith("index.md");
      })
      .sort((a, b) => {
        return b.date - a.date;
      });
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_layouts",
      data: "_data",
    },
  };
};
