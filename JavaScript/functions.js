// First type of functions

function addnums(a,b){
    c=a+b;
    return c;
}
const data = addnums(3,4);
console.log(data);


// Second type of functions 

const getavg = function(a,b,c){
    return (a+b+c)/3;
}
getavg(3,4,5);
console.log(getavg(3,4,5));


// Third type of functions 

const factorial= (n)=>{
    let f=1;
    for(let i=1; i<=n; i++){
        f=f*i;
    }
    return f;
}


const fact= factorial(5);
console.log(fact);


// Double Return 

const sumprod = (a,b) =>{
    const sum=(a+b)

    const prod=(a*b)

    return [sum,prod]

}
const [s,p] = sumprod(6,3);
console.log(s,p);


// Ternary operator
let age=19;
console.log(age>18 ? "adult" : "not adult");