class employee{
    constructor(salary,workhour){
    this.salary=salary;
    this.workhour=workhour;
    }

getInfo()
{
    return(this.salary,this.workhour);
}
AddSal()
{
    if(this.salary<500){
    this.salary+=10}
    return this.salary
}
AddWork()
{
    if(this.workhour>6){
    this.salary+=5}
    return this.salary

}
}
final=new employee(480,8)
console.log(final.getInfo())
console.log(final.AddSal())
console.log(final.AddWork())
