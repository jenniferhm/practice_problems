// Leetcode 61: Rotate List

function ListNode(val) {
  this.val = val;
  this.next = null;
}

var rotateLinkedList = function (head, k) {
  if (!head) return null;

  let length = 1;
  let start = head;

  while (start.next) {
    start = start.next;
    length++;
  }
  let lastNode = start;

  if (k === length) return head;

  if (k > length) {
    k = k % length;
  }
  let oppositeOfK = 1;
  let current = head;

  while (oppositeOfK < length - k) {
    current = current.next;
    oppositeOfK++;
  }

  let newLastNode = current;
  lastNode.next = head;
  head = newLastNode.next;
  newLastNode.next = null;

  return head;
};