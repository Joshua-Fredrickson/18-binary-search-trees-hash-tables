'use strict';

import Queue from 'queue-fifo';

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
  // Josh- I am getting a linter error on line 17!!!!!!!!!!!!!!!!!!!!
  _breadthFirstSearch(root) {
    const queue = new Queue();
    queue.enqueue(root);

    let currentNode = null;

    while (!queue.isEmpty()) {
      currentNode = queue.dequeue();

      // replace console.log with a different operation ;)
      console.log(`visiting ${currentNode.value}`);
      for (let i = 0; i < currentNode.children.length; i++) {
        queue.enqueue(currentNode.children[i]);
      }
    }
  }

  find(value) {
    if (!this.root) {
      return null;
    }
    return this._find(this.root, value);
  }

  _find(rootNode, value) {
    if (!rootNode) {
      return null;
    } else if (rootNode.value === value) {
      return rootNode;
    }
    this._breadthFirstSearch(rootNode, value);
    if (rootNode.value === value) {
      return rootNode;
    }
    return null;
  }
}
