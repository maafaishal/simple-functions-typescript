import multiply from '../lib/multiply'

describe('multiply', () => {
  it('calculates properly', () => {
    const test1 = multiply(5, 2)
    expect(test1).toBe(10)

    const test2 = multiply(0, 5)
    expect(test2).toBe(0)

    const test3 = multiply(5, 0)
    expect(test3).toBe(0)
  })
})