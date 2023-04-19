let details={
  Name:"Anil kumar Jatav",
  College:"Masai",
  Student_Code:"fw27_060",
  Pincode:285001,
  Hobbies:["cricket","Chess","Pc Games"]
}


//accessing all the key with a unique for..in loop 
//can not use dot notation in for in loop


for(let a in details){
  console.log(a+":"+details[a]) //**
  
}