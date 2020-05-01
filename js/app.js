let el = document.getElementById(`pickRecipe`);
el.addEventListener(`click`, on_change);

function on_change (el) {
    if (el.options[el.selectedIndex].value === `1`) {
        document.getElementById(`Recipe1`).style.display = `block`;
    } else {
        document.getElementById(`Recipe1`).style.display = `none`;
    }
    if (el.options[el.selectedIndex].value === `2`) {
        document.getElementById(`Recipe2`).style.display = `block`;
    } else {
        document.getElementById(`Recipe2`).style.display = `none`;
    }
}
document.getElementById.addEventListener(`keyup`, riceCalc);
let riceBox = document.getElementById(`input`);
function riceCalc() {
    document.getElementById(`ozCali`).innerHTML = riceBox.innerHTML;
    document.getElementById(`ozWhite`).innerHTML = riceBox.innerHTML;
    let amountOfRice = 2*8;
    return amountOfRice;
}

document.getElementById(`input`).addEventListener(`keyup`, waterCalc);
let waterBox = document.getElementById(`input`);
function waterCalc() {
    document.getElementById(`flozCaliWater`).innerHTML = waterBox.innerHTML;
    document.getElementById(`flozWhitewater`).innerHTML = waterBox.innerHTML;
    let amountOfWater = 2*2;
    return amountOfWater;
}

document.getElementById(`input`).addEventListener(`keyup`, oilCalc);
let oilBox = document.getElementById(`input`);
function oilCalc() {
    document.getElementById(`ozOliveOil`).innerHTML = oilBox.innerHTML;
    document.getElementById(`ozOliveOil2`).innerHTML = oilBox.innerHTML;
    let amountOfOil = 0.25*0.25;
    return amountOfOil;
}



