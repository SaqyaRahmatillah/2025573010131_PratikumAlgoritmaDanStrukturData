// TUGAS 1: Analisis dan Refactor

// Fungsi A: Intersection (irisan array)
// Versi O(n^2)
// Time: O(n^2)
// Space: O(1)
function intersectionLambat(arr1, arr2) {
  const result = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j] && !result.includes(arr1[i])) {
        result.push(arr1[i]);
      }
    }
  }
  return result;
}

// Versi O(n) menggunakan Set
// Time: O(n)
// Space: O(n)
function intersectionCepat(arr1, arr2) {
  const set = new Set(arr2);
  const result = [];

  for (let item of arr1) {
    if (set.has(item) && !result.includes(item)) {
      result.push(item);
    }
  }
  return result;
}

// Fungsi B: Kelompok Anagram
// Time: O(n * k log k)
// Space: O(n)

function kelompokAnagram(arr) {
  const map = {};

  for (let kata of arr) {
    const key = kata.split("").sort().join("");

    if (!map[key]) {
      map[key] = [];
    }

    map[key].push(kata);
  }
  return Object.values(map);
}

// Fungsi C: Two Sum (jumlah target)
// Versi O(n^2)
// Time: O(n^2)
// Space: O(1)
function twoSumLambat(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return true;
      }
    }
  }
  return false;
}

// Versi O(n log n) (sort + two pointer)
// Time: O(n log n)
// Space: O(1)
function twoSumCepat(arr, target) {
  arr.sort((a, b) => a - b);

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];

    if (sum === target) return true;
    if (sum < target) left++;
    else right--;
  }
  return false;
}

// Pengujian
console.log("Intersection Lambat:", intersectionLambat([1, 2, 3], [2, 3, 4]));
console.log("Intersection Cepat:", intersectionCepat([1, 2, 3], [2, 3, 4]));

console.log(
  "Anagram:",
  kelompokAnagram(["eat", "tea", "tan", "ate", "nat", "bat"]),
);

console.log("Two Sum Lambat:", twoSumLambat([2, 7, 11, 15], 9));
console.log("Two Sum Cepat:", twoSumCepat([2, 7, 11, 15], 9));
