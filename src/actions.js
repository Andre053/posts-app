//Action Creator
//action returns an object
export function addPost(post) {
  return {
    type: 'ADD_POST',
    payload: post
  };
}
export function incrementVote(vote) {
  return {
    type: 'VOTE',
    payload: vote
  };
}
export function decrementVote(vote) {
  return {
    type: 'VOTE',
    payload: vote
  };
}
