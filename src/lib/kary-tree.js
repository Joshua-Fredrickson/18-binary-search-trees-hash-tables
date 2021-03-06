'use strict';

import Queue from 'queue-fifo';
import Stack from 'stack-lifo';

export default class KAryTree {
  constructor(root) {
    this.root = root;
  }


  breadthSearchTraversal() {
    if (!this.root) {
      return null;
    }
    return this._breadthFirstSearch(this.root);
  }

  _breadthFirstSearch(root) { // eslint-disable-line
    const queue = new Queue();
    queue.enqueue(root);

    let currentNode = null;

    while (!queue.isEmpty()) {
      currentNode = queue.dequeue();

      console.log(`visiting ${currentNode.value}`);
      for (let i = 0; i < currentNode.children.length; i++) {
        queue.enqueue(currentNode.children[i]);
      }
    }
  }

  depthSearchTraversal() {
    if (!this.root) {
      return null;
    }
    return this._depthFirstSearch(this.root);
  }

  _depthFirstSearch(root) { // eslint-disable-line
    const stack = new Stack();
    stack.push(root);

    let currentNode = null;

    while (!stack.isEmpty()) {
      currentNode = stack.pop();

      console.log(`visiting ${currentNode}`);
      for (let i = 0; i < currentNode.children.length; i++) {
        stack.push(currentNode.children[i]);
      }
    }
    return this;
  }

  find(value) {
    if (!this.root) {
      return null;
    }
    return this._find(this.root, value);
  }

  _find(root, value) { // eslint-disable-line
    if (!root) {
      return null;
    } else if (root.value === value) {
      return root;
    }
    const queue = new Queue();
    queue.enqueue(root);

    let currentNode = null;

    while (!queue.isEmpty()) {
      currentNode = queue.dequeue();

      if (currentNode.value !== value) {
        for (let i = 0; i < currentNode.children.length; i++) {
          queue.enqueue(currentNode.children[i]);
        }
      } else {
        return currentNode.value;
      }
    }
    return null;
  }

  toString(str) {
    if (!this.root) {
      return null;
    }
    return this._toString(this.root, str);
  }

  _toString(root, str) { // eslint-disable-line
    if (!root) {
      return null;
    }
    const queue = new Queue();
    queue.enqueue(root);

    let currentNode = null;
    let stringList = '';

    while (!queue.isEmpty()) {
      currentNode = queue.dequeue();

      stringList += `${currentNode.value}\n`;
      for (let i = 0; i < currentNode.children.length; i++) {
        queue.enqueue(currentNode.children[i]);
      }
    }
    return stringList;
  }

  toArray(array) {
    if (!this.root) {
      return null;
    }
    return this._toArray(this.root, array);
  }

  _toArray(root, array) { // eslint-disable-line
    if (!this.root) {
      return null;
    }
    const stack = new Stack();
    const treeArray = [];
    stack.push(root);

    let currentNode = null;

    while (!stack.isEmpty()) {
      currentNode = stack.pop();

      treeArray.push(currentNode.value);
      for (let i = 0; i < currentNode.children.length; i++) {
        stack.push(currentNode.children[i]);
      }
    }
    return treeArray;
  }
}
