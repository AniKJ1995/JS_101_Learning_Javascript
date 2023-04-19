let arr1=[58,59,56,25,15,65]
let arr2=[8,89,95,45,65,39]
let N=6 ;

let X=0;
    let count=0;
    for(i=0;i<N;i++){
      
        for(j=0;j<N;j++){
          
            if(arr2[j]==arr1[i]){
              console.log(arr1[i])
                
                count++;
              }
        }
    }
    // if(count>0){
    //     console.log(X)
    // }