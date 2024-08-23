// Creating Object
const user = {
    name: 'raju',
    email: 'raju123@mail.com',
    password:'raju123'
};

// Accessing object
console.log(user);

// Accesing particular keys
console.log(user.name);
console.log(user.email);
console.log(user['email']);

// Updating key data
user.password="abrakadabra";
console.log(user);

// Adding new key
user.address='lucknow';
console.log(user);

// assining 5 objects inside a array

const smartphoneArray = [
    {
        brand: 'One Plus',
        model: 'Nord 3',
        price: 32000,
        colors: ['black','white' ,'blue']
    },

    {
        brand: 'samsung',
        model: 'A 05',
        price: 12000,
        colors: ['gray','white' ,'blue']
    },

    {
        brand: 'samsung',
        model: 's 20 Fe',
        price: 62000,
        colors: ['black','white' ,'blue']
    },

    {
        brand: 'Apple',
        model: '15 pro max',
        price: 142000,
        colors: ['black','white' ,'blue']
    },

    {
        brand: 'redmi',
        model: 'c-12',
        price: 19000,
        colors: ['blue','white' ,'crystal pink']
    }
];
console.log(smartphoneArray.length);

// finding price of 4th phone
console.log(smartphoneArray[3].price);

// adding new color in 5th phone 
smartphoneArray[4].colors.push("grey");
console.log(smartphoneArray[4].colors);

// fiding phones whose price is less than or equal to 20000
console.log('Smatphones with price less than 20000---->');
const newsamrt=smartphoneArray.filter( (a) =>  {
    return a.price<=20000;
});
console.log(newsamrt);


// fiding phones who has black color
console.log('Smatphones with black color---->');
const reqColorPhone=smartphoneArray.filter( (a) =>  {
    return a.colors.includes('black');
});
console.log(reqColorPhone);


// returning only brand name from whole array
const brands=smartphoneArray.map( (phone) => {return phone.brand});
console.log(brands);


// returning only Samsung phones from whole array
const keyword='samsung';
const searchResult=smartphoneArray.filter( (phone)=>{
    return phone.brand.toLowerCase===keyword.toLowerCase;
});
console.log(searchResult);


// if user only enters sam in a search then 
const keyword1='samsung';
const searchResultSam=smartphoneArray.filter( (phone)=>{
    return phone.brand.toLowerCase().includes(keyword1.toLowerCase());
});
console.log(searchResultSam);