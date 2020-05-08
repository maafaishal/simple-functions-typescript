import subtract from '../lib/subtract'

describe('subtract', () => {
  it('calculates properly', () => {
    const test1 = subtract(5, 2)
    expect(test1).toBe(3)

    const test2 = subtract(2, 5)
    expect(test2).toBe(-3)
  })
})