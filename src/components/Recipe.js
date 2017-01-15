import React, {Component} from 'react';
import {Panel, Col} from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectedRecipe, deselectedRecipe, deselectAll } from '../actions/index';

import RecipeDetail from './RecipeDetail';

class Recipe extends Component {
  constructor(props){
    super(props)
    this.state={
      detailClicked: false
    }
  }
  componentWillMount = () => {
    this.props.deselectAll();
  }
  recipeClicked = (e) => {
    e.preventDefault();
    this.props.deselectAll();
    this.props.selectedRecipe(this.props);
  }
  render() {
    var {name, id} = this.props;
    var keyValue = 1;
    return(
      <div className="recipe__container">
        <Col md={12}>
          <a className="recipe" onClick={this.recipeClicked} href=""><Panel class="recipe__panel" key={keyValue++}>{name}</Panel></a>
        </Col>
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectedRecipe, deselectedRecipe, deselectAll}, dispatch);
}


export default connect (null, mapDispatchToProps)(Recipe);
