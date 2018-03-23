import React, { Component } from 'react';
import './events.css';


class Events extends Component {
    render() {
    return (
        <div>
                <div className="backgroundEvents"></div>

                <div className="backgroundevents">

                        <div className="eventsTitleParent">
                                <div className="centerEventTitle"><h1>Wolf Creek Events</h1></div>           
                        </div>

                        <div className="parentingEvent">
                                <div className="eventsInfo">
                                        <div className="eventList">
                                                <div className="centerevent">College & Local Appreciation Days</div>
                                                <div className="centParent2">No Id Required</div>
                                                <div className="evList">   
                                                        <li>November: 8th, 15th, 27th, 29th<br /></li>
                                                        <li>December: 6th <br /></li>
                                                        <li>January: 24th, 28th<br /></li>
                                                        <li>February: 4th, 28th<br /></li>
                                                        <li>March: 25th, 28th<br /></li>
                                                        <li>April: 1st<br /></li>
                                                </div>
                                        </div>
                                        <div className="imgalign1"><a href="https://i0.wp.com/wolfcreekski.com/wp-content/uploads/2017/09/17-18-Special-Days.jpg" target="_blank"><img className="laimg" src="https://i0.wp.com/wolfcreekski.com/wp-content/uploads/2017/09/17-18-Special-Days.jpg?zoom=1.25&resize=240%2C311" alt="Events-Poster"/></a></div>
                                </div>

                                <div className="eventsInfo">
                                        <div className="eventList">
                                                <div className="centerevent">Races</div>
                                                <div className="centParent2">14 Different Age Brackets<br/>Registration 9:30am - 10:30am</div>
                                                <div className="evList">   
                                                        <li>December: 9th</li>
                                                        <li>January: 7th, 14th, 21st, 28th<br /></li>
                                                        <li>February: 4th, 11th, 18th, 25th</li>
                                                        <li>March: 10th, 17th, 24th<br /></li>
                                                </div>
                                        </div>
                                        <div className="imgalign1"><a href="https://i0.wp.com/wolfcreekski.com/wp-content/uploads/2017/09/17-18-Fun-Race.jpg" target="_blank"><img className="laimg" src="https://i0.wp.com/wolfcreekski.com/wp-content/uploads/2017/09/17-18-Fun-Race.jpg?zoom=1.25&resize=240%2C310" alt="Race-Poster"/></a></div>
                                </div>

                                <div className="eventsInfo">
                                        <div className="eventList">
                                                <div className="centerevent">Wolf Creek Cosmic Event</div>
                                                <div className="centParent2">Saturday, November 18th 2017</div>
                                                <div className="evList2">   
                                                        <li>Race Course: 5 climbs and ± 5,000 ft.</li>
                                                        <li>Mandatory Gear: Skis|Helmet|Beacon|Shovel|Probe</li>
                                                        <li className="course2">Recreation Course: 3 climbs and ± 2,500 ft.</li>
                                                        <li>Mandatory Gear: Skis / skins / helmet</li>
                                                </div>
                                        </div>
                                        <div className="imgalign2"><a href="https://www.webscorer.com/register?raceid=55916" target="_blank"><img className="race" src="https://s.ws-images.com/uploadedimages/medium/55916_8d2deeff2b83aab.jpg" alt="Cosmic_Event-Poster"/></a></div>
                                </div>
                        </div>

                        <div className="calendar">
                                <iframe src="https://calendar.google.com/calendar/embed?src=3d2qpgeeghdu7kqh7ppld6j7sg%40group.calendar.google.com&ctz=America/Denver" style={{border: 0}} width="1400" height="690" frameBorder="0" scrolling="no"></iframe>
                        </div>
                </div>

                        <div className="backgoundfooterevents">
                                <div className="backTitle">Keep Posted for Future Events</div>
                        </div>
        </div>
    )
}
}
export default Events;