// we can update the sting once it is declared
let  x = "AnilKJ"
console.log(x)
x[1]='B';
console.log(x)

//but we can with the help of array

//for that we need an empty array first
let e =[]
for(i=0;i<x.length;i++){
  e.push(x[i])
}
e[1]='B'
console.log(e)
//now we have to insert this array to a variable so that it will be the string;

//for that we need an empty string 
let New=""
for( let i=0;i<e.length;i++){
  New = New + e[i]
}
console.log(New)


