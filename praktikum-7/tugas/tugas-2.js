class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(x) {
    this.stack.push(x);

    if (this.minStack.length === 0 || x <= this.getMin()) {
      this.minStack.push(x);
    }
  }

  pop() {
    if (this.stack.length === 0) {
      return null;
    }

    let removed = this.stack.pop();

    if (removed === this.getMin()) {
      this.minStack.pop();
    }

    return removed;
  }

  top() {
    return this.stack[this.stack.length - 1];
  }

  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
}

// Pengujian
const ms = new MinStack();

ms.push(5);
console.log("push(5)");

ms.push(3);
console.log("push(3)");

ms.push(7);
console.log("push(7)");

ms.push(2);
console.log("push(2)");

console.log("getMin() =", ms.getMin()); // 2

ms.pop();
console.log("pop()");

console.log("getMin() =", ms.getMin()); // 3

ms.pop();
console.log("pop()");

console.log("getMin() =", ms.getMin()); // 3
