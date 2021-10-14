//task HW 2.1

var user = { name: "Nata" }

user.sayHello = function (greetings = "Добрый день") {
  if (
    this.name != undefined &&
    typeof this.name == "string" &&
    this.name != ""
  ) {
    return `${greetings}, ${this.name}!`
  } else {
    return "Имя пользователя не указано"
  }
}

//task HW 2.2

var product = {
  name: "iPhone",
  id: 7485,
  price: 1000
}

product.changePrice = function(num) {
  return (this.price += (this.price * (num / 100)))
}