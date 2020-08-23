/**
 * Fn to convert rgb 2 hex
 *
 * @param {string || number} r;
 * @param {string || number} g;
 * @param {string || number} b;
 *
 * @return string;
 */
export default function rgb2hex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}