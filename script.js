// Q-1//
let student = document.getElementById('student');
let faculty = document.getElementById('faculty');
let peon = document.getElementById('peon');

class School {
    constructor(name, email, contact) {
        this.name = name;
        this.email = email;
        this.contact = contact;
    }
    student() {
        student.innerHTML = `Student Name : ${this.name} <br> Email : ${this.email} <br> Contact : ${this.contact}`;
    }
    faculty() {
        faculty.innerHTML = `Faculty Name : ${this.name} <br> Email : ${this.email} <br> Contact : ${this.contact}`;
    }
    peon() {
        peon.innerHTML = `Peon Name : ${this.name} <br> Email : ${this.email} <br> Contact : ${this.contact}`;
    }
}

let s = new School("Janvi", "janvi23@gmail.com", 9876532120);
let f = new School("Riya", "riya01@gmail.com", 8765753326);
let p = new School("Lipsa", "lipsa25@gmail.com",8699752580);

s.student();
f.faculty();
p.peon();

// Q-2//
let father = document.getElementById('name');
let child = document.getElementById('age');

class Person {
    constructor(age) {
        this.age = age;
    }
    father() {
        father.innerHTML = `Father age: ${this.age}`;
    }
    child() {
        child.innerHTML = `Children age: ${this.age}`;
    }
}

let fa = new Person(51);
let ch = new Person(24);

fa.father();
ch.child();

// Q-3//
let employee = document.getElementById('employee');

class Employee {
    constructor() {
        employee.innerHTML = 'Hey, we are glad you are part of our company.';
    }
}

let e= new Employee();

// Q-4//
let cir = document.getElementById('circle');
let rect = document.getElementById('rectangle');

class Shape {
    constructor() {}

    circle(r) {
        cir.innerHTML = `Area of circle is: ${Math.PI * r * r}`;
    }

    rectangle(l, h) {
        rect.innerHTML = `Area of rectangle is: ${l * h}`;
    }
}

let shape = new Shape();
let radius = 6;

let l = 15;
let h = 20;

shape.circle(radius);
shape.rectangle(l, h);

// Q-5//
let mobileInfo = document.getElementById('mobile-info');
class Mobile {
    constructor(modelNumber, color) {
        this.modelNumber = modelNumber;
        this.color = color;
    }

    setModelNumber(modelNumber) {
        this.modelNumber = modelNumber;
        this.updateInfo();
    }

    setColor(color) {
        this.color = color;
        this.updateInfo();
    }

    updateInfo() {
        let info = `Model Number: ${this.modelNumber}, Color: ${this.color}<br>`;

        mobileInfo.innerHTML += info;
    }
}
let myPhone = new Mobile('Samsung A35', 'Awsome Blue');
let myPhone2 = new Mobile('Apple 15 Pro Max', 'Natural Titanium');

myPhone.updateInfo();
myPhone2.updateInfo();

// Q-6//
let eI = document.getElementById('employee-info');
class Em {
    constructor(name, email, salary) {
        this.name = name;
        this.email = email;
        this.salary = salary;
        this.designation = " "; 
    }

    setDesignation(designation) {
        this.designation = designation;
        this.updateInfo();
    }

    updateInfo() {
        eI.innerHTML = `
            <spanp>Name:</spanp> ${this.name}<br>
            <span>Email:</span> ${this.email}<br>
            <span>Salary:</span> ${this.salary}<br>
            <span>Designation:</span> ${this.designation || 'Not set'}
        `;
    }
}
let em = new Em('Janvi', 'janvi23@gmail.com', '$100000');
em.setDesignation('Full Stack Developer');

