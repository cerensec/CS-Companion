module.exports = (_db) =>{
    db = _db;
    return ClientsModel;
}

class ClientsModel {

    static saveOneClient(req){
        let sql = 'INSERT INTO Clients (name, address, city, country, type, nit, nrc) VALUES (?,?,?,?,?,?,?)'

        return db.query(sql,[req.body.name,req.body.address,req.body.city,req.body.country,req.body.type,req.body.nit,req.body.nrc])
        .then((res)=>{return res})
        .catch((err)=>{return err})
    }

    static getOneClient(id){
        let sql = 'SElECT * FROM Clients WHERE id = ?'

        return db.query(sql,[id])
        .then((res)=>{return res})
        .catch((err)=>{return err})
    }

    static getAllClients(){
        let sql = 'SELECT * FROM Clients'

        return db.query(sql,[])
        .then((res)=>{return res})
        .catch((err)=>{return err})
    }

    static updateOneClient(req,id){
        let sql = 'UPDATE Clients SET name = ?, address = ?, city = ?, country = ?,type = ?, nit= ?, nrc = ? WHERE id = ?'

        return db.query(sql,[req.body.name,req.body.address,req.body.city,req.body.country,req.body.type,req.body.nit,req.body.nrc,id])
        .then((res)=>{return res})
        .catch((err)=>{return err})
    }

    static deleteOneClient(id){
        let sql = 'DELETE FROM Clients WHERE id = ?'

        return db.query(sql,[id])
        .then((res)=>{return res})
        .catch((err)=>{return err})
    }

}