2. First remove all the punctuations and change the string to array and count the number of words in the array
* let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'.replace(/[,.]/g, "")
const textArray = text.split(" ")
console.log(textArray.length)

3. In the following shopping cart add, remove, edit items

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
* add 'Meat' in the beginning of your shopping cart if it has not been already added
shoppingCart.includes("Meat")? shoppingCart.push("Meat") : ""


* add Sugar at the end of you shopping cart if it has not been already added
shoppingCart.includes("Suagr")?shoppingCart.push("Sugar") : ""


* remove 'Honey' if you are allergic to honey
let allergic = true
allergic? shoppingCart.splice(shoppingCart.indexOf("Honey"),1):""


* modify Tea to 'Green Tea'
shoppingCart[shoppingCart.indexOf("Tea")] = "Green Tea"
console.log(shoppingCart);


4. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

let countries = require("./countries")
countries.countries.includes("ETHIOPIA")? "":countries.countries.push("ETHIOPIA");
console.log(countries.countries);

5. In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
let webTechs = require("./web_tech")
webTechs.webTechs.includes("Sass")?console.log('Sass is a CSS preprocess'):webTechs.webTechs.push("Sass");
console.log(webTechs.webTechs);


6. Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)
console.log(fullStack)



