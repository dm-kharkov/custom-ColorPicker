/**
 * Fn to convert hex 2 rgb
 *
 * @param {string} color;
 * @param {string} filter;
 *
 * @return object || number;
 */
export default function hex2rgb(color, filter) {
    let bigint = parseInt(color.split('#')[1], 16);
    let r = (bigint >> 16) & 255;
    let g = (bigint >> 8) & 255;
    let b = bigint & 255;

    switch(filter) {
        case 'r' : return r;
        case 'g' : return g;
        case 'b' : return b;
        default: return {r:r, g:g, b:b};
    }
}