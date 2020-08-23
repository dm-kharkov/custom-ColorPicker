import { useEffect, useRef } from 'react';

/**
 * Fn to adds\removes listeners for the document;
 *
 * @param {object} ref;
 * @param {function} callback
 *
 * @return void;
 */
const useOutsideClick = (ref, callback) => {
    const handleClick = e => {
        if (ref.current && !ref.current.contains(e.target)) {
            callback(e);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick);
        };
    });
};


/**
 * Fn to watch when outside click;
 */
export default function () {
    const ref = useRef();

    return [useOutsideClick, ref];
}