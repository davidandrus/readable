import { getCategories } from '../API';
import { LOAD_CATEGORIES } from './actionNames';

const loadCategoriesSync = (payload) => ({
  payload,
  type: LOAD_CATEGORIES,
});

export default function loadCategories() {
  return (dispatch, getState) => {
    getCategories()
      .then(categories => dispatch(loadCategoriesSync(categories)))
  }
}