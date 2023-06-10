import {binarySearch, binarySearchRecursive} from "./binarySearch";
import { describe, expect, it } from "vitest";

describe("#binarySearch", () => {
  it("check if number contains", () => {
    const arrayOfNumbers = [1, 4, 5, 8, 5, 100, 3, 7, 25, 2, 11];

    expect(binarySearch(arrayOfNumbers, 8)).toContain(3);
  });

  it("check if string contains", () => {
    const arrayOfStrings = ["ZZ Top", "Europe", "Accept", "Plini", "Kreator"];

    expect(binarySearch(arrayOfStrings, "Plini")).toContain(3);
  });

  it("check if number contains", () => {
    const arrayOfNumbers = [1, 4, 5, 8, 5, 100, 3, 7, 25, 2, 11];

    let result = binarySearchRecursive(arrayOfNumbers, 8);

    console.log(result);

    expect(result).toContain(3);
  });

  it("check if string contains", () => {
    const arrayOfStrings = ["ZZ Top", "Europe", "Accept", "Plini", "Kreator"];

    let result = binarySearchRecursive(arrayOfStrings, "Plini");

    console.log(result);

    expect(result).toContain(3);
  });
});