// Copy countries array(Avoid mutation)
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

  

let newArr = countries.map((i) => {
    return i
})
console.log(newArr);


// Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries
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

  

let newArr = countries.map((i) => {
    return i
})
const sortedCountries = newArr.sort()
console.log(sortedCountries);



// Sort the webTechs array and mernStack array

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]

  webTechs.sort()
  
const mernStack = ['MongoDB', 'Express', 'React', 'Node']
mernStack.sort()

// Extract all the countries contain the word 'land' from the countries array and print it as array
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

// Find the country containing the hightest number of characters in the countries array

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


// Extract all the countries containing only four characters from the countries array and print it as array
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
    country.length == 4 ? newCountries.push(country) : ""
});
console.log(newCountries);


// Extract all the countries containing two or more words from the countries array and print it as array
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
    country.length >= 2 ? newCountries.push(country) : ""
});
console.log(newCountries);


// Reverse the countries array and capitalize each country and stored it as an array
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

 let newArray =  countries.reverse()
console.log(newArray);