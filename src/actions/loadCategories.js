import { getCategories } from '../API';
import { LOAD_CATEGORIES } from './actionNames';

const loadCategories = () => {
  return (dispatch, getState) => {
    dispatch({
      payload: getCategories(),
      type: LOAD_CATEGORIES.STANDARD,
    });
  };
};

export default loadCategories;
