const express = require("express");
const station = require("../database/stationSchema")
const router = express.Router();

    router.get("/",(req, res) => {
        res.render("homepage/index", { information: null, today: null });
        // station.findOne().sort({_id: "desc"}).then((last_data) => {


        //     var information = new Object({

        //         temp_atual: last_data.temperatura,
        //         temp_min: last_data.temperatura,
        //         temp_max : 0,
        //         umid_atual: last_data.umidade,
        //         umid_min: last_data.umidade,
        //         umid_max: 0,
        //         velVento: last_data.velVento,
        //         dirVento: last_data.dirVento,
        //         qtdAgua: last_data.qtdAgua

        //     })

        //     var year = String(last_data.createdAt.getFullYear());
        //     var day = String(last_data.createdAt.getDate()).padStart(2, "0");
        //     var month = String(last_data.createdAt.getMonth()+1).padStart(2, "0");

        //     var start = new Date(`${year}-${month}-${day}`); //new Date("2023-05-30");
        //     var end = new Date(`${year}-${month}-${day}`); //new Date("2023-05-31");

        //     end.setDate(end.getDate()+1)

        //     station.find({createdAt: {$gte:start, $lte: end}}).then((today_data) => {
 
        //         information.temp_min = today_data[0].temperatura;
        //         information.temp_max = today_data[0].temperatura;
        //         information.umid_min = today_data[0].umidade;
        //         information.umid_max = today_data[0].umidade;
                       

        //         for(let i = 1; i < today_data.length; i++){
                 
        //             information.temp_min = today_data[i].temperatura < information.temp_min ? today_data[i].temperatura : information.temp_min;
        //             information.temp_max = today_data[i].temperatura > information.temp_max ? today_data[i].temperatura : information.temp_max;
        //             information.umid_min = today_data[i].umidade < information.umid_min ? today_data[i].umidade : information.umid_min;
        //             information.umid_max = today_data[i].umidade > information.umid_max ? today_data[i].umidade : information.umid_max;

        //         }

        //         const today = new Object({

        //             labels: today_data.map((dado) => dado.createdAt),
        //             temp: today_data.map((dado) => dado.temperatura),
        //             umid: today_data.map((dado) => dado.umidade),
        //             preci: today_data.map((dado) => dado.qtdAgua)

        //         })

        //         res.render("homepage/index", { information: information, today: JSON.stringify(today) });

        //     }).catch((err) => {

        //         console.log(err)
        //         res.render("homepage/index", {information: information});

        //     })

        // }).catch((err) => {

        //     console.log("Error "+err);

        // })


    })


//EXPORTS
module.exports = router;