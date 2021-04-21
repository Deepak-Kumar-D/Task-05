var obj = {"name" : "RajiniKanth", "age" : 25, "hasPets" : true};

function printAllKeys(obj) {
    let newArray=[];
 for(let i in obj)
 {
     newArray.push(i);
 }
 return newArray;
}

console.log(printAllKeys(obj));