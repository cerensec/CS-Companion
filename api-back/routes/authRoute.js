const withAuth = require('../withAuth');

module.exports = (app,db)=>{
    const UserModel = require('../models/UserModel')(db);

    app.get('/cscorp/checkToken',withAuth,async(req,res,next)=>{
        let user = await UserModel.getUserByEmail(req.email);
        
        res.json(({status:200,msg:"Token validated",user:user}))
    })
}