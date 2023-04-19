let details={
  Name:"Anil kumar Jatav",
  College:"Masai",
  Student_Code:"fw27_060",
  Pincode:285001,
  Hobbies:["cricket","Chess","Pc Games"],
  Location:{
    city:"Kanpur",
    State:"Uttar Pradesh",
    Pincode:22216,
    Landmark:"Regency Hospital"
    
  }
}

//accessing object in the object

console.log(details.Location.State)
console.log(details["Location"]["Pincode"])