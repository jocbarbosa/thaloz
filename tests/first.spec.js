import { multiplyNumber } from '../first.js'

describe("first challenge", () => {
    it("should get a list of numbers multiplied by itself as a return", () => {
        const numbers = multiplyNumber([1,2,-3,4,5,8])

        expect(numbers).toEqual([ 1, 4, 9, 16, 25, 64 ])
    })

    it("should return an error given an empty array", () => {
        const numbers = multiplyNumber([])

        // should catch the expection in the correct way
        expect(numbers).toThrow("array cannot be empty")
    })
})