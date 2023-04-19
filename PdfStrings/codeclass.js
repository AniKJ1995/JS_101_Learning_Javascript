let count =0;
for(let i=1;i<=3;i++){
  for(let j=1;j<=3;j++){
    if(i==j||(i+j==3-1)){
      count++
    }
  }
}
console.log(count)