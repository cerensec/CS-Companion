module.exports = (_db) =>{
    db = _db;
    return PaymentTypeModel;
}

class PaymentTypeModel {

    static saveOnePaymentType(req){
        let sql = 'INSERT INTO PaymentType (name) VALUES (?)'

        return db.query(sql,[req.body.name])
        .then((res)=>{return res})
        .catch((err)=>{return err})
    }

    static getPaymentTypeById(id){
        let sql = 'SELECT * FROM PaymentType WHERE id = ?'

        return db.query(sql,[id])
        .then((res)=>{return res})
        .catch((err)=>{return err})
    }

    static getAllPaymentType(){
        let sql = 'SElECT * FROM PaymentType'

        return db.query(sql,[])
        .then((res)=>{return res})
        .catch((err)=>{return err})
    }

    static updateOnePaymentType(req,id){
        let sql = 'UPDATE PaymentType SET name = ? WHERE id = ?'

        return db.query(sql,[req.body.name,id])
        .then((res)=>{return res})
        .catch((err)=>{return err})
    }

    static deleteOnePaymentType(id){
        let sql = 'DELETE FROM PaymentType WHERE id = ?'

        return db.query(sql,[id])
        .then((res)=>{return res})
        .catch((err)=>{return err})
    }
}