import { parseListCurrency } from './utils'

describe('Test utils', () => {
    it('Test parseJSON', () => {
        expect(parseListCurrency(null)).toStrictEqual([])
        expect(parseListCurrency({ cur: 'USD' })).toStrictEqual([])
        expect(parseListCurrency({ cur: 'USD', rates: { AED: 10 } })).toStrictEqual([ {cur: 'AED', rate: 10} ])
    })
})