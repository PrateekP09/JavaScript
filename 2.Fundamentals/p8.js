/* 
  Find the student grades using marks
 david   80
 john    77.5
 mary    67.36
 lora    34.6

 70> marks<= Distinction
 60 >= marks<=70 first class
 35 >= marks<=60 second
  marks<35  print fail

*/

let marks= 34.6;

if(marks>=70 && marks<=100){
    console.log('distinction')
}else if(marks>=60 && marks<=70){
    console.log('First class')
}else if (marks>= 35 && marks<=60){
    console.log('second class')
} else{
    console.log('fail')
}