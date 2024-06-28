document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if(username === "gaby" && password === "g4byss81") {
        document.getElementById('loginSection').style.display = 'none';
        document.getElementById('selectionSection').style.display = 'block';
    }
    else if(username === "robinson" && password === "robinson1102") {
        document.getElementById('loginSection').style.display = 'none';
        document.getElementById('selectionSection').style.display = 'block';
    }
    else {
        alert('Username atau Password salah');
    }
});

document.getElementById('btnIndomie').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'indomie.html';
});

document.getElementById('btnTerpal').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'terpal.html';
});
