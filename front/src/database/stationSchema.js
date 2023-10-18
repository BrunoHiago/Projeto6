const mongoose = require("./connection")

//STATION DATA MODEL

const stationSchema = new mongoose.Schema({

       dirVento: {

        type: String

    },
    createdAt: {

        type: Date,
        default: Date.now()

    }

})

//SET MODEL
station = mongoose.model("sensorvalues", stationSchema)

//EXPORTS
module.exports = station