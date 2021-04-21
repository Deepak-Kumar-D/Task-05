var obj = {"name" : "ISRO", "age" : 35, "role" : "Scientist"};

function convertListToObject(obj) {
 var myArr = [];
 for(let i in obj)
 {
     myArr.push([i,obj[i]]);
 }
 return myArr;
}

console.log(convertListToObject(obj));