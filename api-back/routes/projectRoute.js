const withAuth = require('../withAuth')

module.exports = (app,db) =>{
    const ProjectModel = require('../models/ProjectModel')(db);

    app.post('/cscorp/project/save',withAuth,async(req,res,next)=>{
        let project = await ProjectModel.saveOneProject(req);

        if(project.code){
            res.json({status:500,msg:"Error saving the Project",err:project});
        }
        res.json({status:200,msg:"Project saved!"});
    })

    app.get('/cscorp/project/getProjectById/:id',withAuth,async(req,res,next)=>{
        let project = await ProjectModel.getOneProject(req.params.id);

        if(project.code){
            res.json({status:500,msg:"Error getting the project",err:project});
        }
        res.json({status:200,msg:"Project retrieved!",project:project});
    })

    app.get('/cscorp/project/getAllProjects',withAuth,async(req,res,next)=>{
        let project = await ProjectModel.getAllProjects();

        if(project.code){
            res.json({status:500,msg:"Error getting the project",err:project});
        }
        res.json({status:200,msg:"Project retrieved!",projects:project});
    })

    app.put('/cscorp/project/updateProject/:id',withAuth,async(req,res,next)=>{
        let project = await ProjectModel.updateProject(req, req.params.id);

        if(project.code){
            res.json({status:500,msg:"Error updating the project",err:project});
        }
        res.json({status:200,msg:"Project updated!"});
    })

    app.delete('/cscorp/project/deleteProject/:id',withAuth,async(req,res,next)=>{
        let project = await ProjectModel.deleteOneProject(req.params.id);

        if(project.code){
            res.json({status:500,msg:"Error deleting the project",err:project});
        }
        res.json({status:200,msg:"Project deleted!"});
    })

}