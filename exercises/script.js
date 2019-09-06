// alert("Hello JavaScript!");

// alert("example foreach");
// [1,2].forEach(alert)

// // declare variable
// let var1;
// var1 = 'good morning';
// console.log(var1);

// let name = 'Madalina';
// let age = 23;
// let city = 'Oradea';

// let message;
// // message = name; //am copiat variabila name in variabila message
// message = 'Madalina';
// message ='Denisa'; //cand am modificat valoarea datele vechi sunt eliminate din variabila
// console.log(message);

// const myBirthday = '11.11.1995';
// const myBirthday = '29.11.1994'; //vom avea eroare deoarece valoarea constantei nu se schimba

// let admin, name;

// admin = 'Madalina';

// name = admin;

// alert(admin);

// let name = "Denisa";
// console.log(`Hi, ${name}`);
// console.log(`result ${1 + 10}`);

// let value = false;
// console.log(typeof value);

// //conversia valorii intr-un sir
// value = String(value);
// console.log(typeof value);

// let string = '1111';
// console.log(typeof string);

// //conversia valorii unui sir la un numar
// let number = Number(string);
// console.log(typeof number);

// let age = prompt('how old are you', 23);
// console.log(`you are ${age} years old`);

//condition if

// if("0") {
  // alert('true');
// }

// let value = prompt ("What's the official name of JS?");

// if(value == 'javascript') {
//   alert('Right');
// } else {
//   alert('False');
// }

// let num = prompt("What the date is today?");

// if(num == '14'){
//   alert ('yes')
// } else {
//   alert('no');
// }

// let value1 = prompt ('Type a number', '');

// if(value1 > 0){
//   alert(1);
// } else if ( value1 < 0) {
//   alert(-1);
// } else {
//   alert (0);
// }

// if ( a + c < 11){
//   result = "result";
// } else {
//   result = "over";
// }
// //if rescris cu operatorul ternary ?
// result = (a + c < 11) ? 'result' : 'over';

// alert( 1 && null && 2 ); // null, este prima valoare falsa din lista

// loops while and for
//starea este verificata inainte de fiecare repetare.

// let a = 0;

// while (a < 11) {
//   console.log(a);
//   a++;
// }

// //condition do..while folosim vrem ca corpul buclei sa fie executat cel putin o data

// let b = 0;
// do {
//   console.log(b);
//   b++;
// } while (b < 11);

// //condition for

// for (let i = 0; i <= 5; i++){
//   console.log(i);
// }

// //break

// let nickname = 0;

// while (true) {
//   let text = prompt("enter a name:", "");
//   if (!text) break;
//   nickname += text;
// }
// console.log("nickname:" + nickname);

//functions

// function showName(){
//   console.log('Madalina Denisa');
// }
// showName();

// function showNickname(){
//   let message = "fsfafafasfaf"; //variabila locala

//   console.log(message);
// }

// showNickname();

// let showName = 'Madalina'; //variabila globala

// function showMessage() {
//   // let message = 'Hello,' + showName;
//   showName = 'Denisa';
//   let message = 'Hello,' + showName;
//   console.log(message);
// }
// console.log(showName);
// showMessage();
// console.log(showName);

// //functions with parameters

// function showAlert(from, text){
//   console.log(from + ':' + text);
// }
// showAlert('Madalina','pleaca');
// showAlert('Madalina', 's-a trezit');

// //return poate fi in orice loc al functiei sau putem avea mai multe aparitii de return
// function dif(a,b){
//   return a - b;
// }

// let result = dif(10, 7);
// console.log(result);

// function ask(question, yes, no) {
//   // argumentele functiei ask sunt numite functii callback
//   if (confirm(question)) yes();
//   else no();
// }

// function showOK() {
//   //devine apel invers pentru raspunsul "da"
//   console.log("you agreed.");
// }

// function showCancel() {
//   //devine apel invers pentru raspunsul "nu"
//   console.log("you canceled");
// }

// ask("do you agree?", showOK, showCancel);

//arrow functions

// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }

// ask(
//   "do you agree?",
//   () => console.log("you agree"),
//   () => console.log("you canceled")
// );

//objects
// let animal = {
//   name: "Pufi",
//   age: 7,
//   color: "white",
//   "lost animal": false
// };

// for (let key in animal) {
//   console.log(key + ":" + animal[key]);
//   console.log(animal[key]); //valoarea pentru key
// }

// // console.log(animal.name);
// // console.log(animal.color);
// // console.log(animal.age);

// // delete animal.age;

// let numbers = {
//   "6" : "Oradea",
//   "2" : "Cluj",
//   "3" : "Timisoara"
// };

// for (let num in numbers) {
//   console.log(num);
// }

// //o variabila nu stocheaza obiectul in sine si adesa in memoria adica o referinta
// //cand o variabila de obiect este copiata - referinta este copiata , obiectul nu este duplicat

// let myName = {
//   name : "Denisa",
//   age : 12
// };

// let youAdmin = myName;
// console.log(myName.name);

// youAdmin.name = 'Madalina';
// console.log(youAdmin);

// //object const

