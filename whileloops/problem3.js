let a = 0; //starting point
let b = 15; // end limit
sum = 0;

while(a<=b){
  if(a%3==0){
    sum = sum + a;
  }
  
  a++;
}
console.log(sum);