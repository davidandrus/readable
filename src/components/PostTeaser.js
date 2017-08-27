import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Card,
  Button,
  Icon,
} from 'antd';

const { Group: ButtonGroup } = Button;

export default function PostTeaser({
  onDelete,
  onDownVote,
  onUpVote,
  post: {
    author,
    body,
    category,
    id,
    timestamp,
    title,
    voteScore,
  },
}) {
  const dateString = new Date(timestamp).toLocaleDateString('en-US');
  const titleElem = <Link to={`${category}/${id}`}>{title}</Link>;

  return (
    <div style={{display: 'flex', marginBottom: 30 }}>
      <div style={{display: 'flex', width: 50, flexDirection: 'column', alignItems: 'center', fontSize: 30, marginRight: 20}}>
        <Button
          icon="caret-up"
          onClick={() => onUpVote(id)}
          />
        {voteScore}
        <Button 
          icon="caret-down"
          onClick={() => onDownVote(id)}
        />
      </div>
      <div style={{flex: '1 1 20000px'}}>
        <Card title={titleElem}>
          <div style={{display: 'flex', flexDirection: 'column'}}>
            <div style={{marginBottom: 20}}>
              {body}
            </div>
            <div>
              Posted By: <strong>{author}</strong>
            </div>
            <div>
              Posted in: <strong>{category}</strong>
            </div>
            <div>
              Posted On: <strong>{dateString}</strong>
            </div>
            <div style={{marginBottom: 20}}><strong>500 Comments</strong></div>
            <div>
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
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

PostTeaser.propTypes = {
  onDownVote: PropTypes.func,
  onUpVote: PropTypes.func,
  post: PropTypes.shape({
    author: PropTypes.string,
    body: PropTypes.string,
    category: PropTypes.string,
    id: PropTypes.number,
    title: PropTypes.string,
    timestamp: PropTypes.number,
    voteScore: PropTypes.number,
  }),
};