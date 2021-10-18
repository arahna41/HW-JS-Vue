//task 3.1



//task3.2

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