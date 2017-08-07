import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'antd';

export default function PostTeaser({
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
        <Card title={title}>
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
            <div><strong>500 Comments</strong></div>
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