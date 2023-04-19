let B =['banana','banana','banana','banana','apple']
let N=5;
let count=0
for(i=0;i<N;i++){
        for(j=i+1;j<N;j++){
            if(B[i]!=B[j]){
              count++
            }
        }
    }
if(count>0){
      console.log('Mixed Type')

}
else{
      console.log('Single Type')

}
    
