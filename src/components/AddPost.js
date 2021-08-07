import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addPost } from '../actions';

function AddPost(props) {
  const [post, setPost] = useState({
    title: '',
    author: '',
    content: ''
  });
  /* flash message for warning
  const flash = () => {
    [visible, setVisible] = useState(false);

    return (visible && 
    <div>
      <strong>Error!<strong/>
    </div>)
  }; */

  function handleChange(event) {
    const { name, value } = event.target;
    setPost(prevState => ({
      //NEED TO UNDERSTAND
      ...prevState,
      [name]: value
    }));
  }
  function handleSubmit(event) {
    if (post.title !== '' && post.author !== '' && post.content !== '') {
      //change if statement
      props.addPost(post);

      setPost({
        title: '',
        author: '',
        content: ''
      });
    }

    event.preventDefault(); //stops form from reloading page
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Add New Post</h2>
        <label>
          Title:
          <input
            name="title"
            type="text"
            placeholder="Add a post title"
            onChange={handleChange}
            value={post.title}
          />
        </label>
        <label>
          Author:
          <input
            name="author"
            type="text"
            placeholder="Add a post author"
            onChange={handleChange}
            value={post.author}
          />
        </label>
        <label>
          Content:
          <textarea
            name="content"
            type="text"
            placeholder="Add post content"
            onChange={handleChange}
            value={post.content}
          />
        </label>
        <input type="submit" />
      </form>
    </>
  );
}

const mapDispatchToProps = {
  addPost
};

export default connect(
  null,
  mapDispatchToProps
)(AddPost);
