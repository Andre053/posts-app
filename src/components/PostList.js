import React, { useState } from 'react';
import { connect } from 'react-redux';
import { incrementVote, decrementVote } from '../actions';

function PostList(props) {
  //const [vote, setVote] = useState();

  /* function increment() {
    setVote(1);
    console.log(vote);
    props.incrementVote(vote);
    setVote(0);
    console.log(vote);
  }
  function decrement() {
    setVote(1);
    console.log(vote);
    props.decrementVote(vote);
    setVote(0);
    console.log(vote);
  } */
  /* function increment() {
    setVote(1)

  } */
  const array = props.posts;
  const listPosts = array.map((value, index) => (
    <>
      <div className="vote">
        <h3>{value.count}</h3>
        <button /* onClick={increment} */>Upvote</button>
        <button /* onClick={decrement} */>Downvote</button>
      </div>
      <li key={index}>
        <h3>{value.title}</h3>
        <h4>by {value.author}</h4>
        <p>{value.content}</p>
      </li>
    </>
  ));
  return <ul>{listPosts}</ul>;
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}
/* const mapDispatchToProps = {
  incrementVote,
  decrementVote
}; */
export default connect(mapStateToProps)(PostList);
