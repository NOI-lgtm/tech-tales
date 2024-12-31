const fs = require("fs");
const postcss = require("postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const postcssImport = require("postcss-import");

module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("src/assets/css");
  eleventyConfig.addBundle("css");
  eleventyConfig.addPassthroughCopy("src/assets/images");
  eleventyConfig.addPassthroughCopy("src/assets/fonts");

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

  eleventyConfig.addTransform("postcss", async (content, outputPath) => {
    if (outputPath && outputPath.endsWith(".html")) {
      const css = fs.readFileSync("src/assets/css/main.css", "utf8");
      const result = await postcss([
        postcssImport,
        autoprefixer,
        cssnano,
      ]).process(css, {
        from: "src/assets/css/main.css",
        to: "src/assets/css/main.css",
      });

      return content.replace("</head>", `<style>${result.css}</style></head>`);
    }
    return content;
  });

  eleventyConfig.setBrowserSyncConfig({
    files: ["_site/assets/css/**/*.css"],
    open: true,
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data",
    },
  };
};
