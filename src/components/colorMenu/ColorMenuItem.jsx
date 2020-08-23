import React from 'react';

import hex2rgb from '../../utils/hex2rgb';


export default ({item, rgbColor, setRgbColor, setLastColor, setColorMenu, }) => {

    /**
     * Fn to set active color;
     *
     * @param {object} e;
     *
     * @return void;
     */
    const changeColorHandler = e => {
        setRgbColor({
            color: e.target.value,
            rgb: [
                {r: hex2rgb(e.target.value, 'r')},
                {g: hex2rgb(e.target.value, 'g')},
                {b: hex2rgb(e.target.value, 'b')}
            ]
        });

        setLastColor({
            color: e.target.value,
            rgb: [
                {r: hex2rgb(e.target.value, 'r')},
                {g: hex2rgb(e.target.value, 'g')},
                {b: hex2rgb(e.target.value, 'b')}
            ]
        });

        setColorMenu({isColorMenuOpen : false});
    };

    /* creates color-menu item */
    return (
        <li>
            <input
                type="radio"
                name='user-color-group'
                id={item.title}
                checked={rgbColor.color === item.color}
                value={item.color}
                onChange={changeColorHandler}
            />

            <label htmlFor={item.title}>
                <span>{item.title}</span>

                <i style={{backgroundColor: item.color}}/>
            </label>
        </li>
    );
}