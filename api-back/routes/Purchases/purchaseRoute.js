const withAuth = require('../../withAuth');

module.exports = (app,db) =>{
    const PurchaseModel = require('../../models/Purchases/PurchaseModel')(db);

    app.post('/cscorp/purchase/save',withAuth,async(req,res,next)=>{
        let purchase = await PurchaseModel.saveOnePurchase(req);

        if(purchase.code){
            res.json({status:500,msg:"Error saving the purchase",err:purchase})
        }
        res.json({status:200,msg:"Purchase saved!"})
    })

    app.get('/cscorp/purchase/getPurchaseById/:id',withAuth,async(req,res,next)=>{
        let purchase = await PurchaseModel.getPurchaseById(req.params.id);

        if(purchase.code){
            res.json({status:500,msg:"Error getting the purchase",err:purchase})
        }
        res.json({status:200,msg:"Purchase retrieved!",purchase:purchase})
    })

    app.get('/cscorp/purchase/getAllPurchase',withAuth,async(req,res,next)=>{
        let purchase = await PurchaseModel.getAllPurchase();

        if(purchase.code){
            res.json({status:500,msg:"Error getting the purchase",err:purchase})
        }
        res.json({status:200,msg:"Purchase retrieved!",purchase:purchase})
    })

    app.post('/cscorp/purchase/getPurchaseByInvoiceNumber',withAuth,async(req,res,next)=>{
        let purchase = await PurchaseModel.getPurchaseByInvoiceNumber(req.body.invoiceNumber);

        if(purchase.code){
            res.json({status:500,msg:"Error getting the purchase",err:purchase})
        }
        res.json({status:200,msg:"Purchase retrieved!",purchase:purchase})
    })

    app.post('/cscorp/purchase/getPurchaseByFilter',withAuth,async(req,res,next)=>{
        let purchase = await PurchaseModel.getPurchaseByFilter(req);

        if(purchase.code){
            res.json({status:500,msg:"Error getting the purchase",err:purchase})
        }
        res.json({status:200,msg:"Purchase retrieved!",purchase:purchase})
    })

    app.post('/cscorp/purchase/getTotalAmountByFilter',withAuth,async(req,res,next)=>{
        let purchase = await PurchaseModel.getTotalAmountByFilter(req);

        if(purchase.code){
            res.json({status:500,msg:"Error getting the purchase",err:purchase})
        }
        res.json({status:200,msg:"Purchase retrieved!",totalAmount:purchase})
    })

    app.post('/cscorp/purchase/getQuantityByFilter',async(req,res,next)=>{
        let purchase = await PurchaseModel.getPurchaseStats(req);

        if(purchase.code){
            res.json({status:500,msg:"Error getting the purchase",err:purchase})
        }
        res.json({status:200,msg:"Purchase retrieved!",purchase:purchase})
    })

    app.put('/cscorp/purchase/updatePurchase/:id',withAuth,async(req,res,next)=>{
        let purchase = await PurchaseModel.updatePurchase(req, req.params.id);

        if(purchase.code){
            res.json({status:500,msg:"Error updating the purchase",err:purchase})
        }
        res.json({status:200,msg:"Purchase updated!"})
    })

    app.delete('/cscorp/purchase/deletePurchase/:id',withAuth,async(req,res,next)=>{
        let purchase = await PurchaseModel.deletePurchase(req.params.id);

        if(purchase.code){
            res.json({status:500,msg:"Error deleting the purchase",err:purchase})
        }
        res.json({status:200,msg:"Purchase deleted!"})
    })
}