import React from 'react';

import ColorItem from './ColorMenuItem';


/* creates color-menu */
export default ({reference, colors, setColorMenu, rgbColor, setRgbColor, setLastColor}) => (
    <div className='select-menu color-select-menu' ref={reference}>
        <div className='select-menu__wrapper'>
            <ul className='select-menu__list'>
                {colors.map((color) => (
                    <ColorItem
                        key={color.title}
                        item={color}
                        setColorMenu={setColorMenu}
                        rgbColor={rgbColor}
                        setRgbColor={setRgbColor}
                        setLastColor={setLastColor}
                    />)
                )}
            </ul>
        </div>
    </div>
);