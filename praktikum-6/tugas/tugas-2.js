class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// =========================
// Membuat Linked List dari Array
// =========================
function createLinkedList(arr) {
  if (arr.length === 0) return null;

  let head = new Node(arr[0]);
  let current = head;

  for (let i = 1; i < arr.length; i++) {
    current.next = new Node(arr[i]);
    current = current.next;
  }

  return head;
}

// =========================
// Print Linked List
// =========================
function printList(head) {
  let current = head;
  let result = "";

  while (current) {
    result += current.data + " -> ";
    current = current.next;
  }

  result += "null";

  console.log(result);
}

// ==================================================
// 1. palindromeLL(head)
// Cek apakah linked list palindrome
// Big O: O(n)
// ==================================================
function palindromeLL(head) {
  let arr = [];
  let current = head;

  while (current) {
    arr.push(current.data);
    current = current.next;
  }

  let reversed = [...arr].reverse();

  return JSON.stringify(arr) === JSON.stringify(reversed);
}

// ==================================================
// 2. hapusNariAkhir(head, n)
// Hapus node ke-n dari belakang
// Big O: O(n)
// ==================================================
function hapusNDariAkhir(head, n) {
  let dummy = new Node(0);
  dummy.next = head;

  let fast = dummy;
  let slow = dummy;

  // maju fast n+1 langkah
  for (let i = 0; i <= n; i++) {
    fast = fast.next;
  }

  while (fast) {
    fast = fast.next;
    slow = slow.next;
  }

  slow.next = slow.next.next;

  return dummy.next;
}

// ==================================================
// 3. tengahLinkedList(head)
// Ambil node tengah
// Jika genap -> node tengah kedua
// Big O: O(n)
// ==================================================
function tengahLinkedList(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}

// =========================
// TEST palindromeLL
// =========================
console.log("=== TEST palindromeLL ===");

let list1 = createLinkedList([1, 2, 3, 2, 1]);
printList(list1);
console.log("Palindrome?", palindromeLL(list1));

let list2 = createLinkedList([1, 2, 2, 1]);
printList(list2);
console.log("Palindrome?", palindromeLL(list2));

let list3 = createLinkedList([1, 2, 3]);
printList(list3);
console.log("Palindrome?", palindromeLL(list3));

// =========================
// TEST hapusNDariAkhir
// =========================
console.log("\n=== TEST hapusNDariAkhir ===");

let list4 = createLinkedList([1, 2, 3, 4, 5]);
printList(list4);

list4 = hapusNDariAkhir(list4, 2);

console.log("Setelah hapus node ke-2 dari akhir:");
printList(list4);

let list5 = createLinkedList([10, 20, 30, 40]);
printList(list5);

list5 = hapusNDariAkhir(list5, 1);

console.log("Setelah hapus node terakhir:");
printList(list5);

let list6 = createLinkedList([7, 8, 9]);
printList(list6);

list6 = hapusNDariAkhir(list6, 3);

console.log("Setelah hapus node pertama:");
printList(list6);

// =========================
// TEST tengahLinkedList
// =========================
console.log("\n=== TEST tengahLinkedList ===");

let list7 = createLinkedList([1, 2, 3, 4, 5]);

printList(list7);

console.log("Node tengah:", tengahLinkedList(list7).data);

let list8 = createLinkedList([10, 20, 30, 40, 50, 60]);

printList(list8);

console.log("Node tengah kedua:", tengahLinkedList(list8).data);

let list9 = createLinkedList([100, 200, 300]);

printList(list9);

console.log("Node tengah:", tengahLinkedList(list9).data);
