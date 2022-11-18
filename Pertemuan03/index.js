// ! Var ==> Itu bisa diubah kapanpun pada saat program berjalan

var x = 10;
console.log(x);
console.log(typeof x);

var x = "Hallo World!";
console.log(x);
console.log(typeof x);

let y = 50.8;
console.log(y);
console.log(typeof y);

y = "Ini hasil deklarasi ulang";
console.log(y);
console.log(typeof y);

let cars = ["BMW", "Honda", "Toyota"];
console.log(cars);
console.log(typeof cars);

let trainer = {
  // * Attribute ==> Apapun yang ada di object tersebut
  // * Value ==> Nilai dari attribute tersebut
  firstName: "Vincentius Loanka",
  lastName: "Sinaga",
  age: 20,
  NIM: "2440015846",

  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

let result = sum(10, 20);

function sum(angka1, angka2) {
  return angka1 + angka2;
}

console.log("Hasil = " + result);

function helloWorld() {
  alert("Hello World!");
}

// helloWorld();

// const c = 15;
// c = 18;

let jam = 20;

// if (jam < 11) {
//   alert("Selamat pagi");
// } else if (jam > 11 && jam < 15) {
//   alert("Selamat siang");
// } else {
//   alert("Selamat malam");
// }

for (i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}

document.getElementById("heading1").innerHTML = "Hasil";

function show() {
  document.getElementById("targetManipulation").style.visibility = "Visible";
}

function hide() {
  document.getElementById("targetManipulation").style.visibility = "hidden";
}

function validateform() {
  var name = document.myform.name.value;
  var password = document.myform.password.value;

  if (name == null || name == "") {
    alert("Name can't be blank");
    return false;
  } else if (password.length < 6) {
    alert("Password must be at least 6 characters long.");
    return false;
  }
}
