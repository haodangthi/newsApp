
//Install express server
const express = require('express');
const path = require('path');
const cors= require('cors')
var request=require('request')
const app = express();
app.use(cors())

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/news'));
// app.get('/news',(req,res)=>{
//   request('https://newsapi.org/v2/top-headlines?' +
//   'country=us&' +
//   'apiKey=b0dd17deb9b34f2abac8026a821a2b3b',function(error,response,body){
//       if(!error && response.statusCode==200){
//           res.send(body)
//       } else {
//           console.log(error);
//       }
//   })
// })
app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/news/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080,()=>console.log('listening'));