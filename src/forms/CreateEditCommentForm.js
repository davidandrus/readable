import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Field,
  reduxForm,
} from 'redux-form';
import { Button } from 'antd';
import { TextField } from 'redux-form-antd'

const standardInputStyle = {
  width: '100%',
};

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
