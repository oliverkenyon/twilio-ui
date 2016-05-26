var pp = require('preprocess');

var context = require("./config.json");

pp.preprocessFileSync("src/util/Config.ts", "src/util/Config.ts", context);
