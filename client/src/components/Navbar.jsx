import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav>
            <Link to="/">Posts</Link> | <Link to="/new">Create Post</Link>
        </nav>
    );
}