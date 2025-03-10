let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// for each
numbers.forEach(function (number) {
//  console.log(number **2)
})

// numbers.forEach((num) =>{})

// find

let found = numbers.find((number) => number  > 3)
//console.log(found)

// filter
let filtered_numbers = numbers.filter((number) => number % 2 == 0)
console.log(filtered_numbers)

// map
let new_number_array = numbers.map(function(num){
    return num ** 2
})
console.log(new_number_array)

// reduce
let result = numbers.reduce((acc, num) => acc + num, 0)
console.log(result)