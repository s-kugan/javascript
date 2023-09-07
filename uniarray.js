/****************************************************************************************************
 * This code will remove the duplicate elements in an array and return an array with unique elements
****************************************************************************************************/



let uniqarray = (duparray)=>{

    let uniqarray = [];

    for (let i=0;i<duparray.length;i++){
        if (uniqarray.indexOf(duparray[i])==-1){
            uniqarray.push(duparray[i])
        }
    }

    console.log('uniqarray***',uniqarray);
    return uniqarray;



}



uniqarray([1,4,6,1,9,3,5,10,9,23,4]);