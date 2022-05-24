module.exports = (_db) =>{
    db = _db;
    return PayrollModel;
}

class PayrollModel {

    static saveOnePayroll(req){
        let sql = 'INSERT INTO Payroll (date, project_id, type, payrollNumber, staff_id, alias_id, amount, tax, salary, comments, finished) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'

        return db.query(sql,[req.body.date,req.body.project_id,req.body.type,req.body.payrollNumber,req.body.staff_id,req.body.alias_id,req.body.amount,req.body.tax,req.body.salary,req.body.comments,req.body.finished])
        .then((res)=>{return res})
        .catch((err)=>{return err})
    }


    static getMaxPayrollNumber = () =>{
        let sql ='SELECT MAX(payrollNumber) as maxPayrollNumber FROM Payroll';

        return db.query(sql,[])
        .then((res)=>{return res})
        .catch((err)=>{return err})
    }

    static getPayrollById(id){
        let sql = 'SELECT p.id,p.date, pr.name, p.type, p.payrollNumber, s.firstName, a.alias, p.amount, p.tax, p.salary, p.comments FROM Payroll as p,Project as pr,Staff as s,Alias as a WHERE p.project_id = pr.id AND p.staff_id = s.id and p.alias_id = a.id AND p.id = ?'

        return db.query(sql,[id])
        .then((res)=>{return res})
        .catch((err)=>{return err})
    }
    
    static getAllPayroll(){
        let sql = 'SELECT p.id,p.date, pr.name, p.type, p.payrollNumber, s.firstName, a.alias, p.amount, p.tax, p.salary, p.comments FROM Payroll as p,Project as pr,Staff as s,Alias as a WHERE p.project_id = pr.id AND p.staff_id = s.id and p.alias_id = a.id '

        return db.query(sql,[])
        .then((res)=>{return res})
        .catch((err)=>{return err})
    }

    static getPayrollByFilter(req){
        let sql = "SELECT p.id,p.date, pr.name, p.type, p.payrollNumber, s.firstName, a.alias, p.amount, p.tax, p.salary, p.comments FROM Payroll as p,Project as pr,Staff as s,Alias as a WHERE p.project_id = pr.id AND p.staff_id = s.id and p.alias_id = a.id"
        let insertValues = [];
        for(let key in req.body){
            switch (key) {
                case "project_id":
                    sql += ' AND p.project_id = ?'
                    insertValues.push(req.body[key])
                    break;
                case "type":
                    sql += ' AND p.type = ?';
                    insertValues.push(req.body[key])
                    break;
                case "payrollNumber":
                    sql += ' AND p.payrollNumber = ?';
                    insertValues.push(req.body[key])
                    break;
                case "alias_id":
                    sql += ' AND p.alias_id = ?';
                    insertValues.push(req.body[key])
                    break;
                case "staff_id":
                    sql += ' AND p.staff_id = ?';
                    insertValues.push(req.body[key])
                    break;
                case "start":
                    sql += ' AND p.date > ?';
                    insertValues.push(req.body[key])
                    break;
                case "end":
                    sql += ' AND p.date < ?';
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

    static getFinalTaxByFilter(req){
        let sql = "SELECT SUM(tax) as taxTotal FROM Payroll WHERE finished = 1"
        let insertValues = []
        for(let key in req.body){
            switch (key) {
                case "project_id":
                    sql += ' AND project_id = ?'
                    insertValues.push(req.body[key])
                    break;
                case "type":
                    sql += ' AND type = ?';
                    insertValues.push(req.body[key])
                    break;
                case "payrollNumber":
                    sql += ' AND payrollNumber = ?';
                    insertValues.push(req.body[key])
                    break;
                case "alias_id":
                    sql += ' AND alias_id = ?';
                    insertValues.push(req.body[key])
                    break;
                case "staff_id":
                    sql += ' AND staff_id = ?';
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

    static getFinalAmountByFilter(req){
        let sql = "SELECT SUM(amount) as amountTotal FROM Payroll WHERE finished = 1";
        let insertValues = [];
        for(let key in req.body){
            switch (key) {
                case "project_id":
                    sql += ' AND project_id = ?'
                    insertValues.push(req.body[key])
                    break;
                case "type":
                    sql += ' AND type = ?';
                    insertValues.push(req.body[key])
                    break;
                case "payrollNumber":
                    sql += ' AND payrollNumber = ?';
                    insertValues.push(req.body[key])
                    break;
                case "alias_id":
                    sql += ' AND alias_id = ?';
                    insertValues.push(req.body[key])
                    break;
                case "staff_id":
                    sql += ' AND staff_id = ?';
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

    static getFinalSalaryByFilter(req){
        let sql = 'SELECT SUM(salary) as salaryTotal FROM Payroll WHERE finished = 1'
        let insertValues = [];
        for(let key in req.body){
            switch (key) {
                case "project_id":
                    sql += ' AND project_id = ?'
                    insertValues.push(req.body[key])
                    break;
                case "type":
                    sql += ' AND type = ?';
                    insertValues.push(req.body[key])
                    break;
                case "payrollNumber":
                    sql += ' AND payrollNumber = ?';
                    insertValues.push(req.body[key])
                    break;
                case "alias_id": 
                    sql += ' AND alias_id = ?';
                    insertValues.push(req.body[key])
                    break;
                case "staff_id":
                    sql += ' AND staff_id = ?';
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

    static getQuantityByFilter(req){
        let sql = "SELECT date, SUM(amount) as amountTotal, SUM(tax) as taxTotal, SUM(salary) as salaryTotal FROM Payroll WHERE finished = 1"
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

    static updatePayroll(req,id){
        let sql = 'UPDATE Payroll SET date = ?, project_id = ?, type = ?, payrollNumber = ?, staff_id = ?, alias_id = ?, amount = ?, tax = ?, salary = ?, comments = ?, finished = ? WHERE id = ?'

        return db.query(sql,[req.body.date,req.body.project_id,req.body.type,req.body.payrollNumber,req.body.staff_id,req.body.alias_id,req.body.amount,req.body.tax,req.body.salary,req.body.comments,req.body.finished,id])
        .then((res)=>{return res})
        .catch((err)=>{return err})
    }

    static deletePayroll(id){
        let sql = 'DELETE FROM Payroll WHERE id = ?'

        return db.query(sql,[id])
        .then((res)=>{return res})
        .catch((err)=>{return err})
    }
}