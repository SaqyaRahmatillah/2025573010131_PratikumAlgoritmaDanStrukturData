// TUGAS 2 - Soal Klasik Hash Table
// Nama File: tugas-2.js

// =====================================================
// SOAL 1
// subArrayJumlahK(arr, k)
// Menghitung jumlah subarray yang total elemennya = k
// Menggunakan Prefix Sum + HashMap
// =====================================================

function subArrayJumlahK(arr, k) {
  const map = new Map();

  map.set(0, 1);

  let prefixSum = 0;
  let count = 0;

  for (let num of arr) {
    prefixSum += num;

    if (map.has(prefixSum - k)) {
      count += map.get(prefixSum - k);
    }

    map.set(prefixSum, (map.get(prefixSum) || 0) + 1);
  }

  return count;
}

// =====================================================
// SOAL 2
// karakterPertamaUnik(s)
// Mengembalikan indeks karakter pertama yang tidak berulang
// Menggunakan HashMap (Map)
// =====================================================

function karakterPertamaUnik(s) {
  const freq = new Map();

  for (let char of s) {
    freq.set(char, (freq.get(char) || 0) + 1);
  }

  for (let i = 0; i < s.length; i++) {
    if (freq.get(s[i]) === 1) {
      return i;
    }
  }

  return -1;
}

// =====================================================
// SOAL 3
// topKFrequent(arr, k)
// Mengembalikan k elemen yang paling sering muncul
// =====================================================

function topKFrequent(arr, k) {
  const freq = new Map();

  for (let num of arr) {
    freq.set(num, (freq.get(num) || 0) + 1);
  }

  return [...freq.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map((item) => item[0]);
}

// =====================================================
// PENGUJIAN PROGRAM
// =====================================================

console.log("===== SOAL 1 =====");
console.log("Array : [1,1,1]");
console.log("k     : 2");
console.log("Hasil :", subArrayJumlahK([1, 1, 1], 2));

console.log("\n===== SOAL 2 =====");
console.log("String : leetcode");
console.log("Hasil  :", karakterPertamaUnik("leetcode"));

console.log("\n===== SOAL 3 =====");
console.log("Array : [1,1,1,2,2,3]");
console.log("k     : 2");
console.log("Hasil :", topKFrequent([1, 1, 1, 2, 2, 3], 2));

// =====================================================
// ANALISIS BIG O
// =====================================================

console.log("\n===== ANALISIS BIG O =====");
console.log("1. subArrayJumlahK     : O(n)");
console.log("2. karakterPertamaUnik : O(n)");
console.log("3. topKFrequent        : O(n + m log m)");
