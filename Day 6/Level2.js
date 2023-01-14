// Develop a small script which generate any number of characters random id:
//   fe3jo1gl124g
//   xkqci4utda1lmbelpkm03rba


let len = Math.ceil(Math.random()*25)
let chars = "qwertyuiopasdfghjklzxcvbnm1234567890"
let charsArray = chars.split("")
let id = ""
for (let i = 0; i < len; i++) {
    
    id += charsArray[Math.floor(Math.random()*charsArray.length)]
}
console.log(id);


// Write a script which generates a random hexadecimal number.
// '#ee33df'
let chars = "0123456789ABCDEF"
charsArray = chars.split("")
let hex = ""
for (let i = 0; i < 6; i++) {
    hex += charsArray[Math.floor(Math.random()*charsArray.length)]
    
}

console.log(`#${hex}`);



// Write a script which generates a random rgb color number.
// rgb(240,180,80)
let rgb = []
for (let i = 0; i < 3; i++) {
     rgb[i] = Math.ceil(Math.random()*256)
    
}

console.log(`rgb(${rgb[0]+","+rgb[1]+","+rgb[2]})`);


// Using the above countries array, create the following new array.

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

  
const newCountries = []
countries.forEach(country => {
    newCountries.push(country.toUpperCase())
});

console.log(newCountries);

// ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]


// Using the above countries array, create an array for countries length'.
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

  
const leng = []
countries.forEach(country => {
    leng.push(country.length)
});

console.log(leng);
// [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]



// Use the countries array to create the following array of arrays:

//   [
//   ['Albania', 'ALB', 7],
//   ['Bolivia', 'BOL', 7],
//   ['Canada', 'CAN', 6],
//   ['Denmark', 'DEN', 7],
//   ['Ethiopia', 'ETH', 8],
//   ['Finland', 'FIN', 7],
//   ['Germany', 'GER', 7],
//   ['Hungary', 'HUN', 7],
//   ['Ireland', 'IRE', 7],
//   ['Iceland', 'ICE', 7],
//   ['Japan', 'JAP', 5],
//   ['Kenya', 'KEN', 5]
// ]
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

  
const newCountries = []
countries.forEach(country => {
    let newCountry = [country, country.slice(0,3).toUpperCase(), country.length]
    newCountries.push(newCountry)
});

console.log(newCountries);





// In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.

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

  
const newCountries = []
countries.forEach(country => {
    country.includes("land") ? newCountries.push(country) : ""
});

newCountries.length === 0 ? console.log("All these countries are without land"): console.log(newCountries);
// ['Finland','Ireland']


// In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.
// ['Albania', 'Bolivia','Ethiopia']
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

  
const newCountries = []
countries.forEach(country => {
    country.endsWith("ia") ? newCountries.push(country) : ""
});

newCountries.length === 0 ? console.log("These are countries ends without ia."): console.log(newCountries);



// Using the above countries array, find the country containing the biggest number of characters.

// Ethiopia

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

let biggest = countries[0]
countries.forEach(country => {
    country.length > biggest.length ? biggest = country : ""
});
console.log(biggest);


// Using the above countries array, find the country containing only 5 characters.

// ['Japan', 'Kenya']


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

  
const newCountries = []
countries.forEach(country => {
    country.length == 5 ? newCountries.push(country) : ""
});
console.log(newCountries);



// Find the longest word in the webTechs array
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]

let biggest = webTechs[0]
webTechs.forEach(webTech => {
    webTech.length > biggest.length ? biggest = webTech : ""
});
console.log(biggest);



// Use the webTechs array to create the following array of arrays:

// [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
const newwebTechs = []
webTechs.forEach(webTech => {
    let newwebTech = [webTech, webTech.length]
    newwebTechs.push(newwebTech)
});

console.log(newwebTechs);



// An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack
  
const mernStack = ['MongoDB', 'Express', 'React', 'Node']
let acronym = ""
mernStack.forEach((mern) => {
    acronym += mern[0]
})
console.log(acronym);

// Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
const arr = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
arr.forEach(element => {
    console.log(element);
});


// This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
const fruits = ['banana', 'orange', 'mango', 'lemon']
for (let i = fruits.length-1; i >= 0 ; i--) {
    
    console.log(fruits[i]);
}




// Print all the elements of array as shown below.

//   const fullStack = [
//     ['HTML', 'CSS', 'JS', 'React'],
//     ['Node', 'Express', 'MongoDB']
//   ]
//   HTML
//   CSS
//   JS
//   REACT
//   NODE
//   EXPRESS
//   MONGODB



const fullStack = [
        ['HTML', 'CSS', 'JS', 'React'],
        ['Node', 'Express', 'MongoDB']
      ]

fullStack.forEach(element => {
    element.forEach((i)=>{
        console.log(i);
    })
});