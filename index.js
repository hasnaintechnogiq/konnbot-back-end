const express = require('express');
const dotenv = require('dotenv');
dotenv.config({path:'./config.env'});

require("./config");
const jwt = require('jsonwebtoken');
var cors = require('cors')
const User = require('./models/User');
const Project = require('./models/Project');
const Queries = require('./models/Queries');
const Lead = require('./models/Lead');
const fileUpload = require('express-fileupload');
const authenticate = require('./authenticate');
const PORT = process.env.PORT;
const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: 'drtpucilq',
    api_key: '887349247613399',
    api_secret: 'Q-TAkniqj157_LKVzZtXz7KRVW4'
});

const app = express();
app.use(express.json());
app.use(cors());
app.use(fileUpload({
    useTempFiles: true
}));
const Routes = require("./routes/route.js")

// api for test start
app.post("/test", async (req, resp) => {
    console.log(req.body);
    const file = req.files.photo;
    cloudinary.uploader.upload(file.tempFilePath, async (error, result) => {
        console.log(result);
        let data = new Queries({
            sitename: req.body.sitename,
            description: req.body.description,
            status: req.body.status,
            images: result.url,
        });
        const results = await data.save();
        resp.send(results);
    });
});

// api for test end

app.post("/register", async (req, resp) => {
    let data = new User(req.body);
    const result = await data.save();
       resp.send(result);
});

app.post("/login", async (req, resp) => {
    if (req.body.name && req.body.password) {
        let user = await User.findOne(req.body).select("-password")
        if (user) {

            const token = await user.generateAuthToken();
            console.log(token);
 
            resp.send(user);
        } else { resp.send("no data found") }
    } else { resp.send("enter email and pass") }
});

app.post("/add-product", async (req, resp) => {
    let products = new Product(req.body);
    const result = await products.save();
    resp.send(result);
});

app.get("/get-product",
//  authenticate , 
  async (req, resp) => {
    let products = await Product.find();
    // const result = await products.save();
    resp.send(products);
});

app.delete("/delete-product/:_id", async (req, resp) => {
    console.log(req.params)
    let data = await Product.deleteOne(req.params);
    resp.send(data);
})

app.get("/get-single-product/:id", async (req, resp) => {
    let productsingle = await Product.findOne({ _id: req.params.id });
    // const result = await products.save();
    resp.send(productsingle);
});

app.put("/update/:_id", async (req, resp) => {
    console.log(req.params)
    let data = await Product.updateOne(
        req.params,
        { $set: req.body }
    );
    resp.send(data);
})


// Multiple field pe search karne k liye

// app.get("/search/:key", async (req, resp) => {
//     let result = await Lead.find({
//         "$or": [
//             { leadname: { $regex: req.params.key, $options: "i" } },
//             { email: { $regex: req.params.key, $options: "i"  } }
//         ]
//     });
//     resp.send(result);
// });

// Poulate Start

// Ye post karna hai postman ki body m queries ki id 
// {
//     "queriesid": "6553b7f2ebd796437e57b84b"
// }
// or url me user ki id 

app.put("/add-queries-in-user/:id", async (req, resp) => {
    const result = await User.findByIdAndUpdate(req.params.id, { $push: { queriesID: req.body.queriesid}});
    resp.send(result);
});


// get user with queries

// Ye post karna hai postman ki body m user ki id 
// {
//     "user_id": "6553b7f2ebd796437e57b84b"
// }

// app.get("/get-user-with-queries", async (req, resp) => {
//     const result = await User.findOne(
//         { _id: req.body.user_id }).populate({
//             path: 'queriesID',
//                 modal: 'users'
//             });;
//     resp.send(result);
// });


 
// Poulate End
 








app.use('/', Routes);
app.listen(PORT, ()=> {
    console.log("server is running on port 5000")
})