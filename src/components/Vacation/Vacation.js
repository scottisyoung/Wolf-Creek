import React, { Component } from 'react';
import './vacation.css';


class Vacation extends Component {
    render() {

    return (
<div>
        <div className="backgroundvacation">
        </div>

        <div className="backgroundvacationbelow">

        <div className="centerVacaTitle"><h1>Vacation Planning</h1></div>
            <div><h3 className="centerVacationTitle">Ideas for the Perfect Vacation</h3></div>

            <div className="vacationFlex2">
                <div className="overLay1"></div>
                <div className="overLay2"></div>
                <div className="overLay3"></div>
                <div className="DivVaca1">GETTING HERE</div>
                <div className="DivVaca2"><div>ACCOMMODATIONS</div></div>
                <div className="DivVaca3">SHOPPING / NIGHTLIFE</div>
                <div className="DivVaca4">
                    <h4>Road Conditions</h4>
                        <li>Colorado Department of Transportation (CDOT)</li>
                        <li>www.cotrip.org</li>
                        <li>877-315-7623</li>
                    <h4>Shuttle Service to the Ski Area / From Pagosa Springs through Wilderness Journeys</h4>
                        <li>Phone: 970-731-4081</li>
                        <li>Pick up: Wilderness Journey's Office</li>
                        <li>Address: 135 Country Center Drive, Ste D.</li>
                        <li>Leaves: 7:45am and 11:15</li>
                        <li>Returns: 4:00pm</li>
                        <li>Round Trip: $30.00 / One Way: $20.00</li>
                    <h4>Shuttle Service to the Ski Area / From South Fork through Little Stinkers Taxi</h4>
                        <li>Phone: 719-589-2500</li>
                        <li>Based in Alamosa, CO</li>
                        <li>Trip is $1.60 per mile</li>
                    <h4>Major Airports Servicing Wolf Creek</h4>
                        <li>Albuquerque International</li>
                        <li>Colorado Springs Airport</li>
                        <li>Denver International Airport</li>
                    <h4>Local Airports Servicing Wolf Creek</h4>
                        <li>San Luis Valley Regional Airport</li>
                        <li>Durango-La Plata County Airport</li>
                        <li>Farmington Regional Airport</li> 
                    </div>
                <div className="DivVaca4">
                    <h4>Find Lodging on the West Side / Pagosa Springs</h4>
                        <li>Pagosa Springs Chamber of Commerce</li>
                        <li>970-264-2360</li>
                        <li>800 252-2204</li>
                        <li>www.pagosachamber.com</li>
                    <h4>Find Lodging on the East Side / South Fork</h4>
                        <li>South Fork Visitors Center</li>
                        <li>719-873-5512</li>
                        <li>www.southfork.org</li>
                    </div>
                <div className="DivVaca4">
                        <h4>Restaurants</h4>
                            <li>Prospector Grill</li>
                            <li>Wolf Creek Ski Lodge</li>
                            <li>Pathfinder Bar</li>
                            <li>Raven's Grill</li>
                            <li>Raven's Roost</li>
                            <li>The Continental</li>
                            <li>Alberta Grill</li>
                        <h4>Shopping</h4>
                            <li>Treasure Sports</li>
                            <li>Noel Sports</li>
                    </div>
            </div> 
        
            <div className="vacationFlex">
                <div className="overlay1"></div>
                <div className="overlay2"></div>
                <div className="overlay3"></div>
                <div className="divVaca1">WINTER ACTIVITES</div>
                <div className="divVaca2"><div>SUMMER ACTIVITIES</div></div>
                <div className="divVaca3">CHILD CARE</div>
                <div className="divVaca4">
                    <h4>Wolf Creek Mountain</h4>
                        <li>Skiing</li>
                        <li>Snowboarding</li>
                        <li>Sledding</li>
                        <li>Tubing</li>
                    <h4>Pagosa Springs</h4>
                        <li>Ice Skating</li>
                        <li>Hot Springs</li>
                        <li>Horse Sled Rides</li>
                        <li>Ice Climbing</li>
                        <li>Local Art and Theatre</li>
                    </div>
                <div className="divVaca4">
                    <h4>Wolf Creek Mountain</h4>
                        <li>Hiking</li>
                        <li>Camping</li>
                        <li>Rock Climbing</li>
                        <li>Mountain Biking</li>  
                    <h4>Pagosa Springs</h4>
                        <li>Local Art and Theatre</li>
                        <li>Hot Air Ballon Rides</li>
                        <li>Horse Back Riding</li>
                        <li>Hot Springs</li>
                        <li>Summer Music Festivals</li>

                    </div>
                <div className="divVaca4">
                    <h4>West Side of Pass / Pagosa Springs</h4>
                        <li>Bumblebees Home Daycare:&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; 970-507-7889</li>
                        <li>&ensp;&ensp;&ensp;&ensp;7:00am - 6:00pm</li>< br/>
                        <li>Judy Graham Day Care:&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; 970-264-5251</li>
                        <li>&ensp;&ensp;&ensp;&ensp;7:00am - 6:00pm</li>
                    <h4>East Side of Pass / South Fork</h4>
                    <li>Creede Early Learning Center: &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; 719-658-2090</li>
                        <li>&ensp;&ensp;&ensp;&ensp;8:00am - 5:00pm</li>< br/>
                        <li>Day-by-Day Day Care: &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; 719-852-0741</li>
                        <li>&ensp;&ensp;&ensp;&ensp;7:30am - 5:30pm</li>
                    </div>
            </div>
        </div>
            
        <div className="backgroundfootVacation"> </div>





            {/* <div classNameName="vacationBackground">
                <div className="vacationdivs1"><div className="vacationTitle">Getting Here</div></div>
                <div className="vacationDivs"><div className="vacationTitle2">
                    <h3>Road Conditions</h3>
                        <li>Colorado Department of Transportation (CDOT)</li>
                        <li>www.cotrip.org</li>
                        <li>877-315-7623</li>
                    <h3>Shuttle Service to the Ski Area / From Pagosa Springs through Wilderness Journeys</h3>
                        <li>Phone: 970-731-4081</li>
                        <li>Pick up: Wilderness Journey's Office</li>
                        <li>Address: 135 Country Center Drive, Ste D.</li>
                        <li>Leaves: 7:45am and 11:15</li>
                        <li>Returns: 4:00pm</li>
                        <li>Round Trip: $30.00 / One Way: $20.00</li>
                    <h3>Shuttle Service to the Ski Area / From South Fork through Little Stinkers Taxi</h3>
                        <li>Phone: 719-589-2500</li>
                        <li>Based in Alamosa, CO</li>
                        <li>Trip is $1.60 per mile</li>
                    <h3>Major Airports Servicing Wolf Creek</h3>
                        <li>Albuquerque International</li>
                        <li>Colorado Springs Airport</li>
                        <li>Denver International Airport</li>
                    <h3>Local Airports Servicing Wolf Creek</h3>
                        <li>San Luis Valley Regional Airport</li>
                        <li>Durango-La Plata County Airport</li>
                        <li>Farmington Regional Airport</li> 
                </div></div>


                <div className="vacationDivs"><div className="vacationTitle2">
                    <h3>Find Lodging on the West Side / Pagosa Springs</h3>
                        <li>Pagosa Springs Chamber of Commerce</li>
                        <li>970-264-2360</li>
                        <li>800 252-2204</li>
                        <li>www.pagosachamber.com</li>
                    <h3>Find Lodging on the East Side / South Fork</h3>
                        <li>South Fork Visitors Center</li>
                        <li>719-873-5512</li>
                        <li>www.southfork.org</li>
                </div></div>
                <div className="vacationdivs2"><div className="vacationTitle">Accommodations</div></div>


                <div className="vacationdivs3"><div className="vacationTitle">Dining / Shopping / Nightlife</div></div>
                <div className="vacationDivs"><div className="vacationTitle2">
                    <h3>While on the Mountain</h3>
                    <h3>Restaurants</h3>
                        <li>Prospector Grill</li>
                        <li>Wolf Creek Ski Lodge</li>
                        <li>Pathfinder Bar</li>
                        <li>Raven's Grill</li>
                        <li>Raven's Roost</li>
                        <li>The Continental</li>
                        <li>Alberta Grill</li>
                    <h3>Shopping</h3>
                        <li>Treasure Sports</li>
                        <li>Noel Sports</li>
                </div></div>


                <div className="vacationDivs"><div className="vacationTitle2">
                    <h3>Winter Activites on the Mountain</h3>
                        <li>Skiing</li>
                        <li>Snowboarding</li>
                        <li>Sledding / Tubing</li>
                    <h3>Winter Activities in the Area</h3>
                        <li>Hot Springs</li>
                        <li>Ice Climbing</li>
                        <li>Ice Skating</li>
                        <li>Horse Sled Rides</li>
                </div></div>
                <div className="vacationdivs4"><div className="vacationTitle">Winter Activities</div></div>


                <div className="vacationdivs5"><div className="vacationTitle">Summer Activities</div></div>
                <div className="vacationDivs"><div className="vacationTitle2">
                    <h3>Summer Activites on the Mountain</h3>
                        <li>Hiking</li>
                        <li>Mountain Biking</li>
                        <li>Camping</li>
                    <h3>Summer Activities in the Area</h3>
                        <li>Hot Springs</li>
                        <li>Live Theatre</li>
                        <li>Movie Theaters</li>
                        <li>Durango Train Rides</li>
                        <li>Old Mine Exploration Tours</li> 
                </div></div>


                <div className="vacationDivs"><div className="vacationTitle2">
                    <h3>West Side of Pass / Pagosa Springs</h3>
                        <li>Bumblebees Home Daycare: 970-507-7889</li>
                        <li>7:00am - 6:00pm</li>< br/>
                        <li>Judy Graham Day Care: 970-264-5251</li>
                        <li>7:00am - 6:00pm</li>
                    <h3>East Side of Pass / South Fork</h3>
                    <li>Creede Early Learning Center: 719-658-2090</li>
                        <li>8:00am - 5:00pm</li>< br/>
                        <li>Day-by-Day Day Care: 719-852-0741</li>
                        <li>7:30am - 5:30pm</li>
                </div></div>
                <div className="vacationdivs6"><div className="vacationTitle">Child Care</div></div>


                <div className="vacationdivs7"><div className="vacationTitle">Portraits</div></div>
                <div className="vacationDivs"><div className="vacationTitle2">
                    <h3>Wolf Creek Powder Portraits</h3>
                        <li>Family Portraits</li>
                        <li>Extreme Portraits</li>
                        <li>Deep Powder Portraits</li>
                        <li>9:00am till 2:00pm</li>
                </div></div>
                
            </div> */}
        </div>
    )
}
}
export default Vacation;