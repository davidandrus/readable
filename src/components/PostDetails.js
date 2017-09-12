import React from 'react';
import PropTypes from 'prop-types';

import { formatDate } from '../helpers';

const WRAPPER_STYLE = {
  marginBottom: 20,
};

const PostDetails = ({ 
  post: {
    author,
    category,
    comments = [],
    timestamp,
  },
}) => (
  <div style={WRAPPER_STYLE}>
    <div>
      Posted By: <strong>{author}</strong>
    </div>
    <div>
      Posted in: <strong>{category}</strong>
    </div>
    <div>
      Posted: <strong>{formatDate(timestamp)}</strong>
    </div>
    <div><strong>{comments.length} Comments</strong></div>
  </div>
);

PostDetails.propTypes = {
  author: PropTypes.string,
  category: PropTypes.string,
  comments: PropTypes.array,
  timestamp: PropTypes.Number,
};

export default PostDetails;