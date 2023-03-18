const LinkedList = require('./index');

test('extend & length', () => {
  const ll2 = new LinkedList();
  ll2.append('2');
  ll2.append('3');
  ll2.append('6');
  ll2.append('5');
  ll2.append('4');
  ll2.append('1');

  const linkedList = new LinkedList();
  linkedList.extend(ll2);
  expect(linkedList.length()).toBe(ll2.length());
});

test('get', () => {
  const linkedList = new LinkedList();
  linkedList.append('2');
  linkedList.append('1');
  linkedList.append('3');
  linkedList.append('6');

  expect(linkedList.get(3).value).toBe('6');
});

test('append', () => {
  const linkedList = new LinkedList();
  linkedList.append('2');
  expect(linkedList.length()).toBe(1);
  expect(linkedList.get(0).value).toBe('2');
});

test('insert', () => {
  const linkedList = new LinkedList();
  linkedList.append('3');
  linkedList.append('1');
  linkedList.append('0');
  linkedList.append('9');
  linkedList.append('8');
  linkedList.append('6');

  linkedList.insert('5', 2);
  expect(linkedList.length()).toBe(7);
  expect(linkedList.get(2).value).toBe('5');
});

test('findFirst', () => {
  const linkedList = new LinkedList();
  linkedList.append('2');
  linkedList.append('3');
  linkedList.append('9');
  linkedList.append('27');
  linkedList.append('4');
  linkedList.append('3');
  linkedList.append('7');

  expect(linkedList.findFirst('3')).toBe(1);
});

test('findLast', () => {
  const linkedList = new LinkedList();
  linkedList.append('2');
  linkedList.append('3');
  linkedList.append('9');
  linkedList.append('27');
  linkedList.append('4');
  linkedList.append('3');
  linkedList.append('7');

  expect(linkedList.findLast('3')).toBe(5);
});

test('clone', () => {
  const linkedList = new LinkedList();
  linkedList.append('2');
  linkedList.append('3');
  linkedList.append('9');
  linkedList.append('27');
  linkedList.append('4');
  linkedList.append('3');
  linkedList.append('7');

  expect(linkedList.clone()).toStrictEqual(linkedList);
});

test('reverse', () => {
  const linkedList = new LinkedList();
  linkedList.append('2');
  linkedList.append('3');
  linkedList.append('9');
  linkedList.append('27');
  linkedList.append('4');
  linkedList.append('3');
  linkedList.append('7');

  linkedList.reverse();
  expect(linkedList.head.value).toStrictEqual('7');
  expect(linkedList.tail.value).toStrictEqual('2');
});

test('delete', () => {
  const linkedList = new LinkedList();
  linkedList.append('2');
  linkedList.append('3');
  linkedList.append('9');
  linkedList.append('27');
  linkedList.append('4');
  linkedList.append('3');
  linkedList.append('7');

  const deletedItem = linkedList.delete(2);
  expect(linkedList.length()).toBe(6);
  expect(deletedItem.value).toBe('9');
});

test('deleteAll', () => {
  const linkedList = new LinkedList();
  linkedList.append('2');
  linkedList.append('3');
  linkedList.append('3');
  linkedList.append('2');
  linkedList.append('1');
  linkedList.append('6');

  linkedList.deleteAll('3');
  expect(linkedList.length()).toBe(4);
});

test('clear', () => {
  const linkedList = new LinkedList();
  linkedList.append('3');
  linkedList.append('2');
  linkedList.append('8');
  linkedList.append('7');
  linkedList.append('4');

  linkedList.clear();
  expect(linkedList.length()).toStrictEqual(0);
});
