//Action Creator
//action returns an object
export function addPost(post) {
  return {
    type: 'ADD_POST',
    payload: post
  };
}
export function incrementVote(id) {
  console.log('increment action called');
  return {
    type: 'INCREMENT_VOTE',
    payload: id
  };
}
export function decrementVote(id) {
  return {
    type: 'DECREMENT_VOTE',
    payload: id
  };
}
