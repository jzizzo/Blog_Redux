import axios from 'axios';
import { API_KEY } from '../config/config'

export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POST = 'create_post';


const ROOT_URL = 'http://reduxblog.herokuapp.com/api';

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts?key=${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function createPost(values) {
  const request = axios.post(`${ROOT_URL}/posts?key=${API_KEY}`, values);

  return {
    type: CREATE_POST,
    payload: request
  }
}