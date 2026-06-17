// Hash Table Open Addressing (Linear Probing)

const TOMBSTONE = Symbol("DELETED");

class HashMapLinearProbing {
  constructor(capacity = 8) {
    this.capacity = capacity;
    this.size = 0;
    this.table = new Array(capacity).fill(null);
  }

  hash(key) {
    let hash = 0;
    const str = String(key);

    for (let i = 0; i < str.length; i++) {
      hash = (hash * 31 + str.charCodeAt(i)) % this.capacity;
    }

    return hash;
  }

  loadFactor() {
    return this.size / this.capacity;
  }

  resize() {
    const oldTable = this.table;

    this.capacity *= 2;
    this.table = new Array(this.capacity).fill(null);
    this.size = 0;

    for (const item of oldTable) {
      if (item !== null && item !== TOMBSTONE) {
        this.set(item.key, item.value);
      }
    }
  }

  set(key, value) {
    if (this.loadFactor() > 0.7) {
      this.resize();
    }

    let index = this.hash(key);

    while (
      this.table[index] !== null &&
      this.table[index] !== TOMBSTONE &&
      this.table[index].key !== key
    ) {
      index = (index + 1) % this.capacity;
    }

    if (this.table[index] === null || this.table[index] === TOMBSTONE) {
      this.size++;
    }

    this.table[index] = { key, value };
  }

  get(key) {
    let index = this.hash(key);
    let start = index;

    while (this.table[index] !== null) {
      if (this.table[index] !== TOMBSTONE && this.table[index].key === key) {
        return this.table[index].value;
      }

      index = (index + 1) % this.capacity;

      if (index === start) break;
    }

    return undefined;
  }

  delete(key) {
    let index = this.hash(key);
    let start = index;

    while (this.table[index] !== null) {
      if (this.table[index] !== TOMBSTONE && this.table[index].key === key) {
        this.table[index] = TOMBSTONE;
        this.size--;
        return true;
      }

      index = (index + 1) % this.capacity;

      if (index === start) break;
    }

    return false;
  }

  print() {
    console.log("Hash Table:");
    this.table.forEach((item, i) => {
      if (item === null) console.log(i, "=> EMPTY");
      else if (item === TOMBSTONE) console.log(i, "=> DELETED");
      else console.log(i, "=>", item);
    });
  }
}

// Contoh Penggunaan
const map = new HashMapLinearProbing();

map.set("A", 10);
map.set("B", 20);
map.set("C", 30);
map.set("D", 40);
map.set("E", 50);

console.log("B =", map.get("B"));

map.delete("B");

console.log("Setelah delete:");
console.log("B =", map.get("B"));

map.print();
