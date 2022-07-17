import React from 'react';
import spoon from '../../assets/spoon.svg'
import bottle from '../../assets/menu.png'
import data from '../../data/data'
import './SpecialMenu.css'
import MenuItem from '../MenuItem/MenuItem';

const SpecialMenu = () => {
    return (
        <div className='special-menu flex-center' id='menu'>
            <div className="special-title">
                <h4>Menu That Fits You Palette </h4>
                <img src={spoon} alt="Spoon" />
                <h1>Today&apos;s Special </h1>
            </div>
            <div className="wine-cocktail flex-center">
                <div className="wine-beer">
                    <h3>Wine & Beer</h3>
                    <div className="special-menu-items">
                        {
                        data.wines.map((wine, index) =>
                       <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags}/> )
                        }
                    </div>
                </div>

                <div className="special-menu-img">
                    <img src={bottle} alt="Bottle" />
                </div>
                <div className="cocktail">
                    <h3>Cocktails</h3>
                    <div className="special-menu-items">
                        {
                        data.cocktails.map((cocktail, index) =>
                       <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags}/> )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecialMenu;