//task 3.1



//task 3.2

function fixedArray(numArray, stringArray) {
  if (numArray.length == stringArray.length) {
    var newArray = []
    newArray = numArray.sort(function(a, b) {
      return a - b
    })
    for ( var i = 0; i < stringArray.length; i++) {
      newArray.splice( (newArray.length / 2), 0, stringArray[i])
    }
    return (newArray.slice(0, (newArray.length / 2) ))
  } else {
    return ('Массивы имеют разную длину')
  }
}

//task 3.3

function checkLengthString(string, num) {
  if (string.length > +num) {
    return (`${string}...`)
  } else if (string.length < +num) {
    var result = string[0].toUpperCase() + string.substring(1).split(' ').join('-').slice(string[string.length - 1]).substring(0, string.length - 2);
    var lastLetter = string[string.length - 1].toUpperCase()
    return (result + lastLetter)
  }
}