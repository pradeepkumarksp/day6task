class person {
    constructor(firstName, lastName, age, degree) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.degree = degree;
        this.getFullName = function () {
            return this.firstName + " " + this.lastName;
        }
        this.getPersondetails = function () {
            return this.firstName + " " + this.lastName + " " + this.age + " "+ this.degree
        }
    }
}

let person1 = new person("Pradeepkumar", "K", 27, "Bsc Agriculture");
console.log(person1.age);
console.log(person1.getFullName());
console.log(person1.getPersondetails());