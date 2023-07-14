class rectangle
{
    constructor(length,breath)
    {

        this.length=length;
        this.breath=breath;
    }
    
    area()
    {
       return this.length*this.breath;
    }
}
const rectangleone=new rectangle(5,4)
const rectangletwo=new rectangle(8,5)
console.log("Area of rectangle one:",rectangleone.area());
console.log("Area of rectangle two:",rectangletwo.area());