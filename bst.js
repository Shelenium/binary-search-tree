
function BinarySearchTree(){
	this.root = null;
};

function Node(key,value){
	this.key = key;
	this.value = value;
    this.left = null;
	this.right = null;
};

BinarySearchTree.prototype.insert = function(key,value) {
	var root = this.root;

	if (!root) { this.root = new Node(key,value); return; }

	var currnode = root;
	var newnode = new Node (key,value);

	while (currnode){
		if (key < currnode.key) { 
			if (!currnode.left) { currnode.left = newnode; break; } else { currnode = currnode.left }
		} else if (key > currnode.key) { if (!currnode.right) { currnode.right = newnode; break; } else { currnode = currnode.right }}
		else { return; }
	}

	return this;
};

BinarySearchTree.prototype.root = function() {
	var root = this.root;
	if (!root) { return null; } else { return root.value; };
};

BinarySearchTree.prototype.search = function(key) {
	var root = this.root;

	if (!root) { return null; }

	var currnode = root;

	while (currnode){
		if (key < currnode.key) { 
			if (!currnode.left) { break; } else { currnode = currnode.left }
		} else if (key > currnode.key) { if (!currnode.right) { break; } else { currnode = currnode.right }}
		else { return currnode.value; }
	}

	return null;
};

BinarySearchTree.prototype.contains = function(value) {
	var root = this.root;

	if (!root) { return false; }

	var currnode = root;
	var ans = false;

	function GoGo (currnode) {
		if (value = currnode.value) { ans = true; }
		if (!currnode.left) { if (!currnode.right) { ans = false; return;} else GoGo(currnode.right); }
		GoGo(currnode.left);
		if (!currnode.right) { if (!currnode.left) { ans = false; return;} else GoGo(currnode.left); }
		GoGo(!currnode.right);
	}

	return ans;
};


BinarySearchTree.prototype.traverse = function(order) {
	var root = this.root;

	if (!root) { return null; }

	var currnode = root;
	if (order === true) {

	    while (currnode){
			if (!currnode.left) { 
				if (!currnode.right) { break; } 
				else { currnode = currnode.right }} else { currnode = currnode.left }
			}
	} else { 

		while (currnode){
			if (!currnode.right) { 
				if (!currnode.left) { break; } 
				else { currnode = currnode.left }} else { currnode = currnode.right }
			}

	}



	return null;
};

