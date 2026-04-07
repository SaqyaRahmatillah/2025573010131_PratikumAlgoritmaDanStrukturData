// 1. Deklarasi variabel
const beratBadan = 68; // dalam kg
const tinggiBadan = 1.72; // dalam meter

// 2. Hitung BMI
let bmi = beratBadan / (tinggiBadan * tinggiBadan);

// 3. Tampilkan BMI dengan 2 angka desimal
let bmiFixed = bmi.toFixed(2);

// 4. Tentukan kategori BMI
let kategori;

if (bmi < 18.5) {
  kategori = "Kurus (Underweight)";
} else if (bmi >= 18.5 && bmi <= 24.9) {
  kategori = "Normal (Ideal)";
} else if (bmi >= 25.0 && bmi <= 29.9) {
  kategori = "Kelebihan Berat Badan (Overweight)";
} else {
  kategori = "Obesitas (Obese)";
}

// 5. Tampilkan hasil akhir
console.log(
  `Berat: ${beratBadan} kg | Tinggi: ${tinggiBadan} m | BMI: ${bmiFixed} | Kategori: ${kategori}`,
);