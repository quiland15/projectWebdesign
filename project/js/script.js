function handleLogin(event) {
    event.preventDefault();

    // Ambil nilai dari input field
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Contoh username dan password yang valid
    const validUser = "admin";
    const validPass = "123";

    // Cek apakah input sesuai dengan user yang valid
    if (email === validUser && password === validPass) {
        alert("Login berhasil!");
        window.location.href = 'dashboard.html'; // Arahkan ke halaman dashboard
    } else {
        alert("Username atau password salah!");
    }
}

function toggleSidebar() {
    let sidebar = document.getElementById("sidebar");
    let content = document.querySelector(".content");

    sidebar.classList.toggle("collapsed");
    content.classList.toggle("full");
}

//Data Dashboard
function chart() {
    const chartDashboard = document.getElementById('myChart');

    const ctx = chartDashboard.getContext('2d');
    const myChart = new Chart(ctx, {
                type: 'bar', // Ubah ke bar chart buat variasi
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul'],
            datasets: [
                {
                    label: 'Pendapatan (Rp)',
                    data: [45000000, 62000000, 58000000, 75000000, 92000000, 110000000, 125500000],
                    backgroundColor: 'rgba(0, 128, 0, 0.7)', // Warna hijau lebih solid
                    borderColor: 'rgba(0, 128, 0, 1)',
                    borderWidth: 1
                },
                {
                    label: 'Pengeluaran (Rp)',
                    data: [25000000, 30000000, 28000000, 40000000, 60000000, 69000000, 75250000],
                    backgroundColor: 'rgba(255, 0, 0, 0.7)', // Warna merah lebih solid
                    borderColor: 'rgba(255, 0, 0, 1)',
                    borderWidth: 1
                },
                {
                    label: 'Laba Bersih (Rp)',
                    data: [20000000, 32000000, 30000000, 35000000, 32000000, 41000000, 50250000],
                    type: 'line', // Gunakan line chart buat laba bersih biar beda
                    borderColor: 'rgba(0, 0, 255, 1)', // Warna biru buat laba
                    backgroundColor: 'rgba(0, 0, 255, 0.2)',
                    borderWidth: 2,
                    fill: false,
                    pointBackgroundColor: 'rgba(0, 0, 255, 1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(0, 0, 255, 1)'
                }
            ]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 150000000
                }
            },
            plugins: {
                legend: {
                    position: 'top', // Pindahin legend ke atas biar lebih rapi
                }
            }
        }
    });
};

// Data keuangan
function finance() {
    const chartLaporan = document.getElementById('financeChart');
    
    const ctx = chartLaporan.getContext('2d');
    const financeChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul'],
            datasets: [
                {
                    label: 'Pendapatan',
                    data: [40000000, 70000000, 65000000, 80000000, 85000000, 95000000, 105000000],
                    backgroundColor: 'green'
                },
                {
                    label: 'Pengeluaran',
                    data: [20000000, 25000000, 27000000, 35000000, 45000000, 55000000, 60000000],
                    backgroundColor: 'red'
                },
                {
                    label: 'Laba Bersih',
                    data: [15000000, 30000000, 32000000, 40000000, 42000000, 47000000, 50000000],
                    backgroundColor: 'blue'
                }
            ]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
};

window.addEventListener("load", function (){
    chart();
});

window.onload = finance;