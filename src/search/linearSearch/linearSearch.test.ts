import { linearSearch, LSrec } from "./linearSearch";
import { describe, expect, it } from "vitest";

describe("#linearSearch", () => {
  it("check if number contains", () => {
    const arrayOfNumbers = [1, 4, 5, 8, 5, 100, 3, 7, 25, 2, 11];

    expect(linearSearch(arrayOfNumbers, 8)).toContain(3);
  });

  it("check if string contains", () => {
    const arrayOfStrings = ["ZZ Top", "Europe", "Accept", "Plini", "Kreator"];

    expect(linearSearch(arrayOfStrings, "Plini")).toContain(3);
  });

  it("check if number contains", () => {
    const arrayOfNumbers = [1, 4, 5, 8, 5, 100, 3, 7, 25, 2, 11];

    let result = LSrec(arrayOfNumbers, arrayOfNumbers.length, 8);

    console.log(result);

    expect(result).toBe(3);
  });

  it("check if string contains", () => {
    const arrayOfStrings = ["ZZ Top", "Europe", "Accept", "Plini", "Kreator"];

    let result = LSrec(arrayOfStrings, arrayOfStrings.length, "Plini");

    console.log(result);

    expect(result).toBe(3);
  });
});
