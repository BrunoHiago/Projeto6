function loadFunction(dados) {

    var ano = String(new Date().getFullYear());
    var dia = String(new Date().getDate()).padStart(2, "0");
    var mes = String(new Date().getMonth() + 1).padStart(2, "0");

    var data = document.getElementById("data");

    data.innerText = `${dia}/${mes}/${ano}`;

    charttoday(true, dados);

}

function refresh() {

    location.reload();

}

var myLineChart = [];

function standartChart(labels, temp, umid, preci) {

    for (var i = 1; i < 4; i++) {

        var name = ""

        if (i == 1) {
            name = "Temperatura °C"
            data = temp;
        } else if (i == 2) {
            name = "Umidade %"
            data = umid
        } else {
            name = "Preciptação"
            data = preci
        }

        const ctx = document.getElementById('ch' + i);

        myLineChart[i - 1] = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: name,
                    data: data,
                    borderWidth: 2,
                    borderColor: "#3B8952"
                }]
            },
            options: {
                scales: {
                    y: {
                        min: 16
                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: name
                    }
                }
            }
        })


    }

}

/*function chart7days(load, dados){

    if(!load){

        deleteCharts();
        
    }

    const labels = dados.labels;
    const temp =  dados.temp;
    const umid = dados.umid;
    const preci = dados.preci;

    standartChart(labels, temp, umid, preci);

}*/

function charttoday(load, dados) {


    if (!load) {

        deleteCharts();

    }

    const labels = dados.labels;
    const temp = dados.temp;
    const umid = dados.umid;
    const preci = dados.preci;

    standartChart(labels, temp, umid, preci);

}


function deleteCharts() {

    myLineChart[0].destroy();
    myLineChart[1].destroy();
    myLineChart[2].destroy();

}