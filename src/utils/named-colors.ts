import { ColorDict } from './types';

/* NOTE: colors from clrs.cc - A nicer color palette for the web...
 */
const navy: string = '#001f3f';
const blue: string = '#0074d9';
const aqua: string = '#7fdbff';
const teal: string = '#39cccc';
const olive: string = '#3d9970';
const green: string = '#2ecc40';
const lime: string = '#01ff70';
const yellow: string = '#ffdc00';
const orange: string = '#ff851b';
const red: string = '#ff4136';
const maroon: string = '#85144b';
const fuchsia: string = '#f012be';
const purple: string = '#b10dc9';
const black: string = '#111111';
const gray: string = '#aaaaaa';
const silver: string = '#dddddd';

const bada55: string = '#bada55';
const slate: string = '#708090';
const slate4: string = '#4e5964';
const white: string = '#ffffff';

// NOTE:  this is ONLY used internally...
const _namedColors: ColorDict = {
  bada55,
  navy,
  blue,
  aqua,
  teal,
  olive,
  green,
  lime,
  yellow,
  orange,
  red,
  maroon,
  fuchsia,
  purple,
  black,
  gray,
  silver,
};

const _altColors: ColorDict = {
  slate,
  slate4,
  white,
};

const colorFor = (key: string) => _namedColors[key] || _altColors[key];

const colorKeys: string[] = Object.keys(_namedColors);

export {
  navy,
  blue,
  aqua,
  teal,
  olive,
  green,
  lime,
  yellow,
  orange,
  red,
  maroon,
  fuchsia,
  purple,
  black,
  gray,
  silver,
  bada55,
  slate,
  slate4,
  white,
  colorFor,
  colorKeys,
};
export default colorFor;
