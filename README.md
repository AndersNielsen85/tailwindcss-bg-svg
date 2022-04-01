# Background svg Tailwind Plugin

## V2 breaking change
The configuration has been moved from plugin to utility.
This should allow for on-the-fly adding icons with HMR.

If you are coming from pre v2 you will need to move your configuration.

[Looking for the the V1 documentation?](https://github.com/AndersNielsen85/tailwindcss-bg-svg/tree/v1)

## Installation

Add this plugin to your project:

```bash
# Install via npm
npm install --save-dev tailwindcss-bg-svg

# or yarn
yarn add tailwindcss-bg-svg --dev
```

## Usage

The Background svg plugin exposes options for you to use. The plugin will use your existing tailwind colors.
It works by replacing "svgcolor" with the color code and base64 encoding the svg.
Remember to set your fill/stroke to svgcolor

Example code for using the plugin.

```js
let colors = {
  'black': '#22292f',
  'grey': {
    '100': '#3d4852',
  },
}

module.exports = {
  theme: {
    bgSvg: {
        'arrow': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.04 12.37"><path d="M.5,6.19H14.35" fill="none" stroke="svgcolor" stroke-linecap="round" stroke-linejoin="round"/><polyline points="8.86 0.5 14.54 6.19 8.86 11.87" fill="none" stroke="svgcolor" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    }
    // ...
  },
  plugins: [
    require('tailwindcss-bg-svg'),
    // ...
  ],
}
```

This configuration would create the following classes:

```css
.bg-svg-arrow-black{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.99 25'%3E%3Cpath d='M24.65 21.61l-4.87-4.87a1.16 1.16 0 0 0-.78-.34h-.8a10.14 10.14 0 1 0-1.75 1.75V19a1.16 1.16 0 0 0 .34.83l4.87 4.87a1.17 1.17 0 0 0 1.65 0l1.38-1.38a1.16 1.16 0 0 0-.04-1.71zm-14.5-5.22a6.25 6.25 0 1 1 6.25-6.25 6.24 6.24 0 0 1-6.25 6.25z' fill='%2322292f'/%3E%3C/svg%3E")}
.bg-svg-arrow-grey-100{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.99 25'%3E%3Cpath d='M24.65 21.61l-4.87-4.87a1.16 1.16 0 0 0-.78-.34h-.8a10.14 10.14 0 1 0-1.75 1.75V19a1.16 1.16 0 0 0 .34.83l4.87 4.87a1.17 1.17 0 0 0 1.65 0l1.38-1.38a1.16 1.16 0 0 0-.04-1.71zm-14.5-5.22a6.25 6.25 0 1 1 6.25-6.25 6.24 6.24 0 0 1-6.25 6.25z' fill='%233d4852'/%3E%3C/svg%3E")}
```
