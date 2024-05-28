const express = require('express')
const app = express()
const port = 3000
const path = require('path')

app.use('/public', express.static(path.join(__dirname, 'public')))

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});
app.get('/about', function(req, res) {
	res.sendFile(path.join(__dirname, '/public/about.html'));
})
app.get('famous', function(req, res) {
	res.sendFile(path.join(__dirname, '/public/famous.html'));
})
app.get('references', function(req, res) {
	res.sendFile(path.join(__dirname, '/public/references.html'));
})
app.get('techniques', function(req, res) {
	res.sendFile(path.join(__dirname, '/public/techniques.html'));
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
