import sortNumber from '../lib/sortNumber'

describe('sortNumber', () => {
  it('calculates properly', () => {
    const test1 = sortNumber([5, 72, 12, 32, 3])
    expect(test1).toStrictEqual([3, 5, 12, 32, 72])
  })
})