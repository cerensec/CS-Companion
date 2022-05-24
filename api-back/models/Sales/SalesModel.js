module.exports = (_db) =>{
    db = _db;
    return SalesModel;
}

class SalesModel {

    static saveOneSale(req){
        let sql = 'INSERT INTO Sales (project_id, client_id) VALUES (?,?)'

        return db.query(sql,[req.body.project_id,req.body.client_id])
        .then((res)=>{return res})
        .catch((err)=>{return err})
    }

    static getOneSale(id){
        let sql = 'SELECT s.id, p.name as pName, c.name as cName FROM Sales as s, Project as p, Clients as c WHERE s.project_id = p.id AND s.client_id = c.id AND s.id = ?'

        return db.query(sql,[id])
        .then((res)=>{return res})
        .catch((err)=>{return err})
    }

    static getAllSales(){
        let sql = 'SELECT s.id, p.name as pName, c.name as cName FROM Sales as s, Project as p, Clients as c WHERE s.project_id = p.id AND s.client_id = c.id'

        return db.query(sql,[])
        .then((res)=>{return res})
        .catch((err)=>{return err})
    }

    static getSalesByClient(client_id){
        let sql = 'SELECT s.id, p.name as pName, c.name as cName FROM Sales as s, Project as p, Clients as c WHERE s.project_id = p.id AND s.client_id = c.id AND s.client_id = ?'

        return db.query(sql,[client_id])
        .then((res)=>{return res})
        .catch((err)=>{return err})
    }

    static getSalesByProject(project_id){
        let sql = 'SELECT s.id, p.name as pName, c.name as cName FROM Sales as s, Project as p, Clients as c WHERE s.project_id = p.id AND s.client_id = c.id AND s.project_id = ?'

        return db.query(sql,[project_id])
        .then((res)=>{return res})
        .catch((err)=>{return err})
    }

    static updateOneSale(req,id){
        let sql = 'UPDATE Sales SET project_id = ?, client_id = ? WHERE id = ? '

        return db.query(sql,[req.body.project_id,req.body.client_id,id])
        .then((res)=>{return res})
        .catch((err)=>{return err})
    }

    static deleteOneSale(id){
        let sql = 'DELETE FROM Sales WHERE id = ?'

        return db.query(sql,[id])
        .then((res)=>{return res})
        .catch((err)=>{return err})
    }
}