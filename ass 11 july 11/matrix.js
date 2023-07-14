class Matrix{

constructor(rows,cols)
{

this.rows=rows;
this.cols=cols;
this.element=this.newMatrix(rows,cols)

}
newMatrix(rows,cols)
{
    const matrix=[];
    for( let i=0;i<rows;i++)
    {
    matrix.push(new Array(cols).fill(4))
    
    }
    return matrix



}

}
const final=new Matrix(2,2)
console.log(final.rows);
console.log(final.cols);
console.log(final.element);