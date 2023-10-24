//Find the minimum and maximum elements in an array

const findminmax = (minmax)=>{

    let min = minmax[0];
    let max = minmax[0];
 

    for(let i=0;i<minmax.length;i++){

        if (minmax[i]>max){
            max = minmax[i];
        }

        if(minmax[i]<min){
            min=minmax[i];
        }
    }

    return {
       min,max
    }
}

console.log(findminmax([1, 423, 6, 46, 34, 23, 13, 53, 4 ]));