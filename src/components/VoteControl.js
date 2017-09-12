import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';

const WRAPPER_STYLE = {
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  fontSize: 36,
};
const VOTE_SCORE_STYLE = {
  fontSize: 24,
};

const VoteControl = ({
  onDownVote,
  onUpVote,
  voteScore,
}) => (
  <div style={WRAPPER_STYLE}>
    <Button
      icon="caret-up"
      onClick={onUpVote}
      />
    <div style={VOTE_SCORE_STYLE}>
      {voteScore}
    </div>
    <Button 
      icon="caret-down"
      onClick={onDownVote}
    />
  </div>
);

VoteControl.propTypes = {
  onDownVote: PropTypes.func.isRequired,
  onUpVote: PropTypes.func.isRequired,
  voteScore: PropTypes.number.isRequired,
};

export default VoteControl;
