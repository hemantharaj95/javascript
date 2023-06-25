function Circle(radius){
    this.radius = radius;

    let defaultLocation = {x:0, y:0}; //Local class variale

    let computeOptimumLocation = function(factor) {
        //...
    }

    this.draw = function() {
        let x, y; // Local variable vanish after function
        computeOptimumLocation(0.1);
        console.log('draw');
    }

    Object.defineProperty(this, 'defaultLocation', {
        get: function(){
            return defaultLocation;
        },
        set: function(value){
            if(!value.x || !value.y){
                throw new Error('Invalid location.');
            }
            defaultLocation = value;
        }
    });
}


let circle = new Circle(1.);
console.log(circle);
circle.defaultLocation = {x: 2.0, y:2.3};
console.log(circle);

