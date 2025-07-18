const mongoose = require('mongoose');
const User = require('../models/User.js');
const UserSiteDetailsDemo = require('../models/UserSiteDetailsDemo.js');
const NotificationArray = require('../models/NotificationArray.js');
const Lead = require('../models/Lead.js');
var nodemailer = require('nodemailer');
const bcrypt = require('bcryptjs');

const getAllUsers = async (req, res) => {
    try {
        let users = await User.find();
        res.send(users)
    } catch (err) {
        res.status(500).json(err);
    }
};


const getSingleUserSiteInformation = async (req, resp) => {
    try {
        let single = await UserSiteDetailsDemo.findOne({ _id: req.params._id });
        resp.send(single);
    } catch (err) {
        resp.status(500).json(err);
    }
};







const getSingleUser = async (req, resp) => {
    try {
        let single = await User.findOne({ _id: req.params._id });
        resp.send(single);
    } catch (err) {
        resp.status(500).json(err);
    }
};

const addNewUser = async (req, res) => {
    const { email, password, name } = req.body;
    try {
        let existingByEmail = await User.find({ email })

        if (existingByEmail.length > 0) {
            res.send('Email already exists');
            console.log("Email already exists")
        } else {
            const hashedPassword = await bcrypt.hash(password, 10);
            const user = new User({ name, email, password: hashedPassword });
            let useID = new mongoose.Types.ObjectId(user.id)
            const newDocument = new NotificationArray();
            const notifiArray = await newDocument.save();

            let objID = new mongoose.Types.ObjectId(newDocument.id)

            user.notificationarrayID = objID;

            let existingLeadByEmail = await Lead.findOne({ email: email })

            if (existingLeadByEmail) {
                user.leadID = existingLeadByEmail._id;
                const result = await user.save();


                console.log("Email fffffffffffffffffts", existingLeadByEmail._id)
                await Lead.updateOne(
                    { _id: existingLeadByEmail._id },
                    {
                        $set: {
                            userID: useID
                        }
                    }
                )
                res.send(result);
            } else {
                const result = await user.save();
                res.send(result);
            }

        }
    } catch (err) {
        res.status(500).json(err);
    }
};

const updateUserDetail = async (req, res) => {
    try {
        console.log(req.params)
        let data = await User.updateOne(
            req.params,
            { $set: req.body }
        );
        res.send(data);
    } catch (error) {
        res.status(500).json(error);
    }
};

const deleteUser = async (req, res) => {
    try {
        let data = await User.deleteOne(req.params);
        res.send(data);
    } catch (error) {
        res.status(500).json(error);
    }
};

const getUserWithQueries = async (req, resp) => {
    const result = await User.findOne(
        { _id: req.params.id }).populate("queriesID")
    resp.send(result);
};



const addSiteDetailsForDemo = async (req, resp) => {
    try {
        let sitedemo = new UserSiteDetailsDemo(req.body);
        const result = await sitedemo.save();
        let objID = new mongoose.Types.ObjectId(sitedemo.id)
        let newss = new mongoose.Types.ObjectId(req.body.userID)
        console.log(objID);
        await User.updateOne(
            { _id: newss },
            {
                $set: {
                    usersitedetailsdemoID: objID
                }
            }
        )
        resp.send(result);
    } catch (err) {
        resp.status(500).json(err);
    }
};





const margeClientToLead = async (req, resp) => {
    try {

        let leadid = await Lead.findById(req.body.leadID)
        console.log(leadid)
        if (leadid) {

            let userIDEx = new mongoose.Types.ObjectId(req.body.userID)
            let leadIDEx = new mongoose.Types.ObjectId(req.body.leadID)
            console.log(userIDEx);
            await User.updateOne(
                { _id: userIDEx },
                {
                    $set: {
                        leadID: leadIDEx
                    }
                }
            )

            await Lead.updateOne(
                { _id: leadIDEx },
                {
                    $set: {
                        userID: userIDEx
                    }
                }
            )

            resp.send("Merge successfully");
        } else { resp.send("Invalid project ID") }

    } catch (err) {
        resp.status(500).json(err);
    }
};







const genarateOtpandsendtoemail = async (req, resp) => {
    try {

        let single = await User.findOne({ email: req.body.email });
        const { email } = req.body;
        if (single) {

            function generateRandomNumber() {
                return Math.floor(100000 + Math.random() * 900000);
            }


            const randomNumber = generateRandomNumber();


            User.findOneAndUpdate(
                { email: email },
                { otp: randomNumber },
                { new: true }
            )
                .then(user => {
                    console.log('User OTP updated:', user);
                })
                .catch(err => {
                    console.error('Error updating user OTP:', err);
                });



            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'konnbot0804@gmail.com',
                    pass: process.env.APPPASSWORD
                }
            });



            const mailOptions = {
                from: 'konnbot0804@gmail.com',
                to: email,
                subject: 'Konnbot: One Time Password (OTP)',
                text: `Your 6-digit OTP is: ${randomNumber}`
            };

            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    return resp.status(500).json({ error: 'Failed to send email' });
                } else {
                    return resp.status(200).json({ message: 'Email sent successfully' });
                }
            });
        } else {
            return resp.status(200).json({ message: 'Email id does not exist.' });
        }



    } catch (err) {
        resp.status(500).json(err);
    }
};



