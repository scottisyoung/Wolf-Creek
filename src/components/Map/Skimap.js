import React, { Component } from 'react';
import './skimap.css';
import skimapimg from '../../Images/Pictures/../Pictures/skimapimg.png';

class Skimap extends Component {
    render() {
    return (
        <div>
            <div>
                <img className="skimap" src={skimapimg} alt="wolf-creek-ski-map"/>
            </div>
        </div>
    )
}
}
export default Skimap;