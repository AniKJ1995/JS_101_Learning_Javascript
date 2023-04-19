let l_c=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let u_c=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Z"];
let char="a"

for(let i=0;i<l_c.length;i++){
  if(l_c[i]==char){
    char=u_c[i];
  }
}
console.log(char);