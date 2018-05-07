const ListNode = function(val) {
  this.val = val;
  this.next = null;
}

const createList = list => {
  const dummyNode = new ListNode(0);

  list.reduce((prev, val) => {
    const node = new ListNode(val);
    prev.next = node;
    return node;
  }, dummyNode);

  return dummyNode.next;
}

