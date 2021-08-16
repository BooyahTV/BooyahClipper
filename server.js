const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 3000
const sqlite3 = require('sqlite3')

const encode = require('./encode')

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/client'));
app.use(bodyParser.json());

var db = new sqlite3.Database('./clips.db');

db.run('CREATE TABLE IF NOT EXISTS clips(id INTEGER PRIMARY KEY,channelid INTEGER, name TEXT, vodname TEXT,vodid INTEGER, timestamp INTEGER, date TEXT)');

// lista de streams de un canal
app.get('/channel/:channelid', (req, res) => {

  res.render('streams.ejs')

})

// ver clips de un stream
app.get('/channel/:channelid/stream/:streamid', (req, res) => {

  var streamID = req.params.streamid

  res.render('stream.ejs')

})


app.get('/channel/:channelid/clip/:clipid', (req, res) => {

  var clipid = req.params.clipid

  /*db.serialize(()=>{
    db.each('SELECT * FROM clips WHERE id =?', [clipid], function(err,row){     
      if(err){
        res.send("Error al obtener un clip");
        return console.error(err.message);
      }

      console.log(row)*/
      
      res.render('clip.ejs',{
        id: clipid,
    /*    name: row.name,
        vod: row.vod,
        timestamp: row.timestamp,
        date: row.date*/
      })
/*
    });
  });*/


})

// crea un clip usando streamlink

app.post('/clip', (req, res) => {
    var name = req.body.name
    var timestamp = req.body.timestamp

    var datetime = new Date(); // checkiar si es hora chilena,etc

    console.log(`cliping from ${from} to ${to} secounds`)

    // TODO: guardar el clip en el disco, y redirecionar al usuario
    // a la pagina del clip o directamente al url de descarga

  // guardar en la base de datos y mandar a la pagina del clip correspondiente
  /*  db.serialize(()=>{
        db.run('BEGIN; INSERT INTO clips(id,channelid,name,vodname,vodid,timestamp,date) VALUES(?,?,?,?,?,?,?); SELECT last_insert_rowid(); COMMIT;', [null, channelid, name, vodname, vodid ,timestamp, date, datetime], function(err) {
          if (err) {
            return console.log('error al guardar un clip',err.message);
          }

          //res.redirect('/clip/'+)
        });
    });
*/
})

app.listen(port, () => {
  console.log(`Example app listening at http://186.20.226.221:${port}`)
})