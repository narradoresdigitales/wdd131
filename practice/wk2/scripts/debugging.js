// const PI = 3.14;
// let  radius = 3;
// let area = 0;

// // view assignment to PI
// console.log('PI = ', PI)
// // calculate area
// area = radius * radius * PI;
// // display result
// console.log('Area2: ', area)
// // new assignment to radius
// radius = 4;
// //perform calculation
// area = radius * radius * PI;
// // view result
// console.log('Area2: ', area);

// Activity 2 // 

const PI = 3.14;
let area = 0;

// create a new circleArea function
function circleArea(radius) {
    const area = radius * PI;
    return area;
}
area = circleArea(3);
console.log('Area1: ', area);

area = circleArea(4);
console.log('Area2: ', area);
