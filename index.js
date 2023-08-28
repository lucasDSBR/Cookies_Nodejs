var express = require("express");
var app = express();
var cookieParser = require('cppkie-parser');
var crypto = require('crypto');
var dayjs = require('dayjs');

// cookieParser moddleware
app.use(cookieParser());

// route for settings the cookie
app.get('/setcookie', function (req, res) {
    //setting a server side cookie without httponly
    res.cookie("seerid", crypto.randomUUID(), {
        httpOnly: false,
        expires: dayjs().add(30, 'days').toDate(),
    });

    res.send("<html><body><p>A server side cookie has been set.</p></body></html>")
})


// Route for getting all the cookies
app.get('/getcookie', function (req, res) {
    res.send(`
        <html>
            <head>
                <script>
                    alert(document.cookie);
                </script>
            </head>
            <body>
                <p>This is an example of how to get the cookies client side.</p>
            </body>
        </html>`
    );
});

app.listen(3000, (err) => {
    if (err) throw err;
    console.log('server running on port 3000');
});