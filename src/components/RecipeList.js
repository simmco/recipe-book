import React, {Component} from 'react';
import {Panel, Grid, Row, Col, Jumbotron} from 'react-bootstrap';
import { connect } from 'react-redux';

import Recipe from './Recipe';
import RecipeDetail from './RecipeDetail';
import AddRecipe from './AddRecipe';


class RecipeList extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }
  render() {
    var {recipes} = this.props;
    console.log(this.props);
    var selRecipe = this.props.recipe.length;
    var renderRecipes = () => {
        if(recipes.length === 0) {
          return (
            <p>No recipe</p>
          );
        }
        return recipes.map((recipe) => {
          return (
            <Row>
                <Recipe key={recipe.id} {...recipe} />
            </Row>
          );
        });
    }
    return(
      <Grid>
        <Row>

          <Col xs={12} md={6}>
            <Jumbotron>
              {renderRecipes()}
              <AddRecipe />
            </Jumbotron>

          </Col>
          <Col xs={12} md={6}>
            { selRecipe > 0 &&
              <RecipeDetail />
            }
          </Col>
        </Row>
      </Grid>

    )
  }
}

function mapStateToProps({ recipes, recipe }) {
  return { recipes, recipe };
}

export default connect (mapStateToProps)(RecipeList);
