const sort = arr => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      let orig = arr[j + 1]
      let compare = arr[j]
      if (orig < compare) {
        arr[j] = orig
        arr[j + 1] = compare
      } else break
    }
  }
  return arr
}

module.exports = sort
