import React from 'react';
import { connect } from 'react-redux';

function Category(props) {
  console.log({ props });
  return <h1>Category</h1>
}

const mapStateToProps = ({ categories }) => ({
  categories,
});

export default connect(mapStateToProps)(Category)

