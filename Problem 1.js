var obj = {"name" : "RajiniKanth", "age" : 33, "hasPets" : false};

function printAllValues(obj) {
    let newArray=[];
    newArray.push(obj.name,obj.age,obj.hasPets);
    return newArray;
}

console.log(printAllValues(obj));