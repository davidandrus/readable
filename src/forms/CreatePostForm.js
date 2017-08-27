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
  marginBottom: 20,
  width: '100%',
};

const { Option } = Select;

const CreatePostForm = (props) => {
  const { handleSubmit, pristine, reset, submitting, categories } = props;
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
          options={categories.map(({ name }) => ({
            label: name,
            value: name,
          }))}
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
          name="post"
          size='large'
          style={standardInputStyle} 
          type="textarea"
        />
      </label>
      <Button type="primary">Create Post</Button>
    </form>
  )
}

export default reduxForm({
  form: 'createPost',
})(CreatePostForm);


/* <label>
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
</form> */



