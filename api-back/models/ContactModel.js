module.exports = (_db) =>{
    db = _db;
    return ContactModel;
}

class ContactModel {

    static saveOneContact(req){
        let sql = 'INSERT INTO Contact (name, phone, email, supplier_id, client_id) VALUES (?, ?, ?, ?, ?)'

        return db.query(sql,[req.body.name,req.body.phone,req.body.email,req.body.supplier_id,req.body.client_id])
        .then((res)=>{return res})
        .catch((err)=>{return err})
    }

    static getAllContacts(){
        let sql = 'SELECT * FROM Contact'

        return db.query(sql,[])
        .then((res)=>{return res})
        .catch((err)=>{return err})
    }

    static getAllContactBySupplier(supplier_id){
        let sql = 'SELECT * FROM Contact WHERE supplier_id = ?'

        return db.query(sql,[supplier_id])
        .then((res)=>{return res})
        .catch((err)=>{return err})
    }

    static getAllContactByClient(client_id){
        let sql = 'SELECT * FROM Contact WHERE client_id = ?'

        return db.query(sql,[client_id])
        .then((res)=>{return res})
        .catch((err)=>{return err})
    }

    static getOneContactById(id){
        let sql = 'SELECT * FROM Contact WHERE id = ?'

        return db.query(sql,[id])
        .then((res)=>{return res})
        .catch((err)=>{return err})
    }

    static updateOneContact(req,id){
        let sql = 'UPDATE Contact SET name = ?, phone = ?, email = ?, supplier_id = ?, client_id = ? WHERE id = ?'
        
        return db.query(sql,[req.body.name,req.body.phone,req.body.email,req.body.supplier_id,req.body.client_id,id])
        .then((res)=>{return res})
        .catch((err)=>{return err})
    }

    static deleteOneContact(id){
        let sql = 'DELETE FROM Contact WHERE id = ?'
        
        return db.query(sql,[id])
        .then((res)=>{return res})
        .catch((err)=>{return err})
    }

}