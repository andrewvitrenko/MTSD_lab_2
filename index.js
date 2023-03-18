class Node {
  constructor(value, prev, next) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  checkIndex(index, strict = true) {
    if (index < 0 || (strict ? index >= this.size : index > this.size)) {
      throw new Error('Index is out of bounds');
    }
  }

  length() {
    return this.size;
  }

  append(value) {
    const newNode = new Node(value, this.tail, null);
    if (!this.head) {
      newNode.prev = null;
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    this.size++;
  }

  insert(value, index) {
    this.checkIndex(index, false);

    const newNode = new Node(value, null, null);

    if (index === 0) {
      newNode.next = this.head;
      if (!this.head) {
        this.tail = newNode;
      } else {
        this.head.prev = newNode;
      }
      this.head = newNode;
    } else if (index === this.size) {
      this.append(value);
    } else {
      let node = this.head;
      for (let i = 1; i < index; i++) {
        node = node.next;
      }
      node.next.prev = newNode;
      newNode.prev = node;
      newNode.next = node.next;
      node.next = newNode;
    }

    this.size++;
  }

  delete(index) {
    this.checkIndex(index);

    if (this.head) {
      let deletedNode;

      if (index === 0) {
        deletedNode = {...this.head};
        this.head = this.head.next;
        this.head.prev = null;
      } else if (index === this.size - 1) {
        deletedNode = { ...this.tail };
        this.tail = this.tail.prev;
        this.tail.next = null;
      } else {
        let node = this.head;

        for (let i = 0; i < index; i++) {
          node = node.next;
        }

        node.prev.next = node.next;
        node.next.prev = node.prev;
        deletedNode = { ...node };
      }

      this.size--;
      return deletedNode;
    }
  }

  deleteAll(value) {
    if (this.head) {
      let node = this.head;

      for (let i = 0; i < this.size; i++) {
        if (node.value === value) {
          this.delete(i);
          i--;
        }
        node = node.next;
      }
    }
  }

  get(index) {
    this.checkIndex(index);

    let node = this.head;

    for (let i = 0; i < index; i++) {
      node = node.next;
    }

    return node;
  }

  clone() {
    const newList = new LinkedList();
    let node = this.head;
    while (node) {
      newList.append(node.value);
      node = node.next;
    }

    return newList;
  }

  reverse() {
    let currentNode = this.head;
    while (currentNode) {
      const temp = currentNode.next;
      currentNode.next = currentNode.prev;
      currentNode.prev = temp;
      currentNode = temp;
    }
    const temp = this.head;
    this.head = this.tail;
    this.tail = temp;
  }

  findFirst(value) {
    let node = this.head;

    for (let i = 0; i < this.size; i++) {
      if (node.value === value) {
        return i;
      }

      node = node.next;
    }

    return -1;
  }

  findLast(value) {
    let node = this.tail;

    for (let i = this.size - 1; i >= 0; i--) {
      if (node.value === value) {
        return i;
      }

      node = node.prev;
    }

    return -1;
  }

  clear() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  extend(list) {
    if (!this.head) {
      this.head = list.head;
      this.tail = list.tail;
      this.size = list.size;
    } else {
      list.head.prev = this.tail;
      this.tail.next = list.head;
      this.tail = list.tail;
      this.size += list.size;
    }
  }
}

/* Example of usage

const ll = new LinkedList();
const ll2 = new LinkedList();
ll2.append('1');
ll2.append('2');
ll2.append('3');
ll2.append('4');
ll2.append('1');
ll2.append('3');
ll2.append('3');
ll2.append('3');

console.log(ll.length()); // output: 0
ll.extend(ll2);
console.log(ll.length()); // output: 8
console.log(ll.get(7)); // output: 3
ll.append('5');
console.log(ll.length()); // output: 9
console.log(ll.get(8)); // output: 5
ll.insert('6', 2);
console.log(ll.length()); // output: 10
console.log(ll.get(2)); // output: 6
console.log(ll.findFirst('2')); // output: 1
console.log(ll.findLast('3')); // output: 8
console.log(ll.clone());
ll.reverse();
console.log(ll.clone());
console.log(ll.delete(2)); // output: 3
console.log(ll.length()); // output: 9
ll.deleteAll('3');
console.log(ll.length()); // output: 6
ll.clear();
console.log(ll.length()); // output: 0

*/

module.exports = LinkedList;
