const express = require('express');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
require("./config");
const jwt = require('jsonwebtoken');
var cors = require('cors')
const User = require('./models/User.js');
const Queryupdates = require('./models/Queryupdates.js');
const Admin = require('./models/Admin');
const Project = require('./models/Project');
const Queries = require('./models/Queries');

const Lead = require('./models/Lead');
const ChangeOrderInstallment = require('./models/ChangeOrderInstallment.js');
const ChatsChangeInstallment = require('./models/ChatsChangeInstallment.js');
const SubActivities = require('./models/SubActivities.js');
const PhotosForSubActivities = require('./models/PhotosForSubActivities.js');


const authenticate = require('./authenticate');
const PORT = process.env.PORT || 5000;
const mongoose = require('mongoose');
// const cloudinary = require('cloudinary').v2;

// cloudinary.config({
//     cloud_name: 'drtpucilq',
//     api_key: '887349247613399',
//     api_secret: 'Q-TAkniqj157_LKVzZtXz7KRVW4'
// });

const app = express();
app.use(express.json());
app.use(cors());
// app.use(fileUpload({
//     useTempFiles: true
// }));
const Routes = require("./routes/route.js")








// const multer = require('multer')



// const storage = multer.diskStorage({
//     destination: function(req, file, cb) {
//       return cb(null, "./public/Images")
//     },
//     filename: function (req, file, cb) {
//       return cb(null, `${Date.now()}_${file.originalname}`)
//     }
//   })

//   const upload = multer({storage})

//   app.post('/upload', upload.single('file'), (req, res) => {
//     console.log(req.body)
//     console.log(req.file)
//   })






const multer = require("multer");
const path = require("path");

// storage engine 

// const storage = multer.diskStorage({
//     destination: './upload/images',
//     filename: (req, file, cb) => {
//         return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
//     }
// })

// const upload = multer({
//     storage: storage,
//     limits: {
//         fileSize: 10000000
//     }
// })

// app.use('/profile', express.static('upload/images'));
// app.post("/create-querie-upload", upload.single('profile'), async (req, res) => {
//     // console.log(req.body.name)
//     console.log(req.file)
//     const notice = new Queries({
//         ...req.body,
//         profile_url: `${process.env.REACT_APP_HOS}/profile/${req.file.filename}`
//     })
//     const result =  notice.save();

//     let objID = new mongoose.Types.ObjectId(notice.id);        
//     console.log(objID);
//   await   User.updateOne(
//         { email: req.body.email },
//         {
//             $push: {
//                 queriesID: objID
//             }
//         }
//     )

//     res.send({
//         sitename: req.body.sitename,
//         profile_url: `${process.env.REACT_APP_HOS}/profile/${req.file.filename}`
//     })
// })

// function errHandler(err, req, res, next) {
//     if (err instanceof multer.MulterError) {
//         res.json({
//             success: 0,
//             message: err.message
//         })
//     }
// }
// app.use(errHandler);




const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './upload/images');
    },
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    },
});

const upload = multer({ storage: storage });

// Set up a simple form for testing
//   app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'index.html'));
//   });
app.use('/profile', express.static('upload/images'));
// Handle file upload
app.post('/add-ticket-and-upload', upload.array('images', 5), async (req, res) => {
    const files = req.files;
    if (!files || files.length === 0) {
        return res.status(400).send('No files were uploaded.');
    }

    // Process the uploaded files (e.g., save to database, resize, etc.)
    // Here, we're just sending a response with the file information.
    const formData = req.body;

    console.log(files)


    const imgarry = files.map((file) => ({
        originalname: file.originalname,
        filename: file.filename,
        path: file.path,
        profile_url: `https://konnbotbackend.onrender.com/profile/${file.filename}`
    }));


    const result = await Queries.create({ ...formData, imgarry });

    let objID = new mongoose.Types.ObjectId(result.id);
    let newss = new mongoose.Types.ObjectId(req.body.kisusermh)
    console.log(objID);
    await User.updateOne(
        { _id: newss },
        {
            $push: {
                queriesID: objID
            }
        }
    )
    res.json(result);
    // res.send(imgarry);
});


















