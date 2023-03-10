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
