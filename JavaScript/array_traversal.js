const nums=[1,2,3,4,5,36,49];

// Normal Way 

console.log('-----for loop------');

for(i=0; i<nums.length; i++){
    console.log(nums[i]);   
}

// for of Way

console.log('-----for of loop------');

for(let n of nums){
    console.log(n);  
}

// call back way

console.log('-----for each loop------');



nums.forEach( (a,b)=>{console.log("data:",a, "Index:",b)} );


// Exercise

// find the square of all numbers
console.log('----Square of number-----');
nums2=[3,6,9,7,12,2,19];
for(n of nums2){
    console.log(n*n);   
}

// print all even numbers
nums2=[3,6,9,7,12,2,19];
for(n of nums2){
    if(n%2==0){
        console.log(n);
    }        
}

// copying the square of the nums2 in new array
const numsqr=[];
for(let n of nums2){
    numsqr.push(n**2);
}
console.log(numsqr);

// second way to copying the square of the nums2 in new array
const numsqr2 = nums2.map( (a) => {
     return a**2 
});
console.log(numsqr2);

// Adding Gst on all prices 
const prices=[2300,140,990,2730,220,12000]
const afterGst = prices.map( (a) => {
    return a*0.18+a
});
console.log(afterGst);

// converting all names in uppercase
const names=['raju','pinki','kaliya','chintu'];
const upname=[];
for(let n of names){
    upname.push(n.toUpperCase());
}
console.log(upname);

// remove symbol of ₹ and convert to integer 
const prices2=['₹234.88','₹899.99','₹789.3','₹234.56'];
const intprice=prices2.map((p)=>{
    return parseInt(p.slice(1));
});
console.log(intprice);

// filter the even numbers from nums2 array and store it in new array
const evenNums = nums2.filter((n) => {
    return n%2 ===0;
});
console.log(evenNums);

// filter the prices which are more than 1000 and less than 5000
const pri = prices.filter((n) => {
    return n>1000 && n<5000
});
console.log(pri);

//  filter names with length greater than or equal to 5 from an array of names
const name1= names.filter((n) => { 
    return n.length>=5 
})
console.log("names with length >=5 :",name1);

//  filter all perfect squares from an array
const perfSqr=nums.filter((a)=>{
    return Number.isInteger(Math.sqrt(a));
});
console.log("perfect Square Numbers :",perfSqr);

// square root of all elements from an array
const Sqrt= nums.map((n)=>{
    return Math.sqrt(n);
});
console.log("Square Root Numbers :",Sqrt);
  