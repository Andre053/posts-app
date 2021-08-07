//Action Creator
//action returns an object
export function addPost(post) {
  return {
    type: 'ADD_POST',
    payload: post
  };
}
export function votePost(voteType) {
  return {
    type: 'VOTE',
    payload: voteType
  };
}
