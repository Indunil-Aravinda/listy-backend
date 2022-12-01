import mysql from 'mysql2';

let connection; 

// const connection = mysql.createConnection({
//     host:'localhost',
//     user:'hapi-server',
//     password: 'CreativeSoftware',
//     database : 'listy',
// });

export const db = {
    connect : () => {
        connection = mysql.createConnection({
            host:'localhost',
            port:3306,
            user:'hapi-server',
            password:'CreativeSoftware',
            database : 'listy'
        });
        connection.connect();
    },
    query : (queryString, escapedValues) => {
        return new Promise((resolve,reject) => {
            connection.query(queryString,escapedValues, (error,results,fields)=>{
                if(error) return reject(error); // if there is a error reject the promise with this error
                // console.log(error);
                // console.log(queryString);
                // console.log(results);
                // console.log(fields);
                resolve({results,fields}); // otherwise resolve the promise with the results & fields
                //resolve(results);
            })
        })
    },
    end : () => connection.end(),
}