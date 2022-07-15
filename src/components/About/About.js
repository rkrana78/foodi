import React from 'react';
import logo from '../../assets/G.png';
import spoon from '../../assets/spoon.svg';
import knife from '../../assets/knife.png'
import './About.css'

const About = () => {
    return (
        <div className='about-us flex-center' id='about'>
            <div className="about flex-center">
                <img src={logo} alt="bg-logo" />
            </div>

            <div className="about-content flex-center">
                <div className="about-details">
                    <h1>About Us</h1>
                    <img className='spoon-img' src={spoon} alt="spoon" />
                    <p className='paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam repudiandae nesciunt excepturi distinctio facilis vel, soluta aspernatur vitae eius impedit error recusandae iusto fugiat praesentium tempora facere, inventore iste blanditiis?</p>
                    <button className='custom-btn'>Know More</button>
                </div>

                <div className="about-knife flex-center">
                    <img src={knife} alt="knife" />
                </div>

                <div className="about-history">
                    <h1>Our History</h1>
                    <img className='spoon-img' src={spoon} alt="spoon" />
                    <p className='paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam repudiandae nesciunt excepturi distinctio facilis vel, soluta aspernatur vitae eius impedit error recusandae iusto fugiat praesentium tempora facere, inventore iste blanditiis?</p>
                    <button className='custom-btn'>Know More</button>
                </div>
            </div>
        </div>
    );
};

export default About;