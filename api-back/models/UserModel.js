const bcrypt = require('bcrypt');
const saltRounds = 10;
const randomId = require('random-id');
let len = 30;
let pattern = 'aA0';

module.exports = (_db)=>{
    db = _db;
    return UserModel;
}

class UserModel {
    // Save user
    static async saveOneUser(req){
        let hash = await bcrypt.hash(req.body.password, saltRounds);
        let key_id = randomId(len,pattern);

        let sql = 'INSERT INTO Users ( email, password, firstName, lastName, role, validate, key_id, validate) VALUES (?, ?, ?, ?, ?,"no",?)'

        return db.query(sql,[req.body.email,hash,req.body.firstName,req.body.lastName,req.body.role,key_id,"yes"])
        .then((res)=>{
            res.key_id = key_id;
            return res;
        })
        .catch((err)=>{return err})
    }

    static updateValidateUser(key_id){
        let sql = 'UPDATE Users SET validate = "yes" WHERE key_id = ?';

        return db.query(sql,[key_id])
        .then((res)=>{
            return res;
        })
        .catch((err)=>{return err})
    }

    static async updateKeyId(email){
        let key_id = randomId(len,pattern);

        let sql = 'UPDATE Users SET key_id = ? WHERE email = ?';

        let user = await db.query(sql,[key_id,email]);

        let result = {key_id: key_id, user: user}

        return result;
    }

    static async updatePassword(newPassword, key_id){
        let hash = await bcrypt.hash(newPassword, saltRounds);

        let sql = 'UPDATE Users SET password = ? WHERE key_id = ?';

        return db.query(sql,[hash,key_id])
        .then((res)=>{return res})
        .catch((err)=>{return err})
    }

    static async updateUser(id,req){
        let sql = 'UPDATE Users SET firstName = ?, lastName = ?, email = ? WHERE id = ?'

        return db.query(sql,[req.body.firstName,req.body.lastName,req.body.email,id])
        .then((res)=>{return res})
        .catch((err)=>{return err})
    }

    static getUserByEmail(email){
        let sql = 'SELECT * FROM Users WHERE email = ?'
        return db.query(sql,[email])
        .then((res)=>{return res})
        .catch((err)=>{return err})
    }
}