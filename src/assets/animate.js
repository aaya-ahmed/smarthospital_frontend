function togglebar(x) {
    var page_content_wrapper = document.getElementById("page-content-wrapper");
    var sidebar_wrapper = document.getElementById("sidebar-wrapper");
    page_content_wrapper.style.transition = "0.5s";

    if (x) {
        sidebar_wrapper.style.margin = "0 0 0 -260px";
        page_content_wrapper.style.margin = "0 0 0 -260px";

    } else {
        sidebar_wrapper.style.margin = "0 0 0 0px";
        page_content_wrapper.style.margin = "0 0 0 0px";
    }
}

function openmodel() {
    document.getElementById('id01').style.display = 'block';
}

function cancelmodel() {
    document.getElementById('id01').style.display = 'none';
}

function toggleview() {
    document.getElementById('doctor-operation').style.display = 'block';
    document.getElementById('patient-info').style.display = 'none';
}

function resetview() {
    document.getElementById('doctor-operation').style.display = 'none';
    document.getElementById('patient-info').style.display = 'block';
}