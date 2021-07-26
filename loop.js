let counter = 0;
const cities = new Array(
    `London`,
    `Paris`,
    `New York`
);

while(counter < cities.length){
    console.log(cities[counter]);
    counter++;
}

for(counter = 0; counter < cities.length; counter++){
    console.log(cities[counter]);
}