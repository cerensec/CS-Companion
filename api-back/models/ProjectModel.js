module.exports = (_db) =>{
    db = _db;
    return ProjectModel;
}

class ProjectModel {

    static saveOneProject(req){
        let sql = 'INSERT INTO Project (name, address, city, country) VALUES (?, ?, ?, ?)'

        return db.query(sql,[req.body.name,req.body.address,req.body.city,req.body.country])
        .then((res)=>{return res})
        .catch((err)=>{return err})
    }

    static getOneProject(id){
        let sql = 'SELECT * FROM Project WHERE id = ?'

        return db.query(sql,[id])
        .then((res)=>{return res})
        .catch((err)=>{return err})
    }

    static getAllProjects(){
        let sql = 'SELECT * FROM Project'

        return db.query(sql,[])
        .then((res)=>{return res})
        .catch((err)=>{return err})
    }

    static updateProject(req,id){
        let sql = 'UPDATE Project SET name = ?, address = ?, city = ?, country = ? WHERE id = ?'

        return db.query(sql,[req.body.name,req.body.address,req.body.city,req.body.country,id])
        .then((res)=>{return res})
        .catch((err)=>{return err})
    }

    static deleteOneProject(id){
        let sql = 'DELETE FROM Project WHERE id = ?'

        return db.query(sql,[id])
        .then((res)=>{return res})
        .catch((err)=>{return err})
    }
}