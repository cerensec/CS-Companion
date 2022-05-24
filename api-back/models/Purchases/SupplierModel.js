module.exports = (_db) =>{
    db = _db;
    return SupplierModel;
}

class SupplierModel{

    static saveOneSupplier(req){
        let sql = 'INSERT INTO Supplier (name, address) VALUES (?,?)'

        return db.query(sql,[req.body.name,req.body.address])
        .then((res)=>{return res})
        .catch((err)=>{return err})
    }

    static getSupplierById(id){
        let sql = 'SELECT * FROM Supplier WHERE id = ?'

        return db.query(sql,[id])
        .then((res)=>{return res})
        .catch((err)=>{return err})
    }

    static getAllSupliers(){
        let sql = 'SELECT * FROM Supplier'

        return db.query(sql,[])
        .then((res)=>{return res})
        .catch((err)=>{return err})
    }

    static updateSupplier(req,id){
        let sql = 'UPDATE Supplier SET name = ?, address = ? WHERE id = ?'

        return db.query(sql,[req.body.name,req.body.address,id])
        .then((res)=>{return res})
        .catch((err)=>{return err})
    }

    static deleteOneSupplier(id){
        let sql = 'DELETE FROM Supplier WHERE id = ?'

        return db.query(sql,[id])
        .then((res)=>{return res})
        .catch((err)=>{return err})
    }
}