module.exports = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Server Error', details: err.message });
};