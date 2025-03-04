console.log ("Hello World!");

let fruits = [ "apple", "banana", "mango", "kiwi", "avocado" ];

console.log (fruits.length)

console.log (fruits[3])

//unshift
fruits.unshift("orange");

console.log(fruits);

//shift
fruits.shift("mango");

console.log(fruits);

//pop
fruits.pop("");

console.log(fruits);

//spread operator(...)
let new_fruits = [...fruits, "grapes", "cherry"]
console.log(fruits);
console.log(new_fruits);

let new_fruits_arr = [...fruits, "blackberry", "cherry"]
console.log(new_fruits);

//objects
let person = {  
    name: "John",
     age: 25,
     city: "New York",
        gender: 'male',
        isActive:true,
        friends: ["Jane'", "James", "Jack", "collins"]
    };  

    console.log(person.friends[3])

    console.log(person.city)

    console.log(person.age);

    function clicked(e) 
    {
        alert("I have been clicked!")

    }

    let btn = document.getElementById("click");
    
    btn.addEventListener("click", clicked );
    console.log("Button was clicked");

