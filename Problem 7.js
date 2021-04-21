var expected = {"foo": 5, "bar": 6};
var actual = {"foo": 6, "bar": 6}
var testName="";

function assertObjectsEqual(actual, expected, testName){
 var str1=JSON.stringify(expected);
 var str2=JSON.stringify(actual);
 
 if(str2===str1)
 {
     return "Passed";
 }
 else
 {
     
     return "FAILED ["+ testName +"] Expected "+str1+" but got "+str2;
 }
}

console.log(assertObjectsEqual(actual, expected, "my test"));