var recipes = {} 

function updateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return obj
}

function destructivelyUpdateOjbectWithKeyAndValue(object, key, value) {
  object[key] = value
  return obj
}

function deleteFromObjectBykey(object, key) {
  var newObj = Object.assign({}, object)
  delete newObj[key]
  return newObj
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return obj
}