var connection=require("../utils/connection")
var conn=connection.getconnection()
conn.connect((err) => {
  if (err) throw err
  console.log('You are now connected with mysql database!...')
})
exports.getcustomer=(req,res)=>{
    conn.query('select * from customer', (error, results, fields) =>{
        if (error) throw error;
        res.end(JSON.stringify(results));
      });
}
exports.postcustomer=(req,res)=>{
    var params  = req.body;
   //console.log(params);
   conn.query('INSERT INTO customer SET ?', params, (error, results, fields)=> {
	  if (error) throw error;
	  res.end(JSON.stringify(results));
	});
}
exports.getbyid=(req,res)=>{
    conn.query('select * from customer where Id=?', [req.params.id], (error, results, fields)=> {
        if (error) throw error;
        res.end(JSON.stringify(results));
      });
}
exports.updatebyid=(req,res)=>{
    conn.query('UPDATE `customer` SET `Name`=?,`Address`=?,`Country`=?,`phone`=? where `Id`=?', [req.body.Name,req.body.Address, req.body.Country, req.body.phone, req.body.Id],  (error, results, fields)=> {
        if (error) throw error;
        res.end(JSON.stringify(results));
      });
}
exports.deletebyid=(req,res)=>{
    //console.log(req.body);
   conn.query('DELETE FROM `customer` WHERE `Id`=?', [req.body.Id], (error, results, fields)=>{
	  if (error) throw error;
	  res.end('Record has been deleted!');
	});
}

