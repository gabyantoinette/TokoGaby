// Script JavaScript untuk aplikasi pencatatan stok

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
    showForm('Indomie');
});

document.getElementById('btnTerpal').addEventListener('click', function(event) {
    event.preventDefault();
    showForm('Terpal');
});

function showForm(itemType) {
    if (itemType === 'Indomie') {
        document.getElementById('selectionSection').style.display = 'none';
        document.getElementById('formSection').style.display = 'block';
    } else if (itemType === 'Terpal') {
        document.getElementById('selectionSection').style.display = 'none';
        // Tampilkan halaman kosong atau aksi yang sesuai untuk Terpal
        alert('Anda memilih Terpal');
    }
}

document.getElementById('btnBack').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('formSection').style.display = 'none';
    document.getElementById('selectionSection').style.display = 'block';
});

document.getElementById('stockForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var itemName = document.getElementById('itemName').value;
    var itemQuantity = document.getElementById('itemQuantity').value;
    var itemPrice = document.getElementById('itemPrice').value;

    var table = document.getElementById('stockTable').getElementsByTagName('tbody')[0];
    var newRow = table.insertRow();

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);

    cell1.innerHTML = itemName;
    cell2.innerHTML = itemQuantity;
    cell3.innerHTML = itemPrice;

    document.getElementById('stockForm').reset();

    // Menampilkan kembali seleksi setelah berhasil menambahkan barang
    document.getElementById('formSection').style.display = 'none';
    document.getElementById('selectionSection').style.display = 'block';
});
