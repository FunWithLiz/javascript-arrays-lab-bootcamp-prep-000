const app = "I don't do much."

function destructivelyAppendKitten(name){
function appendKitten(){
  name.push()
  return name
}
}

function destructivelyPrependKitten(name){
  function prependKitten(){
    name.unshift()
  }
}

function destructivelyRemoveLastKitten(name){
  name.pop()
}

function destructivelyRemoveFirstKitten(name){
  name.shift()
  return name
}

function appendKitten(name){
  return name.unshift(name)
}

