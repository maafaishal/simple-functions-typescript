import divide from '../lib/divide'

describe('divide', () => {
  it('calculates properly', () => {
    const test1 = divide(5, 2)
    expect(test1).toBe(2.5)

    const test2 = divide(0, 5)
    expect(test2).toBe(0)

    const test3 = divide(5, 0)
    expect(test3).toBe(Infinity)
  })
})