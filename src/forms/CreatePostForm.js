import React from 'react';
import {
  Field,
  reduxForm,
} from 'redux-form';

import {
  Button,
  Input,
  Select,
} from 'antd';

import {
  SelectField,
  TextField,
} from 'redux-form-antd'

const standardInputStyle = {
  // marginBottom: 20,
  width: '100%',
};

const { Option } = Select;

const CreatePostForm = (props) => {
  const { handleSubmit, pristine, reset, submitting, categories } = props;
  const categoryOptions = categories.map(({ name }) => ({
    label: name,
    value: name,
  }));

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title
        <Field
          component={TextField}
          name="title"
          size='large'
          style={standardInputStyle} 
        />
      </label>
      <label>
        Category
        <Field
          component={SelectField}
          name="category"
          options={categoryOptions}
          style={standardInputStyle} 
        />
      </label>
      <label>
        Author
        <Field
          component={TextField}
          name="author"
          size='large'
          style={standardInputStyle}
        />
      </label>
      <label>
        Post Body
        <Field
          component={TextField}
          name="body"
          size='large'
          style={standardInputStyle} 
          type="textarea"
        />
      </label>
      <Button
        htmlType="submit"
        type="primary"
      >
        Create Post
      </Button>
    </form>
  )
}

export default reduxForm({
  form: 'createPost',
})(CreatePostForm);