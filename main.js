// 1

const number = [1, 2, 3, 4, 5];

number.push(6);

console.log(number);

number.shift();

console.log(number);

const evenNumber = number.filter((num) => num % 2 === 0);

console.log(evenNumber);

const newNumber = number.map((num) => num * 5);

console.log(newNumber);

const sum = number.reduce((acc, num) => acc + num, 0);

const average = sum / number.length;

console.log(average);

number.sort((a, b) => a - b);

console.log(number);

// 2

const celebrities = [
    {
        name: "Michael Jackson",
        age: 50,
        role: "singer"
    },
    {
        name: "Cristiano Ronaldo",
        age: 41,
        role: "footballer"
    },
    {
        name: "Taylor Swift",
        age: 36,
        role: "singer"
    },
    {
        name: "Tom Holland",
        age: 30,
        role: "actor"
    },
    {
        name: "Emma Watson",
        age: 36,
        role: "actor"
    },
    {
        name: "Bill Gates",
        age: 70,
        role: "businessman"
    },
    {
        name: "Lionel Messi",
        age: 39,
        role: "footballer"
    },
    {
        name: "Avril Lavigne",
        age: 41,
        role: "singer"
    },
    {
        name: "Justin Bieber",
        age: 32,
        role: "singer"
    },
    {
        name: "Marshall Mathers",
        age: 53,
        role: "singer"
    }
];

console.log(celebrities);

const names = celebrities.map((person) => person.name);

console.log(names);

const info = celebrities.map((person) => person.name + " is a " + person.role);

console.log(info);

const oldest = celebrities.reduce((a, b) => {
    if (a.age > b.age) {
        return a;
    } else {
        return b;
    }
});

console.log(oldest);

const youngest = celebrities.reduce((a, b) => {
    if (a.age < b.age) {
        return a;
    } else {
        return b;
    }
});

console.log(youngest);

const difference = oldest.age - youngest.age;

console.log(difference);

const minor = celebrities.some((person) => {
    return person.age < 18;
});

console.log(minor);