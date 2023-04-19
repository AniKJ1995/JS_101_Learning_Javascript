//*************************   1st type  *****************************
let a =[1,2,89,4612,16,-56,-23165,-154]
let min = +Infinity;
let max = -Infinity;

for(let i=0;i<a.length;i++){
  if(a[i]<min){
    min = a[i]
  }
}

for(let j=0;j<a.length;j++){
  if(a[j]>max){
    max = a[j]
  }
}
console.log('min-',min,'max-',max)

//*********************    2nd type   ******************************

let Mn = a[0];
let Mx = a[0];

for(let i=0;i<a.length;i++){
  if(a[i]<Mn){
    Mn = a[i]
  }
}
for(let j=0;j<a.length;j++){
  if(a[j]>Mx){
    Mx = a[j]
  }
}
console.log('Mn-',Mn,'Mx-',Mx)


//****************************   3rd type   ************************


let Kam = +Infinity;
let Jyada = -Infinity;

for(let i=0;i<a.length;i++){
  if(a[i]<Kam){
    Kam = a[i]
  }
  if(a[i]>Jyada){
    Jyada = a[i]
  }
}
console.log('Kam-',Kam,'Jyada-',Jyada)
