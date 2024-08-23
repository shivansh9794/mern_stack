// Defining array
const arr=[7,"anshika","shivansh",undefined , console.log];

console.log(arr);



// Printing Array
 console.log(arr);

 
 // type of Array
 console.log( typeof arr) ;
 

 // check if any variable is array
 console.log( Array.isArray(arr));


 // length of array
 console.log( arr.length );
 

 // example for indexing and others 
const movies = ['stree 2','Housefull','deadpool & wolverine','bad news','baghi','munjya']


// indexing 
console.log(movies[2]);


// Negative indexing
console.log(movies.at(-1));
console.log(movies.at(-5));


// new element at any place
movies[4]='tumbad';
console.log(movies);
console.log(movies.indexOf('bad news'));


// slicing
console.log(movies.slice(1,-2)); // it do not accepts the end one
console.log(movies.slice(2)); // if we dont provide end point then it runs from given starting point till the end
console.log(movies.slice(2,50)); // if we provide a unavilable index then in still runs it


// Adding and removing elements

// Adding
movies.push('creature 3D'); // adds new element at end
movies.unshift('Dhamal 1'); // adds new element at start
console.log(movies);

// Removing
movies.pop(); // removes new element at end
movies.shift(); // removes new element at start
console.log(movies);


// splice

// movies.splice(2,2); //in second place we provides no. of elements we want to remove

// movies.splice(2,2,'Bhootnath','Makdi'); // replacing at same index after removing

movies.splice(2,0,'Bhoot Uncle','3 idiots'); // inserting elements
console.log(movies);


// Exercise
const fruits=['apple','banana','mango','kiwi','orange','grapes'];
console.log(fruits);

// replace orange with papaya
fruits[4]='papaya';

// remove last 2 elements
fruits.splice(-2)
console.log(fruits);

// add 3 fruits before apple 
fruits.splice(0,0,'f1','f2','f3');
console.log(fruits);

// remove kiwi from array
fruits.splice(fruits.indexOf('kiwi'),1);
console.log(fruits);
