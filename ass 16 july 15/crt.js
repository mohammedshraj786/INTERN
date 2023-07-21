// Circle
const calculateCircleArea = (radius) => Math.PI * radius * radius;
const calculateCircleCircumference = (radius) => 2 * Math.PI * radius;


const calculateTriangleArea = (base, height) => (base * height) / 2;
const calculateTrianglePerimeter = (side1, side2, side3) => side1 + side2 + side3;


const calculateRectangleArea = (length, width) => length * width;
const calculateRectanglePerimeter = (length, width) => 2 * (length + width);


const calculateCircle = () => 
{
  const radiusInput = document.getElementById('circleRadius');
  const radius = parseFloat(radiusInput.value);

  const area = calculateCircleArea(radius);
  const circumference = calculateCircleCircumference(radius);

  const circleResults = document.getElementById('circleResults');
  circleResults.innerHTML = `Area: ${area.toFixed(2)}, Circumference: ${circumference.toFixed(2)}`;
};


const calculateTriangle = () => {
  const baseInput = document.getElementById('triangleBase');
  const heightInput = document.getElementById('triangleHeight');

  const base = parseFloat(baseInput.value);
  const height = parseFloat(heightInput.value);

  const area = calculateTriangleArea(base, height);
  const perimeter = calculateTrianglePerimeter(3, 4, 5);

  const triangleResults = document.getElementById('triangleResults');
  triangleResults.innerHTML = `Area: ${area.toFixed(2)}, Perimeter: ${perimeter.toFixed(2)}`;
};

// Calculate area and perimeter for a rectangle
const calculateRectangle = () => {
  const lengthInput = document.getElementById('rectangleLength');
  const widthInput = document.getElementById('rectangleWidth');

  const length = parseFloat(lengthInput.value);
  const width = parseFloat(widthInput.value);

  const area = calculateRectangleArea(length, width);
  const perimeter = calculateRectanglePerimeter(length, width);

  const rectangleResults = document.getElementById('rectangleResults');
  rectangleResults.innerHTML = `Area: ${area.toFixed(2)}, Perimeter: ${perimeter.toFixed(2)}`;
};
