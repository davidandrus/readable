import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Field,
  reduxForm,
} from 'redux-form';
import { Button } from 'antd';
import { TextField } from 'redux-form-antd'

import { requiredValidator } from '../helpers';

const standardInputStyle = {
  width: '100%',
};

const authorValidator = requiredValidator('Author');
const bodyValidator = requiredValidator('Post Body');

const CreateEditCommentForm = ({
  context,
  handleSubmit,
}) => (
  <form onSubmit={handleSubmit}>
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
        ? 'Update Comment'
        : 'Create Comment'
      }
    </Button>
  </form>
);

CreateEditCommentForm.propTypes = {
  context: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
};

const Form = reduxForm({
  form: 'createComment',
})(CreateEditCommentForm);

const mapStateToProps = (state, ownProps) => ({
  initialValues: ownProps.comment,
});

export default connect(mapStateToProps)(Form);
