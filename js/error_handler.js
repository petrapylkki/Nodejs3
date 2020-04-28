const errorHandler = (err, req, res, next) => {
    if (!err.statusCode || err.statusCode === 500) {
        if (!err.statusCode)
        res.status(500).send({error: error.message})
    } else {
        res.status(error.statusCode).send({error: error.message})
    }
}  

module.exports = {errorHandler}