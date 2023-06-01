import { quickSort, quickSortWithRandomPivot } from "./quickSort";
import { describe, expect, it } from "vitest";

describe("#quickSort", () => {
  it("check equality accending numbers", () => {
    expect(quickSort([9, 8, 7, 3, 5, 4, 2, 1, 6])).toStrictEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9,
    ]);
  });

  it("check equality accending strings", () => {
    expect(
      quickSort(["ZZ Top", "Europe", "Accept", "Plini", "Kreator"])
    ).toStrictEqual(["Accept", "Europe", "Kreator", "Plini", "ZZ Top"]);
  });

  it("check equality accending numbers", () => {
    expect(quickSortWithRandomPivot([9, 8, 7, 3, 5, 4, 2, 1, 6])).toStrictEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9,
    ]);
  });

  it("check equality accending strings", () => {
    expect(
      quickSortWithRandomPivot(["ZZ Top", "Europe", "Accept", "Plini", "Kreator"])
    ).toStrictEqual(["Accept", "Europe", "Kreator", "Plini", "ZZ Top"]);
  });
});
