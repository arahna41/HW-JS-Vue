var user = {name: 'Nata'}

user.sayHello = function(greetings = 'Добрый день') {
	if (this.name != undefined && typeof(this.name) == 'string' && this.name != '') {
		return (`${greetings}, ${this.name}!`)
	} else {
		return ('Имя пользователя не указано')
	}
}


