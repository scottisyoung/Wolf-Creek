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
                <div className="lifttickets">
                <div><h1>SEASON PASSES</h1></div>
                </div>

                <div className="LTCategories">

                    <div className="LT"><h2>ADULT SEASON PASSES</h2><div className="productsLT">
                        <div><Category category="SeasonPass" subcategory="Adult"/></div></div>
                    </div>

                    <div className="LT"><h2>SENIOR SEASON PASSES</h2>
                        <div><Category category="SeasonPass" subcategory="Senior"/></div>                   
                    </div>

                    <div className="LT"><h2>STUDENT SEASON PASSES</h2>
                        <div><Category category="SeasonPass" subcategory="Student"/></div>  
                    </div>

                    <div className="LT"><h2>CHILD / TOT SEASON PASSES</h2>
                        <div><Category category="SeasonPass" subcategory="Child"/></div>
                        <div><Category category="SeasonPass" subcategory="Tot"/></div> 
                    </div>

                    <div className="LT"><h2>FAMILY SEASON PASSES</h2>
                        <div><Category category="SeasonPass" subcategory="Family"/></div>
                    </div>
                    <div className="LT"><h2>WEEKDAY ONLY SEASON PASSES</h2>
                        <div><Category category="SeasonPass" subcategory="Weekday"/></div>
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
