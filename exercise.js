



// Sorting function
const sortArray= (arr)=>{
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
                temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }
        }
    }
    return arr;
}

const mergeArrays=(arr1,arr2)=>{
    let i=0;
    let j=0;
    let finalArray=[];
    let arr1Size=arr1.length;
    let arr2Size=arr2.length;
    if(arr1Size>arr2Size){
        arr2Size++;
    }else{
        arr1Size++;
    }

    while(i<arr1Size&&j<arr2Size){
        if(arr1[i]<arr2[j]){
            finalArray.push(arr1[i++]);
        }else{
            finalArray.push(arr2[j++]);
        }
         
    }
    return finalArray;
}

var arr1=[5,7,2,5,6];
var arr2=[3,6,4,3,8];
var sortedA1 = sortArray(arr1);
var sortedA2 = sortArray(arr2);
console.log(sortedA1);
console.log(sortedA2);
var sortedMergedArray= mergeArrays(sortedA1,sortedA2);
console.log(sortedMergedArray);