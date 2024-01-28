const { createClient } = require("@supabase/supabase-js");
var express = require('express'); // Express web server framework
var request = require('request'); // "Request" library
var cors = require('cors');
var querystring = require('querystring');
var cookieParser = require('cookie-parser');


const supabase = createClient("https://ljkmehcidzpwfwntgkoj.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MTgzNzYzOCwiZXhwIjoxOTU3NDEzNjM4fQ.qeO5zeAW3yNswldirh37k-tZTjpPOKwuIug1JrExQ40");

/*
const sacarReto = async() => {
  let { data, error } = await supabase
    .from('prompts')
    .select('*')
  
  if(error) {
    console.error(error);
    return
  }
  //console.log(data);
}
sacarReto();
*/

var app = express();

app.use(express.static(__dirname + '/public'))
   .use(cors())
   .use(cookieParser());

app.listen(3000);
