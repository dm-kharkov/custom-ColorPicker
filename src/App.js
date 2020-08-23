import React, { useState } from 'react';

import appConfig from '../src/config/color-menu-config';
import ColorPicker from '../src/components/customColorPicker/CustomColorPicker';

import './App.scss';


export default () => {

    const MAIN_TITLE = 'Click for the arrow or color square to start choosing color';

    /*  State for the CustomColorPicker component  */
    const [customColorPicker, setCustomColorPicker] = useState(appConfig);


    return (
        <main className='main-page'>
            <h1 className='main-page__title'>{MAIN_TITLE}</h1>

            <ColorPicker
                value={customColorPicker.defaultColor}
                onChange={setCustomColorPicker}
                colors={customColorPicker.colorsList}
            />
        </main>
    );
};