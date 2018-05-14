'use strict';

import KAryNode from '../lib/kary-node';
import KAryTree from '../lib/kary-tree';

const one = new KAryNode(1);
one.appendChild(2);
one.appendChild(3);
one.appendChild(4);

one.children[1].appendChild(5);
one.children[1].appendChild(6);
one.children[1].appendChild(7);

one.children[1].children[1].appendChild(8);

const kAryTree = new KAryTree(one);

// console.log(kAryTree);

// kAryTree.breadthSearchTraversal();

describe('#find', () => {
  test('should return matching value', () => {
    expect(kAryTree.find(6)).toEqual(6);
  });
  test('should return null for NO matching value', () => {
    expect(kAryTree.find(99)).toEqual(null);
  });
});


describe('#toString', () => {
  test('should return a string', () => {
    expect(kAryTree.toString(kAryTree)).toEqual('1\n2\n3\n4\n5\n6\n7\n8\n');
  });
});


describe('#toArray', () => {
  test('should return an array of node values', () => {
    expect(kAryTree.toArray(kAryTree)).toEqual([1, 4, 3, 7, 6, 8, 5,git  2]);
  });
});
