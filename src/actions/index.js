import jsonPlaceHolder from "../apis/jsonPlaceHolder";

/*(162) bad approach! breaking rules of the action creator. actions must be plain objects.
we are not returning plain js object, ES2015 formarts it in the browser to a huge code due to
async/await and returning request object jsonPlaceHolder.get("/posts").
without async/await we call request and wait for response some time, but reducers must get 
the data immediately.
need to use redux-thunk as middleware to deal with async action creator

export let fetchPosts = async () => {
  let response = await jsonPlaceHolder.get("/posts");
  return {
    type: "FETCH_POSTS",
    payload: response
  };
};
*/
/*redux thunk:
pass actions into dispatch function to change any data. call getState and return all data 
of the redux store. then wait for request to finish, then dispatch action manually and got 
new action, then pass it to the action */
/*export let fetchPosts = (dispatch, getState) => {
  return async function() {
    refactor:*/
export let fetchPosts = () => async dispatch => {
  let response = await jsonPlaceHolder.get("/posts");
  dispatch({ type: "FETCH_POSTS", payload: response });
};
