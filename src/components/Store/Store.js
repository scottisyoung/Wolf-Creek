import React, { Component } from 'react';
import './store.css';
import {Link} from 'react-router-dom';

class Store extends Component {
    constructor(props) {
        super(props)
        this.state={
        }
    }

    render() {


    return (
            <div>
                <div className="shopBackground"></div>
                <div className="shopParent">
                    <div className="centerShopTitle"><h1>Wolf Creek Store</h1></div>

                    <div className="shopItemsParent">
                        <div className="shopDivs"><div className="front">Lift Tickets</div>
                        <div className="back">
                            <li>Wolf Creek offeres a variety of Lift Tickets so that everyone has the opportunity to hit up the 
                            slopes.</li><br />
                            <li>Tickets can be purchased either in the ticket office at the base of the mountain or online.</li><br />
                            <li>Click the purchase button to proceed to buy your tickets online.</li><br /> 
                        <div className="purchaseParent">
                        <Link className="purchase" to='/lift_tickets'>Purchase</Link></div></div></div>


                        <div className="shopDivs"><div className="front">Season Passes</div>
                        <div className="back">
                            <li>Would you like unlimited access to the mountain?  If so, season passes are available and could save you
                            a lot of money. Wolf Creek offers a variety of passes so that you can enjoy the mountain everyday.</li><br />
                            <li>Season passes can be purchased either in the ticket office at the base of the mountain or online.</li><br />
                            <li>Click the purchase button to proceed to buy your season passes online.</li><br /> 
                        <div className="purchaseParent">
                        <Link className="purchase" to='/season_passes'>Purchase</Link></div></div></div>


                        <div className="shopDivs"><div className="front">Equipment Rentals</div>
                        <div className="back">
                            <li>Want to slide down the mountain but don't have the gear? Wolf Creek offers the equipment you need at great 
                            rental prices.</li><br />
                            <li>Equipment can be rented on the mountain in our rental office or you can reserve your equipment online today.</li><br />
                            <li>Click the Reserve button to reserve your equipment today.</li><br /> 
                        <div className="purchaseParent">
                        <div className="purchase">Coming Soon</div></div></div></div>


                        <div className="shopDivs"><div className="front">Snow School</div>
                        <div className="back">
                            <li>School is in session for anyone that would like to learn how to ski or snowboard. Wolf Creek offers a variety of different classes
                                that range from all ages and abilities.</li><br />
                            <li>You can reserve your place in our Snow School at the base of the mountain or online today.</li><br />
                            <li>Click on the Reserve button to secure your spot in one of our classes.</li><br /> 
                        <div className="purchaseParent">
                        <div className="purchase">Coming Soon</div></div></div></div>


                        <div className="shopDivs1"><div className="front">Skis / Snowboards</div>
                        <div className="back">
                            <li>Wolf Creek has some sweet gear, however our online shop is not quite ready.</li><br />
                            <li>Gear can still be purchased in our shop at the base of the mountain.</li><br />
                        <div className="purchaseParent">
                        <div className="purchase">Coming Soon</div></div></div></div>


                        <div className="shopDivs1"><div className="front">Boots / Bindings</div>
                        <div className="back">
                            <li>Wolf Creek has some sweet gear, however our online shop is not quite ready.</li><br />
                            <li>Gear can still be purchased in our shop at the base of the mountain.</li><br />
                        <div className="purchaseParent">
                        <div className="purchase">Coming Soon</div></div></div></div>


                        <div className="shopDivs1"><div className="front">Accessories</div>
                        <div className="back">
                            <li>Wolf Creek has some sweet gear, however our online shop is not quite ready.</li><br />
                            <li>Gear can still be purchased in our shop at the base of the mountain.</li><br />
                        <div className="purchaseParent">
                        <div className="purchase">Coming Soon</div></div></div></div>


                        <div className="shopDivs1"><div className="front">Clothing</div>
                        <div className="back">
                            <li>Want some amazing threads? Well unfortunately our online shop is not quite available.</li><br />
                            <li>However, you can still buy our clothing products at our shop at the base of the mountain.</li><br />
                        <div className="purchaseParent">
                        <div className="purchase">Coming Soon</div></div></div></div>
                    </div>
                </div>

                <div className="footerShopBackground"></div>
            </div>

        )
    }
}

export default Store;