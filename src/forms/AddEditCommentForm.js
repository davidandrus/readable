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

import { TextField } from 'redux-form-antd'

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
  } = props;

  return (
    <form onSubmit={handleSubmit}>
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
        CreateComment
      </Button>
    </form>
  )
}

const Form = reduxForm({
  form: 'createComment',
})(CreateEditPostForm);

function mapStateToProps(state, ownProps) {
  return {
    initialValues: ownProps.comment,
  }
}

export default connect(mapStateToProps)(Form)