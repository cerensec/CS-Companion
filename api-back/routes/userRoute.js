const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
if(!process.env.HOST_DB) {
    var config = require('../config')
}else {
    var config = require('../configLocal')
}

let secret = config.token.secret;
const mail = require('../lib/mailing');

module.exports = (app,db) =>{
    const UserModel = require('../models/UserModel')(db);
    
    app.post('/cscorp/user/add',async(req,res,next)=>{
        let email = await UserModel.getUserByEmail(req.body.email)

        if(email.length>0){
            res.json({status:500,msg:"This email is already in use"})
        }else{
            let user = await UserModel.saveOneUser(req);

            if(user.code){
                res.json({status:500,msg:"Error creating the user",err:user})
            }
            // Here I was sending a confirmation mail to the account owner
            // mail(
            //     req.body.email,
            //     'Account creation',
            //     "Welcome to CS Corporativo",
            //     'To access CS Corporativo Companion you have to validate your account by clicking <a href="http://localhost:3001/cscorp/user/validateUser/'+user.key_id+'">here</a>'
            // )
            res.json({status:200,msg:"User created"});
        }
    })

    app.post('/cscorp/user/getUserByEmail',async(req,res,next)=>{
        let user = await UserModel.getUserByEmail(req.body.email);

        if(user.code){
            res.json({status:400,msg:"Error: User not found",err:user})
        }
        res.json({status:200,msg:"User retrieved!",user:user})
    })
    // This was the route to validate one user via an email
    app.get('/cscorp/user/validateUser/:key_id',async(req,res,next)=>{
        let key_id = req.params.key_id;
        let validate = await UserModel.updateValidateUser(key_id);

        if(validate.code){
            res.json({status:500,msg:"Error validating the user"})
        }

        res.render('validate',{msg:"Your account is now validated !"});
    })

    app.post('/cscorp/user/login', async(req,res,next)=>{
        let user = await UserModel.getUserByEmail(req.body.email);
        if(user.length === 0){
            res.json({status:404,msg:"User not found !",err:user})
        }else{
            if(user[0].validate == "no"){
                res.json({status:403,msg:"Your account hasn't been validated yet"})
            }
            let same = await bcrypt.compare(req.body.password, user[0].password);
            if(same){
                let infos = {id:user[0].id, email: user[0].email};
                let token = jwt.sign(infos, secret);

                res.json({status:200,msg:"User connected!",token:token,user:user[0]})
            }else{
                res.json({status:401,msg:"Wrong password"})
            }
        }
    })

    app.post('/cscorp/user/forgot',async(req,res,next)=>{
        let result = await UserModel.updateKeyId(req.body.email);
        if(result.code){
            res.json({status:500,msg:"Error sending the email", err: result});
        }

        let key_id = result.key_id;
        // This was the mail sent to change the password
        // mail(
        //     req.body.email,
        //     "Change your password",
        //     "You forgot your password?",
        //     'To change your password click <a href="http://localhost:3001/cscorp/user/changePassword/'+result.key_id+'">here</a>'
        // )
    })
    // This was the route to display the form to change the user's password
    app.get('/cscorp/user/changePassword/:key_id',async(req,res,next)=>{
        let key_id = req.params.key_id;

        res.render('forgot', {key_id: key_id});
    })

    app.put('/cscorp/user/updateUser/:id',async(req,res,next)=>{
        let update = await UserModel.updateUser(req.params.id,req);

        if(update.code){
            res.json({status:500,msg:"Error updating the user",err:update})
        }
        res.json({status:200,msg:"User updated!"})
    })
    // This was the route to verify and change the password and render a success page
    app.post('/cscorp/user/changePassword/:key_id', async(req,res,next)=>{
        let key_id = req.params.key_id;
        let msg = null;

        if(req.body.password1 !== req.body.password2){
            msg = "Passwords don't match!";
        }else{
            let result = await UserModel.updatePassword(req.body.password1, key_id);

            if(result.code){
                msg = "Error updating the password";
            }else{
                msg = "Password has been modified!"
            }

            res.render('success', {msg:msg})
        }
    })


}