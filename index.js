var kittens = ["Milo", "Otis", "Garfield"]


function destructivelyAppendKitten(name){
  kittens.push(name)
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten(anme){
  kittens.pop(name)
}

function destructivelyRemoveFirstKitten(name){
  kittens.shift(name)
}

function appendKitten(bob){
return [...kittens,name]
}

function prependKitten(name){
  return kittens.unshift(name)
}

function removeLastKitten(name){
  return kittens.pop(name)
}

function removeFirstKitten(name){
  return kittens.shift(name)
}