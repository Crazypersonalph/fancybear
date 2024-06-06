import express from 'express'
const app = express()
const port = 3000
import path from 'path';
const __dirname = path.resolve();



app.use('/public', express.static(path.join(__dirname, 'public')))

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.get('/about', function(req, res) {
	res.sendFile(path.join(__dirname, '/public/about.html'));
});

app.get('/famous', function(req, res) {
	res.sendFile(path.join(__dirname, '/public/famous.html'));
});

app.get('/references', function(req, res) {
	res.sendFile(path.join(__dirname, '/public/references.html'));
});

app.get('/techniques', function(req, res) {
	res.sendFile(path.join(__dirname, '/public/techniques.html'));
});

app.get('/motives', (req, res) => {
	res.sendFile(path.join(__dirname, '/public/motives.html'));
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
