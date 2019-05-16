const _ = require('lodash');

module.exports = ({
  icons = {
    'arrow': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.04 12.37"><path d="M.5,6.19H14.35" fill="none" stroke="svgcolor" stroke-linecap="round" stroke-linejoin="round"/><polyline points="8.86 0.5 14.54 6.19 8.86 11.87" fill="none" stroke="svgcolor" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  },
  variants = ['responsive', 'hover'],
}) => {
  return ({ e, addUtilities, theme }) => {
    addUtilities([
      ..._.map(icons, (svg, svg_name) => {
        let colors = theme('colors');
        return _.map(colors, (color, color_name) => {
          let svg64 = encodeURIComponent(svg.replace(/svgcolor/g, color));
          return {
            [`.${e(`bg-svg-${svg_name}-${color_name}`)}`]: {
              ['background-image']: 'url("data:image/svg+xml,' + svg64 + '")',
            },
          }
        })
      })
    ], variants)
  }
}
