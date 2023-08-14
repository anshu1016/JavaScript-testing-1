import {
  transformKeys,
  reverseStrings,
  squareRoots,
  removeVowels
} from "./utils";

describe("Maps", () => {
  test("should be capital key", () => {
    const obj1 = { name: "John", age: 30, city: "New York" };
    const obj2 = {};
    const obj3 = { key1: "value1", key2: "value2" };

    const transformObj1 = transformKeys(obj1);
    const transformObj2 = transformKeys(obj2);
    const transformObj3 = transformKeys(obj3);

    expect(transformObj1).toEqual(["NAME", "AGE", "CITY"]);
    expect(transformObj2).toEqual([]);
    expect(transformObj3).toEqual(["KEY1", "KEY2"]);
  });

  test("should be proper reverse", () => {
    const arr1 = ["hello", "world", "jest"];
    const arr2 = [];
    const arr3 = ["hello world", "goodbye space"];
    const arr4 = ["abc", "def"];
    const arr5 = ["abc", "123"];

    const checkReverse1 = reverseStrings(arr1);
    const checkReverse2 = reverseStrings(arr2);
    const checkReverse3 = reverseStrings(arr3);
    const checkReverse4 = reverseStrings(arr4);
    const checkReverse5 = reverseStrings(arr5);

    expect(checkReverse1).toEqual(["olleh", "dlrow", "tsej"]);
    expect(checkReverse2).toEqual([]);
    expect(checkReverse3).toEqual(["dlrow olleh", "ecaps eybdoog"]);
    expect(checkReverse4).not.toBe(arr4);
    expect(checkReverse5).toEqual(["cba", "321"]);
  });

  test("to find the squarer root", () => {
    const arr1 = [4, 9, 16];
    const arr2 = [2.25, 0.25, 1.44];
    const arr3 = [];
    const arr4 = [4, 9, 16];
    const arr5 = [25, 64, 100];

    const checkSquareRootOfarr1 = squareRoots(arr1);

    const checkSquareRootOfarr2 = squareRoots(arr2);
    const checkSquareRootOfarr3 = squareRoots(arr3);
    const checkSquareRootOfarr4 = squareRoots(arr4);
    const checkSquareRootOfarr5 = squareRoots(arr5);

    expect(checkSquareRootOfarr1).toEqual([2, 3, 4]);
    expect(checkSquareRootOfarr2).toEqual([1.5, 0.5, 1.2]);
    expect(checkSquareRootOfarr3).toEqual([]);
    expect(checkSquareRootOfarr4).not.toBe(arr4);
    checkSquareRootOfarr5.forEach((number, i) => {
      expect(number).toBeCloseTo([5, 8, 10][i]);
    });
  });

  test("to remove an vowel", () => {
    const arr1 = ["hello", "world"];
    const arr2 = ["ApplE", "OrAngE"];
    const arr3 = ["", "test", ""];
    const arr4 = ["xyz", "qrst"];
    const arr5 = ["hello", "world"];
    const arr6 = ["aeiou", "AEIOU"];

    const removeVowelsFromarr1 = removeVowels(arr1);
    const removeVowelsFromarr2 = removeVowels(arr2);
    const removeVowelsFromarr3 = removeVowels(arr3);
    const removeVowelsFromarr4 = removeVowels(arr4);
    const removeVowelsFromarr5 = removeVowels(arr5);
    const removeVowelsFromarr6 = removeVowels(arr6);

    expect(removeVowelsFromarr1).toEqual(["hll", "wrld"]);
    expect(removeVowelsFromarr2).toEqual(["ppl", "rng"]);
    expect(removeVowelsFromarr3).toEqual(["", "tst", ""]);
    expect(removeVowelsFromarr4).toEqual(["xyz", "qrst"]);
    expect(removeVowelsFromarr5).not.toBe(arr5);
    expect(removeVowelsFromarr6).toEqual(["", ""]);
  });
});
