const replaceInFiles = require("replace-in-files");
const path = require("path");

const options = {
  // See more: https://www.npmjs.com/package/globby
  // Single file or glob
  files: __dirname + "/../fr/build/**/*.html",

  // See more: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
  // Replacement
  from: /lang="en"/g, // string or regex
  to: 'lang="fr"', // string or fn  (fn: carrying last argument - path to replaced file)

  // See more: https://www.npmjs.com/package/glob
  optionsForFiles: {
    // default
    ignore: ["**/node_modules/**"],
  },
};

(async () => {
  console.log(options);
  await replaceInFiles(options);
})();
