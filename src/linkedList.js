/**
 * Node is used to store values in a LinkedList
 */
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

/**
 * LinkedList class holds a reference to the `head` node.
 */

class LinkedList {
  constructor() {
    this.head = null;
  }
  /**
   * The number of elements in the linked list.
   *
   * @returns {number}
   *   the number of elements in the linked list.
   */

  get length() {
    let result = 0;
    let node = this.head;

    while (node) {
      result++;
      node = node.next;
    }
    return result;
  }

  /**
   * Find a node in the linked list.
   *
   * @param isMatch
   *  function that returns true if the current node matches the search criteria.
   *
   * @returns {*|null}
   *  the first node where `isMatch(node, index) === true` or null if no match is found.
   */
  find(isMatch) {
    let index = 0;
    let node = this.head;
    while (node) {
      if (isMatch(node, index)) {
        return node;
      }
      index++;
      node = node.next;
    }
    return null;
  }

  /**
   * Insert the value after a matched node in the list.
   *
   * @param isMatch
   *  function that returns true if the current node matches the search criteria.
   *
   * @param value
   *  the value to add.
   *
   * @returns {LinkedList}
   *  this linked list so methods can be chained.
   *
   * @throws 'No match found.'
   *  if list is not empty and no matching element is found.
   */
  insert(value, isMatch = (node, index) => index === this.length - 1) {
    if (this.head) {
      const previousNode = this.find(isMatch);

      if (!previousNode) {
        throw new Error("No match found.");
      }
      previousNode.next = new Node(value, previousNode.next);
    } else {
      this.insertAtHead(value);
    }
    return this;
  }

  /**
   * Insert a new value at the head of the list.
   * @param value
   *  the new value to insert
   *
   * @returns {LinkedList}
   *  this linked list so methods can be chained.
   */

  insertAtHead(value) {
    // This is a new function that you will need to implement.
    this.head = new Node(value, this.head);
    return this;
  }

  /**
   * Remove the first node where `isMatch(node, index) === true`.
   *
   * @param isMatch
   *  function that returns true if the current node matches the node to be removed.
   *
   * @returns {Node.value | null}
   *  returns the value of the removed node, or null if none.
   */
  remove(isMatch) {
    const matchedNode = this.find(isMatch);

    if (!matchedNode) {
      return null;
    }
    let node = this.head;
    if (node === matchedNode) {
      this.head = matchedNode.next;
      return matchedNode.value;
    }
    while (node) {
      if (matchedNode === node.next) {
        node.next = node.next.next;
        return matchedNode.value;
      }
      node = node.next;
    }
    return null;
  }
}

module.exports = LinkedList;
