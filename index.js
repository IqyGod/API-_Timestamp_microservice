// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint...
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});


// 我在这里写

let responseObject = {}

app.get('/api/:input', (req, res) => {
  let input = req.params.input
  /* input is a date with -*/
  if (input.includes('-') || input.includes(' ')) {
    /* Date String */
    input = new Date(input)
    responseObject['unix'] = new Date(input).getTime()
    responseObject['utc'] = new Date(input).toUTCString()
  }else{
    /* input is timestamp */
    /* transfer all string to interger */
    input = new Date(parseInt(input))

    responseObject['unix'] = new Date(input).getTime()
    responseObject['utc'] = new Date(input).toUTCString()
  }

  /* input is invalid thing*/
  if(!responseObject['unix'] || !responseObject['utc']){
    res.json({error: 'Invalid Date'})
  }

  res.json(responseObject)
})

/* input nothing */
app.get('/api', (req, res) => {
  responseObject['unix'] = new Date().getTime()
  responseObject['utc'] = new Date().toUTCString()

  res.json(responseObject)
})
