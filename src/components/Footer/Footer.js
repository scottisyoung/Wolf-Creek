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
        <div className="App">
            <div className="footer">    
             
                <div className="socialMedia">
                        <div><a href="https://www.facebook.com/wolfcreekskiarea/"><img className="socialLink" src={facebook}/></a></div>
                        <div><a href="https://www.instagram.com/explore/locations/216717777/wolf-creek-ski-resort/"><img className="socialLink" src={instagram}/></a></div>
                        <div><a href="https://twitter.com/wolfcreekski2?lang=en"><img className="socialLink" src={twitter}/></a></div>
                        <div><a href="https://www.youtube.com/channel/UCyB1OLcKwrg21ltMiKeo2ug"><img className="socialLink" src={youtube}/></a></div>
                        <div><a href="https://www.yelp.com/biz/wolf-creek-ski-area-pagosa-springs"><img className="socialLink" src={yelp}/></a></div>
                        <Link to='gmap'><div><img className="socialLink" src={location}/></div></Link>
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
                            <li className="footLink"><Link className="footLink" to='#'>Calendar</Link></li>
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