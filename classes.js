
//Detyra 1

// class Circumference {
//     constructor(r) {
//         this.radius = r;
//     }
//     get circleRadius() {
//         return this.radius;
//     }
//     set circleRadius(r) {
//         this.radius = r;
//     }
//     get getDiameter() {
//         return(2 * this.radius);
//     }
//     calculateContent() {
//         return (Math.pow(this.radius, 2) * Math.PI);
//     }
//     calculateLengthOfCircumference() {
//         return (Math.PI * 2 * this.radius);
//     }
// }


// const circle = new Circumference(5);
// console.log("Radius of the circle is " + circle.circleRadius);
// circle.circleRadius = 15;
// console.log("We changed radius of the circle to " + circle.circleRadius);
// console.log("Diameter of the circle is " + circle.getDiameter);
// console.log("Content of the circle with radius " + circle.circleRadius + " is " + circle.calculateContent());
// console.log("The length of circumference with radius " + circle.circleRadius + " is " + circle.calculateLengthOfCircumference());

//Detyra2

// class RegularMarker {
//     constructor(color, ink) {
//         this.color = color;
//         this.ink = ink;
//     }
//     get Color() {
//         return this.color;
//     }
//     set Color(color) {
//         this.color = color;
//     }
//     get Ink() {
//         return this.ink;
//     }
//     set Ink(ink) {
//         this.ink = ink;
//     }
//     writeText(text) {
//         let len = 0;
//         let letters = this.ink / 0.5;
//         let text2 = "";
//         for (let i = 0; i < text.length; i++) {
//             if (text[i] != ' ')
//                 len++;
//         }
//         if (len <= letters) {
//             document.write("<p style=\"" + " color: " + this.color + "; " + "\">" + text + "</p>");
//         } else {
//             let j = 0;
//             while (j < letters) {
//                 text2 += text[j];
//                 if (text[j] == ' ') {
//                     letters += 1;
//                 }
//                 j++;
//             }
//             document.write("<p style=\"" + " color: " + this.color + "; " + "\">" + text2 + "</p>");
//         }
//     }
// }

// const writeTextMarker = new RegularMarker('blue', 10);
// writeTextMarker.writeText("Hello there, is anyone hearing me?????");

// class RefillableMarker extends RegularMarker {
//     refill(ink) {
//         super.Ink = ink;
//     }
// }

// const writeTextMarker2 = new RefillableMarker('green', 13);
// writeTextMarker2.refill(5);
// writeTextMarker2.writeText("Hello there, is anyone hearing me?????");


// Detyra 3

// class Employee {
//     constructor(name, age, city, salary) {
//         this.name = name;
//         this.age = age;
//         this.city = city;
//         this.salary = salary;
//     }
// }

// let staff = [
//         new Employee("Hasan", 35, "Prishtine", 400), 
//         new Employee("Albiona", 28, "Prishtine", 350), 
//         new Employee("Hysen", 25, "Ferizaj", 300), 
//         new Employee("Blerina", 21, "Peje", 250)
// ];

// class EmpTable {
//     constructor(listEmp) {
//         this.listEmp = listEmp;
//     }
//     getHtml() {
//         document.write("<table border='3'>")
//         document.write("<thead><tr><th>Emri</th><th>Mosha</th><th>Qyteti</th><th>Rroga</th></tr></thead>")
//         for (let i = 0; i < this.listEmp.length; i++) {
//             document.write("<tr>");
//             document.write("<td>" + this.listEmp[i].name + "</td>")
//             document.write("<td>" + this.listEmp[i].age + "</td>")
//             document.write("<td>" + this.listEmp[i].city + "</td>")
//             document.write("<td>" + this.listEmp[i].salary + "€</td>")
//             document.write("</tr>");
//         }
//         document.write("</table>") 
//     }
// }

// const emptab = new EmpTable(staff);
// emptab.getHtml();










