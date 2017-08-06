import React from 'react';
import { connect } from 'react-redux'
import { Menu } from 'antd';

function CategoriesList({ categories }) {
  return (
    <Menu>
      {categories.map(category => (
        <Menu.Item key={category.name}>
          {category.name}
        </Menu.Item>
      ))}
    </Menu>
  )
}

function mapStateToProps(state) {
  return { categories: state.categories };
}

export default connect(mapStateToProps)(CategoriesList);