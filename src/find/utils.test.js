import { findFirstPositiveNumber, findCommonElement } from "./utils";

describe("find", () => {
  test("to find a first positive number", () => {
    const arr1 = [3, 7, -2, 9, -5];
    const arr2 = [-3, -7, -2, -9, -5];
    const arr3 = [3.5, 7.2, 2.1, 9.7, 5.3];
    const arr4 = "invalid";

    const findPositivefromArr1 = findFirstPositiveNumber(arr1);
    expect(findPositivefromArr1).toBe(3);

    const findPositivefromArr2 = findFirstPositiveNumber(arr2);
    expect(findPositivefromArr2).toBeUndefined(undefined);

    const findPositivefromArr3 = findFirstPositiveNumber(arr3);
    expect(findPositivefromArr3).toBe(3.5);

    const findPositivefromArr4 = () => findFirstPositiveNumber(arr4);
    expect(findPositivefromArr4).toThrow("Input must be an array");
  });

  test("to find a common element", () => {
    const arr11 = [2, 4, 6, 8, 10];
    const arr12 = [5, 7, 8, 10, 12];

    const arr21 = [2, 4, 6];
    const arr22 = [5, 7, 9];
    const arr31 = [];
    const arr32 = [5, 7, 8, 10, 12];

    const arr41 = [];
    const arr42 = [];

    const arr51 = "invalid1";
    const arr52 = "invalid2";

    const findCommonFromArr1 = findCommonElement(arr11, arr12);
    const findCommonFromArr2 = findCommonElement(arr21, arr22);
    const findCommonFromArr3 = findCommonElement(arr31, arr32);
    const findCommonFromArr4 = findCommonElement(arr41, arr42);
    const findCommonFromArr5 = () => findCommonElement(arr51, arr52);

    expect(findCommonFromArr1).toBe(8);
    expect(findCommonFromArr2).toBe(undefined);
    expect(findCommonFromArr3).toBe(undefined);
    expect(findCommonFromArr4).toBe(undefined);
    expect(findCommonFromArr5).toThrow("arr1.find is not a function");
  });
});
