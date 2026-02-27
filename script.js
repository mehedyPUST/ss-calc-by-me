
document.getElementById('btn-calculate').addEventListener('click', function () {



    const inputBRB = document.getElementById('brb-amps');
    const valueBRB = Number(inputBRB.value);
    const outputBRB = document.getElementById('brb-out');
    outputBRB.innerText = (Number(inputBRB.value) / 18).toFixed(1);



    const inputMRS = document.getElementById('mrs-amps');
    const valueMRS = Number(inputMRS.value);
    const outputMRS = document.getElementById('mrs-out');
    outputMRS.innerText = (Number(inputMRS.value) / 18).toFixed(1);



    const inputMOZOMPUR = document.getElementById('mozompur-amps');
    const valueMOZOMPUR = Number(inputMOZOMPUR.value);
    const outputMOZOMPUR = document.getElementById('mozompur-out');
    outputMOZOMPUR.innerText = (Number(inputMOZOMPUR.value) / 18).toFixed(1);



    const inputHOUSING = document.getElementById('housing-amps');
    const valueHOUSING = Number(inputHOUSING.value);
    const outputHOUSING = document.getElementById('housing-out');
    outputHOUSING.innerText = (Number(inputHOUSING.value) / 18).toFixed(1);



    const inputRajbari = document.getElementById('rajbari-amps');
    const valueRajbari = Number(inputRajbari.value);
    const outputRajbari = document.getElementById('rajbari-out');
    outputRajbari.innerText = (Number(inputRajbari.value) / 18).toFixed(1);



    const inputGIS = document.getElementById('gis-amps');
    const valueGIS = Number(inputGIS.value);
    const outputGIS = document.getElementById('gis-out');
    outputGIS.innerText = (Number(inputGIS.value) / 18).toFixed(1);



    const inputKoburhat = document.getElementById('koburhat-amps');
    const valueKoburhat = Number(inputKoburhat.value);
    const outputKoburhat = document.getElementById('koburhat-out');
    outputKoburhat.innerText = (Number(inputKoburhat.value) / 18).toFixed(1);


    const inputH3 = document.getElementById('h3-amps');
    const valueH3 = Number(inputH3.value);
    const outputH3 = document.getElementById('h3-out');
    outputH3.innerText = (Number(inputH3.value) / 18).toFixed(1);


    const inputT3 = document.getElementById('t3-amps');
    const valueT3 = Number(inputT3.value);
    const outputT3 = document.getElementById('t3-out');
    outputT3.innerText = (Number(inputT3.value) / 18).toFixed(1);




    const bottailMW = document.getElementById('bottail-mw');
    bottailMW.innerText = ((valueT3 + valueH3 + valueBRB + valueMRS) / 18).toFixed(1);
    const totalMW = document.getElementById('total-mw');

    totalMW.innerText = ((valueT3 + valueH3 + valueBRB + valueMRS + valueMOZOMPUR + valueHOUSING + valueRajbari + valueGIS + valueKoburhat) / 18).toFixed(1);


})

