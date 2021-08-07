import React from 'react';
import { incrementVote, decrementVote } from '../actions';

export function NewVote(props) {
  const [vote, setVote] = useState(null);
  console.log(vote);

  function increment(event) {
    setVote(1);
    console.log(vote);
    props.incrementVote(vote);
  }
  function decrement(event) {
    setVote(-1);
    console.log(vote);
    props.decrementVote(vote);
  }
}
