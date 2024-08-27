// 104 - masala   Berilgan ob'ekt ichidagi barcha qiymatlar yig'indisini toping (faqat son qiymatlarni)
function sumObjectValues(obj) {
    let sum = 0;
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            sum += obj[key];
        } else if (typeof obj[key] === 'object' && obj[key] !== null) {
            sum += sumObjectValues(obj[key]);
        }
    }

    return sum;
}

// Test case
// const obj = {
//     a: 1,
//     b: {
//         c: 2,
//         d: {
//             e: 3
//         }
//     }
// };

// console.log(sumObjectValues(obj)); 
// Output: 6





// 105 - masala    Berilgan massiv ichidagi elementlarni n qadamga chapga siljiting.

function rotateArrayLeft(arr, n) {
    
   return arr.slice(n).concat(arr.slice(0,n)) 
}

// Test case
// console.log(rotateArrayLeft([1, 2, 3, 4, 5], 2)); 
// Output: [3, 4, 5, 1, 2]




// 106 - masala  Berilgan satr ichidagi barcha raqamlarni olib tashlang.
function removeDigits(str) {
   console.log(str.replace(/\d+/g, ''));
}

// Test case
// removeDigits("abc123def456"); 
// Output: "abcdef"



// 107 - masala   Berilgan massivdan faqat toq indekslaridagi elementlarni qaytaring.

function oddIndexedElements(arr) {
    let new_arr = []
    arr.forEach((item, index) =>{
        if (index % 2 !== 0) {
            new_arr.push(item)
        }
    })
    console.log(new_arr);
}

// Test case
// oddIndexedElements([1, 2, 3, 4, 5, 6]); 
// Output: [2, 4, 6]



// 108 - masala    Berilgan ob'ekt ichidagi barcha son qiymatlarni ikki baravar oshiring.
function doubleValues(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            obj[key] *= 2;
        } else if (typeof obj[key] === 'object' && obj[key] !== null) {
            doubleValues(obj[key]);  
        }
    }
    return obj;
}

// Test case
// const obj = {
//     a: 1,
//     b: {
//         c: 2,
//         d: {
//             e: 3
//         }
//     }
// };

// console.log(doubleValues(obj)); 
// Output: { a: 2, b: { c: 4, d: { e: 6 } } }



// 109 - masala     Berilgan ob'ekt ichidagi kalit-qiymat juftliklarini arrayga aylantiring.
function objectToArray(obj) {
    return Object.entries(obj);
    
}

// Test case
// const obj = {
//     a: 1,
//     b: 2,
//     c: 3
// };
// console.log(objectToArray(obj)); 
// Output: [["a", 1], ["b", 2], ["c", 3]]




// 110 - masala   Berilgan ob'ekt ichidagi barcha kalitlarni ularning qiymati bo'yicha tartiblang.

function sortKeysByValue(obj) {
    return Object.fromEntries(
        Object.entries(obj).sort(([, value1], [, value2]) => value1 - value2)
    );
}

// Test case
const obj = {
    a: 3,
    b: 1,
    c: 2
};

// console.log(sortKeysByValue(obj)); 
// Output: { b: 1, c: 2, a: 3 }
