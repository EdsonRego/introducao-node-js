var mysql = require('mysql');

var con = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'root',
  database:'curso_node'
});




module.exports = function(){
  this.all = function(){

    con.query('select * from clientes',function(erro,resultado){
      console.log(resultado);
    });



    return [
      {nome:"Paulo",email:"paulo@mail.com"}
    ];
  };

  return this;


};
