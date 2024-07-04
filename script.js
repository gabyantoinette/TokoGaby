let loggedIn = false;
let currentUser = '';

function setLoggedInUI(username) {
    loggedIn = true;
    currentUser = username;

    document.getElementById('loginSection').style.display = 'none';
    document.getElementById('profileTab').style.display = 'block';
    document.getElementById('loggedInUser').textContent = username;
    document.getElementById('selectionSection').style.display = 'block';

    // Load initial data when user logs in
    displayStockFromFirestore();
}

function logout() {
    loggedIn = false;
    currentUser = '';

    document.getElementById('profileTab').style.display = 'none';
    document.getElementById('selectionSection').style.display = 'none';
    document.getElementById('loginSection').style.display = 'block';
}

function displayStockFromFirestore() {
    var tableBody = document.getElementById('stockTableBody');
    tableBody.innerHTML = ''; // Clear existing rows

    // Load indomieStock data
    getDocs(collection(db, "indomieStock"))
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            var data = doc.data();
            var row = tableBody.insertRow();
            row.innerHTML = `
                <td>${data.name}</td>
                <td>${data.quantity}</td>
                <td>${data.buyPrice}</td>
                <td>${data.sellPrice}</td>
                <td>${data.quantity} pcs, Exp: ${data.expiryDate}</td>
            `;
        });
    })
    .catch((error) => {
        console.error("Error getting documents: ", error);
    });

    // Load terpalStock data
    getDocs(collection(db, "terpalStock"))
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            var data = doc.data();
            var row = tableBody.insertRow();
            row.innerHTML = `
                <td>${data.name}</td>
                <td>${data.quantity}</td>
                <td>${data.buyPrice}</td>
                <td>${data.sellPrice}</td>
                <td>${data.quantity} pcs, Exp: ${data.expiryDate}</td>
            `;
        });
    })
    .catch((error) => {
        console.error("Error getting documents: ", error);
    });
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

        // Menambahkan data ke Firestore
        addDoc(collection(db, "indomieStock"), {
            name: itemName,
            quantity: parseInt(stock),
            buyPrice: buyPrice,
            sellPrice: sellPrice,
            expiryDate: expiryDate
        })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
            displayStockFromFirestore();
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });

        // Reset form setelah submit
        document.getElementById('indomieStockForm').reset();
    });
});
