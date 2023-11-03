const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(Bob) {
    cats.push(Bob)
    return cats

 }


function destructivelyPrependCat(Bob) {
    cats.unshift(Bob)
    return cats
 }
 function destructivelyRemoveLastCat() {
    cats.pop()
    return cats
 }

 function destructivelyRemoveFirstCat() {
    cats.shift()
    return cats
 }

 function appendCat(name) {
    const copyOfCats = [...cats, name]
    return copyOfCats
 }

 function prependCat(name) {
    const copyOfCats = [name, ...cats]
    return copyOfCats
 }

 function removeLastCat() {
    const removeCats = cats.slice(0,cats.length-1);
    return removeCats
 }

 function removeFirstCat(){
    var catsagain = cats.slice(1)
    return catsagain
  }


