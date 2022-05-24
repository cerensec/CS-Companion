const withAuth = require('../../withAuth');

module.exports = (app,db) =>{
    const LabelModel = require('../../models/Purchases/LabelModel')(db);

    app.post('/cscorp/label/save',withAuth,async(req,res,next)=>{
        let label = await LabelModel.saveOneLabel(req);

        if(label.code){
            res.json({status:500,msg:"Error saving the label",err:label})
        }
        res.json({status:200,msg:"Label saved!"})
    })

    app.get('/cscorp/label/getLabelById/:id',withAuth,async(req,res,next)=>{
        let label = await LabelModel.getOneLabelById(req.params.id);

        if(label.code){
            res.json({status:500,msg:"Error getting the label",err:label});
        }
        res.json({status:200,msg:"Label retrieved!",label:label})
    })

    app.get('/cscorp/label/getAllLabels',withAuth,async(req,res,next)=>{
        let label = await LabelModel.getAllLabels();

        if(label.code){
            res.json({status:500,msg:"Error getting the labels",err:label});
        }
        res.json({status:200,msg:"Labels retrieved!",labels:label})
    })

    app.get('/cscorp/label/getLabelByName/:name',withAuth,async(req,res,next)=>{
        let label = await LabelModel.getAllLabelByName(req.params.name);

        if(label.code){
            res.json({status:500,msg:"Error getting the label",err:label});
        }
        res.json({status:200,msg:"Label retrieved!",label:label})
    })

    app.put('/cscorp/label/updateLabel/:id',withAuth,async(req,res,next)=>{
        let label = await LabelModel.updateOneLabel(req, req.params.id);

        if(label.code){
            res.json({status:500,msg:"Error updating the label",err:label});
        }
        res.json({status:200,msg:"Label updated!"})
    })

    app.delete('/cscorp/label/deleteLabel/:id',withAuth,async(req,res,next)=>{
        let label = await LabelModel.deleteOneLabel(req.params.id);

        if(label.code){
            res.json({status:500,msg:"Error deleting the label",err:label});
        }
        res.json({status:200,msg:"Label deleted!"})
    })


}