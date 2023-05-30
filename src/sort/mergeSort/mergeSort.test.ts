
import { mergeSort } from "./mergeSort"
import { describe, expect, it } from "vitest"


describe("#bubbleSort", () => {
    it("check equal accending numbers", () => {
        expect(mergeSort([2, 4, 5, 7, 1, 2, 3, 6])).toStrictEqual([1, 2, 2, 3, 4, 5, 6, 7])
    })

    it("check equal accending strings", () => {
        expect(mergeSort(["ZZ Top", "Europe", "Accept", "Plini", "Kreator"])).toStrictEqual(["Accept", "Europe", "Kreator", "Plini", "ZZ Top"])
    })
})