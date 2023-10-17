const mongoose = require("./connection")

//STATION DATA MODEL

const stationSchema = new mongoose.Schema({

    temperatura: {

        type: String

    },
    umidade: {

        type: String

    },
    velVento: {

        type: Number

    },
    dirVento: {

        type: String

    },
    qtdAgua: {

        type: Number

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