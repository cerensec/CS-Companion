const withAuth = require('../../withAuth');

module.exports = (app,db) =>{
    const PayrollModel = require('../../models/Payroll/PayrollModel')(db);

    app.post('/cscorp/payroll/add',withAuth,async(req,res,next)=>{
        let payroll = await PayrollModel.saveOnePayroll(req);

        if(payroll.code){
            res.json({status:500,msg:"Error saving the payroll",err:payroll})
        }
        res.json({status:200,msg:"Payroll saved!"})
    })

    app.get('/cscorp/payroll/getMaxPayrollNumber',async(req,res,next)=>{
        let payroll = await PayrollModel.getMaxPayrollNumber();

        if(payroll.code){
            res.json({status:500,msg:"Error getting the max",err:payroll})
        }
        res.json({status:200,msg:"Payroll max!",payroll:payroll})
    })    

    app.get('/cscorp/payroll/getPayrollById/:id',withAuth,async(req,res,next)=>{
        let payroll = await PayrollModel.getPayrollById(req.params.id);

        if(payroll.code){
            res.json({status:500,msg:"Error getting the payroll",err:payroll})
        }
        res.json({status:200,msg:"Payroll retrieved!",payroll:payroll})
    })

    app.get('/cscorp/payroll/getAllPayroll',withAuth,async(req,res,next)=>{
        let payroll = await PayrollModel.getAllPayroll();

        if(payroll.code){
            res.json({status:500,msg:"Error getting the payroll",err:payroll})
        }
        res.json({status:200,msg:"Payroll retrieved!",payroll:payroll})
    })

    app.post('/cscorp/payroll/getPayrollByFilter',withAuth,async(req,res,next)=>{
        let payroll = await PayrollModel.getPayrollByFilter(req);

        if(payroll.code){
            res.json({status:500,msg:"Error getting the payroll",err:payroll})
        }
        res.json({status:200,msg:"Payroll retrieved!",payroll:payroll})
    })

    app.post('/cscorp/payroll/getTotalAmountByFilter',withAuth,async(req,res,next)=>{
        let payroll = await PayrollModel.getFinalAmountByFilter(req);
        
        if(payroll.code){
            res.json({status:500,msg:"Error getting the payroll",err:payroll})
        }
        res.json({status:200,msg:"Payroll retrieved!",payroll:payroll})
    })

    app.post('/cscorp/payroll/getTotalTaxByFilter',withAuth,async(req,res,next)=>{
        let payroll = await PayrollModel.getFinalTaxByFilter(req);

        if(payroll.code){
            res.json({status:500,msg:"Error getting the payroll",err:payroll})
        }
        res.json({status:200,msg:"Payroll retrieved!",payroll:payroll})

    })

    app.post('/cscorp/payroll/getTotalSalaryByFilter',withAuth,async(req,res,next)=>{
        let payroll = await PayrollModel.getFinalSalaryByFilter(req);

        if(payroll.code){
            res.json({status:500,msg:"Error getting the payroll",err:payroll})
        }
        res.json({status:200,msg:"Payroll retrieved!",payroll:payroll})
    })

    app.post('/cscorp/payroll/getQuantityByFilter',withAuth,async(req,res,next)=>{
        let payroll = await PayrollModel.getQuantityByFilter(req);

        if(payroll.code){
            res.json({status:500,msg:"Error getting the payroll",err:payroll})
        }
        res.json({status:200,msg:"Payroll retrieved!",payroll:payroll})
    })

    app.put('/cscorp/payroll/updatePayroll/:id',withAuth,async(req,res,next)=>{
        let payroll = await PayrollModel.updatePayroll(req, req.params.id);

        if(payroll.code){
            res.json({status:500,msg:"Error updating the payroll",err:payroll})
        }
        res.json({status:200,msg:"Payroll updated!"})
    })

    app.delete('/cscorp/payroll/deletePayroll/:id',withAuth,async(req,res,next)=>{
        let payroll = await PayrollModel.deletePayroll(req.params.id);

        if(payroll.code){
            res.json({status:500,msg:"Error deleting the payroll",err:payroll})
        }
        res.json({status:200,msg:"Payroll deleted!"})
    })
    
}