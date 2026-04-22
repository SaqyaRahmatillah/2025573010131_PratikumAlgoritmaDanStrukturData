// TUGAS 2: Visualisasi Big O

// O(1)
function fn_O1(n) {
  return n + 1;
}

// O(n)
function fn_On(n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += i;
  }
  return sum;
}

// O(n log n)
function fn_Onlogn(n) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 1; j < n; j *= 2) {
      count++;
    }
  }
  return count;
}

// O(n^2)
function fn_On2(n) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      count++;
    }
  }
  return count;
}

// Fungsi benchmark
function benchmarkSemua(ukuranData) {
  for (let n of ukuranData) {
    console.log("\nUkuran:", n);

    ukur(fn_O1, n);
    ukur(fn_On, n);
    ukur(fn_Onlogn, n);
    ukur(fn_On2, n);
  }
}

// Helper ukur waktu
function ukur(fn, n) {
  const start = Date.now();
  fn(n);
  const end = Date.now();
  console.log(fn.name + " => " + (end - start) + " ms");
}

// Jalankan benchmark
benchmarkSemua([100, 500, 1000, 5000, 10000]);

// Observasi (untuk laporan):
// - O(1) hampir tidak berubah
// - O(n) naik linear
// - O(n log n) naik lebih cepat dari O(n)
// - O(n^2) sangat cepat membesar (paling lambat)
// - Hasil sesuai teori Big O
