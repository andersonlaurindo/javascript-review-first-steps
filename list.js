const cities = new Array(
    `London`,
    `Paris`,
    `New York`
);

console.log(cities); //[ 'London', 'Paris', 'New York' ]

cities.push(`Rio de Janeiro`);

console.log(cities); //[ 'London', 'Paris', 'New York', 'Rio de Janeiro' ]

cities.splice(2, 1);

console.log(cities); //[ 'London', 'Paris', 'Rio de Janeiro' ]

console.log(cities[1]); //Paris