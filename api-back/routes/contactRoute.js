const withAuth = require('../withAuth');

module.exports = (app,db) =>{
    const ContactModel = require('../models/ContactModel')(db);

    app.post('/cscorp/contact/save',withAuth,async(req,res,next)=>{
        let contact = await ContactModel.saveOneContact(req);

        if(contact.code){
            res.json({status:500,msg:"Error saving the contact",err:contact});
        }
        res.json({status:200,msg:"Contact saved!"})
    })

    app.get('/cscorp/contact/getContactById/:id',withAuth,async(req,res,next)=>{
        let contact = await ContactModel.getOneContactById(req.params.id);

        if(contact.code){
            res.json({status:500,msg:"Error saving the contact",err:contact});
        }
        res.json({status:200,msg:"Contact retrieved!",contact:contact})
    })

    app.get('/cscorp/contact/getAllContacts',withAuth,async(req,res,next)=>{
        let contact = await ContactModel.getAllContacts();

        if(contact.code){
            res.json({status:500,msg:"Error saving the contact",err:contact});
        }
        res.json({status:200,msg:"Contact retrieved!",contact:contact})
    })

    app.get('/cscorp/contact/getContactsBySupplier/:supplier_id',withAuth,async(req,res,next)=>{
        let contact = await ContactModel.getAllContactBySupplier(req.params.supplier_id);

        if(contact.code){
            res.json({status:500,msg:"Error saving the contact",err:contact});
        }
        res.json({status:200,msg:"Contact retrieved!",contact:contact})
    })

    app.get('/cscorp/contact/getContactsByClient/:client_id',withAuth,async(req,res,next)=>{
        let contact = await ContactModel.getAllContactByClient(req.params.client_id);

        if(contact.code){
            res.json({status:500,msg:"Error saving the contact",err:contact});
        }
        res.json({status:200,msg:"Contact retrieved!",contact:contact})
    })

    app.put('/cscorp/contact/updateContact/:id',withAuth,async(req,res,next)=>{
        let contact = await ContactModel.updateOneContact(req, req.params.id);

        if(contact.code){
            res.json({status:500,msg:"Error updating the contact",err:contact});
        }
        res.json({status:200,msg:"Contact updated!"})
    })

    app.delete('/cscorp/contact/deleteContact/:id',withAuth,async(req,res,next)=>{
        let contact = await ContactModel.deleteOneContact(req.params.id);

        if(contact.code){
            res.json({status:500,msg:"Error deleting the contact",err:contact});
        }
        res.json({status:200,msg:"Contact deleted!"})
    })
}