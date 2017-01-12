import { SELECTED_RECIPE, DESELECTED_RECIPE, DESELECT_ALL } from '../actions/index.js';

export default function(state = [], action) {
  switch (action.type) {
    case DESELECT_ALL:
      return state = [];
    case SELECTED_RECIPE:
      return [action.payload, ...state]
    case DESELECTED_RECIPE:
      return state.filter(element => element !== action.payload);
  }
  return state;
}
