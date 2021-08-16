import React from 'react';
import { connect } from 'react-redux';
import { incrementVote, decrementVote } from '../actions';

function PostList(props) {
  /* const [id, setId] = useState(() => {
    return;
  }); */

  function handleIncrement(event) {
    let id = parseInt(event.target.value);
    props.incrementVote(id);
  }
  function handleDecrement(event) {
    let id = parseInt(event.target.value);
    props.decrementVote(id);
  }

  const array = props.posts;
  array.sort((a, b) =>
    a.count < b.count ? 1 : a.count === b.count ? (a.id > b.id ? 1 : -1) : -1
  );
  // for a and b in array, if a.count is larger than b.count, it gets priority, else if counts are equal, lower id gets priority
  // this sorts the list based on votes first, then based on id
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
