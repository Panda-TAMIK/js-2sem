//task 1

let tempC =10;
let tempF =55;


function convectCtoF (tempC){
    return (tempC * 9/5)+32;
}

function convectFtoC (tempF){
    return (tempF-32)*5/9;
}

let tconvectC = convectCtoF (tempC);
let tconvectF = convectFtoC (tempF)

console.log(`${tempC} по Цельсию равно ${tconvectC} по Фаренгейту`);
console.log(`${tempF} по Цельсию равно ${tconvectF} по Фаренгейту`);

//task 2


function check (a,b,c) {
    if (a+b >c && a+c>b && b+c>a){
        return true;
    }   else    {
        return false;
    }
}

function Perimeter(a,b,c) {
    return a+b+c;
}

function Square (a,b,c) {
    let semiPer = Perimeter (a,b,c)/2;
    let Squ = Math.sqrt (semiPer * (semiPer - a)* (semiPer - b)*(semiPer-c));
    return Squ
}

function Ratio(Perimeter,Square) {
    return Perimeter/Square;
}
    let a = 3;
    let b = 3;
    let c = 4;


if (check(a,b,c)) {
    console.log(`Треугольник существует`);
    let PerimeterResult = Perimeter(a,b,c);
    let SquareResult = Square(a,b,c);
    let RatioResult = Ratio(PerimeterResult,SquareResult);
    
    console.log(`угол a=${a}`);    
    console.log(`угол b=${b}`);
    console.log(`угол c=${c}`);

    console.log(`Периметр =${PerimeterResult}`);
    console.log(`Площадь =${SquareResult}`);
    console.log(`Соотношение = ${RatioResult}`);
}   else    {
    console.log(`треугольника не существует`);
}

//task 3

let MaxValue = 15;

for (let i = 0; i<= MaxValue; i++) {
    if (i % 5 === 0){
        console.log (`${i}  fizz buzz`);
    }   else if ( i % 2 === 0){
        console.log(`${i}  buzz`);
    }   else if (i % 1 === 0) {
        console.log(`${i}  fizz`);
    }
}

//task 4

let Height = 10;
let tree = ``;
for (let i= 0; i < Height; i++) {
    let layer = '';
    let char = (i % 2 === 0) ? '*' : `#`;
    for(let j = 0; j <=i; j++) {
        layer += char;
    }
    tree += layer + `\n`;
}

tree += `||`;

console.log(tree);

//task 5

let n = 42;
let x = 5;
let y = 6;

function check(n, x, y) {
  let result = (n % x === 0 && n % y === 0);
  console.log(`> n = ${n}, x = ${x}, y = ${y} => ${result}`);
}

check(n, x, y);

//task 6

let month = 13;

function quarter(month) {
  switch (Math.ceil(month / 3)) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 3:
      return 3;
    case 4:
      return 4;
  }
}

console.log(`> месяц ${month} => ${quarter(month)} квартал`);

// task 7

let n = 7;
let result = ``;

for (let i=0; i<n; i++){
    result += `${Math.pow(2,i)}${i<n ? `, ` : ` `} `;
}

console.log(`${result}`);