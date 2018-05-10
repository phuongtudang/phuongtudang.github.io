const express = require('express');
const app = express();
const path = require('path');

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
})

app.listen(3000, () => {
    console.log('Listening on port 3000')
})