const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://aayushpandey472:Shivparvati@cluster0.cnqfgdj.mongodb.net/blogs', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("MongoDB connected successfully");
}).catch((error) => {
    console.error("Error connecting to MongoDB:", error);
});

const registerSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
});

// const loginSchema = new mongoose.Schema({
//     email: String,
//     password: String
// });

const blogSchema = new mongoose.Schema({
    title: String,
    subject: String,
    content: String
}, { versionKey: false });

const Register = mongoose.model('Register', registerSchema);
// const Login = mongoose.model('Login', loginSchema);
const   Blog = mongoose.model('Blog', blogSchema);



app.get('/login', async (req, res) => {
   try {
       const { email, password } = req.body;
       const user = await Register.findOne({ email, password });
       if (user) {
           res.status(200).json({ message: 'Login successful' });
       } else {
           res.status(401).json({ error: 'Invalid credentials' });
       }
   } catch (error) {
       console.error('Error logging in user:', error);
       res.status(500).json({ error: 'Failed to login user' });
   }
});

app.get('/getblogs', async (req, res) => {
    try {
        const blogs = await Blog.find();
        if (blogs.length > 0) {
            res.status(200).json({  blogs });
        } else {
            res.status(404).json({ error: 'No blogs found' });
        }
    } catch (error) {
        console.error('Error getting blogs:', error);
        res.status(500).json({ error: 'Failed to get blogs' });
    }
});

app.get('/getblog/:id', async (req, res) => {
    try {
        const {id}= req.params
       
        const blogs = await Blog.findById(id);
        if (blogs) { 
            res.status(200).json(blogs); 
        } else {
            res.status(404).json({ error: 'No blog found' }); 
        }
    } catch (error) {
        console.error('Error getting blogs:', error);
        res.status(500).json({ error: 'Failed to get blogs' });
    }
});


app.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const newUser = await Register.create({ username, email, password });
        res.status(200).json(newUser);
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ error: 'Failed to register user' });
    }
});


app.post('/blog', async (req, res) => {
    try {
        const { title, subject, content } = req.body;
        console.log(req.body);
        if (!title || !subject || !content) {
            throw new Error("Missing required fields");
        }
        const newBlog = await Blog.create({ title, subject, content });
        res.status(200).json(newBlog);
    } catch (error) {
        console.error('Error uploading blog:', error);
        res.status(500).json({ error: 'Failed to upload blog' });
    }
});



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
