import React, { Component } from 'react';
import './equipment.css';

class Equipment extends Component {

    render() {
          

        return(
        <div>
                <div className="lifttickets">
                <div><h1>EQUIPMENT RENTAL</h1></div>
                </div>

                <div className="LTCategories">

                    <div className="Rent"><h2>ADULT SKI / SNOWBOARD RENTALS</h2><div className="productsLT"></div></div>

                    <div className="Rent"><h2>CHILD SKI / SNOWBOARD RENTALS</h2></div>
                    <div className="Rent"><h2>UNIQUE RENTALS</h2></div>
                </div>

        </div>
        )
    }
}
export default Equipment;