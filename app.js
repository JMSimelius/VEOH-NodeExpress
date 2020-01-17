const express = require('express');
const PORT = process.env.PORT || 8080;

let app = express();

app.use((req, res, next) => {
    console.log(`path: ${req.path}`);
    next(); // näin ymmärtää että on seuraava kuuntelija vielä (app.get siis)
});
app.use((req, res, next) => {
    console.log(`path: ${req.path}`);
    next(); // näin ymmärtää että on seuraava kuuntelija vielä (app.get siis)
});
app.get('/TEST', (req, res, next) => {
    console.log(`path: ${req.path}`);
    next(); // näin ymmärtää että on seuraava kuuntelija vielä (app.get siis)
});

app.get('/', (req, res, next) => {
    res.send('Hello World');
    //res.write
    //res.end();
});

app.use((req, res, next) => {
    res.status(404);
    res.send(`
    page not found
    `);
});
//app.post()


app.listen(8080);