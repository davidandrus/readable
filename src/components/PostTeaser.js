import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Card } from 'antd';

import { formatDate } from '../helpers';

import EditDeleteButtons from './EditDeleteButtons';
import VoteControl from './VoteControl';

export default function PostTeaser({
  onDelete,
  onDownVote,
  onUpVote,
  post: {
    author,
    body,
    comments,
    category,
    id,
    timestamp,
    title,
    voteScore,
  },
}) {
  const titleElem = <Link to={`/post/${id}`}>{title}</Link>;

  return (
    <div style={{display: 'flex', marginBottom: 30 }}>
      <div style={{display: 'flex', width: 50, flexDirection: 'column', alignItems: 'center', fontSize: 30, marginRight: 20}}>
        <VoteControl
          onUpVote={onUpVote}
          onDownVote={onDownVote}
          voteScore={voteScore}
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
              Posted: <strong>{formatDate(timestamp)}</strong>
            </div>
            <div style={{marginBottom: 20}}><strong>{comments.length} Comments</strong></div>
            <EditDeleteButtons
              editUrl={`/post/edit/${id}`}
              id={id}
              onDelete={onDelete}
            />
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