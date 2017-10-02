import React, { Component } from 'react';
import './footer.css';
import {HashRouter, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import facebook from '../../Images/Pictures/../Icons/facebook.png';
import instagram from '../../Images/Pictures/../Icons/instagram.png';
import twitter from '../../Images/Pictures/../Icons/twitter.png';
import youtube from '../../Images/Pictures/../Icons/youtube.png';
import yelp from '../../Images/Pictures/../Icons/yelp.png';
import location from '../../Images/Pictures/../Icons/location.png';

class Footer extends Component {
    render() {
    return (
        <div>
            <div className="footer">    

            <div><span className="WCtitle">WCR</span><img className="logo2" src='https://openclipart.org/image/2400px/svg_to_png/252707/Chrome-Tribal-Wolf-No-Background.png'/></div>

            <div className="organizeFoot">
                    <div className="footerList">
                        <li className="footLink">Contact</li>
                        <li className="footLink">Careers </li>
                        <li className="footLink">Community </li>
                    </div>
                    <div className="footerList">
                        <li className="footLink">Area </li>
                        <li className="footLink">Safety </li>
                        <li className="footLink">Calendar</li>
                    </div>
                    <div className="footerList">
                        <li className="footLink">International</li>
                        <li className="footLink">Blog</li>
                    </div>
                </div>

                <div className="socialMedia">
                        <div><img className="socialLink" src={facebook}/></div>
                        <div><img className="socialLink" src={instagram}/></div>
                        <div><img className="socialLink" src={twitter}/></div>
                        <div><img className="socialLink" src={youtube}/></div>
                        <div><img className="socialLink" src={yelp}/></div>
                        <div><img className="socialLink" src={location}/></div>
                </div>
            </div>
        </div>
    )
}
}
export default Footer;