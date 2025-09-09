const ar = [31, 8, 24, 92, 61];

// forEach() for traversal
// ar.forEach( x => console.log(x));

// map() for manipulating array elements
// const arMapped = ar.map( x => x * 2);
// console.log(arMapped);

// filter() for filtering particular range of numbers
// const arFiltered = ar.filter( x => x > 50);
// console.log(arFiltered);

/* 
reduce() for transforming array of 
elements into single element
*/
// const arReduced = ar.reduce( (acc, el, index) => {
//     if(index % 2 === 0) {
//         return el * 2;
//     }
// }, 0);

// console.log(arReduced);

// some() for check some of the element satisfy condition

const arSome = ar.some( x => x > 50);
console.log(arSome);

// every() for check all of the element satisfy condition

const arEvery = ar.every( x => x > 50);
console.log(arEvery);