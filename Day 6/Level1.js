// Exercises: Level 1



const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  
const mernStack = ['MongoDB', 'Express', 'React', 'Node']


//1.  Iterate 0 to 10 using for loop, do the same using while and do while loop
for (let i = 0; i <= 10; i++) {
    console.log(i);    
}


//2. Iterate 10 to 0 using for loop, do the same using while and do while loop
for (let i = 10; i >= 0; i--) {
    console.log(i);    
}


//3. Iterate 0 to n using for loop
let n = 10;
for (let i = 0; i < n; i++) {
    console.log(i);    
}


//5. Write a loop that makes the following pattern using console.log():
//     #
//     ##
//     ###
//     ####
//     #####
//     ######
//     #######
let n1 = 7;
for (let i = 0; i < n1; i++) {
    for (let j = 0; j < i; j++) {
        process.stdout.write("*")
        // prevent new line 
    }
    console.log();
}




//6. Use loop to print the following pattern:

// 0 x 0 = 0
// 1 x 1 = 1
// 2 x 2 = 4
// 3 x 3 = 9
// 4 x 4 = 16
// 5 x 5 = 25
// 6 x 6 = 36
// 7 x 7 = 49
// 8 x 8 = 64
// 9 x 9 = 81
// 10 x 10 = 100


for (let i = 0; i < 11; i++) {
    console.log(`${i} x ${i} = ${i*i}`);
}



//7. Using loop print the following pattern

//  i    i^2   i^3
//  0    0     0
//  1    1     1
//  2    4     8
//  3    9     27
//  4    16    64
//  5    25    125
//  6    36    216
//  7    49    343
//  8    64    512
//  9    81    729
//  10   100   1000

for (let i = 0; i < 11; i++) {
    console.log(`${i} ${i**2}  ${i**3}`);
    
}


//8. Use for loop to iterate from 0 to 100 and print only even numbers

for (let i = 0 ; i <= 100; i += 2) {
    console.log(i);
    
}

//9. Use for loop to iterate from 0 to 100 and print only odd numbers
for (let i = 1 ; i <= 100; i += 2) {
    console.log(i);
    
}


//10. Use for loop to iterate from 0 to 100 and print only prime numbers
for (let i = 3; i <= 100; i++) {
    let flag = false
    for (let j = 2; j < i; j++) {
        if ((i % j) === 0 ) {
            flag = true;
            break;
        }
        
    }
    if (!flag) {
        console.log(i);
    }
}


//11. Use for loop to iterate from 0 to 100 and print the sum of all numbers.
let sum = 0;
for (let i = 0; i <= 100; i++) {
    sum = sum + i    
}
console.log(sum);



// The sum of all numbers from 0 to 100 is 5050.


//12. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
let sumEven = 0;
let sumOdd = 0;
for (let i = 0; i <= 100; i++) {
    i % 2 === 0 ? sumEven += i : sumOdd += i
}
console.log({sumEven, sumOdd});


// The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.




//13. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
let sumEven = 0;
let sumOdd = 0;
for (let i = 0; i <= 100; i++) {
    i % 2 === 0 ? sumEven += i : sumOdd += i
}
console.log([sumEven, sumOdd]);
//   [2550, 2500]



//14. Develop a small script which generate array of 5 random numbers
let randArr = []
for (let i = 0; i < 5; i++) {
    randArr.push(Math.floor(Math.random()*9))
    
}

console.log(randArr);


//15. Develop a small script which generate array of 5 random numbers and the numbers must be unique
let randArr = []
while (randArr.length !== 6) {
    let newNum = (Math.floor(Math.random()*9))
    if (!randArr.includes(newNum)) {
        randArr.push(newNum)
    }
    
}

console.log(randArr);

//16. Develop a small script which generate a six characters random id:

let chars = "qwertyuiopasdfghjklzxcvbnm1234567890"
let charsArray = chars.split("")
let id = ""
for (let i = 0; i < 5; i++) {
    
    id += charsArray[Math.floor(Math.random()*charsArray.length)]
}
console.log(id);

// 5j2khz