// 04-kondisional.js
// ================================================
// KONDISIONAL: if/else, switch, ternary
// ================================================

// --- IF / ELSE IF / ELSE: Konversi nilai ke grade ---
let nilaiUjian = 78;

console.log("=== Konversi Grade ===");
console.log("Nilai:", nilaiUjian);

if (nilaiUjian >= 90) {
  console.log("Grade: A (Sangat Baik)");
} else if (nilaiUjian >= 80) {
  console.log("Grade: B (Baik)");
} else if (nilaiUjian >= 70) {
  console.log("Grade: C (Cukup)");
} else if (nilaiUjian >= 60) {
  console.log("Grade: D (Kurang)");
} else {
  console.log("Grade: E (Tidak Lulus)");
}

// --- SWITCH: Cek nama hari ---
let namaHari = "Rabu";

console.log("\n=== Cek Jenis Hari ===");
switch (namaHari) {
  case "Senin":
  case "Selasa":
  case "Rabu":
  case "Kamis":
  case "Jumat":
    console.log(`${namaHari} adalah hari kerja.`);
    break;
  case "Sabtu":
  case "Minggu":
    console.log(`${namaHari} adalah akhir pekan.`);
    break;
  default:
    console.log("Nama hari tidak dikenali.");
}

// --- TERNARY OPERATOR: Cek kelulusan ---
let nilaiAkhir = 65;
let statusLulus = nilaiAkhir >= 60 ? "LULUS" : "TIDAK LULUS";

console.log("\n=== Status Kelulusan ===");
console.log(`Nilai ${nilaiAkhir}: ${statusLulus}`);

// Deklarasi variabel
const panjang = 12;
const lebar = 8;

// Perhitungan
const luas = panjang * lebar;
const keliling = 2 * (panjang + lebar);

// Output menggunakan template literal
console.log(`Luas persegi panjang: ${luas}`);
console.log(`Keliling persegi panjang: ${keliling}`);

// Pengecekan apakah luas > 100
const lebihDari100 = luas > 100;
console.log(`Apakah luas lebih besar dari 100? ${lebihDari100}`);
