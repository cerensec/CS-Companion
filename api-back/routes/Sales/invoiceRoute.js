const withAuth = require('../../withAuth');

module.exports = (app,db) =>{
    const InvoiceModel = require('../../models/Sales/InvoiceModel')(db);

    app.post('/cscorp/invoice/save',withAuth,async(req,res,next)=>{
        let invoice = await InvoiceModel.saveOneInvoice(req);

        if(invoice.code){
            res.json({status:500,msg:"Error saving the Invoice",err:invoice})
        }
        res.json({status:200,msg:"Invoice saved!"})
    })

    app.get('/cscorp/invoice/getAllInvoice',withAuth,async(req,res,next)=>{
        let invoice = await InvoiceModel.getAllInvoice();

        if(invoice.code){
            res.json({status:500,msg:"Error getting the Invoice",err:invoice})
        }
        res.json({status:200,msg:"Invoice retrieved!",invoice:invoice})
    })

    app.get('/cscorp/invoice/getInvoiceById/:id',withAuth,async(req,res,next)=>{
        let invoice = await InvoiceModel.getOneInvoiceById(req.params.id);

        if(invoice.code){
            res.json({status:500,msg:"Error getting the Invoice",err:invoice})
        }
        res.json({status:200,msg:"Invoice retrieved!",invoice:invoice})
    })

    app.post('/cscorp/invoice/getInvoiceByInvoiceNumber',withAuth,async(req,res,next)=>{
        let invoice = await InvoiceModel.getInvoiceByInvoiceNumber(req.body.invoiceNumber);

        if(invoice.code){
            res.json({status:500,msg:"Error getting the Invoice",err:invoice})
        }
        res.json({status:200,msg:"Invoice retrieved!",invoice:invoice})
    })

    app.post('/cscorp/invoice/getInvoiceByFilter',withAuth,async(req,res,next)=>{
        let invoice = await InvoiceModel.getInvoiceByFilter(req);

        if(invoice.code){
            res.json({status:500,msg:"Error getting the Invoice",err:invoice})
        }
        res.json({status:200,msg:"Invoice retrieved!",invoice:invoice})
    })

    app.post('/cscorp/invoice/getTotalNetPriceByFilter',withAuth,async(req,res,next)=>{
        let invoice = await InvoiceModel.getTotalNetPriceByFilter(req);

        if(invoice.code){
            res.json({status:500,msg:"Error getting the Invoice",err:invoice})
        }
        res.json({status:200,msg:"Invoice retrieved!",totalNetPrice:invoice})
    })

    app.post('/cscorp/invoice/getTotalGrossPriceByFilter',withAuth,async(req,res,next)=>{
        let invoice = await InvoiceModel.getTotalGrossPriceByFilter(req);
        if(invoice.code){
            res.json({status:500,msg:"Error getting the Invoice",err:invoice})
        }
        res.json({status:200,msg:"Invoice retrieved!",totalGrossPrice:invoice})
    })

    app.post('/cscorp/invoice/getTotalTaxByFilter',withAuth,async(req,res,next)=>{
        let invoice = await InvoiceModel.getTotalTaxByFilter(req);

        if(invoice.code){
            res.json({status:500,msg:"Error getting the Invoice",err:invoice})
        }
        res.json({status:200,msg:"Invoice retrieved!",totalTax:invoice})
    })

    app.put('/cscorp/invoice/updateInvoice/:id',withAuth,async(req,res,next)=>{
        let invoice = await InvoiceModel.updateUpdateOneInvoice(req, req.params.id);

        if(invoice.code){
            res.json({status:500,msg:"Error updating the Invoice",err:invoice})
        }
        res.json({status:200,msg:"Invoice updated!"})
    })

    app.delete('/cscorp/invoice/deleteInvoice/:id',withAuth,async(req,res,next)=>{
        let invoice = await InvoiceModel.deleteOneInvoice(req.params.id);

        if(invoice.code){
            res.json({status:500,msg:"Error deleting the Invoice",err:invoice})
        }
        res.json({status:200,msg:"Invoice deleted!"})
    })
}