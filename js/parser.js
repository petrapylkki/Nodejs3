const parseData = (data, obsList) => {
    const keyMap = {
        "temperature":"t2m",
        "humidity":"Humidity",
        "wind":"WindSpeedMS"
    }
    const resData = {}
    obsList.forEach(element => {
        const obsData = data[keyMap[element]]
        resData[element] = obsData[obsData.length - 1][1]
    })
    return resData
}