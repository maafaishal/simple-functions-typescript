import addition from '../lib/addition'

describe('addition', () => {
  it('calculates properly', () => {
    const result = addition(3, 5)
    expect(result).toBe(8)
  })
})