import { SET_SORT } from './actionNames';

export default function setSort(payload) {
  return {
    type: SET_SORT,
    payload,
  };
}