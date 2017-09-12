import moment from 'moment';

const formatDate = (date) => moment(date).fromNow();
const requiredValidator = field =>
  value => value ? undefined : `${field} is required`;


export {
  formatDate,
  requiredValidator,
};