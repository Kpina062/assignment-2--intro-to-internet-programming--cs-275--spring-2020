window.onload = () => {

    document.getElementById.addEventListener(`click`);

    document.getElementById.addEventListener(`keyup`, riceCalc);
    let riceBox = document.getElementById(`input`);

    function riceCalc() {
        document.getElementById(`ozCali`).innerHTML = riceBox.innerHTML;
        document.getElementById(`ozWhite`).innerHTML = riceBox.innerHTML;
        return riceBox * 8;
    }

    document.getElementById(`input`).addEventListener(`keyup`, waterCalc);
    let waterBox = document.getElementById(`input`);

    function waterCalc() {
        document.getElementById(`flozCaliWater`).innerHTML = waterBox.innerHTML;
        document.getElementById(`flozWhitewater`).innerHTML = waterBox.innerHTML;
        return waterBox * 2;
    }

    document.getElementById(`input`).addEventListener(`keyup`, oilCalc);
    let oilBox = document.getElementById(`input`);

    function oilCalc() {
        document.getElementById(`ozOliveOil`).innerHTML = oilBox.innerHTML;
        document.getElementById(`ozOliveOil2`).innerHTML = oilBox.innerHTML;
        return oilBox * 0.5;
    }
}


