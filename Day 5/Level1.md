1. Declare an empty array;
const arr = []


2. Declare an array with more than 5 number of elements
const arr2 = [0,1,2,3,4,5]

3. Find the length of your array
const len = arr2.length
console.log(len);


4. Get the first item, the middle item and the last item of the array

const firstItem = arr2[0]
const middleItem = arr2[len/2]
const lastItem = arr2[len-1]
console.log(firstItem, middleItem, lastItem);

5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = ["hello", 1, 2, "world", true, null, [1,2,3]]
console.log(mixedDataTypes);

6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let companies = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon"
const itCompanies = companies.split(", ")
console.log(itCompanies);


7.  Print the array using console.log()
console.log(length);

8. Print the number of companies in the array
console.log(itCompanies.length);


9. Print the first company, middle and last company
const lenIt = itCompanies.length
const firstCompany = itCompanies[0]
const middleCompany = itCompanies[Math.round(lenIt/2)]
const lastCompany = itCompanies[lenIt-1]
console.log(firstCompany, middleCompany, lastCompany);


10. Print out each company
for (let i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies[i]);
    
}


11. Change each company name to uppercase one by one and print them out
for (let i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies[i].toUpperCase());
    
}

12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
const itCompaniesString = itCompanies.join(", ")
console.log(itCompaniesString + " are big IT companies.");

13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found

let company = google
if (itCompanies.includes(company)){
    return company 
}else return "company not found"


14. Filter out companies which have more than one 'o' without the filter method
const companyOO = itCompanies.filter((company) => {
   return company.includes("oo")
})
console.log(companyOO);



15. Sort the array using sort() method
itCompanies.sort()
console.log(itCompanies);

16. Reverse the array using reverse() method
itCompanies.reverse()
console.log(itCompanies);


17. Slice out the first 3 companies from the array
console.log(itCompanies.slice(0,3));


18. Slice out the last 3 companies from the array
lenIt = itCompanies.length
console.log(itCompanies);
console.log(itCompanies.splice(lenIt-3));


19. Slice out the middle IT company or companies from the array
console.log(itCompanies.splice(Math.round(lenIt/2),1));


20. Remove the first IT company from the array
console.log(itCompanies.shift());


21. Remove the middle IT company or companies from the array
lengthIt = itCompanies.length
console.log(itCompanies.splice(Math.floor(lengthIt/2), 1));

22. Remove the last IT company from the array
console.log(itCompanies.pop());

23. Remove all IT companies 
console.log(itCompanies.splice());