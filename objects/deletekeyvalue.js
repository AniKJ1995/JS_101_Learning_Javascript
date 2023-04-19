let details={
  Name:"Anil kumar Jatav",
  College:"Masai",
  Student_Code:"fw27_060",
  Address:"New Delhi",
  Pincode:285001
}


//delete the key and its value inside the object

delete details.Address;

delete details["Pincode"];

console.log(details)