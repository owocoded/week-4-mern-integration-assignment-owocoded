import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api',
});

// Posts
export const fetchPosts = () => api.get('/posts');
export const fetchPost = (id) => api.get(`/posts/${id}`);
export const createPost = (post) => api.post('/posts', post);
export const updatePost = (id, post) => api.put(`/posts/${id}`, post);
export const deletePost = (id) => api.delete(`/posts/${id}`);

// Categories
export const fetchCategories = () => api.get('/categories');
export const createCategory = (category) => api.post('/categories', category);