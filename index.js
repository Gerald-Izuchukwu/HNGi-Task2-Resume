const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const connectDB = require('./config/db');
const PORT = process.env.PORT || 5001;
const ejs = require('ejs');
const app = express();
const axios = require('axios');

app.set('view engine', 'ejs');
app.use(express.json());
//static folder
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/submitted', async (req, res) => {
    try {
        const { data } = await axios.get(
            'https://portfolio-f8f91.firebaseio.com/data.json'
        );
        const values = Object.keys(data).map((it) => {
            return data[it];
        });
        res.render('submitted', {
            response: values,
        });
    } catch (error) {
        console.log(error);
    }
});

app.listen(PORT, () => {
    console.log('Server is running');
});
