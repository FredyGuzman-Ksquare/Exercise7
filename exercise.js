



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
    console.log(arr1Size)
    console.log(arr2Size)

    if(arr1Size>arr2Size){
        arr2Size++;
    }else{
        arr1Size++;
    }

    while(i<arr1Size&&j<arr2Size){
        if(arrA[i]<arrB[j]){
            finalArray.push(arrA[i++]);
        }else{
            finalArray.push(arrB[j++]);
        }
         
    }
    if(i<arr1Size||j<arr2Size){
        if(i<arr1Size-1){
            finalArray.push(arrA[i])

        }else if(j<arr2Size){
            finalArray.push(arrB[j])
        }
    }
    console.log(arr1Size)
    console.log(arr2Size)
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