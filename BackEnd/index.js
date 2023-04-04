const express = require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config({path : `./config.env`});
const path = require('path');
const port = process.env.PORT || 8000;
const cors = require('cors');
const db = require('./db/connection');
const Routes = require('./routes/Routes.js');
const bodyparser = require("body-parser");
const morgan = require('morgan');

app.use(express.json());
app.use(morgan("common"));
app.use(bodyparser.urlencoded({ extended : true}));
app.use(cors());

app.use('/', Routes);

/*
app.get('/',(req , res)=>{
    res.send("hi from index...");
});
*/
app.listen( port , ()=>(console.log(`listening on port ${port} `)) );



//************************************************************************** */

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const user = require('./db/models/userSchema')




//-------------------------------------------------------------------------------------------

app.use("/", (req, res, next) => {
try {
    if (req.path == "/login" || req.path == "/register" || req.path == "/") {
    next();
    } else {
    /* decode jwt token if authorized*/
    jwt.verify(req.headers.token, 'thisisSEMPprojectsbackendbyaryankhose', function (err, decoded) {
        if (decoded && decoded.user) {
        req.user = decoded;
        next();
        } else {
        return res.status(401).json({
            errorMessage: 'User unauthorized!',
            status: false
        });
        }
    })
    }
} catch (e) {
    res.status(400).json({
    errorMessage: 'Something went wrong!',
    status: false
    });
}
})

app.get("/", (req, res) => {
    res.status(200).json({
        status: true,
        title: 'Apis'
    });
});

/* login api */
app.post("/login",async (req, res) => {
try {
    if (req.body && req.body.username && req.body.password) {
        const userexists = await user.findOne({ username: req.body.username })
        if(userexists) {
            //console.log('user'+ userexists.username + 'dusra wala :' + req.body.password + '\ncomplete user' + userexists)
            var ismatched = await bcrypt.compare(req.body.password , userexists.password)
            console.log( '\nismatched' + ismatched)
            if(ismatched){
                checkUserAndGenerateToken(userexists, req, res);
            } else {
                res.status(400).json({
                errorMessage: 'username or password is incorrect!',
                status: false
                });
            }
        }else {
            res.status(400).json({
                errorMessage: 'Username or password is incorrect!',
                status: false
            });
        }
    } else {
        res.status(400).json({
            errorMessage: 'Add proper parameters!',
            status: false
        });
    }
}catch (e) {
    console.log(e)
    res.status(400).json({
        errorMessage: 'Something went wrong!',
        status: false
        });
    }
});
  
/* register api */
app.post("/register", async(req, res) => {
try {
    if (req.body && req.body.username && req.body.password) {

    const userexists = await user.findOne({ username: req.body.username })

        if (!userexists) {
                var User = new user({
                username: req.body.username,
                password: req.body.password
            });

            var userRegister = await User.save();
            if(!userRegister){
                res.status(400).json({
                    errorMessage: err,
                    status: false
                });
            }else{
                res.status(200).json({
                    status: true,
                    title: 'Registered Successfully.'
                });
            }
        /*User.save((err, data) => {
            if (err) {
            res.status(400).json({
                errorMessage: err,
                status: false
            });
            } else {
            res.status(200).json({
                status: true,
                title: 'Registered Successfully.'
            });
            }
        });  */
        }else{
            res.status(400).json({
                errorMessage: `UserName ${req.body.username} Already Exist!`,
                status: false
            });
        }

    } else {    
    res.status(400).json({
        errorMessage: 'Add proper parameter first!',
        status: false
    });
    }
} catch (e) {
    console.log(e);
    res.status(400).json({
    errorMessage: 'Something went wrong!',
    status: false
    });
}
});

function checkUserAndGenerateToken(data, req, res) {
    jwt.sign({ user: data.username, id: data._id }, 'thisisSEMPprojectsbackendbyaryankhose', { expiresIn: '1m' }, (err, token) => {
    if(err) {
        res.status(400).json({
        status: false,
        errorMessage: err,
    });
    }else {
        res.json({
            message: 'Login Successfully.',
            token: token,
            status: true
        });
    }
    });
}