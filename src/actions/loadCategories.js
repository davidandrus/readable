import { getCategories } from '../API';
import { LOAD_CATEGORIES } from './actionNames';

export default function loadCategories() {
  return (dispatch, getState) => {
    dispatch({
      payload: getCategories(),
      type: LOAD_CATEGORIES.STANDARD,
    });
  }
}