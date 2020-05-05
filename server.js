const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static('public'));
app.use(cookieParser());
app.use(bodyParser.json());

app.post('/api/login', (req, res) => {
    console.log("request recieved")
    const body = req.body;
    console.log(body);
    console.log(body);

    let resObj = {
        success: false
    }

    if (body.username === 'chris' && body.password === 'pwd123') {
        res.cookie('loggedIn', 'true');
        resObj.success = true;
    }

    res.send(JSON.stringify(resObj));
});


app.listen(8000, () => {
    console.log('Server is running');
})