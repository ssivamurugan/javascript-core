let ar = [12, 44, 61, 34, 99, 91];

for(let x of ar) {
    console.log('From \'of\' for loop ',x);
}

console.log('\n');

for(let x in ar) {
    console.log('From \'in\' for loop ',ar[x]);
}