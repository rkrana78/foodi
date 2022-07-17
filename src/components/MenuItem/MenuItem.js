import React from 'react';
import './MenuItem.css'

const MenuItem = ({ price, tags, title}) => {
    return (
        <div className='menu-item'>
            <div className="menu-item-head">
                <div className="item-name">
                    <p style={{ color: '#DCCA87' }}>{title}</p>
                </div>
                <div className="item-dash" />
                <div className="item-price">
                    <p>{price}</p>
                </div>
            </div>
            <div className="item-tags">
                    <p style={{ color: '#AAAAAA' }}>{tags}</p>
            </div>
        </div>
    );
};

export default MenuItem;