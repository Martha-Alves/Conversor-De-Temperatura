function converterTemperatura(grau, temp_inicial, temp_final) {

    let temp1 = temp_inicial;
    let temp2 = temp_final;
    let valor = grau;

    if (temp1 == "C" || temp1 == "c") {
        if (temp2 == "F" || temp2 == "f") {
            let resultfah = valor * 1.8 + 32;
            return console.log(resultfah);
        } else if (temp2 == "K" || temp2 == "k") {
            let resultkel = valor + 273.15;
            return console.log(resultkel);
        }
    } else if (temp1 == "F" || temp1 == "f") {
        if (temp2 == "C" || temp2 == "c") {
            let resultcel = (valor - 32) / 1.8;
            return console.log(resultcel)
        } else if (temp2 == "K" || temp2 == "k") {
            let resultkel = (valor - 32) / 1.8 + 273.15;
            return console.log(resultkel);
        }
    } else if (temp1 == "K" || temp1 == "k") {
        if (temp2 == "C" || temp2 == "c") {
            let resultcel = valor - 273.15;
            return console.log(resultcel)
        } else if (temp2 == "F" || temp2 == "f") {
            let resultfah = (valor - 273.15) * 1.8 + 32;
            return console.log(resultfah);
        }
    } else {
        return console.log("Algo deu errado!");
    }

}

converterTemperatura(33, "c", "F");

//converterTemperatura(temperatura em graus, medida inicial da temperatura, medida final da temperatura)