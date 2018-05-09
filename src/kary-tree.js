'use strict';

import Queue from 'queue-fifo';

class KAryTree {
  constructor(root) {
    this.root = root;
  }
  breadthSearchTraversal() {
    if (!this.root) {
      return null;
    }
    return this._breadthFirstSearch(this.root);
  }

  _breadthFirstSearch(root) {
    const queue = new Queue();
    queue.enqueue(root);

    let currentNode = null;

    while (!queue.isEmpty()) {
      currentNode = queue.dequeue();

      // replace with a different operation ;)
      console.log(`visiting ${currentNode.value}`);

      for (let i = 0; i < currentNode.children.length; i++) {
        queue.enqueue(currentNode.children[i]);
      }

    }
  }
}

export default KAryTree;