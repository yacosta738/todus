// https://github.com/michael-ciniawsky/postcss-load-config
const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./src/**/*.vue', './src/**/*.html'],
  defaultExtractor: content => {
  const regExp = new RegExp(/[A-Za-z0-9-_:/]+/g)

  const matchedTokens = []

  let match = regExp.exec(content)

  while (match) {
    if (match[0].startsWith('class:')) {
      matchedTokens.push(match[0].substring(6))
    } else {
      matchedTokens.push(match[0])
    }

    match = regExp.exec(content)
  }

  return matchedTokens
}
});
const  autoprefixer = require('autoprefixer');
const  tailwindcss = require('tailwindcss');
module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-url': {},
    // to edit target browsers: use "browserslist" field in package.json
    autoprefixer,
    tailwindcss,
    ...(process.env.NODE_ENV === "production"
      ? [purgecss, require('cssnano')({ preset: 'default' })]
      : [])
  },
};
