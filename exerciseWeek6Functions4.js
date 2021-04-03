/*1. Write a program that checks if a given element e is in the array a.
Input: e = 3, a = [5, -4.2, 3, 7]
Output: yes
Input: e = 3, a = [5, -4.2, 18, 7]
Output: no
*/

function checkEl(e, a) {
    var result = 'No';
    for (var i = 0; i < a.length; i++) {
        if (e === a[i]) {
            result = 'Yes';
        }
    }
    return result;
}
console.log(checkEl(3, [5, -4.2, 3, 7]))
console.log(checkEl(3, [5, -4.2, 18, 7]))


/*
2. Write a program that multiplies every positive element of a given array by 2.
Input array: [-3, 11, 5, 3.4, -8]
Output array: [-3, 22, 10, 6.8, -8]
*/

function multiplEl(array) {
    var newArr = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] >= 0) {
            newArr[i] = array[i]*2;
        } else {
            newArr[i] = array[i];
        }
    }
    return newArr;
}
console.log(multiplEl([-3, 11, 5, 3.4, -8]))


/*
3. Write a program that finds the minimum of a given array and prints out its value and
index.
Input array: [4, 2, 2, -1, 6]
Output: -1, 3
*/

function minEl(array) {
    var min = array[0];
    for (var i = 1; i < array.length; i++) {
        if (min > array[i]) {
            min = array[i];
            var index = i;
        }
    }
    return 'Minimum is: ' + min + ' and its index is: ' + index;
}
console.log(minEl([4, 2, 2, -1, 6]))

/*
4. Write a program that finds the second smallest number and prints out its value.
Input array: [4, 2, 2, -1, 6]
Output: 2
*/

function secSmall(array) {
    var smallest = array[0];
    var secondSmall = array[0];
    for (var i = 1; i < array.length; i++) {
        if (smallest > array[i]) {
            smallest = array[i];
        }
    }
    for (var i = 1; i < array.length; i++) {
        if (array[i] > smallest && array[i] < secondSmall) {
            secondSmall = array[i];
        }
    }
    return secondSmall;
}

console.log (secSmall([4, 2, 2, -1, 6]))

/*
5. Write a program that calculates the sum of positive elements in the array.
Input array: [3, 11, -5, -3, 2]
Output: 16
*/

function sum(array) {
    var a = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] >= 0) {
            a += array[i];
        }
    }
    return a;
}

console.log(sum([3, 11, -5, -3, 2]))

/*
6. Write a program that checks if a given array is symmetric. An array is symmetric if it can
be read the same way both from the left and the right hand side.
Input array: [2, 4, -2, 7, -2, 4, 2]
Output: The array is symmetric.
Input array: [3, 4, 12, 8]
Output: The array isn’t symmetric.
*/

function symmArr(array) {
    var result = 'The array isn\'t symmetric';
    for (var i = 0; i < array.length; i++) {
       if (array[i] === array[(array.length-1) - i]) {
            result = 'The array is symmetric';
       }
    }
    return result;
}

console.log(symmArr([2, 4, -2, 7, -2, 4, 2]));
console.log(symmArr([3, 4, 12, 8]));

/*
7. Write a program that intertwines two arrays. You can assume the arrays are of the same
length.
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 3, 5, 8, 6, 11, 2, 9]
*/

function interArr(array1, array2) {
    var newArr = [];
    for ( var i = 0; i < array1.length; i++) {
        newArr[newArr.length] = array1[i]; 
        for(var j = i; j <= i; j++) {
            newArr[newArr.length] = array2[j];
        }
    }
    return newArr;
}

console.log(interArr([4, 5, 6, 2], [3, 8, 11, 9]))

/*
8. Write a program that concatenates two arrays.
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 5, 6, 2, 3, 8, 11, 9]
*/

function concatArr(array1, array2) {
    var newArr = [];
    for (var i = 0; i < array1.length; i++) {
        newArr[newArr.length] = array1[i];
    }
    for (var j = 0; j < array2.length; j++) {
        newArr[newArr.length] = array2[j];
    }
    return newArr;
}
console.log(concatArr([4, 5, 6, 2], [3, 8, 11, 9]))


/*
9. Write a program that deletes a given element e from the array a.
Input: e = 2, a = [4, 6, 2, 8, 2, 2]
Output array: [4, 6, 8]
*/

function delEl(e, array) {
    var newArr = [];
    for (var i = 0; i < array.length; i++) {
        if (e !== array[i]) {
            newArr[newArr.length] = array[i];
        }
    }
    return newArr;
}
console.log (delEl(2, [4, 6, 2, 8, 2, 2]))


/*
10. Write a program that inserts a given element e on the given position p in the array a. If
the value of the position is greater than the array length, print the error message.
Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
Output: [2, -2, 33, 78, 12, 5, 8]
*/

function insEl(e, p, array) {
    newArr = [];
    for (var i = 0; i <= array.length; i++) {
        if (i === p) {
            newArr[newArr.length] = e;
        } else if (i > p) {
            newArr[newArr.length] = array[i-1];
        } else if (p > array.length) {
            newArr = 'error';
        } else {
            newArr[newArr.length] = array[i];
        }
    }
    return newArr;
}
console.log(insEl(78, 3, [2, -2, 33, 12, 5, 8]))