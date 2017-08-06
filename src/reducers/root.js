import { LOAD_CATEGORIES } from '../actions/actionNames';
export default function(state = {categories: []}, action) {
  switch(action.type) {
    case LOAD_CATEGORIES:
      console.log('dispatched', action.payload)
      return {
        ...state,
        categories: action.payload,
      };
    default:
      return state;
  }
}