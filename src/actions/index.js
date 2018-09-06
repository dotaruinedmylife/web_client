import api from '../modules/api';

export const API_READ_PAGINATED_POSTS = 'API_READ_PAGINATED_POSTS';
export const API_CREATE_ONE_POST = 'API_CREATE_ONE_POST';
export const API_READ_ONE_POST = 'API_READ_ONE_POST';
export const API_DELETE_ONE_POST = 'API_DELETE_ONE_POST';
export const API_READ_AUTH_USER = 'API_READ_AUTH_USER';

export const ERROR_API_GENERIC = 'ERROR_API_GENERIC';

export function apiReadPaginatedPosts(page) {
  const request = api.readPaginatedPosts(page);

  return {
    type: API_READ_PAGINATED_POSTS,
    payload: request,
  };
}

export function apiCreatePost(body, token) {
  const request = api.createPost(body, token);

  return {
    type: API_CREATE_ONE_POST,
    payload: request,
  };
}

export function apiDeletePost(postSlug, token) {
  const request = api.deletePost(postSlug, token);

  return {
    type: API_DELETE_ONE_POST,
    payload: request,
  };
}

export function apiReadAuthUser(token) {
  const request = api.readUserFromToken(token);

  return {
    type: API_READ_AUTH_USER,
    payload: request,
  };
}

export function raiseApiGenericError(apiGenericErrorString) {
  return {
    type: ERROR_API_GENERIC,
    apiGenericErrorString,
  };
}
