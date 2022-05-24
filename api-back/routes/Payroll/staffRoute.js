const withAuth = require('../../withAuth');

module.exports = (app,db) =>{

    const StaffModel = require('../../models/Payroll/StaffModel')(db);
    
    // Route to add a new Staff member
    app.post('/cscorp/staff/add',withAuth,async(req,res,next)=>{
        let staff = await StaffModel.saveOneStaff(req);

        if(staff.code){
            res.json({status:500,msg:"Error saving the Staff member",err:staff})
        }
        res.json({status:200,msg:"Staff member saved!"})
    })

    // Route to get one Staff member by Id
    app.get('/cscorp/staff/getById/:id',withAuth,async(req,res,next)=>{
        let staff = await StaffModel.getOneStaff(req.params.id);

        if(staff.code){
            res.json({status:500,msg:"Error getting the staff member",err:staff});
        }
        res.json({status:200,msg:"Staff retrieved!",staff:staff})
    })

    // Route to get all the Staff members 
    app.get('/cscorp/staff/getAll',withAuth,async(req,res,next)=>{
        let staff = await StaffModel.getAllStaff();

        if(staff.code){
            res.json({status:500,msg:"Error getting all the staff",err:staff});
        }
        res.json({status:200,msg:"Staff retrieved!",staff:staff})
    })

    // Route to get the staff by alias
    app.get('/cscorp/staff/getStaffByAlias/:alias_id',withAuth,async(req,res,next)=>{
        let staff = await StaffModel.getStaffByAlias(req.params.alias_id);

        if(staff.code){
            res.json({status:500,msg:"Error getting the staff",err:staff});
        }
        res.json({status:200,msg:"Staff retrieved!",staff:staff})
    })

    // Route to get staff by post
    app.get('/cscorp/staff/getStaffByPost/:post',withAuth,async(req,res,next)=>{
        let staff = await StaffModel.getStaffByPost(req.params.post);

        if(staff.code){
            res.json({status:500,msg:"Error getting the staff",err:staff});
        }
        res.json({status:200,msg:"Staff retrieved!",staff:staff})
    })

    // Route to update staff member
    app.put('/cscorp/staff/updateStaff/:id',withAuth,async(req,res,next)=>{
        let staff = await StaffModel.updateOneStaff(req, req.params.id);

        if(staff.code){
            res.json({status:500,msg:"Error updating the staff",err:staff});
        }
        res.json({status:200,msg:"Staff updated!"})
    })

    // Route to delete a staff member
    app.delete('/cscorp/staff/deleteStaff/:id',withAuth,async(req,res,next)=>{
        let staff = await StaffModel.deleteOneStaff(req.params.id);

        if(staff.code){
            res.json({status:500,msg:"Error deleting",err:staff});
        }
        res.json({status:200,msg:"Staff deleted!"})
    })
}