// Part I

const calculateSum = (arr) => {
    return arr.reduce((total,current) => {
        return total + current;
    }, 0);
}
console.log(calculateSum([12, 3, 45, 65, 23, 82, 9, 10, 44, 72]))


const calculateAvg = (numbers) =>{
    return numbers.reduce((total,current) =>{
        return (total + current)/numbers.length;
    },0);
}
console.log(calculateAvg([12, 3, 45, 65, 23, 82, 9, 10, 44, 72]))


const strings=["Those", "Who","look", "Outside", "Dream"]
function longestStrings (){
    return strings.reduce(function(a,b){
        return a.length > b.length ? a : b;
    });
}
console.log(longestStrings())


const number = 5
function longerthan (){
    return strings.reduce(function(strings,number) {
        return strings.length > number ? strings: number;
    });
}

console.log(longerthan())


let counter = (n) =>{
    if(n === 0 && n < 10)
        return n;
    console.log(n);
    counter(n - 1)

}

counter(10)



// PART II

const object = [{ id: "42", name: "Bruce", occupation: "Knight", age: 41 },
    { id: "48", name: "Barry", occupation: "Runner", age: 25 },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: 19 },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: 58 },
    { id: "7", name: "Bilbo", occupation: "None", age: 111 }]


const sorted = object.sort(function(a, b){
    return a.age - b.age
});
console.log(sorted)

const filtered = object.filter(function(age){
    return age.age < 50
})

console.log(filtered)


const change = object.map(function(obj){
    let newobj = obj
    newobj['job'] = obj.occupation
    newobj['age'] = newobj['age'] + 1;
    delete obj['occupation']

   console.log(newobj)
    
})

const average = object.reduce((accumulator,item) => {
    return (accumulator + item.age)/object.length;
  }, 0);

console.log(Math.round(average))

const sum = object.reduce((accumulator, i) => {
    return (accumulator + i.age)
  }, 0);

console.log(Math.round(sum))



// PART III
// const object = [{ id: "42", name: "Bruce", occupation: "Knight", age: 41 },
//     { id: "48", name: "Barry", occupation: "Runner", age: 25 },
//     { id: "57", name: "Bob", occupation: "Fry Cook", age: 19 },
//     { id: "63", name: "Blaine", occupation: "Quiz Master", age: 58 },
//     { id: "7", name: "Bilbo", occupation: "None", age: 111 }]

const increment = object.map(function(newage){
    let newobject = newage
    newobject['age'] = newage['age'] +1
    console.log(newobject)
})

const copiedObject = object;
const incremented = object.map(function(copyage){
    let copiedObject = copyage
    copiedObject['age'] = copyage['age'] + 1
    console.log(copiedObject)
})

object.updated_at = new Date();
console.log(object)



// PART V

//How many of the scripts could be turned into functions?
// for data collections, practical loops, and data manipulation labs many of the excersices could have used functions


//Could you package your code into even smaller blocks, creating helper functions?
//yes, I could

//What else could be changed to optimize the code, knowing what you now know?
//I could create functions combined with the loops and conditional statements inside the function

