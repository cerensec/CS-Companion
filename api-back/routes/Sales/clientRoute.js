const withAuth = require('../../withAuth');

module.exports = (app,db) =>{
    const ClientModel = require('../../models/Sales/ClientsModel')(db);

    app.post('/cscorp/client/save',withAuth,async(req,res,next)=>{
        let client = await ClientModel.saveOneClient(req);

        if(client.code){
            res.json({status:500,msg:"Error saving the client",err:client});
        }
        res.json({status:200,msg:"Client saved!"});
    })

    app.get('/cscorp/client/getClientById/:id',withAuth,async(req,res,next)=>{
        let client = await ClientModel.getOneClient(req.params.id);

        if(client.code){
            res.json({status:500,msg:"Error saving the client",err:client});
        }
        res.json({status:200,msg:"Client retrieved!",client:client});
    })

    app.get('/cscorp/client/getAllClients',withAuth,async(req,res,next)=>{
        let client = await ClientModel.getAllClients();

        if(client.code){
            res.json({status:500,msg:"Error saving the client",err:client});
        }
        res.json({status:200,msg:"Client retrieved!",client:client});
    })

    app.put('/cscorp/client/updateClient/:id',withAuth,async(req,res,next)=>{
        let client = await ClientModel.updateOneClient(req, req.params.id);

        if(client.code){
            res.json({status:500,msg:"Error updating the client",err:client});
        }
        res.json({status:200,msg:"Client updated!"});
    })

    app.delete('/cscorp/client/deleteClient/:id',withAuth,async(req,res,next)=>{
        let client = await ClientModel.deleteOneClient(req.params.id);

        if(client.code){
            res.json({status:500,msg:"Error deleting the client",err:client});
        }
        res.json({status:200,msg:"Client deleted!"});
    })
}