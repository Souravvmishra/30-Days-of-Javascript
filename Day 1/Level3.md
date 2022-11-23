# Day 1 of JavaScript 
## Level 3




## Question 1
### let str = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
### console.log((str.match(/love/gi)).length)



## Question 2
### str = 'You cannot end a sentence with because because because is a conjunction'
### console.log(str.match(/because/g).length)



## Question 3
### const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
### console.log(sentence.replace(/[%$@#:;&!?]/gi, ""))
### const str3 = sentence.replace(/[%$@#:;&!?]/gi, "")




## Question 4
### str = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
### const nums = str.match(/\d+/g)
### console.log(str.match(/\d+/g))
### console.log(+nums[0]*12 + +nums[1] + +nums[2]*12)

