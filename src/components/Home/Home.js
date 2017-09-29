import React, { Component } from 'react';
import './home.css';
import {HashRouter, Route} from 'react-router-dom';
import axios from 'axios';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            weather: [],
            slideClosed: true,
        }

        this.closeSlide = this.closeSlide.bind(this);
      }

      closeSlide() {
        this.setState({
          slideClosed: !this.state.slideClosed
        })
      }

      componentDidMount() {
        axios.get('http://api.wunderground.com/api/8f0608c41c2f0427/forecast/q/CO/Pagosa_Springs.json').then(res => {
        this.setState({
                weather: res.data.forecast.simpleforecast.forecastday
            
            })
        })
    }

    render() {

        const weather = this.state.weather.map((report, i ) => {
            return (
            <div key={i}>
                <div>
                    <div className="dateparent">
                        <div className="dayofweek">{report.date.weekday}</div>
                        <div className="temp">{report.date.pretty}</div>
                    </div>
                    <div className="conditionsParent">
                        <div><img className="wicon" src={report.icon_url}/></div>
                        <div className="temp">{report.conditions}</div>
                    </div>
                    <div className="dateParent">
                        <div className="temp">High Temp: {report.high.fahrenheit} °F</div>
                        <div className="temp">Low Temp: {report.low.fahrenheit} °F</div>
                        <div className="temp">Snow Report: {report.snow_allday.in}"</div>
                    </div>
                </div>
            </div>
            )
          })

    return (
        <div>
            <div className="jumbotron">
            </div>

                <div className="home">


                    <div className={this.state.slideClosed ? 'slide close' : 'slide'} onClick={this.closeSlide}>
                    <div className="previous round" onClick={this.closeSlide}>&#8249;</div>
                    <div className="slideTitle">4 Day Weather Forcast</div>{weather}</div>

                </div>

                    <div className="home2">
                    </div>
        </div>
    )
}
}
export default Home;