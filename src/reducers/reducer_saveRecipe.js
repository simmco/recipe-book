import { ADD_ING, DELETE_ING, SAVE_RECIPE, DELETE_RECIPE } from '../actions/index.js';

var nextIngredientsId = 1;

export default function(state = [], action) {
  switch (action.type) {
    case SAVE_RECIPE:
      return [action.payload, ...state];
    case ADD_ING:
        state.forEach((obj) => {
          if(obj.id === action.recipeId) {
            obj.ingredients.push(action.payload);
          }
        })
        return state;
    case DELETE_ING:
      console.log(action.payload.id);
      state.forEach((obj) => {
        var index = 0;
        obj.ingredients.forEach((ing) => {
           if(ing.id === action.payload.id){
             obj.ingredients.splice(index, 1)
           }
           index++
        })
      })
    return state;
    case DELETE_RECIPE:
      return state.filter(element => element.id !== action.payload.id);
  }
  return state;
}
