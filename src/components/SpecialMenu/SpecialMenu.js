import React from 'react';
import spoon from '../../assets/spoon.svg'
import bottle from '../../assets/menu.png'

const SpecialMenu = () => {
    return (
        <div className='special-menu' id='menu'>
            <div className="special-title">
                <h4>Menu That Fits You Palette </h4>
                <img src={spoon} alt="Spoon" />
                <h1>Today&apos;s Special </h1>
            </div>
            <div className="wine-cocktail">
                <div className="wine-beer">
                    <h3>Wine & Beer</h3>
                </div>

                <div className="special-menu-img">
                    <img src={bottle} alt="Bottle" />
                </div>
                <div className="cocktail">
                    <h3>Cocktails</h3>
                </div>
            </div>
        </div>
    );
};

export default SpecialMenu;