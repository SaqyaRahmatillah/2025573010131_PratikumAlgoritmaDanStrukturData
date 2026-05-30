class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  // tambah di awal
  prepend(data) {
    const newNode = new Node(data);

    newNode.next = this.head;
    this.head = newNode;

    this.length++;
  }

  // hapus di awal
  removeHead() {
    if (!this.head) {
      return null;
    }

    const removed = this.head;

    this.head = this.head.next;
    this.length--;

    return removed.data;
  }

  // lihat data paling atas
  peekHead() {
    return this.head ? this.head.data : null;
  }

  isEmpty() {
    return this.length === 0;
  }

  size() {
    return this.length;
  }

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
}

// =========================
// CLASS STACK
// =========================

class Stack {
  constructor() {
    this.list = new LinkedList();
  }

  push(data) {
    this.list.prepend(data);
  }

  pop() {
    return this.list.removeHead();
  }

  peek() {
    return this.list.peekHead();
  }

  isEmpty() {
    return this.list.isEmpty();
  }

  size() {
    return this.list.size();
  }

  print() {
    this.list.print();
  }
}

// =========================
// TESTING STACK
// =========================

const stack = new Stack();

console.log("Apakah stack kosong?", stack.isEmpty());

stack.push("Login");
stack.push("Edit Profil");
stack.push("Upload Foto");
stack.push("Logout");

console.log("\nIsi Stack:");
stack.print();

console.log("\nPeek:", stack.peek());

console.log("\nPop:", stack.pop());

console.log("\nIsi Stack setelah pop:");
stack.print();

console.log("\nSize:", stack.size());

// =========================
// SIMULASI UNDO / REDO
// =========================

console.log("\n=== Simulasi Undo ===");

const actions = ["Mengetik A", "Mengetik B", "Mengetik C", "Hapus Huruf"];

const undoStack = new Stack();

// simpan aksi
for (let action of actions) {
  console.log("Push:", action);
  undoStack.push(action);
}

console.log("\nStack saat ini:");
undoStack.print();

// undo beberapa kali
console.log("\nUndo:");
console.log("Undo aksi:", undoStack.pop());
console.log("Undo aksi:", undoStack.pop());

console.log("\nStack setelah undo:");
undoStack.print();
