document.getElementById('checkButton').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const result = document.getElementById('result');

    if (name) {
        const khodam = checkKhodam(name);
        result.innerHTML = `Khodam anda adalah: <strong>${khodam}</strong>`;
    } else {
        result.innerHTML = `<span style="color: red;">Silahkan masukkan nama anda!</span>`;
    }
});

function checkKhodam(name) {
    const khodams = ['Monyet kayang', 'Udang kayang', 'Kunti daster',
    'Macan joget', 'RAJA IBLISSSSS', 'Tikus kor****', 'Buaya darat', 
    'Tunggu keris', 'Tuyul'];
    const index = Math.floor(Math.random() * khodams.length);
    return khodams[index];
}
