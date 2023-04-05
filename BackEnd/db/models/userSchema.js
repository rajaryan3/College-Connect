var mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    user_role: {
        type: Number,
        required: true,
        enum: [0, 1, 2]
    },
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    mis: { type: String, required: true },
    current_year: { type: String, required: true },
    AY: { type: String, required: true },
    degree: { type: String, required: true },
    mail: { type: String, required: true },
    branch: { type: String, required: true },
    phone_no: { type: String, required: true },
    professional_arr: {
        github: { type: String },
        youtube: { type: String },
        linkedIn: { type: String }
    },
    my_description: { type: String },
    addon: [{
        header: { type: String },
        data: { type: String }
    }],
    photo: { type: String, required: true },
    password : {type : String , required : true }
});

userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12)
    }
    next();
})

const user = mongoose.model("user", userSchema);
module.exports = user;