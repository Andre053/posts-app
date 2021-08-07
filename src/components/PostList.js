import React from 'react';
import { connect } from 'react-redux';

function PostList(props) {
  const array = props.posts;
  const listPosts = array.map((value, index) => (
    <>
      <div className="vote">
        <h3>{value.count}</h3>
        <button key="Upvote" onClick={handleClickIncrement(array)}>
          Upvote
        </button>
        <button key="Downvote" onClick={handleClickDecrement}>
          Downvote
        </button>
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
function handleClickIncrement(array) {
  console.log('Handling increment');
  array.count += 1;
}
function handleClickDecrement(event) {
  console.log('Handling decrement');
}
function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}
export default connect(mapStateToProps)(PostList);