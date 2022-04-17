const express = require('express');
const productRouter = require('./answer2');
const app = express();

function logErrors(err, req, res, next) { console.error(err.stack); next(err); }

function clientErrorHandler(err, req, res, next) {
    if (req.xhr) {
        res.status(500).send({ error: 'Something failed!' })
    } else { next(err) }
}

function errorHandler(err, req, res, next) {
    res.status(500);
    res.render('error', { error: err })
}

app.use(logErrors)
app.use(clientErrorHandler)
app.use(errorHandler)


app.listen(3000, () => console.log('listening on 3000...'));