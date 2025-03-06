let year = "2025"

function greetings() {
    let message = "welcome to the year"
    //console.log(message + " " + year)
    console.log('${message} ${year}')

}
greetings()

//console.log(message)
//block scope {}

if(true){
    var name = "Hillary"
    console.log('Hi ${name}')
}

//console.log(name)
let age = 20
if(age > 18){
    console.log("is adult")
}
else if (condition2){

} else {
    console.log("is child")
}