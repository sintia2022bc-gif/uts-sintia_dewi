// Mengambil semua menu di sidebar
const menuLinks = document.querySelectorAll(".nav-link");

// Mengambil elemen nama dan kelas
const studentName = document.getElementById("studentName");
const className = document.getElementById("className");

// Mengambil bagian dashboard
const progressPanel = document.getElementById("progressPanel");
const activitiesPanel = document.getElementById("activitiesPanel");
const attachmentsPanel = document.getElementById("attachmentsPanel");
const stat = document.getElementById("stat");

// Fungsi untuk mengembalikan warna seperti semula
function resetPanelColors() {
    progressPanel.classList.remove("red-mode");
    activitiesPanel.classList.remove("red-mode");
    attachmentsPanel.classList.remove("red-mode");
    stat.classList.remove("red-mode");
}

// Perintah ketika menu diklik
menuLinks.forEach((link) => {

    link.addEventListener("click", (event) => {

        event.preventDefault();

        const selectedMenu = link.dataset.menu;

        // Mengatur menu yang sedang aktif
        menuLinks.forEach((item) => {
            item.classList.remove("active");
        });

        link.classList.add("active");

        // Mengembalikan warna panel ke awal
        resetPanelColors();

        // MENU HOME
        if (selectedMenu === "home") {
            studentName.textContent = "Nama Mahasiswa";
            className.textContent = "Kelas SI-3X";
        }

        // MENU MAHASISWA
        if (selectedMenu === "mahasiswa") {
            studentName.textContent = "Sintia dewi";
        }

        // MENU KELAS
        if (selectedMenu === "kelas") {
            className.textContent = "Kelas SI-3E";
        }

        // MENU AKTIVITAS
        if (selectedMenu === "aktivitas") {
            progressPanel.classList.add("red-mode");
            activitiesPanel.classList.add("red-mode");
        }

        // MENU DOKUMEN
        if (selectedMenu === "dokumen") {
            attachmentsPanel.classList.add("red-mode");
        }
        //statistic
         if (selectedMenu === "statistik") {
            stat.classList.add("red-mode");
        }

    });

});