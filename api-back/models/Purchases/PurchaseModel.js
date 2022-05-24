module.exports = (_db) =>{
    db = _db;
    return PurchaseModule;
}

class PurchaseModule {

    static saveOnePurchase(req){
        let sql = 'INSERT INTO Purchase (paymentType_id, supplier_id, project_id, date, invoiceNumber, amount, chequeNumber, label_id, comment) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)'

        return db.query(sql,[req.body.paymentType_id,req.body.supplier_id,req.body.project_id,req.body.date,req.body.invoiceNumber,req.body.amount,req.body.chequeNumber,req.body.label_id,req.body.comment])
        .then((res)=>{return res})
        .catch((err)=>{return err})
    }

    static getPurchaseById(id){
        let sql = 'SELECT p.id, pt.name as ptName, s.name as sName, pr.name as prName, p.date, p.invoiceNumber, p.amount, p.chequeNumber, l.name, p.comment FROM Purchase as p, PaymentType as pt, Supplier as s, Project as pr, Label as l WHERE p.paymentType_id = pt.id AND p.project_id = pr.id AND p.supplier_id = s.id AND p.label_id = l.id AND p.id = ?'

        return db.query(sql,[id])
        .then((res)=>{return res})
        .catch((err)=>{return err})
    }

    static getAllPurchase(){
        let sql = 'SELECT p.id, pt.name as ptName, s.name as supplierName, pr.name as prName, p.date, p.invoiceNumber, p.amount, p.chequeNumber, l.name, p.comment FROM Purchase as p, PaymentType as pt, Supplier as s, Project as pr, Label as l WHERE p.paymentType_id = pt.id AND p.project_id = pr.id AND p.supplier_id = s.id AND p.label_id = l.id'

        return db.query(sql,[])
        .then((res)=>{return res})
        .catch((err)=>{return err})
    }

    static getPurchaseByInvoiceNumber(invoiceNumber){
        let sql = 'SELECT * FROM Purchase WHERE invoiceNumber = ?'

        return db.query(sql,[invoiceNumber])
        .then((res)=>{return res})
        .catch((err)=>{return err})
    }

    static getPurchaseByFilter(req){
        let sql = 'SELECT p.id, pt.name as ptName, s.name as supplierName, pr.name as prName, p.date, p.invoiceNumber, p.amount, p.chequeNumber, l.name, p.comment FROM Purchase as p, PaymentType as pt, Supplier as s, Project as pr, Label as l WHERE p.paymentType_id = pt.id AND p.project_id = pr.id AND p.supplier_id = s.id AND p.label_id = l.id'
        let insertValues = [];

        for(let key in req.body){
            switch (key) {
                case "project_id":
                    sql += ' AND project_id = ?'
                    insertValues.push(req.body[key])
                    break;
                case "paymentType_id":
                    sql += ' AND paymentType_id = ?';
                    insertValues.push(req.body[key])
                    break;
                case "supplier_id":
                    sql += ' AND supplier_id = ?';
                    insertValues.push(req.body[key])
                    break;
                case "label_id":
                    sql += ' AND label_id = ?';
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

    static getTotalAmountByFilter(req){
        let sql = 'SELECT SUM(amount) as totalAmount FROM Purchase WHERE 1'
        let insertValues = [];

        for(let key in req.body){
            switch (key) {
                case "project_id":
                    sql += ' AND project_id = ?'
                    insertValues.push(req.body[key])
                    break;
                case "supplier_id":
                    sql += ' AND supplier_id = ?';
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

    static getPurchaseStats(req){
        let sql = "SELECT date, SUM(amount) as amountTotal FROM Purchase WHERE 1"
        let insertValues = [];

        for(let key in req.body){
            switch (key) {
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
        sql += " GROUP BY date"
        return db.query(sql,[...insertValues])
        .then((res)=>{return res})
        .catch((err)=>{return err})
    }

    static updatePurchase(req,id){
        let sql = 'UPDATE Purchase SET paymentType_id = ?, supplier_id = ?, project_id = ?, date = ?, invoiceNumber = ?, amount = ?, chequeNumber = ?, label_id = ?, comment = ? WHERE id = ?'

        return db.query(sql,[req.body.paymentType_id,req.body.supplier_id,req.body.project_id,req.body.date,req.body.invoiceNumber,req.body.amount,req.body.chequeNumber,req.body.label_id,req.body.comment,id])
        .then((res)=>{return res})
        .catch((err)=>{return err})
    }

    static deletePurchase(id){
        let sql = 'DELETE FROM Purchase WHERE id = ?'

        return db.query(sql,[id])
        .then((res)=>{return res})
        .catch((err)=>{return err})
    }
}