import React from 'react';
import { connect } from 'react-redux';
import {
  Field,
  reduxForm,
} from 'redux-form';

import {
  Button,
  Select,
} from 'antd';

import {
  SelectField,
  TextField,
} from 'redux-form-antd'

const standardInputStyle = {
  width: '100%',
};

const { Option } = Select;

const CreateEditPostForm = (props) => {
  const {
    handleSubmit,
    pristine,
    reset,
    submitting,
    categories,
    context,
  } = props;

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
          name="owner"
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
        {context === 'edit'
          ? 'Update Post'
          : 'Create Post'
        }
      </Button>
    </form>
  )
}

const Form = reduxForm({
  form: 'createPost',
})(CreateEditPostForm);

function mapStateToProps(state, ownProps) {
  return {
    initialValues: ownProps.post,
  }
}

export default connect(mapStateToProps)(Form)