import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {FormControl, Button, ListGroup, ListGroupItem} from 'react-bootstrap';
import uuid from 'uuid';
import { addIng, deleteIng, selectedRecipe, deselectedRecipe, deleteRecipe} from '../actions/index';



class RecipeDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addIngredient: false,
      ingredient: ''
    }
  }
  handleClose = () => {
    this.props.deselectedRecipe(this.props.recipe[0]);
    this.setState({addIngredient: false})
  }
  addIngClicked = () => {
    if(this.state.addIngredient === false) {
      this.setState({addIngredient: true});
    } else {
      this.setState({addIngredient: false})
    }
  }
  addIng = (e) => {
    this.setState({ingredient: e.target.value});
  }
  handleIngAdd = (e) => {
    e.preventDefault();
    var ingredient = {
      name: this.state.ingredient,
      id: uuid()
    }
    this.props.addIng(this.props.recipe[0].id, ingredient);
    this.props.selectedRecipe(this.props.recipe[0]);
    this.setState({
      ingredient: ''
    })
  }
  handleDelete= () => {
    this.props.deselectedRecipe(this.props.recipe[0]);
    this.props.deleteRecipe(this.props.recipe[0])
  }
  handleIngDelete = (ing) => {
    this.props.deleteIng(ing);
    this.props.selectedRecipe(this.props.recipe[0]);
  }
  renderRecipe = (recipe) => {
    return(
      <div key={recipe.id}>
      <h3 className="text-center"><u>{recipe.name}</u></h3>
      <ListGroup className="recipeDetail__listgroup">
        {recipe.ingredients.map((ing) => {
          let ingredientClicked = this.handleIngDelete.bind(this, ing);
          return  <ListGroupItem  className="recipeDetail__listgroupItem" key={ing.id}>
                    <div className="recipeDetail__ingredientsName">
                      <p className="lead"> {ing.name} </p>
                    </div>
                    <div className="recipeDetail__ingredientsDelete">
                      <p onClick={ingredientClicked}>&#10006;</p>
                    </div>
                  </ListGroupItem>
        })}
      </ListGroup>
    </div>
    )
  }
  render() {
    var buttonIngClicked = this.state.addIngredient;
    return(
      <div className="recipeDetail">
        <p className="btn__recipeDetail-close" onClick={this.handleClose}>X</p>
        {this.props.recipe.map(this.renderRecipe)}
        {buttonIngClicked &&
          <div >
            <form className="form__addIngredient" onSubmit={this.handleIngAdd}>
              <FormControl  type="text" value={this.state.ingredient} placeholder="Enter Ingredient" onChange={this.addIng} />
            </form>
          </div>
        }
        <br/>
        <div className="btn__recipeDetail">
          <Button bsStyle="primary" className="btn__recipeDetail-m-right" onClick={this.addIngClicked}>Add Ingredient</Button>
          <Button bsStyle="danger" onClick={this.handleDelete}>Delete Recipe</Button>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ recipe }) {
  return { recipe };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({addIng, deleteIng, selectedRecipe, deselectedRecipe, deleteRecipe}, dispatch);
}

export default connect (mapStateToProps, mapDispatchToProps)(RecipeDetail);
