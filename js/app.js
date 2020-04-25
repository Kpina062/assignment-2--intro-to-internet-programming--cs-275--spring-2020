alert(`JavaScript works!`);
function on_change (el) {
    if (el.options[el.selectedIndex].value === `One`) {
        document.getElementById(`Recipe1`).style.display = `block`;
    } else {
        document.getElementById(`Recipe1`).style.display = `none`;
    }
    if (el.options[el.selectedIndex].value !== `Two`) {
        document.getElementById(`Recipe2`).style.display = `block`;
    } else {
        document.getElementById(`Recipe2`).style.display = `block`;
    }
}
