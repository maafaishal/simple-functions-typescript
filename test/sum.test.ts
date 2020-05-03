import sum from '../lib/sum'

describe('sum', () => {
  it('calculates properly', () => {
    const result = sum(3, 5)
    expect(result).toBe(8)
  })
})