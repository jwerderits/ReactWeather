// var names = ['Andrew', 'Julie', 'Jen'];
//
// names.forEach(function(name){
//   console.log('forEach', name);
// });
//
// names.forEach((name) => {
//   console.log('arrowFunc', name);
// });
//
// names.forEach((name) => console.log(name));
//
// var returnMe = (name) => name + '!';
// console.log(returnMe('Jacob'));
//
// var person = {
//   name: 'Jacob',
//   greet: function () {
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to ' + name);
//     });
//   }
// };
//
// person.greet();

// Challenge Area

function add (a, b) {
  return a + b;
}

console.log(add(1,3));
console.log(add(9,0));

var addStatement = (a,b) => {
  return (a + b);
}

console.log(addStatement(1,3));
console.log(addStatement(9,0));


var addMe = (a, b) => a+b;
console.log(addMe(1,3));
console.log(addMe(9,0));
