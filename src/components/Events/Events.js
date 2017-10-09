import React, { Component } from 'react';
import './events.css';

class Events extends Component {
    render() {
    return (
        <div>

            <div className="backgroundevents">

                        <div className="eventsInfo">
                                <div className="centParent1"><div className="centerevent">Wolf Creek Cosmic Event</div></div>
                                <div className="centParent2"><h5>Saturday, November 18th 2017</h5></div>
                                <div className="evList">   
                                        <li>Race Course is 5 climbs and ± 5,000 ft.<br /></li>
                                        <li>Mandatory Gear: Skis/skins/helmet <br />pack/beacon/shovel/probe<br /><br /></li>
                                        <li>Recreation Course is 3 climbs and ± 2,500 ft.<br /></li>
                                        <li>Mandatory Gear: Skis/skins/helmet<br /></li>
                                </div>
                                <div className="imgalign"><a href="https://www.webscorer.com/register?raceid=55916"><img src="https://s.ws-images.com/uploadedimages/medium/55916_8d2deeff2b83aab.jpg"/></a></div>
                        </div>

                        
                        <div className="eventsInfo">
                                <div className="centParent1"><div className="centerevent">Local Appreciation Days</div></div>
                                <div className="centParent2"><h5>No Id Required</h5></div>
                                <div className="evList">   
                                        <li>November: 8th, 15th, 27th, 29th<br /></li>
                                        <li>December: 6th <br /></li>
                                        <li>January: 24th, 28th<br /></li>
                                        <li>February: 4th, 28th<br /></li>
                                        <li>March: 25th, 28th<br /></li>
                                        <li>April: 1st<br /></li>
                                </div>
                                <div className="imgalign"><a href="https://i0.wp.com/wolfcreekski.com/wp-content/uploads/2017/09/17-18-Special-Days.jpg"><img className="laimg" src="https://i0.wp.com/wolfcreekski.com/wp-content/uploads/2017/09/17-18-Special-Days.jpg?zoom=1.25&resize=240%2C311"/></a></div> 
                        </div>

                        <div className="eventsInfo">
                                <div className="centParent1"><div className="centerevent">Races</div></div>
                                <div className="centParent2"><h5>14 Different Age Brackets</h5></div>
                                <div className="evList">
                                        <li>Registration 9:30am - 10:30am<br /><br /></li> 
                                        <li>December: 9th <br /></li>
                                        <li>January: 7th, 14th, 21st, 28th<br /></li>
                                        <li>February: 4th, 11th, 18th, 25th</li>
                                        <li>March: 10th, 17th, 24th<br /></li>
                                </div>
                                <div className="imgalign"><a href="https://i0.wp.com/wolfcreekski.com/wp-content/uploads/2017/09/17-18-Fun-Race.jpg"><img className="laimg" src="https://i0.wp.com/wolfcreekski.com/wp-content/uploads/2017/09/17-18-Fun-Race.jpg?zoom=1.25&resize=240%2C310"/></a></div>
                        </div>

                        <div className="eventsInfo">
                                <div className="centParent1"><div className="centerevent">College Days</div></div>
                                <div className="centParent2"><h5>No Id Required</h5></div>
                                <div className="evList">   
                                        <li>November: 8th, 15th, 27th, 29th<br /></li>
                                        <li>December: 6th <br /></li>
                                        <li>January: 24th, 28th<br /></li>
                                        <li>February: 4th, 28th<br /></li>
                                        <li>March: 25th, 28th<br /></li>
                                        <li>April: 1st<br /></li>
                                </div>
                                <div className="imgalign"><a href="https://i0.wp.com/wolfcreekski.com/wp-content/uploads/2017/09/17-18-Special-Days.jpg"><img className="laimg" src="https://i0.wp.com/wolfcreekski.com/wp-content/uploads/2017/09/17-18-Special-Days.jpg?zoom=1.25&resize=240%2C311"/></a></div>
                        </div>
            </div>
            
            <div>
                <iframe src="https://calendar.google.com/calendar/embed?src=3d2qpgeeghdu7kqh7ppld6j7sg%40group.calendar.google.com&ctz=America/PagosaSprings" 
                width="100%" height="800" frameborder="0" scrolling="no"></iframe>
            </div>

        </div>
    )
}
}
export default Events;