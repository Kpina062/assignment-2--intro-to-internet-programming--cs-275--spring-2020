let el = document.getElementById(`pickRecipe`);
el.addEventListener = (on_change, `click`);
function on_change (el) {
    if (el.options[el.selectedIndex].value === `1st Recipe`) {
        document.getElementById(`Recipe1`).style.display = `block`;
    } else {
        document.getElementById(`Recipe1`).style.display = `none`;
    }
    if (el.options[el.selectedIndex].value ===`2nd Recipe`) {
        document.getElementById(`Recipe2`).style.display = `block`;
    } else {
        document.getElementById(`Recipe2`).style.display = `none`;
    }
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


