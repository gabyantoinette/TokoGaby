
let loggedIn = false;
let currentUser = '';

function setLoggedInUI(username) {
    loggedIn = true;
    currentUser = username;

    document.getElementById('loginSection').style.display = 'none';

    document.getElementById('profileTab').style.display = 'block';
    document.getElementById('loggedInUser').textContent = username;

    document.getElementById('selectionSection').style.display = 'block';
}

function logout() {
    loggedIn = false;
    currentUser = '';

    document.getElementById('profileTab').style.display = 'none';

    document.getElementById('selectionSection').style.display = 'none';

    document.getElementById('loginSection').style.display = 'block';
}

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if(username === "gaby" && password === "g4byss81") {
        setLoggedInUI(username);
    }
    else if(username === "robinson" && password === "robinson1102") {
        setLoggedInUI(username);
    }
    else {
        alert('Username atau Password salah');
    }
});

document.getElementById('btnLogout').addEventListener('click', function() {
    logout();
});

document.getElementById('btnIndomie').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'indomie.html';
});

document.getElementById('btnTerpal').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'terpal.html';
});
