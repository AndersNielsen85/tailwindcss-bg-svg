# Background svg Tailwind Plugin

## Installation

Add this plugin to your project:

```bash
# Install via npm
npm install --save-dev tailwind-bg-svg

# or yarn
yarn add tailwind-bg-svg --dev
```

## Usage

The Background svg plugin exposes options for you to use. The plugin will use your existing tailwind colors.
Here is the example for adding it to your project plugins


```js
let colors = {
  'black': '#22292f',
  'grey-darkest': '#3d4852',
}

module.exports = {
  plugins: [
    require('tailwindcss-bg-svg')({
      icons: {
        'arrow': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.04 12.37"><path d="M.5,6.19H14.35" fill="none" stroke="svgcolor" stroke-linecap="round" stroke-linejoin="round"/><polyline points="8.86 0.5 14.54 6.19 8.86 11.87" fill="none" stroke="svgcolor" stroke-linecap="round" stroke-linejoin="round"/></svg>',
      }
    }),
  ],
}
```

This configuration would create the following classes:

```css
.bg-svg-arrow-black { background-image: 100%; }
.bg-svg-arrow-grey-darkest { background-image: 100%; }
```
