module.exports = (_db) =>{
    db = _db;
    return LabelModel;
}

class LabelModel {

    static saveOneLabel(req){
        let sql = 'INSERT INTO Label (name) VALUES (?)'

        return db.query(sql,[req.body.name])
        .then((res)=>{return res})
        .catch((err)=>{return err})
    }

    static getOneLabelById(id){
        let sql = 'SELECT * FROM Label WHERE id = ?'

        return db.query(sql,[id])
        .then((res)=>{return res})
        .catch((err)=>{return err})
    }

    static getAllLabels(){
        let sql = 'SELECT * FROM Label ORDER BY name ASC'

        return db.query(sql,[])
        .then((res)=>{return res})
        .catch((err)=>{return err})
    }

    static getAllLabelByName(name){
        let sql = 'SELECT * FROM Label WHERE name LIKE ?'

        return db.query(sql,[name])
        .then((res)=>{return res})
        .catch((err)=>{return err})
    }

    static updateOneLabel(req,id){
        let sql = 'UPDATE Label SET name = ? WHERE id = ?'

        return db.query(sql,[req.body.name,id])
        .then((res)=>{return res})
        .catch((err)=>{return err})
    }

    static deleteOneLabel(id){
        let sql = 'DELETE FROM Label WHERE id = ?'

        return db.query(sql,[id])
        .then((res)=>{return res})
        .catch((err)=>{return err})
    }
}