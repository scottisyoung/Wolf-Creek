import React, { Component } from 'react';
import './store.css';
import {HashRouter, Route} from 'react-router-dom';
import axios from 'axios';


class Store extends Component {
    constructor(props) {
        super(props)
        this.state={
        }
    }

    render() {


    return (
        <div>
            <div className="shopParent">
                <div className="shopDivs"><div className="front">Lift Tickets</div>
                <div className="back">
                    <li>Wolf Creek offeres a variety of Lift Tickets so that everyone has the opportunity to hit up the 
                    slopes.</li><br />
                    <li>Tickets can be purchased either in the ticket office at the base of the mountain or online.</li><br />
                    <li>Click the purchase button to proceed to buy your tickets online.</li><br /> 
                <div className="purchaseParent">
                <div className="purchase">Purchase</div></div></div></div>


                <div className="shopDivs"><div className="front">Season Pases</div>
                <div className="back">
                    <li>Wolf Creek offeres a variety of Lift Tickets so that everyone has the opportunity to hit up the 
                    slopes.</li><br />
                    <li>Tickets can be purchased either in the ticket office at the base of the mountain or online.</li><br />
                    <li>Click the purchase button to proceed to buy your tickets online.</li><br /> 
                <div className="purchaseParent">
                <div className="purchase">Purchase</div></div></div></div>


                <div className="shopDivs"><div className="front">Equipment Rentals</div>
                <div className="back">
                    <li>Wolf Creek offeres a variety of Lift Tickets so that everyone has the opportunity to hit up the 
                    slopes.</li><br />
                    <li>Tickets can be purchased either in the ticket office at the base of the mountain or online.</li><br />
                    <li>Click the purchase button to proceed to buy your tickets online.</li><br /> 
                <div className="purchaseParent">
                <div className="purchase">Purchase</div></div></div></div>


                <div className="shopDivs"><div className="front">Snow School</div>
                <div className="back">
                    <li>Wolf Creek offeres a variety of Lift Tickets so that everyone has the opportunity to hit up the 
                    slopes.</li><br />
                    <li>Tickets can be purchased either in the ticket office at the base of the mountain or online.</li><br />
                    <li>Click the purchase button to proceed to buy your tickets online.</li><br /> 
                <div className="purchaseParent">
                <div className="purchase">Purchase</div></div></div></div>


                <div className="shopDivs"><div className="front">Skis / Snowboards</div>
                <div className="back">
                    <li>Wolf Creek offeres a variety of Lift Tickets so that everyone has the opportunity to hit up the 
                    slopes.</li><br />
                    <li>Tickets can be purchased either in the ticket office at the base of the mountain or online.</li><br />
                    <li>Click the purchase button to proceed to buy your tickets online.</li><br /> 
                <div className="purchaseParent">
                <div className="purchase">Purchase</div></div></div></div>


                <div className="shopDivs"><div className="front">Boots / Bindings</div>
                <div className="back">
                    <li>Wolf Creek offeres a variety of Lift Tickets so that everyone has the opportunity to hit up the 
                    slopes.</li><br />
                    <li>Tickets can be purchased either in the ticket office at the base of the mountain or online.</li><br />
                    <li>Click the purchase button to proceed to buy your tickets online.</li><br /> 
                <div className="purchaseParent">
                <div className="purchase">Purchase</div></div></div></div>


                <div className="shopDivs"><div className="front">Accessories</div>
                <div className="back">
                    <li>Wolf Creek offeres a variety of Lift Tickets so that everyone has the opportunity to hit up the 
                    slopes.</li><br />
                    <li>Tickets can be purchased either in the ticket office at the base of the mountain or online.</li><br />
                    <li>Click the purchase button to proceed to buy your tickets online.</li><br /> 
                <div className="purchaseParent">
                <div className="purchase">Purchase</div></div></div></div>


                <div className="shopDivs"><div className="front">Clothing</div>
                <div className="back">
                    <li>Wolf Creek offeres a variety of Lift Tickets so that everyone has the opportunity to hit up the 
                    slopes.</li><br />
                    <li>Tickets can be purchased either in the ticket office at the base of the mountain or online.</li><br />
                    <li>Click the purchase button to proceed to buy your tickets online.</li><br /> 
                <div className="purchaseParent">
                <div className="purchase">Purchase</div></div></div></div>
            </div>
        </div>

        )
    }
}

export default Store;