let empolyee = {
    baseSalary: 30_000,
    overtime: 10,
    rate: 20,
    getWage: function(){
        return this.baseSalary + (this.overtime * this.rate);
    }
};

empolyee.getWage();

const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    draw: function(){
        console.log('draw');
    }
};

circle.draw();


//Factory function 

function createCircle(radius){
    return {
        radius,
        draw: function(){
            console.log('draw');
        }
    };
}


let newcircle = createCircle(1.0);
console.log(newcircle)
newcircle.draw()

//Constructor Function
function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}

const another = new Circle(1.0);
another.draw();
console.log(another);

console.log(empolyee);