const mongoose = require("../../database/index");

const sensorValues = mongoose.Schema({
    dirVento:{
        type:String
    },
    createdAt:{
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model("sensorValues", sensorValues);



