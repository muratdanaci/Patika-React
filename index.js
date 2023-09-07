import slugify from "slugify"; // var slugify = require("slugify")

const title = slugify("some string lorem ipsum", "_");

console.log(title);
