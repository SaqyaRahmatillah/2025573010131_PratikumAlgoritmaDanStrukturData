const mahasiswa = {
  nama: "Budi Santoso",
  umur: 20,
  jurusan: "Teknik Informatika",
  ipk: 3.75,
  aktif: true,
};
console.log("=== Akses Property ===");
console.log("Nama :", mahasiswa.nama);
console.log("Jurusan :", mahasiswa["jurusan"]);
const keyYangDicari = "ipk";
console.log("IPK :", mahasiswa[keyYangDicari]);
mahasiswa.email = "budi@email.com";
mahasiswa.umur = 21;
console.log("\nSetelah diubah:", mahasiswa);
delete mahasiswa.aktif;
console.log("Setelah delete:", mahasiswa);
const dosen = {
  nama: "Dr. Ahmad Fauzi",
  mataKuliah: "Struktur Data",
  pengalaman: 10,
  perkenalan() {
    return `Halo, saya ${this.nama}, mengajar ${this.mataKuliah}.`;
  },
  statusSenior() {
    if (this.pengalaman >= 10) {
      return `${this.nama} adalah dosen senior.`;
    }
    return `${this.nama} adalah dosen junior.`;
  },
};
console.log("\n=== Method Object ===");
console.log(dosen.perkenalan());
console.log(dosen.statusSenior());
console.log("\n=== Iterasi Object ===");
for (const key in dosen) {
  if (typeof dosen[key] !== "function") {
    console.log(` ${key}: ${dosen[key]}`);
  }
}
console.log("Keys :", Object.keys(mahasiswa));
console.log("Values:", Object.values(mahasiswa));

console.log("\n \n latihan");
//Latihan 1: Object Buku dan Perpustakaan
// 2. Membuat object buku
const buku = {
  judul: "Belajar JavaScript Dasar",
  pengarang: "Andi Wijaya",
  tahunTerbit: 2023,
  harga: 100000,
  tersedia: true,

  // 3. Method info()
  info: function () {
    return `Judul: ${this.judul}, Pengarang: ${this.pengarang}, Tahun: ${this.tahunTerbit}, Harga: Rp${this.harga}, Tersedia: ${this.tersedia}`;
  },

  // 4. Method diskon(persen)
  diskon: function (persen) {
    return this.harga * (1 - persen / 100);
  },
};

// Contoh penggunaan object buku
console.log(buku.info());
console.log("Harga setelah diskon 10%: Rp" + buku.diskon(10));

// 5. Membuat array koleksiBuku (minimal 3 buku)
const koleksiBuku = [
  {
    judul: "HTML & CSS untuk Pemula",
    pengarang: "Budi Santoso",
    tahunTerbit: 2022,
    harga: 80000,
    tersedia: true,
    info: function () {
      return `Judul: ${this.judul}, Pengarang: ${this.pengarang}, Tahun: ${this.tahunTerbit}, Harga: Rp${this.harga}, Tersedia: ${this.tersedia}`;
    },
  },
  {
    judul: "Python Dasar",
    pengarang: "Siti Aminah",
    tahunTerbit: 2021,
    harga: 90000,
    tersedia: false,
    info: function () {
      return `Judul: ${this.judul}, Pengarang: ${this.pengarang}, Tahun: ${this.tahunTerbit}, Harga: Rp${this.harga}, Tersedia: ${this.tersedia}`;
    },
  },
  {
    judul: "Algoritma & Struktur Data",
    pengarang: "Rizky Pratama",
    tahunTerbit: 2024,
    harga: 120000,
    tersedia: true,
    info: function () {
      return `Judul: ${this.judul}, Pengarang: ${this.pengarang}, Tahun: ${this.tahunTerbit}, Harga: Rp${this.harga}, Tersedia: ${this.tersedia}`;
    },
  },
];

// 6. Menampilkan semua buku dengan forEach
console.log("\n=== Semua Buku ===");
koleksiBuku.forEach(function (buku) {
  console.log(buku.info());
});

// 7. Filter buku yang tersedia === true
const bukuTersedia = koleksiBuku.filter(function (buku) {
  return buku.tersedia === true;
});

console.log("\n=== Buku yang Tersedia ===");
bukuTersedia.forEach(function (buku) {
  console.log(buku.info());
});
