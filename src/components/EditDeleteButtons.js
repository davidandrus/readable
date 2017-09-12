import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Button,
  Icon,
} from 'antd';

const { Group: ButtonGroup } = Button;

const EditDeleteButtons = ({ onDelete, editUrl }) => (
  <ButtonGroup>
    <Button type="primary">
      <Link to={editUrl}>
        <Icon type="edit" />
        Edit
      </Link>
    </Button>
    <Button
      type="danger"
      onClick={onDelete}
    >
      <Icon type="delete" />
      Delete
    </Button>
  </ButtonGroup>
);

EditDeleteButtons.propTypes = {
  onDelete: PropTypes.func.isRequired,
  editUrl: PropTypes.string.isRequired,
};

export default EditDeleteButtons;
