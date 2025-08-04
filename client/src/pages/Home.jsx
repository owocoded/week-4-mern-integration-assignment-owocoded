import { useEffect, useState } from 'react';
import { postService } from '../services/api';
import { Link } from 'react-router-dom';
import PostList from '../components/PostList';
import './Home.css';

const HomePage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getAllPosts()
            .then((res) => setPosts(res.data))
            .catch((err) => console.error(err));
    }, []);

    return (
        <div className="homepage">
            <h1>Welcome to Yusuf's Blog 📝</h1>
            <p>Explore the latest posts and insights.</p>
            <div className="posts-grid">
                {posts.map((post) => (
                    <div key={post._id} className="post-card">
                        <h2>{post.title}</h2>
                        <p>{post.content.substring(0, 150)}...</p>
                        <Link to={`/posts/${post._id}`} className="read-more">Read More</Link>
                    </div>
                ))}
            </div>
            <PostList />
            <div className="footer">
                <p>&copy; 2023 Yusuf's Blog. All rights reserved.</p>
            </div>
        </div>
    );
};

export default HomePage;



// import { useState, useEffect } from 'react';
// import axios from 'axios';

// function Home() {
//     const [users, setUsers] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState('');

//     useEffect(() => {
//         axios.get('/api/users')
//             .then(res => {
//                 setUsers(res.data);
//                 setLoading(false);
//             })
//             .catch(err => {
//                 setError('Failed to fetch users.');
//                 setLoading(false);
//             });
//     }, []);

//     return (
//         <div className="max-w-2xl mx-auto mt-10 p-4 bg-white rounded shadow">
//             <h1 className="text-2xl font-bold mb-4 text-center">👥 User List</h1>

//             {loading && <p className="text-blue-500 text-center">Loading users...</p>}

//             {error && <p className="text-red-500 text-center">{error}</p>}

//             {!loading && !error && (
//                 <ul className="divide-y divide-gray-200">
//                     {users.map(user => (
//                         <li key={user._id} className="py-2 flex justify-between text-gray-700">
//                             <span>{user.name}</span>
//                             <span>{user.email}</span>
//                         </li>
//                     ))}
//                 </ul>
//             )}
//         </div>
//     );
// }

// export default Home;