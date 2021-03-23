// class User {
//     constructor(name, email) {
//         this.name = name;
//         this.email = email;
//     }
//     get userName() {
//         return `${this.name}`;
//     }
//     set userName(value) {
//         this.name = value;
//     }
//     get userEmail() {
//         return `${this.email}`;
//     }
//     set userEmail(value) {
//         this.email = value;
//     }

//     logIn() {
//         console.log(`${this.name} has logged in.`);
//     }

//     logOut() {
//         console.log(`${this.name} has logged out.`);
//     }
// }

// const user1 = new User('Jane', 'example@example.com');
//const user2 = new User('Alice', 'example@example.com');
// console.log(user1.name);

// class Animal {
//     constructor(name, gender, race) {
//         this.name = name;
//         this.gender = gender;
//         this.race = race;
//         this.speed = 0;
//     }
//     run(speed) {
//         this.speed = speed;

//     }
//     stop() {
//         this.speed = 0;

//     }
// }

// class Rabbit extends Animal {
//     hide() {

//     }
//     stop() {
//         super.stop();
//         this.hide();
//     }
// }

// let rabbit = new Rabbit()

// class PrintMachine {
//     constructor(f_size, f_color, f_family) {
//         this.fontSize = "font-size: " + f_size;
//         this.color = "color: " + f_color;
//         this.fontFamily = "font-family: "+ f_family;
//     }
//     print(text) {
//         document.write("<p style=\"" + this.fontSize + "; " + this.fontFamily + "; " + this.color + "; " + "\">" + text + "</p>");
//     }
// }

// const text2 = new PrintMachine('100px', 'red', 'sans-serif');
// text2.print('Florentina');


// class mydate {
//     constructor(day, month, year) {
//         this.day = day;
//         this.month = month;
//         this.year = year;
//     }
//     getToday() {
//         return this.day + ":" + this.month + ":" + this.year;
//     }
// }

// class News {
//     constructor(heading, text, tagArray, dateOfPub) {
//         this.heading = heading;
//         this.text = text;
//         this.tagArray = tagArray;
//         this.dateOfPub = dateOfPub;
//         this.day = 0;
//         this.month = 0;
//         this.year = 0;
//     }
//     get today() {
//         return this.day + ":" + this.month + ":" + this.year;
//     }
//     setToday(day, month, year) {
//         this.day = day;
//         this.month = month;
//         this.year = year;
//     }

//     print() {
//         if(this.day == this.dateOfPub.day && this.month == this.dateOfPub.month && this.year == this.dateOfPub.year) {
//             document.write("<h1>" + this.heading + "</h1>");
//             document.write("<p>" + this.text + "</p>");
//             document.write("<p>" + this.tagArray + "</p>");
//             document.write("<p> today </p>");
//         } else if (this.dateOfPub.day < (this.day - 7) && this.month == this.dateOfPub.month && this.year == this.dateOfPub.year) {
//             document.write("<h1>" + this.heading + "</h1>");
//             document.write("<p>" + this.text + "</p>");
//             document.write("<p>" + this.tagArray + "</p>");
//             document.write("<p>" + (this.day - this.dateOfPub.day) + " days ago.</p>");
//         } else {
//             document.write("<h1>" + this.heading + "</h1>");
//             document.write("<p>" + this.text + "</p>");
//             document.write("<p>" + this.tagArray + "</p>");
//             document.write("<p>" + this.dateOfPub.getToday() + "</p>");
//         }
//     }
// }

// let date = new mydate(20, 3, 2021);
// let array = ['news', 'me te rejat', 'free', 'blla'];
// const text2 = new News('NEWS', 'Hello helloHello helloHello helloHello helloHello helloHello hello', array, date);
// text2.setToday(22, 3, 2021);
// text2.print();



class circumference {
    constructor() {
//        this.radius = r;
    }
    get Radius() {
        return (this.radius);
    }
    set Radius(Radius) {
        this.radius = r;
    }
    get getDiameter() {
        return(2 * this.radius);
    }
    calculateContent() {
        return (Math.pow(this.radius) * Math.PI);
    }
    calculateLengthOfCircumference() {
        return (Math.PI * 2 * this.radius);
    }
}


const circle = new circumference();
circle.Radius(5);
console.log(circle.getRadius);
console.log(circle.getDiameter);
console.log(circle.calculateContent());
console.log(circle.calculateLengthOfCircumference());














