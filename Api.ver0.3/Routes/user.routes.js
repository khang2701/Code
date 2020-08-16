const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs')
const User = require('../models/User.model');
const jwt = require('jsonwebtoken');
const RequireLogin = require('../middleware/RequireLogin')
require('dotenv').config()



router.get('/user/me', RequireLogin, (req, res) => {
    res.send(req.user)
})

router.get('/user/:id', RequireLogin, (req, res) => {
    User.findOne({ _id: req.params.id })
        .select("-password")
        .then(user => {
            res.json(user);
        }).catch(err => {
            return res.status(404).json({ error: "Người dùng không tồn tại" })
        })
})


router.put('/user/me/update', RequireLogin, (req, res) => {
    User.findByIdAndUpdate(
        req.user._id,
        {
            $set: 
            { 
            name: req.body.name,
            email: req.body.email,
            avatar: req.body.avatar,
            bio: req.body.bio
            } 
        },
        { new: true },
        (err, result) => {
            if (err) {
                return res.status(422).json({ error: "Không thể Edit" })
            }
            res.json(result)
        })
})





module.exports = router;