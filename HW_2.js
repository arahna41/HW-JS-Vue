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
  return ( this.price += (this.price * (num / 100) ) )
}

// task HW 2.3

function showStudentsFavoriteLessons() {
  var studentsList = showStudentsFavoriteLessons.arguments

  var lessons = ['Математика', 'История', 'Спорт', 'Литература', 'Биология', 'География']
  
  function checkStudentFavoriteLessons() {
	  for (var i = 0; i < studentsList.length; i++) {
      var favoriteLessons = []
      favoriteLessons = lessons.slice( getRandomInt(0, 6), 6 )
      function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor( Math.random() * (max - min + 1) ) + min;
      }
      if (favoriteLessons.length != 0) {
        console.log(`${studentsList[i]}: ${favoriteLessons.join(', ')}`)
      } else {
        console.log(`${studentsList[i]}: У этого студента нет любимых предметов`)
      }
    }
  }

  checkStudentFavoriteLessons(studentsList)
}