
import { bubbleSort, bubbleSortDescending } from "./bubbleSort"
import { describe, expect, it } from "vitest"

describe("#bubbleSort", () => {
    it("check equal accending", () => {
        expect(bubbleSort([9,8,7,3,5,4,2,1,6])).toStrictEqual([1,2,3,4,5,6,7,8,9])
    })

    it("check equal accending", () => {
        expect(bubbleSortDescending([9,8,7,3,5,4,2,1,6])).toStrictEqual([9,8,7,6,5,4,3,2,1])
    })
})