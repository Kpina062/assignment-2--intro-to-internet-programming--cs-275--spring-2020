const on_change = (e1) {
    if (el.options[e1.selectedIndex].value == `1`) {
        document.getElementById(`Recipe1`).style.display = `block`;
    } else {
        document.getElementById(`Recipe1`).style.display = `none`;
    }
    if (el.options[el.selectedIndex].value == `2`) {
        document.getElementById(`Recipe2`).style.display = `block`;
    } else {
        document.getElementById(`Recipe2`).style.display = `none`;
    }
}
