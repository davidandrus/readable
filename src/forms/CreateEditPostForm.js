import React from 'react';
import { connect } from 'react-redux';
import {
  Field,
  reduxForm,
} from 'redux-form';
import { Button } from 'antd';
import {
  SelectField,
  TextField,
} from 'redux-form-antd'

import { requiredValidator } from '../helpers';

const standardInputStyle = {
  width: '100%',
};

const titleValidator = requiredValidator('Title');
const categoryValidator = requiredValidator('Category');
const authorValidator = requiredValidator('Author');
const bodyValidator = requiredValidator('Post Body');

const CreateEditPostForm = ({
  handleSubmit,
  categories,
  context,
}) => {

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
          validate={[ titleValidator ]}
        />
      </label>
      <label>
        Category
        <Field
          component={SelectField}
          name="category"
          options={categoryOptions}
          style={standardInputStyle}
          validate={[ categoryValidator ]}
        />
      </label>
      <label>
        Author
        <Field
          component={TextField}
          name="author"
          size='large'
          style={standardInputStyle}
          validate={[ authorValidator ]}
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
          validate={[ bodyValidator ]}
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

const mapStateToProps = (state, ownProps) => ({
  initialValues: ownProps.post,
});

export default connect(mapStateToProps)(Form);
