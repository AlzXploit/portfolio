function demo() {
    alert("Mohon Maaf untuk saat ini fitur masih dikembangkan oleh developer")
}
function flipCard(card) {
    card.classList.toggle("flipped");
}

function halamanFrontEnd() {
    window.location.href = "../html/frontend.html";
}
function halamanDesainWeb() {
    window.location.href = "../html/desainweb.html";
}
function halamanNetwork() {
    window.location.href = "../html/network.html";
}
function halamanHardware() {
    window.location.href = "../html/hardware.html";
}

document.addEventListener("contextmenu", function (e) {
    e.preventDefault(); // Blokir klik kanan
});

document.addEventListener("copy", function (e) {
    e.preventDefault(); // Blokir Ctrl+C atau copy di menu
});

document.addEventListener("dragstart", function (e) {
    e.preventDefault(); // Blokir drag gambar
});



