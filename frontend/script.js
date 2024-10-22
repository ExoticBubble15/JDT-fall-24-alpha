function toggle() {
    // alert("SHIT");
    var element = document.getElementById('hideshow1');
    if (element.style.display == 'block') {
        element.style.display = 'none';
    } else {
        element.style.display = 'block';
    }

    var button = document.getElementsByClassName("toggler")[0];
    if (button.innerHTML == 'hide') {
        button.innerHTML = 'show';
    } else {
        button.innerHTML = 'hide';
    }
}