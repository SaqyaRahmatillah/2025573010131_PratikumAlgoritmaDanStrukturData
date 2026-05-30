class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null; // akses O(1) ke node terakhir
    this.length = 0;
  }

  // =========================
  // append(data)
  // Tambah node di akhir
  // Big O: O(1)
  // =========================
  append(data) {
    const newNode = new Node(data);

    // jika list kosong
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  // =========================
  // prepend(data)
  // Tambah node di awal
  // Big O: O(1)
  // =========================
  prepend(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }

    this.length++;
  }

  // =========================
  // insertAt(index, data)
  // Sisip node pada index tertentu
  // Big O: O(n)
  // =========================
  insertAt(index, data) {
    if (index < 0 || index > this.length) {
      return "Index tidak valid";
    }

    if (index === 0) {
      this.prepend(data);
      return;
    }

    if (index === this.length) {
      this.append(data);
      return;
    }

    const newNode = new Node(data);

    let current = this.head;
    let count = 0;

    while (count < index) {
      current = current.next;
      count++;
    }

    const previous = current.prev;

    previous.next = newNode;
    newNode.prev = previous;

    newNode.next = current;
    current.prev = newNode;

    this.length++;
  }

  // =========================
  // delete(index)
  // Hapus node berdasarkan index
  // Big O: O(n)
  // =========================
  delete(index) {
    if (index < 0 || index >= this.length) {
      return "Index tidak valid";
    }

    // hapus head
    if (index === 0) {
      const deleted = this.head;

      if (this.length === 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
        this.head.prev = null;
      }

      this.length--;
      return deleted.data;
    }

    // hapus tail
    if (index === this.length - 1) {
      const deleted = this.tail;

      this.tail = this.tail.prev;
      this.tail.next = null;

      this.length--;

      return deleted.data;
    }

    let current = this.head;
    let count = 0;

    while (count < index) {
      current = current.next;
      count++;
    }

    current.prev.next = current.next;
    current.next.prev = current.prev;

    this.length--;

    return current.data;
  }

  // =========================
  // reverse()
  // Membalik linked list
  // Big O: O(n)
  // =========================
  reverse() {
    let current = this.head;
    let temp = null;

    while (current) {
      temp = current.prev;
      current.prev = current.next;
      current.next = temp;

      current = current.prev;
    }

    temp = this.head;
    this.head = this.tail;
    this.tail = temp;
  }

  // =========================
  // print()
  // Tampilkan dari depan
  // Big O: O(n)
  // =========================
  print() {
    let current = this.head;
    let result = "";

    while (current) {
      result += current.data + " <-> ";
      current = current.next;
    }

    result += "null";

    console.log("Forward :", result);
  }

  // =========================
  // printReverse()
  // Tampilkan dari belakang
  // Big O: O(n)
  // =========================
  printReverse() {
    let current = this.tail;
    let result = "";

    while (current) {
      result += current.data + " <-> ";
      current = current.prev;
    }

    result += "null";

    console.log("Backward:", result);
  }
}

// =========================
// TESTING
// =========================

const dll = new DoublyLinkedList();

dll.append(10);
dll.append(20);
dll.append(30);

dll.prepend(5);

dll.insertAt(2, 15);

console.log("Data awal:");
dll.print();
dll.printReverse();

console.log("\nHapus index 3:");
console.log("Data terhapus:", dll.delete(3));

dll.print();

console.log("\nReverse Linked List:");
dll.reverse();

dll.print();
dll.printReverse();

console.log("\nHead:", dll.head.data);
console.log("Tail:", dll.tail.data);
