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

document.addEventListener('DOMContentLoaded', function() {
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

    // Event listener untuk form pencatatan stok Indomie
    document.getElementById('indomieStockForm').addEventListener('submit', function(event) {
        event.preventDefault();

        // Mengambil nilai dari input
        var itemName = document.getElementById('itemName').value;
        var buyPrice = document.getElementById('indomieBuyPrice').value;
        var sellPrice = document.getElementById('indomieSellPrice').value;
        var stock = document.getElementById('indomieStock').value;
        var expiryDate = document.getElementById('indomieExpiryDate').value;

        // Menambahkan baris baru ke tabel
        var table = document.getElementById('stockTable').getElementsByTagName('tbody')[0];
        var newRow = table.insertRow();

        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);
        var cell4 = newRow.insertCell(3);
        var cell5 = newRow.insertCell(4);

        cell1.innerHTML = itemName;
        cell2.innerHTML = stock;
        cell3.innerHTML = buyPrice;
        cell4.innerHTML = sellPrice;
        cell5.innerHTML = stock + " pcs, Exp: " + expiryDate;

        // Reset form setelah submit
        document.getElementById('indomieStockForm').reset();
    });
});
