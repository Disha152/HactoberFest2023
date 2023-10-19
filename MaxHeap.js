// Javascript program for implement insertion in Heaps

// To heapify a subtree rooted with node i which is
// an index in arr[].Nn is size of heap

let MAX = 1000;

// Function to heapify ith node in a Heap of size n following a Bottom-up approach
function heapify(arr, n, i)
{
	// Find parent
	let parent = Math.floor((i-1)/2);

	if (arr[parent] >= 0) {
		// For Max-Heap
		// If current node is greater than its parent
		// Swap both of them and call heapify again
		// for the parent
		if (arr[i] > arr[parent]) {
			let temp = arr[i];
			arr[i] = arr[parent];
			arr[parent] = temp;

			// Recursively heapify the parent node
			heapify(arr, n, parent);
		}
	}
}

// Function to insert a new node to the Heap
function insertNode(arr, n, Key)
{
	// Increase the size of Heap by 1
	n = n + 1;

	// Insert the element at end of Heap
	arr[n - 1] = Key;

	// Heapify the new node following a
	// Bottom-up approach
	heapify(arr, n, n - 1);
	
	return n;
}

/* A utility function to print array of size N */
function printArray(arr, n)
{
	for (let i = 0; i < n; ++i)
		console.log(arr[i] + " ");

	console.log("</br>");
}

let arr = [ 10, 5, 3, 2, 4 ];

let n = arr.length;

let key = 15;

n = insertNode(arr, n, key);

printArray(arr, n);

// This code is contributed by ajaymakvana
