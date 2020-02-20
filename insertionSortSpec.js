/* eslint-disable no-undef */
const chai = require('chai')
const expect = chai.expect

const insertionSort = require('./insertionSort')
const { binaryInsertionSort, binarySearch } = require('./binaryInsertionSort')

describe('insertion sort', () => {
  it('should return empty array when input is empty', () => {
    expect(insertionSort([])).to.eql([])
  })
  it('should should return the same array when the length of the input is 1', () => {
    expect(insertionSort([0])).to.eql([0])
  })
  it('should should return a sorted array when the input is disorderred with lenght 2', () => {
    expect(insertionSort([1, 0])).to.eql([0, 1])
  })
  it('should return a sorted array length n', () => {
    expect(insertionSort([9, 8, 7, 6, 6, 6, 5, 4, 3, 2, 1])).to.eql([
      1,
      2,
      3,
      4,
      5,
      6,
      6,
      6,
      7,
      8,
      9,
    ])
  })
})

describe('binary insertion sort', () => {
  it('should return empty array when input is empty', () => {
    expect(binaryInsertionSort([])).to.eql([])
  })
  it('should should return the same array when the length of the input is 1', () => {
    expect(binaryInsertionSort([0])).to.eql([0])
  })
  xit('should should return a sorted array when the input is disorderred with lenght 2', () => {
    expect(binaryInsertionSort([1, 0])).to.eql([0, 1])
  })
  xit('should return a sorted array length n', () => {
    expect(binaryInsertionSort([9, 8, 7, 6, 6, 6, 5, 4, 3, 2, 1])).to.eql([
      1,
      2,
      3,
      4,
      5,
      6,
      6,
      6,
      7,
      8,
      9,
    ])
  })
})

describe('binarySearch', () => {
  it('returns the start index on an array where start=end, where val is smaller than the value at the start index', () => {
    expect(binarySearch([5], 1, 0, 0)).to.equal(0)
  })
  it('returns start index+1 when val is bigger', () => {
    expect(binarySearch([5], 10, 0, 0)).to.equal(1)
  })
  it('checks the begining  to see if they match val, and returns if so', () => {
    expect(binarySearch([1, 2, 3], 1, 0, 2)).to.equal(0)
  })
  it('checks the end to see if they match val, and returns if so', () => {
    expect(binarySearch([1, 2, 3], 3, 0, 2)).to.equal(3)
  })
  it('checks if val is smaller than start, and puts val at front of array, and same at the back', () => {
    expect(binarySearch([1, 2, 3], 0, 0, 2)).to.equal(0)
    expect(binarySearch([1, 2, 3], 4, 0, 2)).to.equal(3)
  })
  it('finds correct insertion point for all arrays', () => {
    expect(binarySearch([0, 2, 4, 6, 8, 10, 12, 14, 16, 18], 5, 0, 9)).to.equal(
      3
    )
    expect(
      binarySearch([0, 2, 4, 6, 8, 10, 12, 14, 16, 18], 16, 0, 9)
    ).to.equal(8)
    expect(
      binarySearch([0, 2, 4, 6, 8, 10, 12, 14, 16, 18], 13, 0, 9)
    ).to.equal(7)
    expect(
      binarySearch([0, 2, 4, 6, 8, 10, 12, 14, 16, 18], 20, 0, 9)
    ).to.equal(10)
    expect(
      binarySearch([0, 2, 4, 6, 8, 10, 12, 14, 16, 18], -5, 0, 9)
    ).to.equal(0)
  })
})
