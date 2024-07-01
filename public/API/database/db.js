import mysql from 'mysql2'

export const  db = mysql.createConnection({

    host: "lbtf.online",
    port: 21,
    user: "u584943309",
    password: "L1i0b9e9@@@@",
    database: "projetointegradordesistema"

    // host: "177.220.175.134",
    // port: 58062,
    // user: "u584943309_xtream11",
    // password: "ms+!nOI6K[h",
    // database: "u584943309_xtream11"
});

db.connect((err) => {
    if(err){
        console.log(`Erro ao se connectar ao banco de dados ${err}`);
        return;
    }

    console.log(`Conexão ao banco de dados Msql realizada com sucesso.`);


});