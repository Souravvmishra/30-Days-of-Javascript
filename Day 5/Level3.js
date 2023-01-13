1. The following is an array of 10 students ages:

 const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
* Sort the array and find the min and max age
ages.sort()
console.log(ages[0]);
console.log(ages[ages.length-1]);

* Find the median age(one middle item or two middle items divided by two)
ages.sort()
ages.length % 2 == 0 ? 
console.log(ages[ages.length/2]) : 
console.log((ages[Math.floor(ages.length/2)]+(ages[Math.ceil(ages.length/2)]))/2);  

* Find the average age(all items divided by number of items)
let sum = 0
let avg = 0
ages.filter((a) => {
    sum += a;
})
avg = sum/ages.length
console.log(ages);
console.log(avg);


* Find the range of the ages(max minus min)
ages.sort()
console.log(ages[ages.length-1] - ages[0]);

* Compare the value of (min - average) and (max - average), use abs() method 
ages.sort 
let min = ages[0]
let max = ages[ages.length-1]
let average = avg // from last ques
console.log(Math.abs((min-average) - (max - average)));




2.Slice the first ten countries from the countries array
let countries = require("./countries")
let newCountries = countries.countries.slice(0,10)
console.log(newCountries);

3. Find the middle country(ies) in the countries array
countries.countries.length % 2 == 0 ? 
console.log(countries.countries[countries.countries.length/2]) : 
console.log((countries.countries[Math.floor(countries.countries.length/2)]+" " +(countries.countries[Math.ceil(countries.countries.length/2)])));  


4. Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
countries.countries.length % 2 == 0? "" : countries.countries.push("Holand")
const part1 = countries.countries.slice(0, countries.countries.length/2)
const part2 = countries.countries.slice(countries.countries.length/2, countries.countries.length)
console.log({part1});
console.log({part2});
