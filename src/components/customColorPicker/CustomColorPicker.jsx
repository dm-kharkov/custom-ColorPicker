import React, { useState } from 'react';

import useOutsideClick from '../../hooks/outsideClick';
import hex2rgb from '../../utils/hex2rgb';

import RgbMenu from '../rgbMenu/RgbMenu';
import ColorMenu from '../colorMenu/ColorMenu';

import './_customColorPicker.scss';


export default ({value, onChange, colors}) => {

    /* State to looking is rgb menu open or closed */
    const [rbgMenu, setRgbMenu] = useState({isRbgMenuOpen : false});

    /* State to looking is color menu open or closed */
    const [colorMenu, setColorMenu] = useState({isColorMenuOpen : false});
    
    /**
     * Fn to opens/closes menu;
     * 
     * @param {object} e;
     *
     * @return void;
     */
    const openCloseMenuHandler = e => {
        if (e.target.id === 'rgb-btn' && e.target.checked) {
            setColorMenu({isColorMenuOpen: false});
            setRgbMenu({isRbgMenuOpen: !rbgMenu.isRbgMenuOpen});
        }

        else if (e.target.id === 'color-btn' && e.target.checked) {
            setRgbMenu({isRbgMenuOpen: false});
            setColorMenu({isColorMenuOpen: !colorMenu.isColorMenuOpen});
        }

        else {
            setRgbMenu({isRbgMenuOpen: false});
            setColorMenu({isColorMenuOpen: false});
        }
    };

    /* State to looking when outside click */
    const [outsideClick, ref] = useOutsideClick();

    /**
     * Fn to closes all menu when outside click;
     *
     * @param {object} ref;
     * @param {object} e;
     *
     * @return void;
     */
    outsideClick(ref, e => {
        if (rbgMenu.isRbgMenuOpen || colorMenu.isColorMenuOpen) {
            openCloseMenuHandler(e);
        }
    });

    /* State for the current RGB color */
    const [rgbColor, setRgbColor] = useState({
        color: value,
        rgb: [
            {r: hex2rgb(value, 'r')},
            {g: hex2rgb(value, 'g')},
            {b: hex2rgb(value, 'b')}
        ]
    });

    /* State for the last active color */
    const [lastColor, setLastColor] = useState({
        color: value,
        rgb: [
            {r: hex2rgb(value, 'r')},
            {g: hex2rgb(value, 'g')},
            {b: hex2rgb(value, 'b')}
        ]
    });

/*----------------------------------------------------------
    CustomColorPicker component
----------------------------------------------------------*/
    return (
        <article className='color-picker'>
            <div className='color-picker__tool'>
                <strong>{rgbColor.color}</strong>
    
                <div className='user-controls'>
                    <label
                        htmlFor="rgb-btn"
                        className='user-controls__btn'
                        title='press to select RGB'>
                            <input
                                type="checkbox"
                                name='user-color'
                                id='rgb-btn'
                                checked={rbgMenu.isRbgMenuOpen}
                                onChange={openCloseMenuHandler}
                            />

                            <span
                                className='icon-square'
                                style={{backgroundColor: 'rgb(' + rgbColor.rgb[0].r + ','
                                                                + rgbColor.rgb[1].g + ','
                                                                + rgbColor.rgb[2].b + ')'
                                }}
                            />
                    </label>

                    <label
                        htmlFor="color-btn"
                        className='user-controls__btn'
                        title='press to select color'>
                            <input
                                type="checkbox"
                                name='user-rgb'
                                id='color-btn'
                                checked={colorMenu.isColorMenuOpen}
                                onChange={openCloseMenuHandler}
                            />

                            <span className='icon-arrow'/>
                    </label>

                    { rbgMenu.isRbgMenuOpen
                        && <RgbMenu
                                reference={ref}
                                colors={colors}
                                rbgMenu={rbgMenu}
                                setRgbMenu={setRgbMenu}
                                rgbColor={rgbColor}
                                setRgbColor={setRgbColor}
                                lastColor={lastColor}
                                setLastColor={setLastColor}
                                openCloseMenuHandler={openCloseMenuHandler}
                                onChange={onChange}
                           />
                    }

                    { colorMenu.isColorMenuOpen
                        && <ColorMenu
                                reference={ref}
                                colors={colors}
                                colorMenu={colorMenu}
                                setColorMenu={setColorMenu}
                                rgbColor={rgbColor}
                                setRgbColor={setRgbColor}
                                setLastColor={setLastColor}
                                openCloseMenuHandler={openCloseMenuHandler}
                           />
                    }
                </div>
            </div>
        </article>
    );
};