import React, { useState } from 'react';

import rgb2hex from '../../utils/rgb2hex';


export default ({item ,rgbColor, setRgbColor, setActionBtn}) => {

    /* State to rgb item */
    const [indicator, setIndicator] = useState((Object.values(item) * -1));

    /**
     * Fn to set rgb in active color;
     *
     * @param {object} e;
     *
     * @return void;
     */
    const changeRgbHandler = e => {
        setIndicator(e.target.value);

        if (e.target.id === 'r') {
            setRgbColor({
                color: rgb2hex(Math.abs(e.target.value), rgbColor.rgb[1].g, rgbColor.rgb[2].b),
                rgb: [
                    {r: e.target.value * -1},
                    {g: rgbColor.rgb[1].g},
                    {b: rgbColor.rgb[2].b}
                ]
            });
        }

        else if (e.target.id === 'g') {
            setRgbColor({
                color: rgb2hex(rgbColor.rgb[0].r, Math.abs(e.target.value), rgbColor.rgb[2].b),
                rgb: [
                    {r: rgbColor.rgb[0].r},
                    {g: e.target.value * -1},
                    {b: rgbColor.rgb[2].b}
                ]
            });
        }

        else {
            setRgbColor({
                color: rgb2hex(rgbColor.rgb[0].r, rgbColor.rgb[1].g, Math.abs(e.target.value)),
                rgb: [
                    {r: rgbColor.rgb[0].r},
                    {g: rgbColor.rgb[1].g},
                    {b: e.target.value * -1}
                ]
            });
        }

        setActionBtn(true);
    };

    /* creates rgb-menu item */
    return (
        <li>
            <span className='item-title'>{Object.keys(item)}</span>

            <label htmlFor={Object.keys(item)}>
                <input
                    type="range"
                    id={Object.keys(item)}
                    min={-255}
                    max={0}
                    step={1}
                    value={indicator}
                    onChange={changeRgbHandler}
                />

                <span className={"progress-line " + Object.keys(item)}/>
            </label>
        </li>
    );
};