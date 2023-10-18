const express = require("express");
const station = require("../database/stationSchema")
const router = express.Router();

    router.get("/",(req, res) => {
        station.findOne().sort({_id: "desc"}).then((last_data) => {

            console.log(last_data)
            var information = new Object({

                dirVento: last_data.dirVento

            })

            res.render("homepage/index", { information: information, today: null });

        }).catch((err) => {

            console.log("Error "+err);

        })


    })


//EXPORTS
module.exports = router;