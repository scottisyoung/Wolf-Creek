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
               
                    <div className="backgroundLT">
                        <div className="accordion">
                            <ul>
                                <li>
                                    <input type="radio" name="select" className="accordion-select" checked />
                                    <div className="accordion-title">
                                        <span>Lift &nbsp;Tickets</span>
                                    </div>
                                    <div className="accordion-content">
                                            <br />
                                            <h3>Get ready to experience the most incredible snow in all of Colorado.  
                                            Wolf Creek is known for its heavy snow fall and very light dry powder.</h3>
                                            <br /><br />
                                            To purchase your lift ticket simply log in to your account, click on the
                                            appropriate tab and add the ticket you would like to purchase to your cart.
                                            < br/> <br /> 
                                            Descriptions about the qualifications reguarding each ticket can be found on
                                            the description tag. The tickets that are purchased online will be available 
                                            at our pre-ordered ticket counter in the Wolf Creek Ticket Office. ID will 
                                            be required upon pick-up along with other specificities if needed. 
                                    </div>
                                    <div className="accordion-separator"></div>
                                </li>
                                <li>
                                    <input type="radio" name="select" className="accordion-select" />
                                    <div className="accordion-title">
                                        <span>Adult &nbsp;Lift&nbsp; Tickets</span>
                                    </div>
                                    <div className="accordion-content">
                                        <div><Category category="LiftTicket" subcategory="Adult"/></div>
                                    </div>
                                    <div className="accordion-separator"></div>
                                </li>
                                <li>
                                    <input type="radio" name="select" className="accordion-select" />
                                    <div className="accordion-title">
                                        <span>Senior &nbsp;Lift&nbsp; Tickets</span>
                                    </div>
                                    <div className="accordion-content">
                                        <div><Category category="LiftTicket" subcategory="Senior"/></div>
                                    </div>
                                    <div className="accordion-separator"></div>
                                </li>
                                <li>
                                    <input type="radio" name="select" className="accordion-select" />
                                    <div className="accordion-title">
                                        <span>Child &nbsp;Lift&nbsp; Tickets</span>
                                    </div>
                                    <div className="accordion-content">
                                        <div><Category category="LiftTicket" subcategory="Child"/></div>
                                    </div>
                                    <div className="accordion-separator"></div>
                                </li>
                                <li>
                                    <input type="radio" name="select" className="accordion-select" />
                                    <div className="accordion-title">
                                        <span>Tot &nbsp;Lift&nbsp; Tickets</span>
                                    </div>
                                    <div className="accordion-content">
                                        <div><Category category="LiftTicket" subcategory="Tot"/></div>
                                    </div>
                                    <div className="accordion-separator"></div>
                                </li>
                                <li>
                                    <input type="radio" name="select" className="accordion-select" />
                                    <div className="accordion-title">
                                        <span>Military &nbsp;Lift&nbsp; Tickets</span>
                                    </div>
                                    <div className="accordion-content">
                                        <div><Category category="LiftTicket" subcategory="Military"/></div>
                                    </div>
                                    <div className="accordion-separator"></div>
                                </li>
                                <li>
                                    <input type="radio" name="select" className="accordion-select" />
                                    <div className="accordion-title">
                                        <span>Beginner &nbsp;Lift&nbsp; Tickets</span>
                                    </div>
                                    <div className="accordion-content">
                                        <div><Category category="LiftTicket" subcategory="Beginner"/></div>
                                    </div>
                                    <div className="accordion-separator"></div>
                                </li>
                                <li>
                                    <input type="radio" name="select" className="accordion-select" />
                                    <div className="accordion-title">
                                        <span>Descriptions</span>
                                    </div>
                                    <div className="accordion-content">
                                        <h3>Lift Ticket Descriptions and Information</h3>
                                            <h4>Adult LifT Tickets</h4>
                                            
                                            <h4>Senior Lift Tickets</h4>
                                            
                                            <h4>Child Lift Tickets</h4>
                                        
                                            <h4>Tot Lift Tickets</h4>
                                            
                                            <h4>Military Lift Tickets</h4>
                                            
                                            <h4>Beginner Lift Tickets</h4>
                                            
                                            <h4>Additional Information</h4>
                                            
                                    </div>
                                    <div className="accordion-separator"></div>
                                </li>
                            </ul>
                        </div>
                        <div><a href="http://accordionslider.com/"></a></div>
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