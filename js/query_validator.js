const validateQuery = (req, res, next) => {
    const obs = ["temperature", "humidity", "wind"]
    const obsList = req.query.observation
    
    if (!obsList) { 
        req.query.observation = obs
    } else {
        obsList.forEach(item => {
            if (!obs.includes(item)) {
                const err = new Error("Invalid observation ${item}")
                err.status(400)
                next(err)
            }
        })
    }
    next()
}

module.exports = {validateQuery}