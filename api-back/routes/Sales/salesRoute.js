const withAuth = require('../../withAuth');

module.exports = (app,db) =>{
    const SalesModel = require('../../models/Sales/SalesModel')(db);

    app.post('/cscorp/sales/save',withAuth,async(req,res,next)=>{
        let sale = await SalesModel.saveOneSale(req);

        if(sale.code){
            res.json({status:500,msg:"Error saving the sale",err:sale});
        }
        res.json({status:200,msg:"Sale saved!"});
    })

    app.get('/cscorp/sales/getSaleById/:id',withAuth,async(req,res,next)=>{
        let sale = await SalesModel.getOneSale(req.params.id);

        if(sale.code){
            res.json({status:500,msg:"Error getting the sale",err:sale});
        }
        res.json({status:200,msg:"Sale retrieved!",sale:sale});
    })

    app.get('/cscorp/sales/getAllSales',withAuth,async(req,res,next)=>{
        let sale = await SalesModel.getAllSales();

        if(sale.code){
            res.json({status:500,msg:"Error getting the sale",err:sale});
        }
        res.json({status:200,msg:"Sale retrieved!",sales:sale});
    })

    app.get('/cscorp/sales/getSaleByProject/:project_id',withAuth,async(req,res,next)=>{
        let sale = await SalesModel.getSalesByProject(req.params.project_id);

        if(sale.code){
            res.json({status:500,msg:"Error getting the sale",err:sale});
        }
        res.json({status:200,msg:"Sale retrieved!",sales:sale});
    })

    app.get('/cscorp/sales/getSalesByClient/:client_id',withAuth,async(req,res,next)=>{
        let sale = await SalesModel.getSalesByClient(req.params.client_id);

        if(sale.code){
            res.json({status:500,msg:"Error getting the sale",err:sale});
        }
        res.json({status:200,msg:"Sale retrieved!",sales:sale});
    })

    app.put('/cscorp/sales/updateSale/:id',withAuth,async(req,res,next)=>{
        let sale = await SalesModel.updateOneSale(req, req.params.id);

        if(sale.code){
            res.json({status:500,msg:"Error updating the sale",err:sale});
        }
        res.json({status:200,msg:"Sale updated!"});
    })

    app.delete('/cscorp/sales/deleteSale/:id',withAuth,async(req,res,next)=>{
        let sale = await SalesModel.deleteOneSale(req.params.id);

        if(sale.code){
            res.json({status:500,msg:"Error deleting the sale",err:sale});
        }
        res.json({status:200,msg:"Sale deleted!"});
    })
}

