let person=
{
    name:"SHRAJ",
    age:21,
    company:"Navadhiti solutions",
    role:"intern developer",
    year:{
        first:2023,
        second:2024,
        third:2025
    }
}
console.log(person.name);
console.log(person.year.third);//by using dot method to access the object values

console.log(person['company'])//by using bracket method to access the object values