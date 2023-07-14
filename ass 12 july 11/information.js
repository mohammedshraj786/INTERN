class Employee{
    constructor(name,yearOfJoining,salary,address)
    {
        this.name=name;
        this.yearOfJoining=yearOfJoining;
        this.salary=salary;
        this.address=address;
    }
    Info()
    {
        return (this.name + this.yearOfJoining + this.salary + this.address);
    }

}
const Heading=new Employee("Name\t","YearOfPassing\t","salary\t","address");
const personOne=new Employee("shraj\t","2023\t\t\t","7500\t","1115A EB Colony Erode");
const personTwo=new Employee("shraj\t","2023\t\t\t","7500\t","1115A EB Colony Erode");
const personThree=new Employee("shraj\t","2023\t\t\t","7500\t","1115A EB Colony Erode");
console.log(Heading.Info());
console.log(personOne.Info());
console.log(personTwo.Info());
console.log(personThree.Info());
