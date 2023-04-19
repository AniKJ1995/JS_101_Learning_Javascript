// prime number upto 100
for (let i = 1; i <=100; i++){
let count=0
  let num=i;

  
  for(i=1;i<=num;i++){
  if(num%i==0){
    count++
  }
}
if(count==2){
  console.log(num)
}
}


