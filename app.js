const express = require("express")
const morgan = require("morgan")
const fetch = require("node-fetch")
const validator = require("./js/query_validator")
const errorHandler = require("./js/error_handler")
const parser = require("./js/parser")

const app = express()
const port = 3000

const url = "https://www.ilmatieteenlaitos.fi/observation-data?station=101004"

app.use(morgan("tiny"))

const makeReq = async url => {
    const res = await fetch(url)
    const data = await res.json()
    return data
}

app.get("/weather", validator.validateQuery), async (req, res, next) => {
    const obsList = req.query.observation
    try {
        const data = await makeReq(url)
        const obs = parser.parseData(data, obsList)
        res.send(obs)
    } catch (e) {
        next(e)
    }
}

app.use(errorHandler.errorHandler)
app.listen(port)

