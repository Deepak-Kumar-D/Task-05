var arr = ["GUVI", "I", "am", "a geek"];

function transformFirstAndLast(arr) {
    var newObject={};
    var x=arr[0];
    newObject[x]=arr[arr.length-1];
    return newObject;
}

console.log(transformFirstAndLast(arr));