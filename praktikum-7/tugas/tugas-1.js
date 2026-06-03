// Class Pasien
class Pasien {
  constructor(id, nama, prioritas, waktuDaftar) {
    this.id = id;
    this.nama = nama;
    this.prioritas = prioritas; // darurat / biasa
    this.waktuDaftar = waktuDaftar;
  }
}

// Class AntrianRS
class AntrianRS {
  constructor() {
    this.antrianDarurat = [];
    this.antrianBiasa = [];
  }

  daftar(pasien) {
    if (pasien.prioritas === "darurat") {
      this.antrianDarurat.push(pasien);
    } else {
      this.antrianBiasa.push(pasien);
    }

    console.log(`${pasien.nama} masuk antrian ${pasien.prioritas}`);
  }

  layani() {
    let pasien;

    if (this.antrianDarurat.length > 0) {
      pasien = this.antrianDarurat.shift();
    } else if (this.antrianBiasa.length > 0) {
      pasien = this.antrianBiasa.shift();
    } else {
      console.log("Tidak ada pasien dalam antrian.");
      return;
    }

    console.log(
      `Melayani: ${pasien.nama} | ID: ${pasien.id} | Prioritas: ${pasien.prioritas}`,
    );
  }

  tampilkanAntrian() {
    console.log("\n=== ANTRIAN DARURAT ===");
    if (this.antrianDarurat.length === 0) {
      console.log("Kosong");
    } else {
      this.antrianDarurat.forEach((p) => console.log(`${p.id} - ${p.nama}`));
    }

    console.log("\n=== ANTRIAN BIASA ===");
    if (this.antrianBiasa.length === 0) {
      console.log("Kosong");
    } else {
      this.antrianBiasa.forEach((p) => console.log(`${p.id} - ${p.nama}`));
    }
  }
}

// Simulasi 10 pasien
const rs = new AntrianRS();

const namaPasien = [
  "Andi",
  "Budi",
  "Citra",
  "Dina",
  "Eko",
  "Farah",
  "Gilang",
  "Hani",
  "Indra",
  "Joko",
];

for (let i = 0; i < 10; i++) {
  let prioritas = Math.random() > 0.5 ? "darurat" : "biasa";

  let pasien = new Pasien(i + 1, namaPasien[i], prioritas, new Date());

  rs.daftar(pasien);
}

console.log("\nSTATUS AWAL ANTRIAN");
rs.tampilkanAntrian();

console.log("\nPROSES PELAYANAN");
while (rs.antrianDarurat.length > 0 || rs.antrianBiasa.length > 0) {
  rs.layani();
}

console.log("\nSEMUA PASIEN SUDAH DILAYANI");
