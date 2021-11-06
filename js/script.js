//task 1
const arr1 =  [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);
console.log(arr3)

// task 2
const arr4 = [1, 2, 3];
arr4.reverse()
console.log(arr4)

// task 4
const arr5 = [1, 2, 3];
arr5.unshift(4, 5, 6);
console.log(arr5);

// task 3
const arr6 = [1, 2, 3];
arr6.push( 4, 5, 6);
console.log(arr6);

//task 5
const arr7 =  ['js', 'css', 'jq'];
console.log(arr7[0]); // выведет первый элемент
const arr8 = arr7.shift(); // удалит первый элемент и выведет его.
console.log(arr8); 

//task 6
const arr9 =  ['js', 'css', 'jq'];
console.log(arr9[arr9.length-1]); // выведет последний элемент
const arr10 = arr9.pop(); // удалит последний элемент и выведет его
console.log(arr10);

// task 7 
const arr11 = [1, 2, 3, 4, 5];
const arr12 = arr11.slice(0, 3);
console.log(arr12);


//task 8
const arr13 = [1, 2, 3, 4, 5];
const arr14 = arr13.slice(3);
console.log(arr14);

//task 9
const arr15 = [1, 2, 3, 4, 5];
arr15.splice(1, 2);
console.log(arr15);

//task 10
const arr16 = [1, 2, 3, 4, 5];
const arr17 = arr16.splice(1,3);
console.log(arr17);

//task 11
const arr18 = [1, 2, 3, 4, 5];
arr18.splice(3,0,'a', 'b', 'c',);
console.log(arr18);

//task 12
const arr19 = [1, 2, 3, 4, 5];
arr19.splice(1,0, 'a', 'b');
arr19.splice(6 ,0, `c`);
arr19.splice(8,0,`e`);
console.log(arr19);

//task 13
const arr20 = [3, 4, 1, 2, 7];
arr20.sort();
console.log(arr20);

//task 14 
const arr21 = [5, 6, 7, 8, 9];
const result = arr21.reduce(function(sum, item) {
	return sum + item;
}, 0);
console.log(result);

//task 15 
const arr22 =  [5, 6, 7, 8, 9];
const arr23 = []
arr22.forEach(function(item) {
     return arr23.push(item**2) ;
})
console.log(arr23);

//task 16 
const arr24 = [1,-3, 5, 6,-7, 8, 9,-11];
const resultTwo = arr24.filter(function (item) {
    if (item < 0) return true;
})
console.log(resultTwo);

//task 17 
const arr25 = [1,-3, 5, 6,-7, 8, 9,-11];
const resultThree = arr25.filter(function(item) {
    if (item % 2 === 0) return true;
})
console.log(resultThree);

//task 18 
const arr26 = ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az'];
const resultFour = arr26.filter(function(item){
    if(item.length > 5) return true;
})
console.log(resultFour);

//task 19
const arr27 = [1, 2, [3, 4], 5, [6, 7]];
function array(item) {
    return Array.isArray(item);
}
const resultFive = arr27.filter(array);
console.log(resultFive);

//task 20 
const arr28 = [5,-3, 6,-5, 0,-7, 8, 9];
function num(item){
    return item < 0;
}
const resultSix = arr28.filter(num);
console.log(resultSix.length)

