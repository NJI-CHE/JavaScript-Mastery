//Define a car object
const car ={
    engine: true,
    steering: true,
    speed: 'slow'
}

//Create a prototype from our obbject 
const sportsCar = Object.create(car);
sportsCar.speed = 'fast';
console.log('The Sportcar object:', sportsCar);


console.log('-------for-in is unrealible-------');
for (prop in sportsCar){
    console.log(prop);
}

console.log(' ', 'Iterating over and object and its Prototype!');

console.log('------for-of is relaible--------');
for(prop of Object.keys(sportsCar)){
    console.log(prop+ ": " + sportsCar[prop]);
}

console.log('', 'Iterating over objects;s OWN PROPERTIES only!')
