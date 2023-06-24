let selectedColors = ['red', 'blue'];
selectedColors[2] = 1;

function greet(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName);
}
console.log(selectedColors);
greet('bob', 'smith');