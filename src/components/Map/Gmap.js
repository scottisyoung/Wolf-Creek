import React, { Component } from 'react';
import './gmap.css';

class Gmap extends Component {
    render() {
    return (
        <div>
            <iframe className="google" title="Google Map"
                width="100%"
                height="712"
                frameborder="0" style={{border: "0"}}
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCLUblzvEckXDaRMlOOgrv_wlfyBHAwptI&q=Wolf+Creek+Ski+Area,Pagosa+Springs+Colorado" allowfullscreen>
            </iframe>
        </div>
    )
}
}
export default Gmap;