let a = parseInt(prompt("Введите первое значение!"));
let cut = prompt("Введите одно из значение + - * /");
let b = parseInt(prompt("Введите второе значение!"));
let qe = a + b;
let rr = a - b;
let ew = a * b;
let wy = a / b;
console.log(qe, rr, ew, wy);
let message = (cut === '+') ? qe :
   (cut === '-') ? rr :
      (cut === '*') ? ew :
         (cut === '/') ? wy :
            "Не правильное значение!" ;
   alert(message);