var programinglanguages = [ "JavaScript", "Php ", "Python" ]

console.log(programinglanguages)

console.log(programinglanguages[0])

//array method - push e shton  nje element ne fund te array
programinglanguages.push("Java")
console.log(programinglanguages)

//array Method - pop (e largon elementin e fundit ne array )
programinglanguages.pop()
console.log(programinglanguages)

//array Method - unshift(e shton nje element ne fillim te nje array )
programinglanguages.unshift("C#")
console.log(programinglanguages)

//array Method - unshift(e largon nje element ne fillim te ne array )
programinglanguages.shift()
console.log(programinglanguages)


programinglanguages.splice(0,2, "Ruby")
console.log(programinglanguages)

console.log(Math.random() *5)
console.log((Math.random() *6))

var students = ("John", "Mike")
var [s1 , s2] = students;

console.log(s1)
console.log(s2)

var places = ["London", "Paris", "New York","Berlin"]
var[first , second]= places

console.log(first)
console.log(second)

var numbers = [1,2,3,4,5,6,7,8,9,10]
var[firstNum , secondNum, ...otherNum]= numbers

console.log (firstNum)
console.log (secondNum)
console.log (otherNum)
