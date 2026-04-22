class Kendaraan {
  constructor(merk, model, tahun) {
    this.merk = merk;
    this.model = model;
    this.tahun = tahun;
    this.kecepatanSaatIni = 0;
  }
  akselerasi(tambahan) {
    this.kecepatanSaatIni += tambahan;
    console.log(
      `${this.merk} ${this.model}: kecepatan ${this.kecepatanSaatIni} km/h`,
    );
  }
  rem() {
    this.kecepatanSaatIni = 0;
    console.log(`${this.merk} ${this.model}: berhenti.`);
  }
  info() {
    return `${this.tahun} ${this.merk} ${this.model}`;
  }
}
class Mobil extends Kendaraan {
  constructor(merk, model, tahun, jumlahPintu) {
    super(merk, model, tahun);
    this.jumlahPintu = jumlahPintu;
  }
  bunyikanKlakson() {
    console.log(`${this.merk}: Beep beep!`);
  }
  info() {
    const infoParent = super.info();
    return `${infoParent} (${this.jumlahPintu} pintu)`;
  }
}
class Motor extends Kendaraan {
  constructor(merk, model, tahun, jenisMotor) {
    super(merk, model, tahun);
    this.jenisMotor = jenisMotor;
  }
  wheelie() {
    if (this.kecepatanSaatIni > 50) {
      console.log(`${this.merk}: Wheelie!`);
    } else {
      console.log("Kecepatan terlalu rendah untuk wheelie.");
    }
  }
  info() {
    return `${super.info()} [${this.jenisMotor}]`;
  }
}
const mobil = new Mobil("Toyota", "Avanza", 2022, 4);
const motor = new Motor("Honda", "CBR600RR", 2021, "Sport");
console.log("=== Info Kendaraan ===");
console.log(mobil.info());
console.log(motor.info());
console.log("\n=== Aksi ===");
mobil.akselerasi(60); // method dari parent
mobil.bunyikanKlakson();
motor.akselerasi(80);
motor.wheelie();
motor.rem();
console.log("\n=== instanceof ===");
console.log("mobil instanceof Mobil :", mobil instanceof Mobil);
console.log("mobil instanceof Kendaraan :", mobil instanceof Kendaraan);
console.log("motor instanceof Mobil :", motor instanceof Mobil);
console.log("\n=== Polymorphism ===");
const semuaKendaraan = [mobil, motor];
semuaKendaraan.forEach((k) => console.log(k.info()));

console.log("\n \n latihan");
//Latihan 4: Hierarki Class Hewan
// 2. Parent class Hewan
class Hewan {
  constructor(nama, suara) {
    this.nama = nama;
    this.suara = suara;
  }
  bersuara() {
    console.log(`${this.nama} berkata: ${this.suara}`);
  }
  info() {
    console.log(`Nama: ${this.nama}`);
  }
}

// 3. Child class Anjing
class Anjing extends Hewan {
  constructor(nama, suara) {
    super(nama, suara);
  }
  fetch() {
    console.log(`${this.nama} mengambil bola!`);
  }
  // override method info()
  info() {
    console.log(`Nama: ${this.nama} | Jenis: Anjing`);
  }
}

// 4. Child class Kucing
class Kucing extends Hewan {
  constructor(nama, suara) {
    super(nama, suara);
  }
  cakarSofa() {
    console.log(`${this.nama} mencakar sofa!`);
  }
  // override method bersuara()
  bersuara() {
    super.bersuara();
    console.log("Purrr...");
  }
}

// 5. Membuat instance
const anjing1 = new Anjing("Buddy", "Guk guk");
const anjing2 = new Anjing("Max", "Woof");
const kucing1 = new Kucing("Milo", "Meong");
const kucing2 = new Kucing("Luna", "Miaw");

// 6. Masukkan ke array dan gunakan forEach (polymorphism)
const daftarHewan = [anjing1, anjing2, kucing1, kucing2];
daftarHewan.forEach((hewan) => {
  hewan.bersuara(); // polymorphism (method beda perilaku)
  hewan.info();
  console.log("------------------");
});
// Contoh tambahan pemanggilan method khusus
anjing1.fetch();
kucing1.cakarSofa();
