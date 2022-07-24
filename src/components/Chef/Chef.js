import React from 'react';
import chef from '../../assets/chef.png'
import quote from '../../assets/quote.png'
import sign from '../../assets/sign.png'

const Chef = () => {
    return (
        <div className='chef-container'>
            <div className="chef-img chef-img-reverse">
                <img src={chef} alt="chef" />
            </div>
            <div className="chef-info">
                <h4>Chef's world</h4>
                <h1>What we believe in</h1>
                <div className="chef-content">
                    <div className="chef-quote">
                        <img src={quote} alt="Quote" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab hic provident iure animi blanditiis facere.</p>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi officia nemo dolor delectus, reprehenderit possimus?</p>
                </div>

                <div className="chef-sign">
                    <p>Kevin Luo</p>
                    <p>Chef & Founder</p>
                    <img src={sign} alt="sign" />
                </div>
            </div>
        </div>
    );
};

export default Chef;