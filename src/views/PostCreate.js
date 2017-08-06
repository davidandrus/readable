import React from 'react';
import {
  Button,
  Input,
} from 'antd';

  // author,
  // body,
  // category,
  // timestamp,
  // title,
export default function PostCreate() {
  return (
    <div>
      <h1>Create Post</h1>
      <label>
        Title
        <Input
          size='large'
          style={{width: '100%', marginBottom: 20}} 
        />
      </label>
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
    </div>
  );
}

