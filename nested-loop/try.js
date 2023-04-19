let x=['a','e','i','o','u','A','E','I','O','U']
let user="z"
count=0
for(i=0;i<x.length;i++){
  if(user==x[i]){
  count++
  }
}
if(count>0){
  console.log("Vowel")
}
else{
  console.log("Consonant")
}