const _map = require('lodash/map');
const flattenColorPalette = require("tailwindcss/lib/util/flattenColorPalette");
const plugin = require('tailwindcss/plugin');

const bgSvg = plugin(
  function ({ e, addUtilities, theme }) {
    const values = theme('bgSvg');
    addUtilities([
      ..._map((0, flattenColorPalette.default)(theme('colors')), (value, modifier) => {
        return _map(values, (svg, svg_name) => {
          let svg64 = encodeURIComponent(svg.replace(/svgcolor/g, value));
          return {
            [`.${e(`bg-svg-${svg_name}-${modifier}`)}`]: {
              ['background-image']: 'url("data:image/svg+xml,' + svg64 + '")',
            },
          }
        })
      })
    ]
    )
  },
  {
    theme: {
      bgSvg: {
        'arrow': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.04 12.37"><path d="M.5,6.19H14.35" fill="none" stroke="svgcolor" stroke-linecap="round" stroke-linejoin="round"/><polyline points="8.86 0.5 14.54 6.19 8.86 11.87" fill="none" stroke="svgcolor" stroke-linecap="round" stroke-linejoin="round"/></svg>'
      },
    },
  }
);

module.exports = bgSvg;
