class Triangle
{
    side1=3;
    side2=4;
    side3=5;

constructor()
{
    const perimeter=this.side1+this.side2+this.side3;
    console.log("perimeter" + perimeter);
    const semiPerimeter=perimeter/2;
    const sideone=semiPerimeter-this.side1;
    const sidetwo=semiPerimeter-this.side2;
    const sidethree=semiPerimeter-this.side3;
    const area=Math.sqrt(semiPerimeter*sideone*sidetwo*sidethree);
    console.log("this is p=" + perimeter , "this is area=" + area);
}
}
new Triangle()