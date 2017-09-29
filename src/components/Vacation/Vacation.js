import React, { Component } from 'react';
import './vacation.css';
import {HashRouter, Route} from 'react-router-dom';
import axios from 'axios';

class Vacation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            weather: [],
        }
    }


    componentDidMount() {
        axios.get('').then(res => {
        this.setState({
                
            // AIzaSyCLUblzvEckXDaRMlOOgrv_wlfyBHAwptI
            })
        })
    }

    render() {

        const weather = this.state.weather.map((report, i ) => {
            return (
            <div key={i}>
                <div className="gmap">{report.date.weekday}</div>
            </div>
            )
        })


    return (
        <div>
            <iframe
                width="600"
                height="450"
                frameborder="0" style={{border:0}}
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCLUblzvEckXDaRMlOOgrv_wlfyBHAwptI&q=Wolf+Creek+Ski+Area,Pagosa+Springs+Colorado" allowfullscreen>
            </iframe>

        </div>
    )
}
}
export default Vacation;