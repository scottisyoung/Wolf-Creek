import React, { Component } from 'react';
import './lift_tickets.css';
import {connect} from 'react-redux';
import {getProducts} from './../../../ducks/users.js';
import Category from './../category/Category.js';

class Lift_tickets extends Component {
  
    componentDidMount() {
        this.props.getProducts()
      }

    render() {
        
        return(
        <div>
                <div className="lifttickets">
                <div><h1>LIFT TICKETS</h1></div>
                </div>

                <div className="lifttickparent">

                    <div className="LiftTick">
                        <div className="LTTitle"><h2>ADULT LIFT TICKETS</h2></div>
                        <div><Category category="LiftTicket" subcategory="Adult"/></div>
                    </div>
                    <div className="LiftTick">
                        <div className="LTTitle"><h2>SENIOR LIFT TICKETS</h2></div>
                        <div><Category category="LiftTicket" subcategory="Senior"/></div>                     
                    </div>
                    <div className="LiftTick">
                        <div className="LTTitle"><h2>CHILD LIFT TICKETS</h2></div>
                        <div><Category category="LiftTicket" subcategory="Child"/></div>
                    </div>
                    <div className="LiftTick">
                        <div className="LTTitle"><h2>TOT LIFT TICKETS</h2></div>
                        <div><Category category="LiftTicket" subcategory="Tot"/></div>
                    </div>
                    <div className="LiftTick">
                        <div className="LTTitle"><h2>MILITARY LIFT TICKETS</h2></div>
                        <div><Category category="LiftTicket" subcategory="Military"/></div>
                    </div>
                    <div className="LiftTick">
                        <div className="LTTitle"><h2>BEGINNER LIFT TICKETS</h2></div>
                        <div><Category category="LiftTicket" subcategory="Beginner"/></div>
                    </div>

                </div>
        </div>

        )
    }
}

function mapStateToProps(state) {
    return {
      products: state.products
    }
  }
  
  export default connect(mapStateToProps, {getProducts})(Lift_tickets)