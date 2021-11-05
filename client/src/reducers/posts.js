import { handleActions } from 'redux-actions';
import { FETCH_ALL, FETCH_BY_SEARCH, FETCH_POST, CREATE, UPDATE, DELETE, LIKE, START_LOADING, END_LOADING } from '../constants/actionTypes';

/*
export default (state = { isLoading: true, posts: [] }, action) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };
    case FETCH_ALL:
      return {
        ...state,
        posts: action.payload.data,
        currentPage: action.payload.currentPage,
        numberOfPages: action.payload.numberOfPages,
      };
    case FETCH_BY_SEARCH:
      return { ...state, posts: action.payload.data };
    case FETCH_POST:
      return { ...state, post: action.payload };
    case LIKE:
      return { ...state, posts: state.posts.map((post) => (post._id === action.payload._id ? action.payload : post))};
    case CREATE:
      return { ...state, posts: [...state.posts, action.payload]};
    case UPDATE:
      return { ...state, posts: state.posts.map((post) => (post._id === action.payload._id ? action.payload : post))};
    case DELETE:
      return { ...state, posts: state.posts.filter((post) => post._id !== action.payload) };
    default:
      return state;
  }
};
*/

const initialState = {
  isLoading: true,
  posts: [],
}

const posts = handleActions({
  [START_LOADING]: (state) => ({ ...state, isLoading: true }),
  [END_LOADING]: (state) => ({ ...state, isLoading: false }),
  [FETCH_ALL]: (state, action) => ({ ...state, posts: action.payload.data, currentPage: action.payload.currentPage, numberOfPages: action.payload.numberOfPages}),
  [FETCH_BY_SEARCH]: (state, action) => ({ ...state, posts: action.payload.data }),
  [FETCH_POST]: (state, action) => ({ ...state, post: action.payload }),
  [LIKE]: (state, action) => ({ ...state, posts: state.posts.map((post) => (post._id === action.payload._id ? action.payload : post))}),
  [CREATE]: (state, action) => ({ ...state, posts: [...state.posts, action.payload ]}),
  [UPDATE]: (state, action) => ({ ...state, posts: state.posts.map((post) => (post._id === action.payload._id ? action.payload : post))}),
  [DELETE]: (state, action) => ({ ...state, posts: state.posts.filter((post) => post._id !== action.payload )}),
},initialState);

export default posts;