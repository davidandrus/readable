import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'antd';

export default function PostTeaser({
  author,
  body,
  category,
  timestamp,
  title,
  voteScore,
}) {
  const dateString = new Date(timestamp).toLocaleDateString('en-US');

  return (
    <div style={{display: 'flex', marginBottom: 30 }}>
      <div style={{display: 'flex', width: 50, flexDirection: 'column', alignItems: 'center', fontSize: 30, marginRight: 20}}>
        <Button icon="caret-up" />
        {voteScore}
        <Button icon="caret-down" />
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
  author: PropTypes.string,
  body: PropTypes.string,
  category: PropTypes.string,
  title: PropTypes.string,
  timestamp: PropTypes.number,
  voteScore: PropTypes.number,
};