// const person = {
//   age : 12
// };

// person.name = "Razvan";

// console.log(person.name);

// //functiile stocate in proprietarile obiectului se numesc metode
// let admin = {
//   name : "Madalina",
//   age : 23,

//   // sayHello() {
//   //   console.log(this.age);
//   //   console.log(this.name);
//   // }
//   toString(){
//     return `{name: " {this.name}"}`;
//   },

//   valueOf(){
//     return this.age;
//   }
// };
// console.log(admin);
// console.log(+admin);
// console.log(admin + 100);
// admin.sayHello();

//constructor

// function Admin(name){
//   this.name = name;
//   this.isAdmin = true;
// }

// let admin = new Admin("Denisa");

// console.log(admin.name);
// console.log(admin.isAdmin);

//putem verifica daca a fost apelata cu new sau fara ea

// function Admin() {
//   if (!new.target) {
//     return new Admin(name);
//   }
//   this.name = "Madalina";
//   return { name: "Denisa" };
// }

// let madalina = Admin("Madalina");
// console.log(new Admin().name);

//strings

// let list = "* Summer\n * Spring\n * Winter\n * Autumn";

// console.log(list);
// console.log(list.length);
// console.log(list[5]);
// console.log(list.charAt(7));

// console.log(list[list.length - 1]);

// for(let char of "* Summer\n * Spring\n * Winter\n * Autumn") {
//   console.log(char);
// }

// list = 'm' + list[15];
// console.log(list);

// console.log('summer'.toUpperCase());
// console.log('SuMmEr'[4].toLowerCase());

// let str = "Madalina are mere";

// console.log(str.indexOf("Madalina"));
// console.log(str.indexOf("are", 1));

// let lit = "re";

// let pos = 0;
// while (true){
//   let foundPos = str.indexOf(lit, pos);
//   if(foundPos == -1)break; // -1, not found

//   console.log(`found at ${foundPos}`);
//   pos = foundPos + 1;
// }

// //obtinerea unui substring

// console.log(str.slice(0,4));
// console.log(str.slice(6));
// console.log(str.slice(-4,-2));

// //arrays
// // let arr = new Array();
// // let arr = [];//matrice goala

// let animals = ["Dog","Cat","Lion","Donkey","Monkey"];

// console.log(animals[2]);
// animals[5] = "Horse";
// console.log(animals.length);

// console.log(animals.pop());
// console.log(animals);

// animals.push("alalalal");
// console.log(animals);

// console.log(animals.shift());
// console.log(animals);

// animals.unshift('ksdfjdsfjsdf');
// console.log(animals);

// animals.splice(1,1);
// console.log(animals);

// ["Dog","Cat","Lion","Donkey","Monkey"].forEach((item, index, array) => {
//   console.log(`${item} is at index ${index} in ${array}`);
// });

// animals.reverse();
// console.log(animals);

// console.log(Array.isArray([]));

// let maping = new Map();

// maping.set('2', 'str1');
// console.log(maping.get('2'));

// function adminUser() {
//   this.name = "Madalina";
//   return; //terminarea executiei
// }
// console.log(new adminUser().name);

// //json.stringify

// let student = {
//   name: 'Madalina',
//   age: 23,
//   courses: ['html, css, js']
// };

// let json = JSON.stringify(student);//pentru a converti obiecte in Json

// console.log(typeof json); //typeof returneaza un sir de caractere care indica tipul operandului

// console.log(json);

// //json.parse

// let animals = "[11,12,13,14]";

// animals = JSON.parse(animals);

// console.log(animals[1]);

// let names = '{"name" : "Mada", "age" : "23"}';

// names = JSON.parse(names);

// console.log(names.age);

// let iceCream = 'chocolate';

// if(iceCream === 'chocolate'){
//   console.log('yay, love chocolate');
// }else {
//   console.log('....but chocolate is my favorite');
// }

//callback

//Primul argument este convenția de apelare, al doilea argument este tipul de returnare, iar al treilea este o serie de argumente care așteaptă callback-ul

// function first(){
//   setTimeout(function(){
//     console.log(1);
//   }, 500);
// }
// function second(){
//   console.log(2);
// }
// first();
// second();

// function doHomework(subject, callback) {
//   console.log(`Starting my ${subject} homework.`);
//   callback();
// }

// doHomework('math', function() {
//   console.log('Finished my homework');
// });

// function greeting(name) {
//   alert('Hello ' + name);
// }

// function processUserInput(callback) {
//   let name = prompt('Please enter your name.');
//   callback(name);
// }

// processUserInput(greeting);

// function functionOne(x) { alert(x); } //functia 1 ia un argument si o alerta cu argumentul x

// function functionTwo(var1, callback) {//functia 2 ia un argument si o functie
//     callback(var1);		//functia 2 trece prin argumentul pe care il are
// }
// //functia 1 esre apel invers
// functionTwo(2, functionOne);//apelul invers este definit cand apelam functia 2

// //mostenire

// let mug = {
//   drink: true,
//   move(){
//     console.log("coffee drink");
//   }
// };

