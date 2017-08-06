import React from 'react';
import { connect } from 'react-redux'
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

function CategoriesList({ categories }) {
  return (
    <Menu>
      {categories.map(category => (
          <Menu.Item >
            <Link 
              to={`/category/${category.path}`}
              key={category.name}
            > 
              {category.name}
            </Link>
          </Menu.Item>
      ))}
    </Menu>
  )
}

function mapStateToProps({ categories }) {
  return { categories };
}

export default connect(mapStateToProps)(CategoriesList);