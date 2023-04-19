// let n=3
// let a=""
// let count=0;
// for(i=1;i<=n*n;i++){
//   if(count==n-1){
//       a=a+i+"\n";
    
// count=0
//   }
//   else{
//       a=a+i+" ";
// count++
//   }
// }
//   console.log(a)

let n=4

for(i=1;i<=n*n;i=i+n){
  let a=""

  for(j=i;j<i+n;j++){
    a=a+j+" "


  }
        console.log(a)
}
