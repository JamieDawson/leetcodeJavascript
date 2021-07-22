function NodeList(val) {
	this.val = val;
	this.next = null;
}

let reverse = function(head) {
    let prevNode = null;
    
    while(head !== null) {
        let nextNode = head.next;
        head.next = prevNode;
        prevNode = head;
        head = nextNode;
    }
    return prevNode;
}

var isPalindrome = function(head) {
    let fast = head;
    let slow = head;
    
    while(fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    fast = head;
    slow = reverse(slow);
    
    while (slow !== null) {
        if(slow.val !== fast.val) {
            return false;
        }
        slow = slow.next;
        fast = fast.next;
    }
    
    return true;
};

let node1 = new NodeList(1);
let node2 = new NodeList(2);
let node3 = new NodeList(2);
let node4 = new NodeList(1);
node1.next = node2;
node2.next = node3;
node3.next = node4;

isPalindrome(node1);
