const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const connectDB = require('./config/db');
const PORT = process.env.PORT || 5000;

const app = express();

connectDB();

app.engine('.hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }));
app.set('view engine', '.hbs');

//static folder
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(PORT, () => {
    console.log('Server is running');
});
