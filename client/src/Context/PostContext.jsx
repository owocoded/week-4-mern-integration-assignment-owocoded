import { createContext, useState, useEffect } from 'react';
import {
    fetchPosts,
    createPost,
    updatePost,
    deletePost,
} from '../api';

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const loadPosts = async () => {
        setLoading(true);
        try {
            const res = await fetchPosts();
            setPosts(res.data);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    const addPost = async (post) => {
        const tempPost = { ...post, _id: Date.now() }; // optimistic
        setPosts(prev => [tempPost, ...prev]);
        try {
            const res = await createPost(post);
            loadPosts(); // refresh with backend truth
        } catch (err) {
            setError(err);
            setPosts(prev => prev.filter(p => p._id !== tempPost._id));
        }
    };

    useEffect(() => {
        loadPosts();
    }, []);

    return (
        <PostContext.Provider value={{ posts, loading, error, addPost }}>
            {children}
        </PostContext.Provider>
    );
};