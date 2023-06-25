function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}

const Circle1 = new Function('radius', 'this.radius = radius; this.draw = function(){console.log(\'draw\');}')

const circle = new Circle1(1.0);

console.log(circle)

// let a = new Circle.appl({}, 2.0);
// console.log(a);

//Add or remove object properites
const new_circle = new Circle(1.);

new_circle.location = {x: 1};

console.log(new_circle)

delete new_circle.location;

console.log(new_circle);

//Looping through 
for(let key in circle){
    console.log(key, circle[key]);
}

//If statement
for(let key in circle){
    if(typeof circle[key] !== 'function'){
        console.log(key, circle[key]);
    }
}

const keys = Object.keys(circle);

console.log(keys);