const genarateOtpToSignup = async (req, resp) => {
    try {

        let single = await User.findOne({ email: req.body.email });

        if (single) {
            return resp.status(200).json({ message: 'Email id already exist.' });
        }

        const { email } = req.body;

        function generateRandomNumber() {
            return Math.floor(100000 + Math.random() * 900000);
        }

        const randomNumber = generateRandomNumber();

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'konnbot0804@gmail.com',
                pass: process.env.APPPASSWORD
            }
        });

        const mailOptions = {
            from: 'konnbot0804@gmail.com',
            to: email,
            subject: 'Konnbot: One Time Password (OTP)',
            text: `Your 6-digit OTP is: ${randomNumber}`
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                return resp.status(500).json({ error: 'Failed to send OTP' });
            } else {
                return resp.status(200).json({ message: 'Otp sent successfully', data : randomNumber });
            }
        });




    } catch (err) {
        resp.status(500).json(err);
    }
};




const checkotpnow = async (req, resp) => {
    try {
        if (req.body.email && req.body.otp) {
            let user = await User.findOne(req.body).select("-password")
            if (user) {
                resp.send(user);
            } else { resp.send("Wrong Otp") }
        } else { resp.send("enter email and pass") }

    } catch (err) {
        resp.status(500).json(err);
    }
};


const signinbygmail = async (req, res) => {
    try {
        console.log(req.body)
        // if (req.body.additionalUserInfo.isNewUser) {
        //     const email = req.body.additionalUserInfo.profile.email
        //     let existingByEmail = await User.findOne({ email })
        //     console.log("condition one");
        //     if (existingByEmail) {
        //         const token = await existingByEmail.generateAuthToken();
        //         console.log(token);
        //         existingByEmail._doc.tokenCode = token;
        //         console.log("condition two");
        //         return res.send(existingByEmail);

        //     } else {
        //         const name = req.body.additionalUserInfo.profile.name;
        //         const profile_url = req.body.additionalUserInfo.profile.picture;
        //         const userNew = new User({ name, email, profile_url });

        //         try {
        //             const newDocument = new NotificationArray();
        //             const notifiArray = await newDocument.save();
        //             console.log("NotificationArray saved:", notifiArray);

        //             let objID = new mongoose.Types.ObjectId(newDocument.id);
        //             userNew.notificationarrayID = objID;

        //             console.log("Before saving new user:", userNew);
        //             const result = await userNew.save();
        //             console.log("New user saved:", result);

        //             const token = await userNew.generateAuthToken();
        //             console.log("condition four");
        //             result._doc.tokenCode = token;
        //             return res.send(result);
        //         } catch (error) {
        //             console.error("Error in saving new user:", error);
        //             return res.status(500).json({ error: 'Failed to save new user' });
        //         }
        //     }

        // } else {
        const email = req.body.additionalUserInfo.profile.email
        const user = await User.findOne({ email })

        if (!user) {
            const name = req.body.additionalUserInfo.profile.name;
            const profile_url = req.body.additionalUserInfo.profile.picture;
            const userNew = new User({ name, email, profile_url });

            try {
                const newDocument = new NotificationArray();
                const notifiArray = await newDocument.save();
                console.log("NotificationArray saved:", notifiArray);

                let objID = new mongoose.Types.ObjectId(newDocument.id);
                userNew.notificationarrayID = objID;

                console.log("Before saving new user:", userNew);
                const result = await userNew.save();
                console.log("New user saved:", result);

                // let leadCheck = await Lead.findOne({ email: email });

                // let userIDEx = new mongoose.Types.ObjectId(req.body.userID)
                // let leadIDEx = new mongoose.Types.ObjectId(req.body.leadID)
                // console.log(userIDEx);
                // await User.updateOne(
                //     { _id: userIDEx },
                //     {
                //         $set: {
                //             leadID: leadIDEx
                //         }
                //     }
                // )

                // await Lead.updateOne(
                //     { _id: leadIDEx },
                //     {
                //         $set: {
                //             userID: userIDEx
                //         }
                //     }
                // )

                const token = await userNew.generateAuthToken();
                console.log("condition four");
                result._doc.tokenCode = token;
                return res.send(result);
            } catch (error) {
                console.error("Error in saving new user:", error);
                return res.status(500).json({ error: 'Failed to save new user' });
            }
        }

        const token = await user.generateAuthToken();
        console.log("condition five");
        user._doc.tokenCode = token;
        res.send(user);
        // }

    } catch (err) {
        res.status(500).json(err);
    }
};










module.exports = { signinbygmail, checkotpnow, genarateOtpandsendtoemail,genarateOtpToSignup, margeClientToLead, getSingleUserSiteInformation, addSiteDetailsForDemo, getAllUsers, getUserWithQueries, getSingleUser, addNewUser, updateUserDetail, deleteUser };