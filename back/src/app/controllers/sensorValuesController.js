const sensorValues = require("../models/sensorValues");

var cont = 0;

const saveValues = (req, res) => {
  const values = req.body;
  console.log(values);

  sensorValues
    .create({
      dirVento: values.dirVento,
    })
    .then((obj) => {
      console.log("Valores Salvos com sucesso: ", obj);
      res.send("Salvo");
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
};

const getValues = async (req, res) => {
  try {
    await sensorValues.findOne().sort({ _id: 'desc' }).then((ultimoDocumento) => {
      if (!ultimoDocumento) {
        console.error(err);
        // Trate o erro de alguma forma
        res.status(200).send({ dirVento: -1 });
        return;
      }
      console.log("Ultimo Valor: " +ultimoDocumento.dirVento);
      let angulo = dirAngulo(ultimoDocumento.dirVento);

      res.status(200).send({ dirVento: angulo })

    });
  } catch (err) {
    res.status(500).send({ dirVento: -1 });
  }
};

const dirAngulo = (ultimo) => {
  switch (ultimo) {
    case 'Norte':
      return 0;
      break
    case 'Noroeste':
      return 45;
      break;
    case 'Oeste':
      return 90;
      break;
    case 'Sudoeste':
      return 135;
      break;
    case 'Sul':
      return 180;
      break;

    case 'Sudeste':
      return 225;
      break
    case 'Leste':
      return 270;
      break;
    case 'Nordeste':
      return 315;
      break
  }
}


const ligarLed = async (req, res) => {
  try {
    cont++;
    console.log("Chamou:" + cont)
    let info = await sensorValues.find().then((arr) => {
      return arr.map((item) => {
        return {
          dirVento: item.dirVento,
          createdAt: item.createdAt,
        };
      });
    });
    if (cont >= 5) {
      res.status(200).send({ ligar: true, cont: cont })
    } else {
      res.status(200).send({ ligar: false, cont: cont })
    }
  } catch (err) {
    res.status(500).send(err);
  }


}


// const meanData = async (req, res) => {
//   try {
//     const data = await sensorValues.find();
//     const groupedData = {};
//     const mean = {};

//     data.forEach((doc) => {
//       const date = new Date(doc.createAt);
//       const day = `${date.getDate()}-${
//         date.getMonth() + 1
//       }-${date.getFullYear()}`;

//       if (!groupedData.hasOwnProperty(day)) {
//         groupedData[day] = [];
//       }

//       groupedData[day].push(doc);
//     });

//     for (const day in groupedData) {
//       const sum = {
//         temperatura: 0,
//         umidade: 0,
//       };
//       const n = groupedData[day].length;
//       console.log(n);

//       groupedData[day].forEach((doc) => {
//         sum.temperatura += doc.temperatura;
//         sum.umidade += doc.umidade;
//       });
//       mean[day] = {
//         mdTemperatura: sum.temperatura / n,
//         mdUmidade: sum.umidade / n,
//       };

//       console.log(sum);
//     }
//     res.status(200).send(mean);
//   } catch (err) {
//     res.status(500).send(err);
//   }
// };

// const last24h = async (req, res) => {
//   const now = Date.now();
//   const last = now - 24 * 60 * 60 * 1000;

//   sensorValues
//     .find({ createdAt: { $gte: last, $lte: now } })
//     .then((response) => {
//       res.status(200).send(response);
//     });
// };

// const buscaData = async (req, res) => {
//   const start = new Date("2023-05-30");
//   const end = new Date("2023-05-31");

//   sensorValues.find(
//     { createdAt: { $gte: start, $lte: end } },

//   ).then((result)=>{
//     console.log(result);
//     res.send(result);
//   })
// };

module.exports = {
  saveValues,
  getValues,
  ligarLed,
  // meanData,
  // last24h,
  // buscaData
};
