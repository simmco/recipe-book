import React, {Component} from 'react';
import {Button, ButtonToolbar, MyLargeModal} from 'react-bootstrap';

import AddRecipeModal from './AddRecipeModal';

class AddRecipe extends Component  {
  constructor(props) {
    super(props);
    this.state = { lgShow: false}
  }
  render() {
    let lgClose = () => this.setState({ lgShow: false });

    return (
      <ButtonToolbar  >
        <Button bsStyle="primary" bsSize="medium"onClick={()=>this.setState({ lgShow: true })}>
          Add Recipe
        </Button>

        <AddRecipeModal show={this.state.lgShow} onHide={lgClose} />
      </ButtonToolbar>
    );
  }
}

export default AddRecipe;
