import React, {Component} from 'react';
import {Modal, Button, FieldGroup, ControlLabel, FormControl, FormGroup} from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import uuid from 'uuid';
import { saveRecipe } from '../actions/index';

class AddRecipeModal extends Component  {
  constructor(props) {
    super(props);

    this.state = {
        recipeName: '',
        ingredients: []
      };
  }
  handleRecipeName = (e) => {
    this.setState({recipeName: e.target.value })
  }
  handleRecipeIngredients = (e) => {
    var ingredients = e.target.value.split(',');
    ingredients = ingredients.map((recipe) => {
      return {
        id: uuid(),
        name: recipe.trim(),
      }
    });
    this.setState({ingredients: ingredients});
  }
  newRecipeSubmit = (e) => {
    e.preventDefault();
    var {recipeName, ingredients} = this.state;
    this.props.saveRecipe(recipeName, ingredients);
    this.props.onHide();
  }
  render() {
    return(
      <Modal {...this.props} bsSize="medium" aria-labelledby="contained-modal-title-sm">
      <form onSubmit={this.newRecipeSubmit}>
       <Modal.Header closeButton>
         <Modal.Title id="contained-modal-title-sm">Add a new Recipe</Modal.Title>
       </Modal.Header>
       <Modal.Body>
           <FormGroup controlId="Recipe">
              <ControlLabel>Recipe</ControlLabel>
              <FormControl onChange={this.handleRecipeName} type="text" placeholder="Give it a name" />
            </FormGroup>
            <FormGroup controlId="formControlsTextarea">
              <ControlLabel>Textarea</ControlLabel>
              <FormControl onChange={this.handleRecipeIngredients} componentClass="textarea" placeholder="textarea" />
            </FormGroup>
       </Modal.Body>
       <Modal.Footer>
         <Button bsStyle="primary" type="submit">Add</Button>
         <Button bsStyle="danger" onClick={this.props.onHide}>Close</Button>
       </Modal.Footer>
       </form>
      </Modal>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({saveRecipe}, dispatch);
}


export default connect (null, mapDispatchToProps)(AddRecipeModal);
