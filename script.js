function playMusic() {
    var audio = document.getElementById("myAudio");

    // Coba play musik dengan promise untuk menghindari error browser
    audio.play().then(() => {
        console.log("Musik diputar");
    }).catch(error => {
        console.log("Autoplay diblokir, user harus berinteraksi", error);
    });

    // Efek confetti dengan interval agar lebih meriah
    let duration = 3 * 1000; // 3 detik
    let animationEnd = Date.now() + duration;

    let confettiInterval = setInterval(function () {
        if (Date.now() > animationEnd) {
            return clearInterval(confettiInterval);
        }

        confetti({
            particleCount: 10,
            spread: 120,
            origin: { y: 0.6 }
        });
    }, 200); // Efek confetti setiap 200ms selama 3 detik
}

function pauseMusic() {
    var audio = document.getElementById("myAudio");
    audio.pause();
}

function goBack() {
    document.getElementById('loginScreen').classList.add('hidden'); 
    document.getElementById('welcomeScreen').classList.remove('hidden');
}

function showLogin() {
    document.getElementById('welcomeScreen').classList.add('hidden');
    document.getElementById('loginScreen').classList.remove('hidden');
}

function checkLogin() {
    var user = document.getElementById('username').value;
    var pass = document.getElementById('password').value;
    
    if (user === "ajilimantoro" && pass === "24022025") {
        window.location.href = "letter.html"; // Redirect ke halaman letter
    } else {
        document.getElementById('error').innerText = "Username atau Password salah!";
    }
}

function openLogin() {
    document.getElementById("loginModal").style.display = "flex";
}

function closeLogin() {
    document.getElementById("loginModal").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
    let usernameInput = document.getElementById("username");
    let passwordInput = document.getElementById("password");
    let loginButton = document.getElementById("loginButton");

    // Ketika tekan Enter di username -> pindah ke password
    usernameInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault(); // Cegah submit form otomatis
            passwordInput.focus(); // Pindah ke input password
        }
    });

    // Ketika tekan Enter di password -> klik tombol login
    passwordInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault(); // Cegah submit form otomatis
            loginButton.click(); // Simulasi klik tombol login
        }
    });


    // Fungsi login
    function handleLogin() {
        alert("Login berhasil!"); // Ganti dengan logika login yang sebenarnya
        closeLogin(); // Tutup modal login (jika ada)
    }
});

/*letter*/
function typeLetter() {
    if (index < text.length) {
        document.getElementById("letter-text").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeLetter, 10);
    } else {
        document.getElementById("nextButton").style.display = "block"; // Tampilkan tombol setelah selesai
    }
}

function goToCoupon() {
    window.location.href = "coupon.html"; // Redirect ke halaman kupon
}

window.onload = function() {
    setTimeout(typeLetter, 500); // Mulai efek mengetik setelah halaman dimuat
};
