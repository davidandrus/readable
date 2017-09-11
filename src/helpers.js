import moment from 'moment';

function formatDate(date) {
  return moment(date).fromNow();
}

export {
  formatDate,
};