const express = require("express");
const station = require("../database/stationSchema");
const router = express.Router();

    router.get("/",async (req, res) => {

        var information =  await getData();
        console.log(information)
        res.render("homepage/index", { information: information?.dirVento, today: null });
    })

const getData = async () => {
    
        let information = await station.findOne().sort({_id: "desc"}).then((last_data) => {
    
            console.log(last_data)
            var information = {
                dirVento: last_data.dirVento
            }
    
            return information;
    
        }).catch((err) => {
    
            console.log("Error "+err);
    
        })
        
        return information;
    }
    
//EXPORTS
module.exports = router;