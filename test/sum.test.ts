import sum from '../lib/sum'

describe('sum', () => {
  it('calculates properly', () => {
    const test1 = sum(5, 3)
    expect(test1).toBe(8)

    const test2 = sum(3, 5)
    expect(test2).toBe(8)
  })
})