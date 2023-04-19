// count the total words
let a = "good for you"
count = 0
for( let i =0;i<a.length;i++){
  if(a[i]==0){
    count++
  }
}
console.log('total words',count+1)