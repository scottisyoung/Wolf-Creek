import React, { Component } from 'react';
import './season_passes.css';
import {connect} from 'react-redux';
import {getProducts} from './../../../ducks/users.js';
import Category from './../category/Category.js';

class Season_passes extends Component {

    componentDidMount() {
        this.props.getProducts()
      }

    render() {
        
        return(
                <div>
                    <div className="backgroundLT2">
                        <div className="accordion2">
                            <ul>
                                <li>
                                    <input type="radio" name="select" className="accordion2-select" checked />
                                    <div className="accordion2-title">
                                        <span>Season &nbsp;Passes</span>
                                    </div>
                                    <div className="accordion2-content">
                                            <br />
                                            <h3>Get ready to experience the most incredible snow in all of Colorado.  
                                            Wolf Creek is known for its heavy snow fall and very light dry powder.</h3>
                                            <br /><br />
                                            To purchase your Season Pass simply log in to your account, click on the
                                            appropriate tab and add the ticket you would like to purchase to your cart.
                                            < br/> <br /> 
                                            Descriptions about the qualifications reguarding each pass can be found on
                                            the description tag. Passes that are purchased online will be available 
                                            at our pre-ordered counter in the Wolf Creek Ticket Office. ID will 
                                            be required upon pick-up along with other specificities if needed. 
                                    </div>
                                    <div className="accordion2-separator"></div>
                                </li>
                                <li>
                                    <input type="radio" name="select" className="accordion2-select" />
                                    <div className="accordion2-title">
                                        <span>Adult &nbsp;Season&nbsp; Passes</span>
                                    </div>
                                    <div className="accordion2-content">
                                        <div><Category category="SeasonPass" subcategory="Adult"/></div>
                                    </div>
                                    <div className="accordion2-separator"></div>
                                </li>
                                <li>
                                    <input type="radio" name="select" className="accordion2-select" />
                                    <div className="accordion2-title">
                                        <span>Senior &nbsp;Season&nbsp; Passes</span>
                                    </div>
                                    <div className="accordion2-content">
                                        <div><Category category="SeasonPass" subcategory="Senior"/></div>
                                    </div>
                                    <div className="accordion2-separator"></div>
                                </li>
                                <li>
                                    <input type="radio" name="select" className="accordion2-select" />
                                    <div className="accordion2-title">
                                        <span>Student &nbsp;Season&nbsp; Passes</span>
                                    </div>
                                    <div className="accordion2-content">
                                        <div><Category category="SeasonPass" subcategory="Student"/></div>
                                    </div>
                                    <div className="accordion2-separator"></div>
                                </li>
                                <li>
                                    <input type="radio" name="select" className="accordion2-select" />
                                    <div className="accordion2-title">
                                        <span>Child / Tot &nbsp;Season&nbsp; Passes</span>
                                    </div>
                                    <div className="accordion2-content">
                                        <div><Category category="SeasonPass" subcategory="Child"/></div>
                                        <div><Category category="SeasonPass" subcategory="Tot"/></div>
                                    </div>
                                    <div className="accordion2-separator"></div>
                                </li>
                                <li>
                                    <input type="radio" name="select" className="accordion2-select" />
                                    <div className="accordion2-title">
                                        <span>Family &nbsp;Season&nbsp; Passes</span>
                                    </div>
                                    <div className="accordion2-content">
                                        <div><Category category="SeasonPass" subcategory="Family"/></div>
                                    </div>
                                    <div className="accordion2-separator"></div>
                                </li>
                                <li>
                                    <input type="radio" name="select" className="accordion2-select" />
                                    <div className="accordion2-title">
                                        <span>Weekday &nbsp;Only &nbsp;Season&nbsp; Passes</span>
                                    </div>
                                    <div className="accordion2-content">
                                        <div><Category category="SeasonPass" subcategory="Weekday"/></div>
                                    </div>
                                    <div className="accordion2-separator"></div>
                                </li>
                                <li>
                                    <input type="radio" name="select" className="accordion2-select" />
                                    <div className="accordion2-title">
                                        <span>Descriptions</span>
                                    </div>
                                    <div className="accordion2-content">
                                        <h3>Season Pass Descriptions and Information</h3>
                                            <h4>Adult Season Passes</h4>
                                            
                                            <h4>Senior Season Passes</h4>
                                            
                                            <h4>Student Season Passes</h4>
                                        
                                            <h4>Child / Tot Season Passes</h4>
                                            
                                            <h4>Family Season Passes</h4>
                                            
                                            <h4>Weekday Only Season Passes</h4>
                                            
                                            <h4>Additional Information</h4>
                                            
                                    </div>
                                    <div className="accordion2-separator"></div>
                                </li>
                            </ul>
                            <div>
                            <a href="http://accordionslider.com/"></a>
                            </div>
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
  
  export default connect(mapStateToProps, {getProducts})(Season_passes)
