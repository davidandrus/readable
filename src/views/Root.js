import React from 'react';
import { connect } from 'react-redux';
import { PostTeaser } from '../components';

function Root(props) {
  console.log({ props });
  return (
    <div>
      <PostTeaser />
    </div>
  )
}

const mapStateToProps = ({ categories }) => ({
  categories,
});

export default connect(mapStateToProps)(Root)
