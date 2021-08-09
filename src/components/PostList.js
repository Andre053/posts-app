import React, { useState } from 'react';
import { connect } from 'react-redux';
import { incrementVote, decrementVote } from '../actions';

function PostList(props) {
  const [id, setId] = useState();

  function increment(event) {
    console.log('increment id ', event.target.value);
    setId(0); //gets value associated to button
    console.log('id is ', id);
    props.incrementVote(id); //calls increment with this id
  }
  function decrement(event) {
    console.log('decrement id ', event.target.value);
    setId(event.target.value);
    console.log('id is ', id);
    props.decrementVote(id);
  }

  const array = props.posts;
  const listPosts = array.map(value => (
    <>
      <div className="vote">
        <h3>{value.count}</h3>
        <button value={value.id} onClick={increment}>
          Upvote
        </button>
        <button value={value.id} onClick={decrement}>
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
