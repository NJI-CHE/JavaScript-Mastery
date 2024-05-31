/*var fruits= [];
fruits.push('mango');
fruits.push('Oranges');
fruits.push('pear');
console.log(fruits)*/


function arrayBuilder(one,two, three){
    var arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    //console.log(arr);
    return arr;
}
var simpleArr = arrayBuilder;
console.log(arrayBuilder)