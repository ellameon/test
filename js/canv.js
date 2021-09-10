const ctx = document.querySelector("canvas").getContext("2d");


ctx.beginPath();
ctx.strokeStyle = 'black';
ctx.fillStyle = ' orange';
ctx.lineWidth = 5;
ctx.moveTo(100,600);
ctx.lineTo(100,300);
ctx.lineTo(500,300);
ctx.lineTo(500,600);
ctx.lineTo(100,600);

ctx.fill();
ctx.stroke();
ctx.closePath();
const rectangle = new Path2D();
rectangle.rect(200, 400, 200, 50);

const rectangle1 = new Path2D();
rectangle.rect(200, 400, 100, 50);


ctx.beginPath();
ctx.moveTo(100,300);
ctx.bezierCurveTo(200, 150, 400, 150, 500, 300)
ctx.fillStyle = 'red';
ctx.fill();
ctx.closePath();

ctx.stroke(rectangle);
ctx.stroke();


ctx.beginPath();
ctx.moveTo(75,40);
ctx.bezierCurveTo(75,37,70,25,50,25);
ctx.bezierCurveTo(20,25,20,62.5,20,62.5);
ctx.bezierCurveTo(20,80,40,102,75,120);
ctx.bezierCurveTo(110,102,130,80,130,62.5);
ctx.bezierCurveTo(130,62.5,130,25,100,25);
ctx.bezierCurveTo(85,25,75,37,75,40);
ctx.fill();




