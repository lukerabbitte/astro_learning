import React, { useState } from 'react';
import './TextLogo.css';

const TextLogo = () => {
    const [animate, setAnimate] = useState(false);

    const handleMouseOver = () => {
        if (!animate) {
            setAnimate(true);
        }
    }

    return (
        <div className="text__logo__container">
            <h1 className={`text__logo ${animate ? 'animate' : ''}`} onMouseOver={handleMouseOver}>
                Locomote
            </h1>
        </div>
    );
}

export default TextLogo;