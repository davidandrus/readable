import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const CategoriesList = ({
  categories,
  category,
}) => (
  <Menu selectedKeys={[category]}>
    {categories.map(category => (
      <Menu.Item key={category.name}>
        <Link 
          to={`/${category.path}`}
          key={category.name}
        > 
          {category.name}
        </Link>
      </Menu.Item>
    ))}
  </Menu>
);

CategoriesList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = ({ categories, router }) => ({
  categories,
  category: router.location.pathname.split('/')[1],
});

export default connect(mapStateToProps)(CategoriesList);