// let coffee = {
//   sugar: true,
//   __proto__:mug
// };
// coffee.move();
// // coffee.__proto__ = mug;//mug este prototip la coffee

// // console.log(coffee.drink);
// // console.log(coffee.sugar);

// let animal = {
//   eat() {
//     this.full = true;
//   }
// };

// let rabbit = {
//   __proto__: animal
// };

// rabbit.eat();//rabbit primeste full proprietatea

// const list = document.getElementsByTagName("div");
// list.length;
// list[1].style.background="red";
// console.log(list);
// console.log(input.getAttribute('checked'));
// console.log(input.checked);

//  let elem = document.getElementById('elem');

//  elem.style.background = 'yellow';

// let count = 0;
// let buttonAdd = document.getElementById("add");
// let output = document.getElementById("output");

// buttonAdd.onclick = function(){ //cand dam click pe butonul de add count se incrementeaza si output i-a valoarea lui count
//   // count--;
//   count++;
//   output.innerHTML = count;//innerhtml seteaza sau returneaza continuul html al unui element
// }

// function countCoffee() {
//   for(let i=1; i<=4; i++) {
//     console.log("Coffee number " + i);
//   }
// }

// elem.addEventListener('click', {
//   handleEvent(event) {
//     console.log(event.type + " at " + event.currentTarget);
//   }
// });

// let event = new MouseEvent("click", {
//   bubbles: true,
//   cancelable: true,
//   clientX: 100,
//   clientY: 100
// });

// console.log(event.clientX);

// let numberArr = {0: "one", 1: "two", length: 2};
// let array = Array.from(numberArr);
// console.log(array.map(s => s.toUpperCase()));

// buttons.onclick = function(event){
//   if(event.altKey && event.shiftKey) {
//     console.log('yeeey');
//   }
// }

// let bombTimer = setTimeout(() => {
//   console.log("BOOM!");
//   }, 500);
//   if (Math.random() < 0.5) { // 50% chance
//   console.log("Defused.");
//   clearTimeout(bombTimer);
//   }

// let textarea = document.querySelector("textarea");
// let timeout;
// textarea.addEventListener("input", () => {
// clearTimeout(timeout);
// timeout = setTimeout(() => console.log("Typed!"), 500);
// });
// //am creat functia preloadimages care incarca toate imaginile din sources si atunci cand este gata ruleaza callback
// //callback se executa cand toate imaginile sunt fie incarcare fie eronate
// function preloadImages(sources, callback){
//   let counter = 0;

//   function onLoad(){
//     counter++;
//     if(counter == sources.length) callback();
//   }

//   for(let source of sources) {
//     let img = document.createElement('img'); //fac un img pentru fiecare sursa
//     img.onload = img.onerror = onLoad; //adaugam onload si onerror pentru fiecare imagine
//     img.src = source;
//   }
// }

// let sources = [
//   "http://icons.iconarchive.com/icons/marcus-roberto/google-play/72/Google-Maps-icon.png",
//   "http://icons.iconarchive.com/icons/marcus-roberto/google-play/128/Google-Maps-icon.png",
//   "http://icons.iconarchive.com/icons/tatice/browsers/96/Google-Chrome-icon.png"
// ];

//adaug caractere aleatorii pentru a impiedica cache-ul browserului
// for (let i = 0; i < sources.length; i++) {
//   sources[i] += '?' + Math.random();
// }

//pentru fiecare imagine, am creat un alt img cu acelasi src si sa verificam ca avem imediat latimea lui
// function testLoaded() {
//   let widthSum = 0;
//   for (let i = 0; i < sources.length; i++) {
//     let img = document.createElement('img');
//     img.src = sources[i];
//     widthSum += img.width;
//   }
//   console.log(widthSum);
// }

// preloadImages(sources, testLoaded);

//   // form -> element
//   let login = form.login;

//   // element -> form
//   console.log(login.form); // HTMLFormElement

//   // select.options[0].selected = true;
//   // select.selectedIndex = 0;//numarul optiunii alese
//   // select.value = 'apple';//valoarea optiunii alese

//   let selected = Array.from(select.options)
//   .filter(option => option.selected)
//   .map(option => option.value);

//   console.log(selected);

// let form = document.forms.elem;

// let elements = document.forms.lina;

// console.log(elements.value);

// let form = document.forms[0];

// let ageElements = form.elements.age;

// console.log(ageElements[0].value);

// let str = "madalina are mere";

// let regexp = /mere/; // / crearea unor expresii regulate , siruri de caractere

// console.log(str.search(regexp));//pentru a cauta in interiorul unui sir folosim metoda search

// let str = "javascript is a programming language";

// let result = str.match(/java(script)/i);

// console.log(result[0]);
// console.log(result[1]);
// console.log(result.index);
// console.log(result.input);

// console.log('21-02-2019'.replace(/-/g,":"));

// let str = "+2352523656356356356";

// // let reg =/\d/;//cauta o singura cifra

// let reg = /\d/g; //g steagul pentru a cauta toate cifrele

// console.log(str.match(reg));

// console.log("madalina merge la pisci1".match(/\s\w\w\w\w\w\d/));
