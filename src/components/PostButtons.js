import React from 'react';
import { Link } from 'react-router-dom';

import {
  Button,
  Icon,
} from 'antd';

const { Group: ButtonGroup } = Button;

export default function({ id, onDelete}) {
  return (
    <ButtonGroup>
      <Button type="primary">
        <Link to={`/post/edit/${id}`}>
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
