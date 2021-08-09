import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { incrementVote, decrementVote } from '../actions';

function PostList(props) {
  const [id, setId] = useState(() => {
    return;
  });

  useEffect(() => {
    console.log(id, ' in useEffect');
  });

  function handleIncrement(event) {
    setId(prevstate => ({ ...prevstate, id: event.target.value }));
    increment();
  }
  function handleDecrement(event) {
    setId(event.target.value);
    decrement();
  }
  function increment() {
    console.log(id, ' in increment');
    props.incrementVote(id);
  }
  function decrement() {
    console.log(id, ' in decrement');
    props.decrementVote(id);
  }

  const array = props.posts;
  const listPosts = array.map(value => (
    <>
      <div className="vote">
        <h3>{value.count}</h3>
        <button value={value.id} onClick={handleIncrement}>
          Upvote
        </button>
        <button value={value.id} onClick={handleDecrement}>
          Downvote
        </button>
      </div>
      <li key={value.id}>
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
const mapDispatchToProps = {
  incrementVote,
  decrementVote
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList);
