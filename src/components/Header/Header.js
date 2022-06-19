import React from 'react';
import images from '../../assets/welcome.png'

const Header = () => {
    return (
        <div className='main-header' id='home'>
            <div className="header-info">
                <h4>Chase the new flavour</h4>
                <h1 className='main-title'>The Key To Fine Dining</h1>
                <p>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus</p>
                <button className='custom-btn' >Explore Menu</button>
            </div>
            <div className="header-img">
                <img src={images} alt=""/>
            </div>
        </div>
    );
};

export default Header;