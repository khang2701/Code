const mongoose = require('mongoose');
const validator = require('validator')
const { ObjectId } = mongoose.Schema.Types;
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function(number) {
                return /(03|07|08|09|01[2|6|8|9])+([0-9]{8})\b/.test(number);
            },
            message: Error => 'Không phải số điện thoại !'
        }

    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    resetToken: String,
    expiresToken: String,
    avatar: {
        type: String,
        default: './Images/AvatarDefault.jpg'
    },

    bio: {
        type: String,
    },

    tokens: [{
        token: {
            type: String,
            required: true
        }
    }],

    followers: [{ type: ObjectId, ref: "User" }],
    following: [{ type: ObjectId, ref: "User" }]
});



const User = mongoose.model("User", UserSchema);

module.exports = User;