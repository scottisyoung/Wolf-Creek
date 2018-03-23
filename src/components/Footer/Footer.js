import React, { Component } from 'react';
import './footer.css';
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
        <div className="App">
            <div className="footer">    
             
                <div className="socialMedia">
                        <div><a href="https://www.facebook.com/wolfcreekskiarea/" target="_blank"><img className="socialLink" src={facebook} alt="facebook-icon"/></a></div>
                        <div><a href="https://www.instagram.com/explore/locations/216717777/wolf-creek-ski-resort/" target="_blank"><img className="socialLink" src={instagram} alt="instagram-icon"/></a></div>
                        <div><a href="https://twitter.com/wolfcreekski2?lang=en" target="_blank"><img className="socialLink" src={twitter} alt="twitter-icon"/></a></div>
                        <div><a href="https://www.youtube.com/channel/UCyB1OLcKwrg21ltMiKeo2ug" target="_blank"><img className="socialLink" src={youtube} alt="youtube-icon"/></a></div>
                        <div><a href="https://www.yelp.com/biz/wolf-creek-ski-area-pagosa-springs" target="_blank"><img className="socialLink" src={yelp} alt="yelp-icon"/></a></div>
                        <Link to='gmap'><div><img className="socialLink" src={location} alt="map-icon"/></div></Link>
                </div>
                
                    <div className="organizeFoot">
                        <div className="footerList">
                            <li className="footLink"><Link className="footLink" to='#'>Contact</Link></li>
                        </div>

                        <div className="footerList">
                            <li className="footLink"><Link className="footLink" to='#'>Careers</Link></li>
                        </div>

                        <div className="footerList">
                            <li className="footLink"><Link className="footLink" to='#'>Community</Link></li>
                        </div>

                        <div className="footerList">
                            <li className="footLink"><Link className="footLink" to='skimap'>Area Map</Link></li>
                        </div>

                        <div className="footerList">
                            <li className="footLink"><Link className="footLink" to='/events'>Calendar</Link></li>
                        </div>

                        <div className="footerList">
                            <li className="footLink"><Link className="footLink" to='#'>Safety</Link></li>
                        </div>

                        <div className="footerList">
                            <li className="footLink"><Link className="footLink" to='#'>Stats | Facts</Link></li>
                        </div>

                        <div>
                            <li className="footLink"><Link className="footLink" to='#'>Photos | Videos | Blog</Link></li>
                        </div>
                </div>

            </div>
        </div>
    )
}
}
export default Footer;