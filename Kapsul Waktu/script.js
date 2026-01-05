function checkPuzzle() {
    const userYear = document.getElementById('pass').value;
    const userReason = document.getElementById('reason').value;
    const resultDiv = document.getElementById('result');

    // --- GANTI JAWABAN DI SINI ---
    const targetYear = "1995"; 
    // ----------------------------

    if (userYear === targetYear) {
        resultDiv.style.display = "block";
        resultDiv.className = "success";
        resultDiv.innerHTML = `
            <h3>✅ BERHASIL!</h3>
            <p>Jawaban <strong>${targetYear}</strong> benar.</p>
            <p style="font-style: italic; background: rgba(0,0,0,0.2); padding: 10px;">
                "${userReason}"
            </p>
            <small>Silakan screenshot bukti ini.</small>
        `;
    } else {
        resultDiv.style.display = "block";
        resultDiv.className = "error";
        resultDiv.innerHTML = "<h3>❌ SALAH</h3><p>Coba cek lagi tahun kejadiannya.</p>";
    }
}