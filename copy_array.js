const ar1 = [[10, 20], [30, 40], [50]];

// Shallow copy
const ar2 = ar1.slice();
ar1[2].push(60);

console.log('From shallow copy of array 1', ar1);
// The added value in array 1 is reflected in array 2
console.log('From shallow copy of array 2', ar2);
console.log('\n\n');

// Deep copy

const ar3 = structuredClone(ar1);
ar1[2].push(70);

console.log('From deep copy of array 1 ', ar1);
// The added value in array 1 is not reflected in array 3
console.log('From deep copy of array 2 ', ar3);
