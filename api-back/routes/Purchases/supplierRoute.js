const withAuth = require('../../withAuth');

module.exports = (app,db) =>{
    const SupplierModel = require('../../models/Purchases/SupplierModel')(db);

    app.post('/cscorp/supplier/save',withAuth,async(req,res,next)=>{
        let supplier = await SupplierModel.saveOneSupplier(req);

        if(supplier.code){
            res.json({status:500,msg:"Error saving the supplier",err:supplier});
        }
        res.json({status:200,msg:"Supplier saved!"});
    })

    app.get('/cscorp/supplier/getSupplierById/:id',withAuth,async(req,res,next)=>{
        let supplier = await SupplierModel.getSupplierById(req.params.id);

        if(supplier.code){
            res.json({status:500,msg:"Error getting the supplier",err:supplier});
        }
        res.json({status:200,msg:"Supplier retrieved!",supplier:supplier});
    })

    app.get('/cscorp/supplier/getAllSuppliers',withAuth,async(req,res,next)=>{
        let supplier = await SupplierModel.getAllSupliers();

        if(supplier.code){
            res.json({status:500,msg:"Error getting the supplier",err:supplier});
        }
        res.json({status:200,msg:"Supplier retrieved!",supplier:supplier});
    })

    app.put('/cscorp/supplier/updateSupplier/:id',withAuth,async(req,res,next)=>{
        let supplier = await SupplierModel.updateSupplier(req, req.params.id);

        if(supplier.code){
            res.json({status:500,msg:"Error updating the supplier",err:supplier});
        }
        res.json({status:200,msg:"Supplier updated!"});
    })

    app.delete('/cscorp/supplier/deleteSupplier/:id',withAuth,async(req,res,next)=>{
        let supplier = await SupplierModel.deleteOneSupplier(req.params.id);

        if(supplier.code){
            res.json({status:500,msg:"Error deleting the supplier",err:supplier});
        }
        res.json({status:200,msg:"Supplier deleted!"}); 
    })
}