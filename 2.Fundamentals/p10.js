/* patetrns */
/* 
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
*/ //same code for upside down


for(let i=5; i>=1;i--){
    for(let j=1;j<=i;j++){
        document.writeln(`${i}`)
    }
    document.writeln('<br>')
}

document.writeln(`<br>`)

for(let i=1; i<=5;i++){
    for(let j=1;j<=i;j++){
        document.writeln(`${j}`)
    }
    document.writeln('<br>')
}

/* 

1
2 2
3 3 3
4 4 4 4
5 5 5 5 5

*/
document.writeln(`<br>`)
for(let i=1; i<=5;i++){
    for(let j=1;j<=i;j++){
        document.writeln(`${i}`)
    }
    document.writeln('<br>')
}
/* 
1
2 3
4 5 6
7 8 9 10
11 12 13 14
*/
let n=1
document.writeln(`<br>`)
for(let i=1; i<=5;i++){
    for(let j=1;j<=i;j++){
        document.writeln(`${n}`)
        n++;
    }
    document.writeln('<br>')
}

/* 
 pyramid
*/

let rows = 5;
let pattern = "";

for (let n = 1; n <= rows; n++) {
   for (let space = 1; space <= rows - n; space++) {
      pattern += " ";
   }
   for (let num = 1; num <= 2 * n - 1; num++) {
      pattern += num;
   }
   pattern += "\n";
}
console.log(pattern+"");

    /* 
    *
    * *
    * * *
    * * * *
    * * * * *
    */

    for(let i=1; i<=5;i++){
        for(let j=1;j<=i;j++){
            document.writeln(`${"*"}`)
        }
        document.writeln('<br>')
    }