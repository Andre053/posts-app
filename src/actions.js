//Action Creator
//action returns an object
export function addPost(post) {
  return {
    type: 'ADD_POST',
    payload: post
  };
}
/* export function incrementVote(vote) {
  console.log('increment action called');
  return {
    type: 'INCREMENT_VOTE',
    payload: vote
  };
}
export function decrementVote(vote) {
  return {
    type: 'DECREMENT_VOTE',
    payload: vote
  };
} */
