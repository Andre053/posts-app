import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import PostList from './components/PostList';
import AddPost from './components/AddPost';
import './style.css';

const initialState = {
  posts: [
    {
      title: 'A Good Post',
      author: 'Andre Unknown',
      content: 'Here is some great smart content.',
      count: 0
    },
    {
      title: 'A Fantasic Post',
      author: 'Sophie Unknown',
      content: 'You will not find better content than this!',
      count: 0
    },
    {
      title: 'A Long Post',
      author: 'Lorem Ipsum',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      count: 0
    }
  ]
};
function reducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_POST':
      return {
        posts: [
          ...state.posts,
          {
            title: action.payload.title,
            author: action.payload.author,
            content: action.payload.content,
            count: 0
          }
        ]
      };
    case 'incrementVote':
      return [...state, { count: ++action.payload }];
    case 'decrementVote':
      return [...state, { count: --action.payload }];
    default:
      return state;
  }
}
const store = createStore(reducer);
export default function App() {
  return (
    <Provider store={store}>
      <PostList />
      <AddPost />
    </Provider>
  );
}
