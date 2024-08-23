const smartphone={
    brand: 'One Plus',
    model: 'Nord 3',
    price: 32000,
    colors: ['black','white' ,'blue']
}

// find the price of smartphone
console.log(smartphone.price);
// find the color of smartphone
console.log(smartphone.colors[2]);

// add new color in last on a smartphone colors array
smartphone.colors.push("grey");
console.log(smartphone.colors[3]);
// add new color in begining on a smartphone colors array
smartphone.colors.unshift("green");
console.log(smartphone.colors);

// replace second color with grey
smartphone.colors.splice(1,1,'grey'); 
console.log(smartphone.colors);

// convert white color with grey in colors array

//First Way
for(n=0; n<=smartphone.colors.length; n++){
    if(smartphone.colors[n]==='white'){
        smartphone.colors[n]='grey';
    }
}
console.log(smartphone.colors);

// second Way
 const idx=smartphone.colors.indexOf('white');
 smartphone.colors[idx]='grey';
 console.log(smartphone.colors);

