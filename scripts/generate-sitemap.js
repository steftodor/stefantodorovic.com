const sitemap = require("nextjs-sitemap-generator");
const path = require('path');

const pagesDirectory = path.resolve(__dirname, '../out/');
const targetDirectory = path.resolve(__dirname, '../out/');

const map = sitemap({
  baseUrl: "https://stefantodorovic.com",
  pagesDirectory: pagesDirectory,
  targetDirectory: targetDirectory,
  ignoredExtensions: ["js", "map", "json", "css", "md"],
  ignoredPaths: ["assets", "404"], // Exclude everything that isn't static page
});
