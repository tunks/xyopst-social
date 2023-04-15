// server/index.js
const path = require('path');
const express = require("express");

const PostService = require('./services/PostService')
const AuthService = require('./services/AuthService')
const CommentService = require('./services/CommentService')
const TokenUtil = require('./utils/JwtTokenUtil')
const DataUtil = require('./utils/DataUtil');
const { cachedDataVersionTag } = require('v8');

const PORT = process.env.PORT || 18080;
//const cors = require('cors');
const app = express();
//data post repository

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../../frontend/build')));
app.use(express.json());

// Handle GET requests to /api route
// app.get("/api", (req, res) => {
//   res.json({ message: "Hello from server!" });
// });

// All other GET requests not handled before will return our React app
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../frontend/build', 'index.html'));
});

app.get('/join', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../frontend/build', 'index.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../frontend/build', 'index.html'));
});

app.get('/confirmation', async(req, res) => {
  var code = req.query.code;
  console.log("Get confirmation "+code);
  const valid = await TokenUtil.validateToken(code);
  console.log("Get confirmation valid");
  console.log(valid)
  res.sendFile(path.resolve(__dirname, '../../frontend/build', 'index.html'));
});

const router = express.Router();
// router.use(bodyParser.urlencoded({ extended: false }));

//Authentication operations
app.post('/api/v1/auth/signin', async(req, res) => {
  try {
    console.log("########## sigin user")
    console.log(req.body);
    const email = req.body.username;
    const password = req.body.password;
    const user = await AuthService.authenticateUser(email,password);
    console.log(user)
    if(user){
      const userLoginData = await DataUtil.loginUserData(user)
      res.json(userLoginData);
    }
    else{
      res.status(400).json({ error: "Invalid user credentails" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
  // var authorizedUser = {id: "1000", 
  //                       username: "tunkara", 
  //                       accessToken: "12332434323242343", 
  //                       name: 'etunkara', 
  //                       roles: ['MODERATOR', 'ADMIN']};
  // res.json(authorizedUser);
});

app.post('/api/v1/auth/signup', async(req, res) => {
  console.log(req.body);
    try {
      const user = await AuthService.registerUser(req.body);
      const msg = "Congratulations, your account has been successfully created. Please check your email to active the registration."
      res.json({ data: user, status: "success", message: msg});
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: err.message });
    }
});

//POST crud operations
app.post('/api/v1/posts/', async(req, res) => {
  console.log(req.body);
  try {
    const post = await PostService.createPost(req.body);
    res.json({ data: post, status: "success" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/v1/posts/', async (req, res) => {
  console.log("Get posts..");
  console.log(req.body);
    try {
      var userId = req.params.userId;
      //const posts = await PostService.findAllPosts(userId)
      const posts = await PostService.findAllUserFeedPosts(userId)
      res.json({ data: posts, status: "success" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: err.message });
    }
});


app.post('/api/v1/posts/comments', async(req, res) => {
  console.log(req.body);
  try {
    const comment = await CommentService.createComment(req.body);
    res.json({ data: comment, status: "success" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/v1/posts/:postId/comments', async(req, res) => {
  console.log(req.body);
  try {
    var postId = req.params.postId;
    console.log("Get comments "+postId);
    const comments = await CommentService.findAllCommentsByPost(postId);
    console.log(comments);
    res.json({ comments: comments, status: "success" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
