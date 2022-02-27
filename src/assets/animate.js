function togglebar() {
    var el = document.getElementById("wrapper");
    var toggleButton = document.getElementById("menu-toggle");
    el.classList.toggle("toggled");
};

function openmodel() {
    document.getElementById('id01').style.display = 'block';
}

function cancelmodel() {
    document.getElementById('id01').style.display = 'none';
}