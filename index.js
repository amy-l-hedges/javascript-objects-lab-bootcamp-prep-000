var recipes = {} 

function updateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function destructivelyUpdateOjbectWithKeyAndValue(object, key, value) {
  object.key = value
  return object
}

function deleteFromObjectBykey(object, key) {
  var newObj = Object.assign({}, object)
  delete newObj.key
  return newObj
}

