let a="abc"
let y=""
for(i=0;i<a.length;i++){
  if(i==a.length-1){
     y=y+a[i]
    
  }
  else{
     y=y+a[i]+","
  }
}
console.log(y)

/*
ABC->A,B,C
PQ-> P:Q
[A,B,C,P:Q]

   
output :-> [A,B,C,P:Q]
*/
		


