import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useApi from '../hooks/useApi';

export default function PostList() {
    const [posts, setPosts] = useState([]);
    const { get } = useApi();

    useEffect(() => {
        get('/posts').then(setPosts);
    }, []);

    return (
        <div>
            <h2>All Posts</h2>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <Link to={`/post/${post.id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}