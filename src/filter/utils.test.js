import {
  filterLongStrings,
  filterEvenAndPositive,
  isPalindromic,
  palindromicNumbers,
  filterByProperties
} from "./utils";

describe("Filters", () => {
  test("to find long Strings", () => {
    const findLongStringFromArr1 = filterLongStrings(
      ["apple", "banana", "cherry", "date"],
      5
    );
    expect(findLongStringFromArr1).toEqual(["banana", "cherry"]);

    const findLongStringFromArr2 = filterLongStrings([], 3);
    expect(findLongStringFromArr2).toEqual([]);

    const findLongStringFromArr3 = filterLongStrings(["cat", "dog", "rat"], 3);
    expect(findLongStringFromArr3).toEqual([]);

    const findLongStringFromArr4 = filterLongStrings(["hello", "world"], -2);
    expect(findLongStringFromArr4).toEqual(["hello", "world"]);

    const findLongStringFromArr5 = filterLongStrings(
      ["apple", "banana", "cherry"],
      4
    );
    expect(findLongStringFromArr5).toEqual(["apple", "banana", "cherry"]);

    const findLongStringFromArr6 = filterLongStrings(
      ["apple", "banana", "cherry", "date"],
      10
    );
    expect(findLongStringFromArr6).not.toBe([]);

    const findLongStringFromArr7 = () => filterLongStrings("invalid", 5);
    expect(findLongStringFromArr7).toThrow("strings is not an array:");
  });

  test("should find even and positive", () => {
    const findEvenPositiveWithArr1 = filterEvenAndPositive([
      2,
      4,
      -6,
      8,
      9,
      -10,
      11
    ]);
    expect(findEvenPositiveWithArr1).toEqual([2, 4, 8]);
    const findEvenPositiveWithArr2 = filterEvenAndPositive([]);
    expect(findEvenPositiveWithArr2).toEqual([]);
    const findEvenPositiveWithArr3 = filterEvenAndPositive([-3, -5, -7]);
    expect(findEvenPositiveWithArr3).toEqual([]);

    const input = [2, 4, -6, 8, 9, -10, 11];
    const result = input.every((val) => val > 0 && val % 2 === 0);

    expect(result).toBe(false);

    const findEvenPositiveWithArr5 = filterEvenAndPositive([1, 3, 5, 7]);
    expect(findEvenPositiveWithArr5).toEqual([]);

    const findEvenPositiveWithArr6 = filterEvenAndPositive([
      2,
      4,
      -6,
      8,
      9,
      -10,
      11
    ]);
    expect(findEvenPositiveWithArr6).toHaveLength(3);

    const findEvenPositiveWithArr7 = filterEvenAndPositive([
      2,
      4,
      -6,
      8,
      9,
      -10,
      11
    ]);

    expect(findEvenPositiveWithArr7).not.toContain([2, 4, 8, 9, 11]);

    const findEvenPositiveWithArr8 = () => filterEvenAndPositive("invalid");
    expect(findEvenPositiveWithArr8).toThrow("rr.filter is not a function");
  });

  test("should be palindrome", () => {
    const numbers = [121, 123, 1331, 454, 678, 898];

    const palindromicNumbers = numbers.filter(isPalindromic);
    const isPalindrome1 = 121;
    expect(palindromicNumbers).toContain(isPalindrome1);
    expect(isPalindromic(121)).toBe(true);

    const isPalindrome2 = 123;
    // expect(palindromicNumbers).toContain(isPalindrome2);

    expect(isPalindromic(isPalindrome2)).toBe(false);

    const isPalindrome3 = 5;
    expect(isPalindromic(isPalindrome3)).toBe(true);

    const isPalindrome4 = [121, 123, 1331, 454, 678, 898];

    const result = isPalindrome4.filter(isPalindromic);

    const expectedOutput = [121, 1331, 454, 898];

    expect(result).toEqual(expectedOutput);

    const isPalindrome5 = [];
    const result5 = isPalindrome5.filter(isPalindromic);

    const expectedOutput5 = [];
    expect(result5).toEqual(expectedOutput5);

    const isPalindrome6 = [123, 456, 789];
    const result6 = isPalindrome6.filter(isPalindromic);
    const expectedOutput6 = [];
    expect(result6).toEqual(expectedOutput6);

    const isPalindrome7 = [121, 1331, 454, 898];
    const result7 = isPalindrome7.filter(isPalindromic);
    const expectedOutput7 = isPalindrome7;
    expect(result7.every((num) => expectedOutput7.includes(num))).toBe(true);

    const isPalindrome8 = [121, 1331, 454, 898];
    const result8 = isPalindrome8.filter(isPalindromic);
    const expectedOutput8 = 4;
    expect(result8).toHaveLength(expectedOutput8);

    const isPalindrome9 = [121, 1331, 454, 898];

    const result9 = isPalindrome9;
    const expectedOutput9 = Array;

    expect(result9).toBeInstanceOf(expectedOutput9);
  });

  test("should filter by properties", () => {
    const items = [
      { name: "Item 1", price: 10, category: "A" },
      { name: "Item 2", price: 25, category: "B" },
      { name: "Item 3", price: 10, category: "A" },
      { name: "Item 4", price: 15, category: "C" }
    ];
    const getArrayWithObj1 = filterByProperties(items, {
      price: 10,
      category: "A"
    });

    expect(getArrayWithObj1).toEqual([
      { name: "Item 1", price: 10, category: "A" },
      { name: "Item 3", price: 10, category: "A" }
    ]);

    const getArrayWithObj2 = filterByProperties(items, {
      price: 10,
      category: "A"
    });

    expect(getArrayWithObj2).not.toBe([
      { name: "Item 1", price: 10, category: "A" },
      { name: "Item 3", price: 10, category: "A" }
    ]);

    const getArrayWithObj3 = filterByProperties(items, {
      price: 10,
      category: "A"
    });
    expect(getArrayWithObj3).toContainEqual({
      name: "Item 1",
      price: 10,
      category: "A"
    });
    expect(getArrayWithObj3).toContainEqual({
      name: "Item 3",
      price: 10,
      category: "A"
    });

    const getArrayWithObj4 = filterByProperties(items, {
      price: 10,
      category: "A"
    });
    expect(getArrayWithObj4).not.toContain([
      { name: "Item 1", price: 10, category: "A" },
      { name: "Item 3", price: 10, category: "A" }
    ]);

    const getArrayWithObj5 = filterByProperties(items, {
      price: 10,
      category: "A"
    });
    expect(getArrayWithObj5).toHaveLength(2);

    const getArrayWithObj6 = filterByProperties(items, {
      price: 10,
      category: "A"
    });
    const exOut = Array;
    expect(getArrayWithObj6).toBeInstanceOf(exOut);

    const getArrayWithObj7 = filterByProperties(items, {
      price: 10,
      category: "A"
    });
    expect(getArrayWithObj7).not.toHaveLength(0);
  });
});
