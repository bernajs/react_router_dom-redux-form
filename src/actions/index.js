import axios from 'axios'

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const CREATE_POST = 'CREATE_POST';
export const DELETE_POST = 'DELETE_POST';

const url = 'http://reduxblog.herokuapp.com/api';
const key = '?key=bernajs';

export function fetchPosts() {
    const request = axios.get(`${url}/posts${key}`);

    return {type: FETCH_POSTS, payload: request}
}

export function createPost(values) {
    const request = axios.post(`${url}/posts${key}`, values);

    return {type: CREATE_POST, payload: request}
}

export function fetchPost(id) {
    const request = axios.get(`${url}/posts/${id}${key}`);

    return {type: FETCH_POST, payload: request}

}

export function deletePost(id) {
    const request = axios.delete(`${url}/posts/${id}${key}`);
    console.log(id);
    return {type: DELETE_POST, payload: request}
}