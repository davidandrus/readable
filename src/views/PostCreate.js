import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  Button,
  Input,
  Select,
} from 'antd';
import createPost from '../actions/createPost';
const { Option } = Select;


function PostCreate({ categories, actions }) {
  return (
    <div>
      <h1>Create Post</h1>
      <form onSubmit={actions.createPost}>
        <label>
          Title
          <Input
            size='large'
            style={{width: '100%', marginBottom: 20}} 
          />
        </label>
        <div>
          <label>
            Category
            <Select style={{width: '100%', marginBottom: 20}}>
              {categories.map(({ name }) => (
                <Option
                  key={name}
                  value={name}
                >
                  {name}
                </Option>
              ))}
            </Select>
          </label>
        </div>
        <label>
          Author
          <Input
            size='large'
            style={{width: '100%', marginBottom: 20}} 
          />
        </label>
        <br />
        <label>
          Post Body
          <Input.TextArea
            size='large'
            style={{width: '100%', marginBottom: 20}} 
            addonBefore='Content'
          />
        </label>
        <Button type="primary">Create Post</Button>
      </form>
    </div>
  );
}

PostCreate.propTypes = {
  categories: PropTypes.array,
  actions: PropTypes.object,
}

function mapStateToProps({ categories }) {
  return { categories };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ createPost }, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostCreate);
