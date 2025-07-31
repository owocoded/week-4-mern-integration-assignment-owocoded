const Post = require('../models/Post');

exports.getPosts = async (req, res) => {
    const posts = await Post.find().populate('category');
    res.json(posts);
};

exports.getPostById = async (req, res) => {
    const post = await Post.findById(req.params.id).populate('category');
    if (!post) return res.status(404).json({ error: 'Post not found' });
    res.json(post);
};

exports.createPost = async (req, res) => {
    const post = new Post(req.body);
    await post.save();
    res.status(201).json(post);
};

exports.updatePost = async (req, res) => {
    const updated = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ error: 'Post not found' });
    res.json(updated);
};

exports.deletePost = async (req, res) => {
    const deleted = await Post.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Post not found' });
    res.json({ message: 'Post deleted' });
};