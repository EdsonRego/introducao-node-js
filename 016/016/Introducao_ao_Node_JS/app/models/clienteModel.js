var db = require('../../config/db');

console.log('resultado');

module.exports = function(){
  this.all = function(){
    var con = db();
    con.query('select * from clientes',function(erro,resultado){
      console.log(resultado);
    });



    return [
      {nome:"Paulo",email:"paulo@mail.com"}
    ];
  };

  return this;


};
