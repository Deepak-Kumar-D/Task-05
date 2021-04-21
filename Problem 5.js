var arr = [["make", "Ford"], ["model", "Mustang"], ["year", 1964]];

function fromListToObject(arr) {
 var newObject = {};
 for(let i in arr)
 {
     let a=arr[i][0];
     let b=arr[i][1];
     newObject[a]=b;
 }
 return newObject;
}

console.log(fromListToObject(arr));