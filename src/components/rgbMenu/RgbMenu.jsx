import React, {useState} from 'react';

import RGBrItem from './RgbItemMenu';


export default ({reference, colors, rbgMenu, setRgbMenu, rgbColor, setRgbColor, lastColor, setLastColor, onChange}) => {
    /* State to activate Cancel\Ok buttons */
    const [actionBtn, setActionBtn] = useState(rgbColor.color !== lastColor.color);

    /**
     * Fn to cancel modified color and returned to initial state;
     *
     * @return void;
     */
    const cancelColor = () => {
        setRgbColor(lastColor);
        setActionBtn(!actionBtn);
    };

    /**
     * Fn to save modified color and update colors menu;
     *
     * @return object;
     */
    const applyColor = () => {
        const newColorsList = [];

        colors.map((item) => {
            let newColor = {};

            item.color === lastColor.color
                ? newColor = {title: rgbColor.color, color: rgbColor.color}
                : newColor = {title: item.title, color: item.color };

            newColorsList.push(newColor);

            return newColorsList;
        });

        setLastColor(rgbColor);
        setRgbMenu({isRbgMenuOpen: !rbgMenu.isRbgMenuOpen});

        return onChange({
            colorsList: newColorsList,
            defaultColor: rgbColor.color
        });
    };

    /* creates rgb-menu */
    return (
        <div className='select-menu rgb-select-menu' ref={reference}>
            <div className='select-menu__wrapper'>
                <ul className='select-menu__list'>
                    {rgbColor.rgb.map((rgb) => (
                        <RGBrItem
                            key={Object.keys(rgb)}
                            item={rgb}
                            rgbColor={rgbColor}
                            setRgbColor={setRgbColor}
                            lastColor={lastColor}
                            setActionBtn={setActionBtn}
                        />
                    ))}

                    <li className={actionBtn ? 'btn-group active-btn-group' : 'btn-group'}>
                        <button
                            className='rgb-btn cancel-btn'
                            onClick={cancelColor}
                            aria-label='Cancel modified color'>Cancel</button>

                        <button
                            className='rgb-btn accept-btn'
                            onClick={applyColor}>Ok</button>
                    </li>
                </ul>
            </div>
        </div>
    );
};