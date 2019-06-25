
module.exports = {
   connection: "mongodb://"+ process.env.DB_USER  +":"+ process.env.DB_PASS +"@ds213896.mlab.com:13896/todos"
}