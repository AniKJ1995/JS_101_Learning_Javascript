let arr=["anil","hitesh","mota","hitesh"]
let count=0
let obj={}
 for(i=0;i<arr.length;i++){ 
 
   obj[arr[i]]=1
     
 }
for(let key in obj){
  count++
}
console.log("No of unique items in Array is :",count)
