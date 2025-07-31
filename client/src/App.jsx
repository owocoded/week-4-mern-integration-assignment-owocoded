import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import PostList from './components/PostList';
import PostView from './components/PostView';
import PostForm from './components/PostForm';

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/post/:id" element={<PostView />} />
          <Route path="/new" element={<PostForm />} />
          <Route path="/edit/:id" element={<PostForm />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}