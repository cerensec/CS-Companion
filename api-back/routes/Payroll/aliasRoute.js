const withAuth = require('../../withAuth');

module.exports = (app,db) =>{
    const AliasModel = require('../../models/Payroll/AliasModel')(db);

    // Save one Alias
    app.post('/cscorp/alias/save',withAuth,async(req,res,next)=>{
        let alias = await AliasModel.saveOneAlias(req)
        
        if(alias.code){
            res.json({status:500,msg:"Error saving the alias",err:alias});
        }
        res.json({status:200,msg:"Alias saved!"});
    })

    // Route to get the Alias by id
    app.get('/cscorp/alias/getById/:id',withAuth,async(req,res,next)=>{
        let alias = await AliasModel.getAliasById(req.params.id);

        if(alias.code){
            res.json({status:500,msg:"Error getting the alias",err:alias});
        }
        res.json({status:200,msg:"Alias retrieved!",alias:alias});
    })

    // Route to get all Alias
    app.get('/cscorp/alias/getAll',withAuth,async(req,res,next)=>{
        let alias = await AliasModel.getAllAlias();

        if(alias.code){
            res.json({status:500,msg:"Error getting the alias",err:alias});
        }
        res.json({status:200,msg:"Alias retrieved!",alias:alias});
    })

    // Route to delete an Alias
    app.delete('/cscorp/alias/deleteAlias/:id',withAuth,async(req,res,next)=>{
        let alias = await AliasModel.deleteOneAlias(req.params.id);

        if(alias.code){
            res.json({status:500,msg:"Error deleting the alias",err:alias});
        }
        res.json({status:200,msg:"Alias deleted!"})
    })

    // Route to update an Alias
    app.put('/cscorp/alias/updateAlias/:id',withAuth,async(req,res,next)=>{
        let alias = await AliasModel.updateAlias(req, req.params.id);

        if(alias.code){
            res.json({status:500,msg:"Error updating the alias",err:alias})
        }
        res.json({status:200,msg:"Alias updated!"})
    })
}