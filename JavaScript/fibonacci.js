// const start= prompt("Enter the start value :");
// const range= prompt("Enter the limit :");

const range=20
const limit=200
const printfibon=(r,l)=>{

    let [a,b]= [0,1];
    console.log(a);
    console.log(b);

    for(let i=0; i<r; i++){
        let c=a+b;

        if(c>l){
            break;
        }
        console.log(c);


        [a,b]=[b,c];
    }

}

printfibon(range, limit);