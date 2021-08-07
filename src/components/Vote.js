import React, { useState } from 'react';
import { connect } from 'react-redux';

function Vote(props) {
  const [vote, setVote] = useState(0);

  function handleChange(event) {
    setVote();
  }

  props.votePost(vote);
}
