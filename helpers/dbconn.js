var mysql = require('mysql2');

<<<<<<< HEAD
var misConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'magodmis',
    dateStrings:true, 
    port:3306
=======
const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbPort = process.env.DB_PORT;
const dbPassword = process.env.DB_PASSWORD;
const dbDatabase1 = process.env.DB_DATABASE_1; //magodmis
const dbDatabase2 = process.env.DB_DATABASE_2; //magod_setup
const dbDatabase3 = process.env.DB_DATABASE_3; //magodqtn
const dbDatabase4 = process.env.DB_DATABASE_4; //machine_data
const dbDatabase5 = process.env.DB_DATABASE_5; //magod_sales
const dbDatabase6 = process.env.DB_DATABASE_6; //magod_mtrl
const dbDatabase7 = process.env.DB_DATABASE_7;
>>>>>>> 982633e717e9cb543bf387423e3159c17426da1a


var misConn = mysql.createConnection({
	host: dbHost,
	user: dbUser,
	port: dbPort,
	password: dbPassword,
	database: dbDatabase1,
});

var setupConn = mysql.createConnection({
<<<<<<< HEAD
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'magod_setup',
    dateStrings:true,  
    port:3306

});

var qtnConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'magodqtn',
    dateStrings:true,
    port:3306
});

var mchConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:  'root',
    database: 'machine_data',
    dateStrings:true,
    port:3306

});

var slsConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'magod_sales',
    dateStrings:true,
    port:3306

});

var mtrlConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:  'root',
    database: 'magod_mtrl',
    dateStrings:true,
    port:3306

});

var productionConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:  'root', 
    database: 'magod_production',
    dateStrings:true,
    port:3306

=======
	host: dbHost,
	user: dbUser,
	port: dbPort,
	password: dbPassword,
	database: dbDatabase2,
});

var qtnConn = mysql.createConnection({
	host: dbHost,
	user: dbUser,
	port: dbPort,
	password: dbPassword,
	database: dbDatabase3,
});

var mchConn = mysql.createConnection({
	host: dbHost,
	user: dbUser,
	port: dbPort,
	password: dbPassword,
	database: dbDatabase4,
});

var slsConn = mysql.createConnection({
	host: dbHost,
	user: dbUser,
	port: dbPort,
	password: dbPassword,
	database: dbDatabase5,
});

var mtrlConn = mysql.createConnection({
	host: dbHost,
	user: dbUser,
	port: dbPort,
	password: dbPassword,
	database: dbDatabase6,
});

var productionConn = mysql.createConnection({
	host: dbHost,
	user: dbUser,
	port: dbPort,
	password: dbPassword,
	database: dbDatabase7,
>>>>>>> 982633e717e9cb543bf387423e3159c17426da1a
});

let misQuery = async (q, callback) => {
    misConn.connect();
    misConn.query(q, (err, res, fields) => {
        if (err) throw err;
        callback(res);
    })
}

let productionQueryMod = async (q, callback) => {
    productionConn.connect();
    productionConn.query(q, (err, res, fields) => {
        if(err) callback(err, null);
        else callback(null, res);
    })
}

let misQueryMod = async (q, callback) => {
    misConn.connect();
    misConn.query(q, (err, res, fields) => {
        if(err) callback(err, null);
        else callback(null, res);
    })
}

let mtrlQueryMod = async (m, callback) => {
    mtrlConn.connect();
    mtrlConn.query(m, (err, res, fields) => {
        if(err) callback(err, null);
        else callback(null, res);
    })
}

let setupQuery = (q, callback) => {
    setupConn.connect();
    setupConn.query(q, (err, res, fields) => {
        if (err) throw err;
        callback(res);
    })
}

let setupQueryMod = async (q, callback) => {
    setupConn.connect();
    setupConn.query(q, (err, res, fields) => {
        if(err) callback(err, null);
        else callback(null, res);
    })
}

let qtnQuery = (q, callback) => {
   // console.log(q);
    qtnConn.connect();
    qtnConn.query(q, (err, res, fields) => {
        if (err) throw err;
        callback(res);
        // return res[0].solution;
    })
}

let qtnQueryMod = (q, callback) => {
    // console.log(q);
     qtnConn.connect();
     qtnConn.query(q, (err, res, fields) => {
         if (err) callback(err, null);
         else callback(null, res);
         // return res[0].solution;
     })
 }

 let qtnQueryModv2 = (q, values, callback) => {
    // console.log(q);
     qtnConn.connect();
     qtnConn.query(q, values, (err, res, fields) => {
         if (err) callback(err, null);
         else callback(null, res);
         // return res[0].solution;
     })
 }
 
 let slsQueryMod = (s, callback) => {
    slsConn.connect();
    slsConn.query(s, (err, res, fields) => {
        if(err) callback(err, null);
        else callback(null, res);
    })
 }

 let mchQueryMod = (m, callback) => {
    mchConn.connect();
    mchConn.query(m, (err, res, fields) => {
        if(err) callback(err, null);
        else callback(null, res);
    })
 }

 let mchQueryMod1 = async (m) => {
    try {
        const [rows, fields] = await mchConn.promise().query(m);
        return rows;
    } catch (error) {
        throw error;
    }
};




module.exports = { misQuery, setupQuery, qtnQuery, misQueryMod, qtnQueryMod, qtnQueryModv2, slsQueryMod, mchQueryMod, mtrlQueryMod, setupQueryMod , productionQueryMod,mchQueryMod1 };