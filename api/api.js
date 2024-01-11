//modules
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const morgan = require("morgan");

//models
const Blog = require("./models/Blog");
const Contact = require("./models/Contact");
const Auth = require("./models/Auth")

//initialisation
const app = express();
const port = 4000;

//middlewares
app.use(morgan("tiny"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

//mongodb connection
mongoose.connect("mongodb+srv://sam:sam@blog.iw2ikgr.mongodb.net/myblogs", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("Successfully connected to mongodb ");
  })
  .catch((err) => {
    console.log("Error Connecting to mongodb ", err);
  });
  



app.get("/", (req, res) => {
  res.send("The Api is not working.....");
});

app.get("/api/blogs", (req, res) => {
  Blog.find({})
    .then((blogs) => {
      res.json(blogs);
    })
    .catch((err) => {
      res.json(err);
    });
});


app.get("/api/users", (req, res) => {
  Auth.find({})
    .then((users) => {
      console.log(users);
      res.json(users);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.post("/api/contact", async(req, res) => {
  
  try {
    res.send(req.body);
    const result = await Contact.create(req.body);
    res.send(result);
  } catch (error) {
    console.log(error);
  }
});

app.post("/api/blogs",async(req,res)=>{
  console.log(req.body);
  try{
    const postblog = await Blog.create(req.body);
    res.send(postblog);
  }
  catch(error){
    console.log(error);
    res.send(error);
  }
})

app.post("/api/users",async(req,res)=>{
  console.log(req.body);
  try{
    const user = await Auth.create(req.body);
    res.send(user);
  }
  catch(error){
    console.log(error);
    res.send(error);
  }
})


app.listen(port, () => {
  console.log("Server is running on port ", port);
});
