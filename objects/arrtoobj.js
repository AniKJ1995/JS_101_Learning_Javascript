let arr=["Anil","Rishab","Sanchit","Hitesh","Sudhanshu"];
let object={};
//inserting the array element in the object as a key
for(i=0;i<arr.length;i++){
 // object.arr[i]=1 //we can not use dot notation inside the for loop
  object[arr[i]]=i+1
  
}
console.log(object)