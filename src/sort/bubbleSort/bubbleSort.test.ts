import { bubbleSort, bubbleSortDescending } from "./bubbleSort";
import { describe, expect, it } from "vitest";

describe("#bubbleSort", () => {
  it("check equality accending numbers", () => {
    expect(bubbleSort([9, 8, 7, 3, 5, 4, 2, 1, 6])).toStrictEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9,
    ]);
  });

  it("check equality accending strings", () => {
    expect(
      bubbleSort(["ZZ Top", "Europe", "Accept", "Plini", "Kreator"])
    ).toStrictEqual(["Accept", "Europe", "Kreator", "Plini", "ZZ Top"]);
  });

  it("check equality decending numbers", () => {
    expect(bubbleSortDescending([9, 8, 7, 3, 5, 4, 2, 1, 6])).toStrictEqual([
      9, 8, 7, 6, 5, 4, 3, 2, 1,
    ]);
  });

  it("check equality decending strings", () => {
    expect(
      bubbleSortDescending(["ZZ Top", "Europe", "Accept", "Plini", "Kreator"])
    ).toStrictEqual(["ZZ Top", "Plini", "Kreator", "Europe", "Accept"]);
  });
});
