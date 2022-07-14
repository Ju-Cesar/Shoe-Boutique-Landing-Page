// function diffArray(arr1, arr2) {
//     return arr2.filter(x => arr1.indexOf(x) == -1).concat(arr1.filter(x => arr2.indexOf(x) == -1));
// }
function diffArray(arr1, arr2) {
    const newArr = arr1.concat(arr2);
    const countArr = []
    console.log(newArr);
    const obj = newArr.reduce((count,x) => {
        count[x] = count[x] ? count[x] + 1 : 1;
        return count;
    },{})
    console.log(obj);
    for (let c in obj){
        if(obj[c] == 1) countArr.push(c);
    }
    return countArr
    
}
console.log( diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));