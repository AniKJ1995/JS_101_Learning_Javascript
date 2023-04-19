let x=""
let count=0
for (let i = 1; i <=9; i++) {
  if(count==2){
      x=x+i+"\n";
    
count=0
  }else{
      x=x+i+" ";
count++
  }
 
}
 console.log(x)