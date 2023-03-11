class LinkedList {
  constructor() {
    this.data = [];
  }

  checkIndex(index) {
    if (index < 0 || index >= this.data.length) {
      throw new Error('Index is out of bounds');
    }
  }

  length() {
    return this.data.length;
  }

  append(value) {
    this.data.push(value);
  }

  insert(value, index) {
    this.checkIndex(index);

    this.data.splice(index, 0, value);
  }

  delete(index) {
    this.checkIndex(index);

    return this.data.splice(index, 1)[0];
  }

  deleteAll(value) {
    this.data = this.data.filter(item => item !== value);
  }

  get(index) {
    this.checkIndex(index);

    return this.data[index];
  }

  clone() {
    return this.data.slice();
  }

  reverse() {
    this.data.reverse();
  }

  findFirst(value) {
    return this.data.indexOf(value);
  }

  findLast(value) {
    return this.data.lastIndexOf(value);
  }

  clear() {
    this.data = [];
  }

  extend(list) {
    this.data = [...this.data, ...list];
  }
}

const linkedList = new LinkedList();

console.log(linkedList.length()); // output: 0
linkedList.extend(['1', '2', '3', '4', '1', '3', '3', '3']);
console.log(linkedList.length()); // output: 8
console.log(linkedList.get(7)); // output: 3
linkedList.append('5');
console.log(linkedList.length()); // output: 9
console.log(linkedList.get(8)); // output: 5
linkedList.insert('6', 2);
console.log(linkedList.length()); // output: 10
console.log(linkedList.get(2)); // output: 6
console.log(linkedList.findFirst('2')); // output: 1
console.log(linkedList.findLast('3')); // output: 8
console.log(linkedList.clone()); // output: ['1', '2', '6', '3', '4', '1', '3', '3', '3', '5']
linkedList.reverse();
console.log(linkedList.clone()); // output: ['5', '3', '3', '3', '1', '4', '3', '6', '2', '1']
console.log(linkedList.delete(2)); // output: 3
console.log(linkedList.length()); // output: 9
linkedList.deleteAll('3');
console.log(linkedList.length()); // output: 6
linkedList.clear();
console.log(linkedList.length()); // output: 0
