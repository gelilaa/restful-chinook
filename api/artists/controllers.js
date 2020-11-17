const db = require('../db-connection');

const controllers = {
  getAll: (req, res) => {

    const sql = `SELECT * FROM artists`;

    db.all(sql, (err, rows) => {
      if (err) {
        res.status(400).json({ "error": err.message });
        return;
      }

      res.json(rows)
    });
  },
  getOne: (req, res) => { 
    const userInput ={
      id:req.params.id
    };
    console.log(userInput);
   
    const sql =`SELECT name FROM Artist WHERE ArtistID is ${userInput.id}`;

db.get(sql,userInput.id,(err,row)=>{
  if(err){
    res.status(400).json({ "error": err.message });
        return;
  }
  res.json(row);

})
  },
  create: (req, res) => {
    // read row data from body
  },
  update: (req, res) => {
    // read row data from body
  },
  delete: (req, res) => { }
}

module.exports = controllers;
