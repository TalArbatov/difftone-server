const express = require('express');
const path = require('path');

// stuck on port issues with heroku
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json()) 


app.use(require('./routes') )

app.use('/', express.static(path.join(__dirname, 'build')))



app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})