import React from 'react';
import { connect } from 'react-redux';

function PostList(props) {
  const array = props.posts;
  const listPosts = array.map((value, index) => (
    <>
      <div className="vote">
        <h3>{value.count}</h3>
        <button key="Upvote" onClick={}>
          Upvote
        </button>
        <button key="Downvote" onClick={}>
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
function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}
export default connect(mapStateToProps)(PostList);
