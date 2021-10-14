// task HW 1.1.1
var array = [16, true, 'MetraBit', NaN, {name: 'UserName', hobby: 'JS'}, 30, NaN, null, false, 'Vue']

for (var i = 0; i < array.length; i++) {
    if (array[i] != array[i] ) {
        array[i] = null
    }
}
console.log('Проверка и изменение массива завершена')
console.log(array)

// task HW 1.1.2
var array = [16, true, 'MetraBit', NaN, {name: 'UserName', hobby: 'JS'}, 30, NaN, null, false, 'Vue']

var i = 0
while (i < array.length) {
    if (array[i] != array[i] ) {
        array[i] = null
    }
    i++
}
console.log('Проверка и изменение массива завершена')
console.log(array)

// task HW 1.2.1

var array = [45, "246", 73, "4", 15, 36, 17, 89, "49", 167, 123];
var count = 0;

for (var i = 0; i < array.length; i++) {
  if (typeof array[i] === "number" && array[i] % 3 == 0) {
    ++count;
  }
}
if (count == 0) {
  console.log(`В данном массиве нет чисел кратных 3`);
} else {
  console.log(`В данном массиве ${count} чисел кратных 3`);
}

// task HW 1.2.2
//считает с ошибкой, результат меньше на 1......

var array = [45, "246", 73, "4", 15, 36, 17, 89, "49", 167, 123];
var count = 0;
var i = 0

while (i++ < array.length) {
  if (typeof array[i] === "number" && array[i] % 3 == 0) {
    ++count;
  }
}

if (count == 0) {
  console.log(`В данном массиве нет чисел кратных 3`);
} else {
  console.log(`В данном массиве ${count} чисел кратных 3`);
}

//task HW 1.3

var array = [16, true, "MetraBit", NaN, { name: "UserName;", hobby: "JS" }, 30, NaN, null, false, "Vue"]

var str = 0
var num = 0
var bool = 0
var nul = 0
var obj = 0

function calcElementsDifferentTypes() {
  for (var i = 0; i < array.length; i++) {
    if (typeof array[i] === "string") {
      ++str;
    } else if (typeof array[i] === "number") {
      ++num;
    } else if (typeof array[i] === "boolean") {
      ++bool;
    } else if (array[i] === null) {
      ++nul;
    } else if (typeof array[i] === "object") {
      ++obj;
    }
  }
}

function showResult() {
  console.log(`String: ${str} `)
  console.log(`Number: ${num} `)
  console.log(`Boolean: ${bool} `)
  console.log(`Null: ${nul} `)
  console.log(`Object: ${obj} `)
}

calcElementsDifferentTypes()
showResult()

//task HW 1.4.1

var firstName = 'UserName'
var greetings = 'Hello'

//Function Declaration
function HelloUser() {
    return (`${greetings}, ${firstName}!`)
}

HelloUser()

//task HW 1.4.2
//Function Expression
var firstName = 'UserName'
var greetings = 'Hello'

var HelloUser = function() {
    return (`${greetings}, ${firstName}!`)
}

HelloUser()
