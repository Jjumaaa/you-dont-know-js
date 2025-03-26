// object destructuring

const person = {
    first_name: "John",
    gender: "male",
    occupation: "software engineer",
    address : {
        city: "Nairobi",
        country: "Kenya",
        zip_code: "00100" },
    age: 25,
    language: function(){
        console.log("I speak French")
    } ,   
    friends: ["Alice", "Benson", "Phillip", "Collins"]

};

console.log(person["address"]["city"]);
console.log(person["friends"][2]);
console.log(person["language"]());

const {first_name, gender, age, language, friends:[a, b ,c], address: {city, zip_code}} = person;
console.log(zip_code);