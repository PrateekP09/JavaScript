// conditional statements

/* 
    if(cond){
     // true
    }
*/

let x=45;
if(x<56){
    console.log(`input ${x} is less than 56`)
}
console.log(`\n`)

/* 
if(cond){
    true{
    } else{
     false}

*/

let z =56;
if(z< x){
    console.log('condition is true')
}
else{
    console.log('false')
}

/* 
    if(cond){
        true
    }else if (cond-2){
        true
    } else if(cond-3){
        true
    } else{
     false
    }

*/

let day=2;
if(day===1){
    console.log("Monday");
} else if(day===2){
    console.log("Tuesday");
} else if(day===3) {
    console.log("wednesday");
}else if(day===4){
    console.log("Thursday");
}else if(day===5){
    console.log("Friday");
}else if(day===6){
    console.log("satruday");
}else if(day===7){
    console.log("sunday");
} else {
    console.log("invalid day");

}
console.log(`\n`)

/* 
    switch(key){
    case -1;
    break;
    case -2;
    break;
    case -3;
    break;
    default:

    }

*/

let d=2;
switch(d){
    case 1:console.log("Monday");
    break;
    case 2:console.log("tuesday");
    break;
    case 3:console.log("wednesday");
    break;
    case 4:console.log("thursday");
    break;
    case 5:console.log("fri");
    break;
    case 6:console.log("saturday");
    break;
    case 7:console.log("sunday");
    break;
    default:console.log("invalid")
}


/* 
    task-1 maths  subject marks
    s1
    s2
    s3

    Find total marks
    Find avg= marks/3;
*/

let s1=12;
let s2=15;
let s3=16;

console.log('total=',s1+s2+s3)
console.log("avg=",43/3)
