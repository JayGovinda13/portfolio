const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = express.Router();
const Post = require('../models/Post')

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/meu_blog', { useNewUrlParser: true, useUnifiedTopology: true });

const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Post', postSchema);

// Rota para obter todas as postagens
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.json({ message: error.message });
  }
});

// Rota para criar uma nova postagem
router.post('/', async (req, res) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content,
    author: req.body.author,
  });

  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (error) {
    res.json({ message: error.message });
  }
});

module.exports = router;