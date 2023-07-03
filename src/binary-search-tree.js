export function bstDriver() {
    const array = [5, 3, 7, 2, 4, 6, 8];
    const tree = new Tree(array);

    prettyPrint(tree.root)

    console.log(`Tree balanced = ${tree.isBalanced()}`)

    console.log('level order:')
    tree.levelOrder((node) => {
        console.log(node.data);
    });
  
    const inOrderResult = tree.inOrder();
    console.log(`In-order: ${inOrderResult}`);
  
    const preOrderResult = tree.preOrder();
    console.log(`Pre-order: ${preOrderResult}`);

    const postOrderResult = tree.postOrder();
    console.log(`Post-order: ${postOrderResult}`);

    console.log('Inserting 10, 1, 0')

    tree.insert(10)
    tree.insert(1)
    tree.insert(0)

    console.log(`Tree balanced = ${tree.isBalanced()}`)
    console.log('Rebalancing tree')

    tree.rebalance()

    console.log(`Tree balanced = ${tree.isBalanced()}`)

    prettyPrint(tree.root)

    console.log('level order:')
    tree.levelOrder((node) => {
        console.log(node.data);
    });
  
    const inOrderResult2 = tree.inOrder();
    console.log(`In-order: ${inOrderResult2}`);
  
    const preOrderResult2 = tree.preOrder();
    console.log(`Pre-order: ${preOrderResult2}`);

    const postOrderResult2 = tree.postOrder();
    console.log(`Post-order: ${postOrderResult2}`);
}



class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }
  
  class Tree {
    constructor(array) {
      this.root = this.buildTree(array);
    }
  
    buildTree(array) {
      if (array.length === 0) {
        return null;
      }
  
      const sortedArray = array.sort((a, b) => a - b);
  
      const mid = Math.floor(sortedArray.length / 2);
      const rootNode = new Node(sortedArray[mid]);
  
      rootNode.left = this.buildTree(sortedArray.slice(0, mid));
      rootNode.right = this.buildTree(sortedArray.slice(mid + 1));
  
      return rootNode;
    }
  
    insert(value) {
      this.root = this.insertNode(this.root, value);
    }
  
    insertNode(node, value) {
      if (node === null) {
        return new Node(value);
      }
  
      if (value < node.data) {
        node.left = this.insertNode(node.left, value);
      } else if (value > node.data) {
        node.right = this.insertNode(node.right, value);
      }
  
      return node;
    }
  
    delete(value) {
      this.root = this.deleteNode(this.root, value);
    }
  
    deleteNode(node, value) {
      if (node === null) {
        return null;
      }
  
      if (value < node.data) {
        node.left = this.deleteNode(node.left, value);
      } else if (value > node.data) {
        node.right = this.deleteNode(node.right, value);
      } else {
        // Case 1: Node with no children or one child
        if (node.left === null) {
          return node.right;
        } else if (node.right === null) {
          return node.left;
        }
  
        // Case 2: Node with two children
        const successor = this.findMinValueNode(node.right);
        node.data = successor.data;
        node.right = this.deleteNode(node.right, successor.data);
      }
  
      return node;
    }
  
    find(value) {
      return this.findNode(this.root, value);
    }
  
    findNode(node, value) {
      if (node === null || node.data === value) {
        return node;
      }
  
      if (value < node.data) {
        return this.findNode(node.left, value);
      } else {
        return this.findNode(node.right, value);
      }
    }
  
    findMinValueNode(node) {
      let current = node;
      while (current.left !== null) {
        current = current.left;
      }
      return current;
    }
  
    levelOrder(callback) {
      const result = [];
      if (!callback) {
        callback = (node) => {
          result.push(node.data);
        };
      }
  
      if (this.root === null) {
        return result;
      }
  
      const queue = [this.root];
      while (queue.length > 0) {
        const node = queue.shift();
        callback(node);
  
        if (node.left !== null) {
          queue.push(node.left);
        }
  
        if (node.right !== null) {
          queue.push(node.right);
        }
      }
  
      return result;
    }
  
    inOrder(callback) {
      const result = [];
      if (!callback) {
        callback = (node) => {
          result.push(node.data);
        };
      }
  
      this.inOrderTraversal(this.root, callback);
  
      return result;
    }
  
    inOrderTraversal(node, callback) {
      if (node === null) {
        return;
      }
  
      this.inOrderTraversal(node.left, callback);
      callback(node);
      this.inOrderTraversal(node.right, callback);
    }
  
    preOrder(callback) {
      const result = [];
      if (!callback) {
        callback = (node) => {
          result.push(node.data);
        };
      }
  
      this.preOrderTraversal(this.root, callback);
  
      return result;
    }
  
    preOrderTraversal(node, callback) {
      if (node === null) {
        return;
      }
  
      callback(node);
      this.preOrderTraversal(node.left, callback);
      this.preOrderTraversal(node.right, callback);
    }
  
    postOrder(callback) {
      const result = [];
      if (!callback) {
        callback = (node) => {
          result.push(node.data);
        };
      }
  
      this.postOrderTraversal(this.root, callback);
  
      return result;
    }
  
    postOrderTraversal(node, callback) {
      if (node === null) {
        return;
      }
  
      this.postOrderTraversal(node.left, callback);
      this.postOrderTraversal(node.right, callback);
      callback(node);
    }
  
    height(node) {
      if (node === null) {
        return -1;
      }
  
      const leftHeight = this.height(node.left);
      const rightHeight = this.height(node.right);
  
      return Math.max(leftHeight, rightHeight) + 1;
    }
  
    depth(node) {
      if (node === null) {
        return -1;
      }
  
      const parent = this.findParent(this.root, node);
  
      if (parent === null) {
        return 0;
      }
  
      return this.depth(parent) + 1;
    }
  
    findParent(root, node) {
      if (root === null || root === node) {
        return null;
      }
  
      if (
        (root.left !== null && root.left === node) ||
        (root.right !== null && root.right === node)
      ) {
        return root;
      }
  
      const leftParent = this.findParent(root.left, node);
      if (leftParent !== null) {
        return leftParent;
      }
  
      return this.findParent(root.right, node);
    }
  
    isBalanced() {
      return this.checkBalanced(this.root);
    }
  
    checkBalanced(node) {
      if (node === null) {
        return true;
      }
  
      const leftHeight = this.height(node.left);
      const rightHeight = this.height(node.right);
      const heightDiff = Math.abs(leftHeight - rightHeight);
  
      if (heightDiff > 1) {
        return false;
      }
  
      return this.checkBalanced(node.left) && this.checkBalanced(node.right);
    }
  
    rebalance() {
      const sortedArray = this.inOrder();
      this.root = this.buildTree(sortedArray);
    }
  }
  
  
const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
        return;
    }
    if (node.right !== null) {
        prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
        prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
};