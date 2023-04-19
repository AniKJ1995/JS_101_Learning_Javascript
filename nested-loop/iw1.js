for(let i=1;i<=12;i++){
  console.log("Month",i)

  if(i==2){
    for(j=1;j<=28;j++){
      console.log("Day",j)
    }
  
  }
  else if(i==1||i==3||i==5||i==7||i==8||i==10||i==12){
    for(j=1;j<=31;j++){
      console.log("Day",j)
    }
  }
  else{
    for(j=1;j<=30;j++){
      console.log("Day",j)
    }
  }
}