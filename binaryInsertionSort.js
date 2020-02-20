const binaryInsertionSort = arr => {
  for (let i = 1; i < arr.length; i++) {
    let j = binarySearch(arr[(0, i)], arr[i], 0, i)
    let arr = arr
      .splice(i, j)
      .concat(arr[i])
      .concat(arr[(j, i)])
      .concat(arr[(i + 1, end)])
  }

  return arr
}

const binarySearch = (arr, val, start, end) => {
  //console.log(start, end)
  if (start === end) {
    if (val < arr[start]) return start
    else return start + 1
  }
  if (val <= arr[start]) return start

  let mid = Math.floor((start + end) / 2)
  if (val === mid) return mid
  else if (val < arr[mid]) return binarySearch(arr, val, start, mid - 1)
  else if (val > arr[mid]) return binarySearch(arr, val, mid + 1, end)
}

module.exports = {
  binaryInsertionSort,
  binarySearch,
}
