module.exports = (_db) =>{
    db = _db;
    return StaffModel;
}

class StaffModel {

    static saveOneStaff(req){
        let sql = 'INSERT INTO Staff (firstName, lastName, alias_id, post, nit, dui, phone, email) VALUES (?,?,?,?,?,?,?,?)'

        return db.query(sql,[req.body.firstName,req.body.lastName,req.body.alias_id,req.body.post,req.body.nit,req.body.dui,req.body.phone,req.body.email])
        .then((res)=>{return res})
        .catch((err)=>{return err})
    }

    static getOneStaff(id){
        let sql = 'SELECT * FROM Staff WHERE id = ?'

        return db.query(sql,[id])
        .then((res)=>{return res})
        .catch((err)=>{return err})
    }

    static getAllStaff(){
        let sql = 'SELECT * FROM Staff'

        return db.query(sql,[])
        .then((res)=>{return res})
        .catch((err)=>{return err})
    }

    static getStaffByAlias(alias_id){
        let sql = 'SELECT * FROM Staff WHERE alias_id = ?'

        return db.query(sql,[alias_id])
        .then((res)=>{return res})
        .catch((err)=>{return err})
    }

    static getStaffByPost(post){
        let sql = 'SELECT * FROM Staff WHERE post = ?'

        return db.query(sql,[post])
        .then((res)=>{return res})
        .catch((err)=>{return err})
    }

    static updateOneStaff(req,id){
        let sql = 'UPDATE Staff SET firstName = ?, lastName = ?, alias_id = ?, post = ?, nit = ?, dui = ?, phone = ?, email = ? WHERE id = ?'

        return db.query(sql,[req.body.firstName,req.body.lastName,req.body.alias_id,req.body.post,req.body.nit,req.body.dui,req.body.phone,req.body.email,id])
        .then((res)=>{return res})
        .catch((err)=>{return err})
    }

    static deleteOneStaff(id){
        let sql = 'DELETE FROM Staff WHERE id = ?'

        return db.query(sql,[id])
        .then((res)=>{return res})
        .catch((err)=>{return err})
    }
}