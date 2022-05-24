module.exports = (_db) =>{
    db = _db;
    return AliasModule;
}

class AliasModule {

    static saveOneAlias(req){
        let sql = 'INSERT INTO Alias (alias) VALUES (?)'

        return db.query(sql,[req.body.alias])
        .then((res)=>{return res})
        .catch((err)=>{return err})
    }

    static getAliasById(id){
        let sql = 'SELECT * FROM Alias WHERE id = ?'

        return db.query(sql,[id])
        .then((res)=>{return res})
        .catch((err)=>{return err})
    }

    static getAllAlias(){
        let sql = 'SELECT * FROM Alias'

        return db.query(sql,[])
        .then((res)=>{return res})
        .catch((err)=>{return err})
    }

    static deleteOneAlias(id){
        let sql = 'DELETE FROM Alias WHERE id = ?'

        return db.query(sql,[id])
        .then((res)=>{return res})
        .catch((err)=>{return err})
    }

    static updateAlias(req,id){
        let sql = 'UPDATE Alias SET alias = ? WHERE id = ?'

        return db.query(sql,[req.body.alias,id])
        .then((res)=>{return res})
        .catch((err)=>{return err})
    }

}