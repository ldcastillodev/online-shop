const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind')
const { join } = require('path')

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require(join(__dirname, '../../tailwind.preset.js'))],
  content: [join(__dirname, './**/*.{tsx,ts,js,mjs,html}'), ...createGlobPatternsForDependencies(__dirname)],
}
