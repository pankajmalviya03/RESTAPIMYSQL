const config=require("./config")
const mysql=require("mysql")
module.exports={
    "getconnection":function()
    {
        return mysql.createConnection({
            host:config.host,
            user:config.user,
            password:config.password,
            database:config.database
        })
    }
}