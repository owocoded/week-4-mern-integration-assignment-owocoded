import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useApi from '../hooks/useApi';

export default function PostView() {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const { get } = useApi();

    useEffect(() => {
        get(`/posts/${id}`).then(setPost);
    }, [id]);

    if (!post) return <p>Loading...</p>;

    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
        </div>
    );
}