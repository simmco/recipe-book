import { combineReducers } from 'redux';
import SaveRecipeReducer from './reducer_saveRecipe';
import ShowRecipeReducer from './reducer_showRecipe';


const rootReducer = combineReducers({
  recipes: SaveRecipeReducer,
  recipe: ShowRecipeReducer
});

export default rootReducer;
