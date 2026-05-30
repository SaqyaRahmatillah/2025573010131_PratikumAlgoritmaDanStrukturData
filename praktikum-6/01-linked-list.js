// 01-linked-list.js
// ============================================
// SINGLY LINKED LIST — Implementasi Lengkap
// ============================================
// ── Class Node: unit terkecil linked list ──
class Node {
  constructor(data) {
    this.data = data; // nilai yang disimpan
    this.next = null; // pointer ke node berikutnya
  }
}
// ── Class LinkedList ────────────────────────
class LinkedList {
  constructor() {
    this.head = null; // pointer ke node pertama
    this.size = 0; // jumlah node
  }
  // Tambah node di AKHIR — O(n)
  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) current = current.next; // traverse ke akhir
      current.next = newNode;
    }
    this.size++;
  }
  // Tambah node di AWAL — O(1)
  prepend(data) {
    const newNode = new Node(data);
    newNode.next = this.head; // node baru menunjuk ke head lama
    this.head = newNode; // head sekarang adalah node baru
    this.size++;
  }
  // Insert di posisi indeks tertentu — O(n)
  insertAt(data, index) {
    if (index < 0 || index > this.size) {
      console.log(" Index di luar batas!");
      return;
    }
    if (index === 0) {
      this.prepend(data);
      return;
    }
    const newNode = new Node(data);
    let current = this.head;
    for (let i = 0; i < index - 1; i++) current = current.next;
    newNode.next = current.next;
    current.next = newNode;
    this.size++;
  }
  // Hapus node berdasarkan nilai — O(n)
  delete(data) {
    if (!this.head) return false;
    if (this.head.data === data) {
      this.head = this.head.next;
      this.size--;
      return true;
    }
    let current = this.head;
    while (current.next) {
      if (current.next.data === data) {
        current.next = current.next.next; // lewati node yang dihapus
        this.size--;
        return true;
      }
      current = current.next;
    }
    return false;
  }
  // Cari node berdasarkan nilai — O(n)
  search(data) {
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.data === data) return index;
      current = current.next;
      index++;
    }
    return -1;
  }
  // Tampilkan semua node — O(n)
  print() {
    if (!this.head) {
      console.log(" [List kosong]");
      return;
    }
    let result = "";
    let current = this.head;
    while (current) {
      result += current.next ? `[${current.data}] → ` : `[${current.data}]`;
      current = current.next;
    }
    console.log(" ", result, ` (size: ${this.size})`);
  }
  // Balik urutan list — O(n)
  reverse() {
    let prev = null;
    let current = this.head;
    while (current) {
      const next = current.next; // simpan next sementara
      current.next = prev; // balik pointer
      prev = current; // geser prev maju
      current = next; // geser current maju
    }
    this.head = prev; // head sekarang adalah node terakhir
  }
  // Konversi ke Array (untuk inspeksi) — O(n)
  toArray() {
    const arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.data);
      current = current.next;
    }
    return arr;
  }

  append(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = newNode;
    }

    this.length++;
  }

  prepend(data) {
    const newNode = new Node(data);

    newNode.next = this.head;
    this.head = newNode;

    this.length++;
  }

  // cari data
  search(data) {
    let current = this.head;

    while (current) {
      if (current.data === data) {
        return true;
      }

      current = current.next;
    }

    return false;
  }

  // tampilkan isi list
  print() {
    let current = this.head;
    let result = "";

    while (current) {
      result += current.data + " -> ";
      current = current.next;
    }

    result += "null";
    console.log(result);
  }

  // =========================
  // METHOD TAMBAHAN LATIHAN
  // =========================

  // ambil data berdasarkan index
  getAt(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    let current = this.head;
    let count = 0;

    while (count < index) {
      current = current.next;
      count++;
    }

    return current.data;
  }

  // hapus node berdasarkan index
  deleteAt(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    let deletedNode;

    // hapus head
    if (index === 0) {
      deletedNode = this.head;
      this.head = this.head.next;
    } else {
      let current = this.head;
      let previous = null;
      let count = 0;

      while (count < index) {
        previous = current;
        current = current.next;
        count++;
      }

      deletedNode = current;
      previous.next = current.next;
    }

    this.length--;
    return deletedNode.data;
  }

  // cari index dari data
  indexOf(data) {
    let current = this.head;
    let index = 0;

    while (current) {
      if (current.data === data) {
        return index;
      }

      current = current.next;
      index++;
    }

    return -1;
  }

  // cek apakah kosong
  isEmpty() {
    return this.length === 0;
  }

  // hapus semua node
  clear() {
    this.head = null;
    this.length = 0;
  }
}

// =========================
// TESTING
// =========================

const list = new LinkedList();

console.log("Apakah kosong?", list.isEmpty());

list.append(10);
list.append(20);
list.append(30);
list.prepend(5);

list.print();

console.log("Data index 2:", list.getAt(2));

console.log("Index data 20:", list.indexOf(20));

console.log("Hapus index 1:", list.deleteAt(1));

list.print();

console.log("Apakah ada data 30?", list.search(30));

console.log("Apakah kosong?", list.isEmpty());

list.clear();

console.log("Setelah clear:");
list.print();

console.log("Apakah kosong?", list.isEmpty());

// ── Demonstrasi ────────────────────────────────
const ll = new LinkedList();
console.log("=== Append ===");
ll.append(10);
ll.append(20);
ll.append(30);
ll.append(40);
ll.print();
console.log("\n=== Prepend ===");
ll.prepend(5);
ll.print();
console.log("\n=== Insert di indeks 2 ===");
ll.insertAt(15, 2);
ll.print();
console.log("\n=== Search ===");
console.log(" Indeks nilai 20:", ll.search(20));
console.log(" Indeks nilai 99:", ll.search(99));
console.log("\n=== Delete 20 ===");
ll.delete(20);
ll.print();
console.log("\n=== Reverse ===");
ll.reverse();
ll.print();
