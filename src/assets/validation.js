function error(errormess) {
    var password = document.getElementById('pass');
    var username = document.getElementById('username');
    var alert = document.getElementById('alert');

    if (errormess === 'Wrong password.') {
        password.style.borderColor = "red";
    }
    if (errormess === 'User not found.') {
        password.style.borderColor = "red";
        username.style.borderColor = "red";
    }
    alert.style.display = "block";
    setTimeout(function() {
        alert.style.display = "none";
    }, 1000)
}