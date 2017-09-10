import React from 'react';
import { Link } from 'react-router-dom';

import {
  Button,
  Icon,
} from 'antd';

const { Group: ButtonGroup } = Button;

export default function EditDeleteButtons({ id, onDelete, editUrl }) {
  console.log('rendering Edit', {
    id,
    onDelete,
    editUrl,
  })
  return (
    <ButtonGroup>
      <Button type="primary">
        <Link to={editUrl}>
          <Icon type="edit" />
          Edit
        </Link>
      </Button>
      <Button type="danger" onClick={() => onDelete(id)}>
        <Icon type="delete" />
        Delete
      </Button>
    </ButtonGroup>
  );
}
