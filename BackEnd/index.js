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
// const user = require('./db/models/userSchema.js');

app.use(express.json());
app.use(morgan("common"));
app.use(bodyparser.urlencoded({ extended : true}));
app.use(cors());



// app.use("/", (req, res, next) => {
//     try {
//         if (req.path == "/login" || req.path == "/register" || req.path == "/") {
//         next();
//         } else {
//             /* decode jwt token if authorized*/
//             jwt.verify(req.headers.token, 'thisisSEMPprojectsbackendbyaryankhose', function (e, decoded) {
//                 if(e){
//                     return res.status(401).json({
//                         errorMessage: 'User unauthorized!',
//                         status: false
//                     });
//                 }
//                 if (decoded && decoded.user) {
//                     req.user = decoded;
//                     next();
//                 } else {
//                     console.log('byeeeeeee')
//                     return res.status(401).json({
//                 errorMessage: 'User unauthorized!',
//                 status: false
//             });
//             }
//         })
//         }
//     } catch (e) {
//         res.status(400).json({
//         errorMessage: 'Something went wrong!',
//         status: false
//         });
//     }
//     })
    
app.use('/', Routes);

app.listen( port , ()=>(console.log(`listening on port ${port} `)) );



//************************************************************************** */

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const user = require('./db/models/userSchema')




//-------------------------------------------------------------------------------------------


app.get("/", (req, res) => {
    res.status(200).json({
        status: true,
        title: 'Apis'
    });
});

/* login api */
app.post("/login",async (req, res) => {
try {
    if (req.body && req.body.mail && req.body.password) {
        const userexists = await user.findOne({ mail: req.body.mail })
        if(userexists) {
            //console.log('user'+ userexists.mail + 'dusra wala :' + req.body.password + '\ncomplete user' + userexists)
            var ismatched = await bcrypt.compare(req.body.password , userexists.password)
            console.log( '\nismatched' + ismatched)
            if(ismatched){
                checkUserAndGenerateToken(userexists, req, res);
            } else {
                res.status(400).json({
                errorMessage: 'mail or password is incorrect!',
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
    const {user_role, first_name, last_name, mis, current_year, AY, degree, mail, branch ,phone_no, professional_arr, my_description ,photo ,password } = req.body;
    if ( mail && password ) {

    const userexists = await user.findOne({ mail: req.body.mail })

        if (!userexists) {
                var User = new user({
                    user_role : 'user' ,
                    first_name:first_name , 
                    last_name:last_name ,
                    mis : mis ,
                    current_year : current_year ,
                    AY : AY,
                    degree  :degree ,
                    mail : mail,
                    branch : branch , 
                    phone_no : phone_no  ,
                    professional_arr : professional_arr ,
                    my_description : my_description ,
                    // addon : addon ,
                    photo :photo ,
                    password:  password
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
                errorMessage: `UserName ${req.body.mail} Already Exist!`,
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
    jwt.sign({ user: data.mail, id: data._id }, 'thisisSEMPprojectsbackendbyaryankhose', { expiresIn: '1m' }, (err, token) => {
    if(err) {
        res.status(400).json({
        status: false,
        errorMessage: err,
    });
    }else {
        res.json({
            user : data,
            message: 'Login Successfully.',
            token: token,
            status: true
        });
    }
    });
}


app.patch('/profile', async (req, res) => {
    try {
        const data = req.body;
        if(!data)
            return res.status(422).json({error : "Please fill the fields properly"})
        //console.log(data);
        answer = await user.findOneAndUpdate({ mail: data.mail }, data, { new : true});
        if (!answer)
            return res.status(404).json({ error: `No record found with mail : ${data.mail}`})
        return res.status(200).json(answer)
    } catch (error) {
        return res.status(500).json({ error: "Something went wrong" })
    }
})


app.get('/profile', async(req, res) => {
    try{
        const answer = await user.findById(req.query.id);
        return res.status(200).json(answer);
    }
    catch(error){
        return res.status(500).json({ error: "Something went wrong" });
    }
})

app.get('/users', async (req, res) => {
    try {
        const query = req.query;

        // Build query object for degree, current year, and branch
        const queryObj = {};
        if (query.degree) {
            queryObj.degree = query.degree;
        }
        if (query.current_year) {
            queryObj.current_year = query.current_year;
        }
        if (query.branch) {
            queryObj.branch = query.branch;
        }

        // Find users based on query
        const users = await user.find(queryObj, { password: 0 }).sort({ AY: -1 , mis: 1 });

        // Send response
        return res.json({ users });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Server error' });
    }
});






