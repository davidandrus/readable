import { getCategories } from '../API';
import { LOAD_COMMENTS } from './actionNames';

const loadCategoriesSync = (payload) => ({
  payload,
  type: LOAD_COMMENTS,
});

export default function loadCategories() {
  return (dispatch, getState) => {
    getCategories()
      .then(categories => dispatch(loadCategoriesSync(categories)))
  }
}