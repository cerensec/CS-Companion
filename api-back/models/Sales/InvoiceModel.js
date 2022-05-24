module.exports = (_db) =>{
    db = _db;
    return InvoiceModel;
}

class InvoiceModel {

    static saveOneInvoice(req){
        let sql = 'INSERT INTO Invoice (sales_id, invoiceNumber, type, date, description, netPrice, grossPrice, tax, amountInLetters, comment) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'

        return db.query(sql,[req.body.sales_id,req.body.invoiceNumber,req.body.type,req.body.date,req.body.description,req.body.netPrice,req.body.grossPrice,req.body.tax,req.body.amountInLetters,req.body.comment])
        .then((res)=>{return res})
        .catch((err)=>{return err})
    }

    static getOneInvoiceById(id){
        let sql = 'SELECT * FROM Invoice WHERE id = ?'

        return db.query(sql,[id])
        .then((res)=>{return res})
        .catch((err)=>{return err})
    }
    
    static getAllInvoice(){
        let sql = 'SELECT i.id, p.name as pName, i.invoiceNumber, i.type, i.date, i.description, i.netPrice, i.grossPrice, i.tax, i.amountInLetters, i.comment FROM Invoice as i, Sales as s, Project as p WHERE i.sales_id = s.id AND s.project_id = p.id'

        return db.query(sql,[])
        .then((res)=>{return res})
        .catch((err)=>{return err})
    }

    static getInvoiceByInvoiceNumber(invoiceNumber){
        let sql = 'SELECT * FROM Invoice WHERE invoiceNumber = ?'

        return db.query(sql,[invoiceNumber])
        .then((res)=>{return res})
        .catch((err)=>{return err})
    }

    static getInvoiceByFilter(req){
        let sql = 'SELECT i.id, p.name as pName, i.invoiceNumber, i.type, i.date, i.description, i.netPrice, i.grossPrice, i.tax, i.amountInLetters, i.comment FROM Invoice as i, Sales as s, Project as p WHERE i.sales_id = s.id AND s.project_id = p.id';
        let insertValues = [];

        for(let key in req.body){
            switch (key) {
                case "sales_id":
                    sql += ' AND sales_id = ?'
                    insertValues.push(req.body[key])
                    break;
                case "type":
                    sql += ' AND type = ?';
                    insertValues.push(req.body[key])
                    break;
                case "start":
                    sql += ' AND date > ?';
                    insertValues.push(req.body[key])
                    break;
                case "end":
                    sql += ' AND date < ?';
                    insertValues.push(req.body[key])
                    break;
                default:
                    break;
            }
        }
        return db.query(sql,[...insertValues])
        .then((res)=>{return res})
        .catch((err)=>{return err})
    }

    static getTotalNetPriceByFilter(req){
        let sql = 'SELECT SUM(netPrice) as totalNetPrice FROM Invoice WHERE 1'
        let insertValues = [];

        for(let key in req.body){
            switch (key) {
                case "sales_id":
                    sql += ' AND sales_id = ?'
                    insertValues.push(req.body[key])
                    break;
                case "type":
                    sql += ' AND type = ?';
                    insertValues.push(req.body[key])
                    break;
                case "start":
                    sql += ' AND date > ?';
                    insertValues.push(req.body[key])
                    break;
                case "end":
                    sql += ' AND date < ?';
                    insertValues.push(req.body[key])
                    break;
                default:
                    break;
            }
        }
        return db.query(sql,[...insertValues])
        .then((res)=>{return res})
        .catch((err)=>{return err})
    }


    static getTotalGrossPriceByFilter(req){
        let sql = 'SELECT SUM(grossPrice) as totalGrossPrice FROM Invoice WHERE 1'
        let insertValues = [];

        for(let key in req.body){
            switch (key) {
                case "sales_id":
                    sql += ' AND sales_id = ?'
                    insertValues.push(req.body[key])
                    break;
                case "type":
                    sql += ' AND type = ?';
                    insertValues.push(req.body[key])
                    break;
                case "start":
                    sql += ' AND date > ?';
                    insertValues.push(req.body[key])
                    break;
                case "end":
                    sql += ' AND date < ?';
                    insertValues.push(req.body[key])
                    break;
                default:
                    break;
            }
        }
        return db.query(sql,[...insertValues])
        .then((res)=>{return res})
        .catch((err)=>{return err})
    }

    static getTotalTaxByFilter(req){
        let sql = 'SELECT SUM(tax) as totalTax FROM Invoice WHERE 1'
        let insertValues = [];

        for(let key in req.body){
            switch (key) {
                case "sales_id":
                    sql += ' AND sales_id = ?'
                    insertValues.push(req.body[key])
                    break;
                case "type":
                    sql += ' AND type = ?';
                    insertValues.push(req.body[key])
                    break;
                case "start":
                    sql += ' AND date > ?';
                    insertValues.push(req.body[key])
                    break;
                case "end":
                    sql += ' AND date < ?';
                    insertValues.push(req.body[key])
                    break;
                default:
                    break;
            }
        }
        return db.query(sql,[...insertValues])
        .then((res)=>{return res})
        .catch((err)=>{return err})
    }

    static updateUpdateOneInvoice(req,id){
        let sql = 'UPDATE Invoice SET sales_id = ?, invoiceNumber = ?, type = ?, date = ?, description = ?, netPrice = ?, grossPrice = ?, tax = ?, amountInLetters = ?, comment = ? WHERE id = ?'

        return db.query(sql,[req.body.sales_id,req.body.invoiceNumber,req.body.type,req.body.date,req.body.description,req.body.netPrice,req.body.grossPrice,req.body.tax,req.body.amountInLetters,req.body.comment,id])
        .then((res)=>{return res})
        .catch((err)=>{return err})
    }

    static deleteOneInvoice(id){
        let sql = 'DELETE FROM Invoice WHERE id = ?'

        return db.query(sql,[id])
        .then((res)=>{return res})
        .catch((err)=>{return err})
    }



}