import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonplaceholder';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts());

    const state = getState();
    // const userIds = _.uniq(_.map(state.posts, 'userId'));
    // userIds.forEach(id => dispatch(fetchUser(id)));

    _.chain(state.posts)
    .map('userId')
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    .value();
}

export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('posts');
    
    dispatch({type: 'FETCH_POSTS', payload: response.data });
};

export const fetchUser = (userId) => async dispatch => {
    const response = await jsonPlaceholder.get(`users/${userId}`);
    
    dispatch({type: 'FETCH_USER', payload: response.data });
};


// export const fetchUser = (userId) => dispatch => _fetchUser(userId, dispatch);

// export const _fetchUser = memoize(async (userId, dispatch) => {
//     const response = await jsonPlaceholder.get(`users/${userId}`);
    
//     dispatch({type: 'FETCH_USER', payload: response.data });
// });