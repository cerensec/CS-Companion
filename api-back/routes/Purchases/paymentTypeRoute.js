const withAuth = require('../../withAuth');

module.exports = (app,db) =>{
    const PaymentTypeModel = require('../../models/Purchases/PaymentTypeModel')(db)
    
    app.post('/cscorp/paymentType/save',withAuth,async(req,res,next)=>{
        let paymentType = await PaymentTypeModel.saveOnePaymentType(req);

        if(paymentType.code){
            res.json({status:500,msg:"Error saving the payment type",err:paymentType})
        }
        res.json({status:200,msg:"Payment type saved!"})
    })

    app.get('/cscorp/paymentType/getPaymentTypeById/:id',withAuth,async(req,res,next)=>{
        let paymentType = await PaymentTypeModel.getPaymentTypeById(req.params.id);

        if(paymentType.code){
            res.json({status:500,msg:"Error getting the payment type",err:paymentType})
        }
        res.json({status:200,msg:"Payment type retrieved!",paymentType:paymentType})
    })

    app.get('/cscorp/paymentType/getAllPaymentType',withAuth,async(req,res,next)=>{
        let paymentType = await PaymentTypeModel.getAllPaymentType();

        if(paymentType.code){
            res.json({status:500,msg:"Error getting the payment type",err:paymentType})
        }
        res.json({status:200,msg:"Payment type retrieved!",paymentType:paymentType})
    })

    app.put('/cscorp/paymentType/updatePaymentType/:id',withAuth,async(req,res,next)=>{
        let paymentType = await PaymentTypeModel.updateOnePaymentType(req, req.params.id);

        if(paymentType.code){
            res.json({status:500,msg:"Error updating the payment type",err:paymentType})
        }
        res.json({status:200,msg:"Payment type updated!"})
    })

    app.delete('/cscorp/paymentType/deletePaymentType/:id',withAuth,async(req,res,next)=>{
        let paymentType = await PaymentTypeModel.deleteOnePaymentType(req.params.id);

        if(paymentType.code){
            res.json({status:500,msg:"Error deleting the payment type",err:paymentType})
        }
        res.json({status:200,msg:"Payment type deleted!"})
    })
}