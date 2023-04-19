let str="aaddc"
let bag=""
    for(i=0;i<str.length;i++){
        if(str[i]!=str[i+1]){
            bag=bag+str[i]
        }
        
    }
    console.log(bag)