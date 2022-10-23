
var addTwoNumbers = function (l1, l2) {
    // Initialise a new ListNode to be returned
    var newListNode = new ListNode(0);
    var headOfNewListNode = newListNode;

    // Initialise variables to be utilised on each run
    var sum = 0;
    var carry = 0;

    // While there are elements (or a carried number) to add
    while (l1 !== null || l2 !== null || sum > 0) {
        // If there's an element in l1 to be added, add it to the sum and move to the next l1 node
        if (l1 !== null) {
            sum = sum + l1.val;
            l1 = l1.next;
        }

        // If there's an element in l2 to be added, add it to the sum and move to the next l2 node
        if (l2 !== null) {
            sum = sum + l2.val;
            l2 = l2.next;
        }

        // Check if the sum for these nodes exceeds 10
        if (sum >= 10) {
            carry = 1;
            sum = sum - 10;
        }

        // Add the sum to the new ListNode, and then move it to the next entry
        headOfNewListNode.next = new ListNode(sum);
        headOfNewListNode = headOfNewListNode.next;

        // Set the sum for the next addition to equal the carry-over (if there was one)
        sum = carry;
        carry = 0;
    }

    // Return the constructed ListNode (ignoring the first dummy entry)
    return newListNode.next;
};