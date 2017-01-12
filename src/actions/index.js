import uuid from 'uuid';

export const SAVE_RECIPE = 'SAVE_RECIPE';
export const ADD_ING = 'ADD_ING';
export const DELETE_ING = 'DELETE_ING';
export const SELECTED_RECIPE = 'SELECTED_RECIPE';
export const DESELECTED_RECIPE = 'DESELECTED_RECIPE';
export const DELETE_RECIPE = 'DELETE_RECIPE';
export const DESELECT_ALL = 'DESELECT_ALL';

export function saveRecipe(name, ingredients) {
  var recipe = {
    id: uuid(),
    name: name,
    ingredients: ingredients
  }

  return {
    type: SAVE_RECIPE,
    payload: recipe
  };
}

export function addIng(recipeId, ing) {
  console.log(recipeId);
  console.log(ing);
  return {
    type: ADD_ING,
    payload: ing,
    recipeId: recipeId
  }
}

export function deleteIng(ing){
  return {
    type: DELETE_ING,
    payload: ing
  }
}

export function selectedRecipe(id) {
  return {
    type: SELECTED_RECIPE,
    payload: id
  }
}

export function deselectedRecipe(id) {
  console.log(id);
  return {
    type: DESELECTED_RECIPE,
    payload: id
  }
}

export function deselectAll() {
  return {
    type: DESELECT_ALL
  }
}

export function deleteRecipe(id) {
  return {
    type: DELETE_RECIPE,
    payload: id
  }
}
