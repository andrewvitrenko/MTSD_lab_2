const LinkedList = require('./index');

test('extend & length', () => {
  const testArray = ['1', '2', '3', '4', '1', '3', '3', '3'];
  const linkedList = new LinkedList();
  linkedList.extend(testArray);
  expect(linkedList.length()).toBe(testArray.length);
});

test('get', () => {
  const testArray = ['1', '2', '3', '4', '1', '3', '3', '3'];
  const linkedList = new LinkedList();
  linkedList.extend(testArray);
  expect(linkedList.get(7)).toBe(testArray[7]);
});

test('append', () => {
  const linkedList = new LinkedList();
  linkedList.append('2');
  expect(linkedList.length()).toBe(1);
  expect(linkedList.get(0)).toBe('2');
});

test('insert', () => {
  const testArray = ['1', '2', '3', '4', '1', '3', '3', '3'];
  const linkedList = new LinkedList();
  linkedList.extend(testArray);
  linkedList.insert('5', 2);
  expect(linkedList.length()).toBe(testArray.length + 1);
  expect(linkedList.get(2)).toBe('5');
});

test('findFirst', () => {
  const testArray = ['1', '2', '3', '4', '1', '3', '3', '3'];
  const linkedList = new LinkedList();
  linkedList.extend(testArray);
  expect(linkedList.findFirst('3')).toBe(2);
});

test('findLast', () => {
  const testArray = ['1', '2', '3', '4', '1', '3', '3', '3'];
  const linkedList = new LinkedList();
  linkedList.extend(testArray);
  expect(linkedList.findLast('3')).toBe(7);
});

test('clone', () => {
  const testArray = ['1', '2', '3', '4', '1', '3', '3', '3'];
  const linkedList = new LinkedList();
  linkedList.extend(testArray);
  expect(linkedList.clone()).toStrictEqual(testArray);
});

test('reverse', () => {
  const testArray = ['1', '2', '3', '4', '1', '3', '3', '3'];
  const linkedList = new LinkedList();
  linkedList.extend(testArray);
  linkedList.reverse();
  expect(linkedList.clone()).toStrictEqual(testArray.reverse());
});

test('delete', () => {
  const testArray = ['1', '2', '3', '4', '1', '3', '3', '3'];
  const linkedList = new LinkedList();
  linkedList.extend(testArray);
  const deletedItem = linkedList.delete(2);
  expect(linkedList.length()).toBe(testArray.length - 1);
  expect(deletedItem).toBe('3');
});

test('deleteAll', () => {
  const testArray = ['1', '2', '3', '4', '1', '3', '3', '3'];
  const linkedList = new LinkedList();
  linkedList.extend(testArray);
  linkedList.deleteAll('3');
  expect(linkedList.length()).toBe(5);
});

test('clear', () => {
  const testArray = ['1', '2', '3', '4', '1', '3', '3', '3'];
  const linkedList = new LinkedList();
  linkedList.extend(testArray);
  linkedList.clear();
  expect(linkedList.clone()).toStrictEqual([]);
});
