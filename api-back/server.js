const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));
app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

const cors = require('cors');
app.use(cors());

if(!process.env.HOST_DB){
    var config = require('./configLocal');
}else{
    var config = require('./config')
}

const mysql = require('promise-mysql');

// Routes
const userRoutes = require('./routes/userRoute');
const contactRoutes = require('./routes/contactRoute');
const projectRoutes = require('./routes/projectRoute');
const aliasRoutes = require('./routes/Payroll/aliasRoute');
const staffRoutes = require('./routes/Payroll/staffRoute');
const labelRoutes = require('./routes/Purchases/labelRoute');
const paymentTypeRoutes = require('./routes/Purchases/paymentTypeRoute');
const supplierRoutes = require('./routes/Purchases/supplierRoute');
const clientRoutes = require('./routes/Sales/clientRoute');
const salesRoute = require('./routes/Sales/salesRoute');
const payrollRoutes = require('./routes/Payroll/payrollRoute');
const purchaseRoutes = require('./routes/Purchases/purchaseRoute');
const invoiceRoutes = require('./routes/Sales/invoiceRoute');
const authRoutes = require('./routes/authRoute');

const host = process.env.HOST_DB || config.db.host;
const database = process.env.DATABASE_DB || config.db.database;
const user = process.env.USER_DB || config.db.user;
const password = process.env.PASSWORD_DB || config.db.password;
const port = process.env.PORT || config.db.port;

mysql.createConnection({
    host:host,
    database:database,
    user:user,
    password:password,
    port:port
}).then((db)=>{
    console.log("connected to db...");
    setInterval(async function(){
        let res = await db.query('SELECT 1');
    },10000);

    app.get('/', (req,res,next)=>{
        res.json({status:200,msg:"Welcome to the CS Corporativo API"});
    })

    // Use of routes
    userRoutes(app,db);
    aliasRoutes(app,db);
    staffRoutes(app,db);
    labelRoutes(app,db);
    projectRoutes(app,db);
    paymentTypeRoutes(app,db);
    supplierRoutes(app,db);
    contactRoutes(app,db);
    clientRoutes(app,db);
    salesRoute(app,db);
    payrollRoutes(app,db);
    purchaseRoutes(app,db);
    invoiceRoutes(app,db);
    authRoutes(app,db);
})
.catch((err)=>{
    console.log(err)
})

const PORT = process.env.PORT || 3001;

app.listen(PORT, ()=>{
    console.log('Listening port: '+PORT+'...');
})