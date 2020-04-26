alert(`JavaScript works!`);
function onchange (el) {
    if (el.options[el.selectedIndex].value === `1`) {
        document.getElementById(`Recipe1`).style.display = `block`;
    } else {
        document.getElementById(`Recipe1`).style.display = `none`;
    }
    if (el.options[el.selectedIndex].value !== `2`) {
        document.getElementById(`Recipe2`).style.display = `block`;
    } else {
        document.getElementById(`Recipe2`).style.display = `block`;
    }
}
function weightConverter(valNum) {
    document.getElementById(`outputOunces`).innerHTML=valNum*16;
}
