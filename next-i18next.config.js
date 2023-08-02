const path = require("path");

/** @type {import('next-i18next').UserConfig} */
module.exports = {
  i18n: {
    defaultLocale: "pt-BR",
    locales: ["pt-BR", "en"],
  },
  localePath: path.resolve("./public/locales"),
};