app.post('/add-images-in-change-order-upload', upload.array('images', 5), async (req, res) => {
    const files = req.files;
    if (!files || files.length === 0) {
        const formData = req.body;
        const result = await ChatsChangeInstallment.create({ ...formData });

        let objID = new mongoose.Types.ObjectId(result.id);
        let newss = new mongoose.Types.ObjectId(req.body.changeorderinstallmentid)
         console.log(objID);
         await ChangeOrderInstallment.updateOne(
             { _id: newss },
             {
                 $push: {
                     chatschangeinstallmentID: objID
                 }
             }
         )
        //  res.send(result);
        return res.send(result);
    }

    const formData = req.body;
    console.log(files)
    const imgarry = files.map((file) => ({
        originalname: file.originalname,
        filename: file.filename,
        path: file.path,
        profile_url: `https://konnbotbackend.onrender.com/profile/${file.filename}`
    }));

    const result = await ChatsChangeInstallment.create({ ...formData, imgarry });

    let objID = new mongoose.Types.ObjectId(result.id);
       let newss = new mongoose.Types.ObjectId(req.body.changeorderinstallmentid)
        console.log(objID);
        await ChangeOrderInstallment.updateOne(
            { _id: newss },
            {
                $push: {
                    chatschangeinstallmentID: objID
                }
            }
        )
        res.send(result);
    // res.send(imgarry);
});


















// Ticket update with images start

app.post('/ticket-updates-with-images', upload.array('images', 5), async (req, res) => {
    const files = req.files;
    if (!files || files.length === 0) {
        const formData = req.body;
        const result = await Queryupdates.create({ ...formData });

        let objID = new mongoose.Types.ObjectId(result.id);
        let newss = new mongoose.Types.ObjectId(req.body.queryid)
        console.log(req.body.email);
        await Queries.updateOne(
            { _id: newss },
            {
                $push: {
                    queryupdateID: objID
                }
            }
        )
 
        return res.send(result);
    }

    const formData = req.body;
    console.log(files)
    const imgarry = files.map((file) => ({
        originalname: file.originalname,
        filename: file.filename,
        path: file.path,
        profile_url: `https://konnbotbackend.onrender.com/profile/${file.filename}`
    }));

    const result = await Queryupdates.create({ ...formData, imgarry });

    let objID = new mongoose.Types.ObjectId(result.id);
    let newss = new mongoose.Types.ObjectId(req.body.queryid)
    console.log(req.body.email);
    await Queries.updateOne(
        { _id: newss },
        {
            $push: {
                queryupdateID: objID
            }
        }
    )
        res.send(result);
    // res.send(imgarry);
});


// Ticket update with images end




// Upload images for sub task start

app.post('/upload-images-for-sub-task', upload.array('images', 3), async (req, res) => {
    const files = req.files;
    if (!files || files.length === 0) {
        return res.status(400).send('No files were uploaded.');
    }
    console.log(files)

    const imgarry = files.map((file) => ({
        originalname: file.originalname,
        filename: file.filename,
        path: file.path,
        profile_url: `https://konnbotbackend.onrender.com/profile/${file.filename}`
    }));


    const result = await PhotosForSubActivities.create({ imgarry });

    let objID = new mongoose.Types.ObjectId(result.id);
    let newss = new mongoose.Types.ObjectId(req.body.subactivityID)
    console.log(objID);
    await SubActivities.updateOne(
        { _id: newss },
        {
            $push: {
                imagesID: objID
            }
        }
    )
    res.json(result);
});


// Upload images for sub task end





































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
    if (req.body.email && req.body.password) {
        let user = await User.findOne(req.body).select("-password")
        if (user) {
            const token = await user.generateAuthToken();
            console.log(token);
            resp.send(user);
        } else { resp.send("no data found") }
    } else { resp.send("enter email and pass") }
});

app.post("/admin-register", async (req, resp) => {
    let data = new Admin(req.body);
    const result = await data.save();
    resp.send(result);
});

app.post("/admin-login", async (req, resp) => {
    if (req.body.name && req.body.password) {
        let admin = await Admin.findOne(req.body).select("-password")
        if (admin) {
            // const token = await admin.generateAuthToken();
            // console.log(token);
            resp.send(admin);
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
    const result = await User.findByIdAndUpdate(req.params.id, { $push: { queriesID: req.body.queriesid } });
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
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})