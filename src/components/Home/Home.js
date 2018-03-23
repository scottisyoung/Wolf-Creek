import React, { Component } from 'react';
import './home.css';
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
        axios.get(`https://api.wunderground.com/api/${process.env.REACT_APP_WEATHER}/forecast/q/CO/Pagosa_Springs.json`).then(res => {
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
                        <div><img className="wicon" src={report.icon_url} alt="weather-icon"/></div>
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
        <div className="App">
            

                    <div className="videoDiv">
                        <video loop muted preload="auto" autoPlay> 
                            <source src="http://res.cloudinary.com/scottisyoung/video/upload/v1521753792/WC%20Video/wolf-creek.mp4" type="video/mp4" /> 
                        </video> 
                    </div> 

                    <div className="slideParent">
                            <div className={this.state.slideClosed ? 'slide close' : 'slide'} onClick={this.closeSlide}>
                            <div className="previous round" onClick={this.closeSlide}>&#8250;</div>
                            <div className="slideTitle">4 Day Weather Forcast</div>{weather}</div>
                    </div>  

                    <div className="home">
                    </div> 
        </div>
    )
}
}
export default Home;