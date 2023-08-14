import {
  findMaxNumber,
  countPositiveNumbers,
  flattenNestedArrays,
  groupByProperty
} from "./utils";
describe("reducers", () => {
  test("should find the max number", () => {
    const arr = [3, 7, 2, 9, 5];

    const arr2 = [-3, -7, -2, -9, -5];
    const arr3 = [7, 7, 7, 7];
    const arr4 = [3, 7, 2, 9, 5];
    const arr5 = [3.5, 7.2, 2.1, 9.7, 5.3];
    const arr6 = [];
    const maximmNumberWithReduce = arr.reduce(
      (a, b) => (b > a ? b : a),
      arr[0]
    );
    const maximmNumberWithReduce2 = arr2.reduce(
      (a, b) => (b > a ? b : a),
      arr2[0]
    );
    const maximmNumberWithReduce3 = arr3.reduce(
      (a, b) => (b > a ? b : a),
      arr3[0]
    );
    const maximmNumberWithReduce4 = arr4.reduce(
      (a, b) => (b > a ? b : a),
      arr4[0]
    );
    const maximmNumberWithReduce5 = arr5.reduce(
      (a, b) => (b > a ? b : a),
      arr5[0]
    );
    const maximmNumberWithReduce6 = arr6.reduce(
      (a, b) => (b > a ? b : a),
      arr6[0]
    );
    const maximumNumberwithFunction = findMaxNumber(arr);
    const maximumNumberwithFunction2 = findMaxNumber(arr2);
    const maximumNumberwithFunction3 = findMaxNumber(arr3);
    const maximumNumberwithFunction4 = findMaxNumber(arr4);
    const maximumNumberwithFunction5 = findMaxNumber(arr5);
    const maximumNumberwithFunction6 = findMaxNumber(arr6);
    expect(maximumNumberwithFunction).toBe(maximmNumberWithReduce);
    expect(maximumNumberwithFunction2).toBe(maximmNumberWithReduce2);
    expect(maximumNumberwithFunction3).toBe(maximmNumberWithReduce3);
    expect(maximumNumberwithFunction4).toBe(maximmNumberWithReduce4);
    expect(maximumNumberwithFunction5).toBe(maximmNumberWithReduce5);
    expect(maximumNumberwithFunction6).toBe(maximmNumberWithReduce6);
  });

  test("should count positive numbers", () => {
    const arr = [3, 7, 2, 9, 5];
    const arr2 = [3, -7, 1, 9, -5];
    const arr3 = [-3, -7, -2, -9, -5];
    const arr4 = [3.5, 7.2, -2.1, 9.7, -5.3];
    const findCountWithReduce = arr.reduce(
      (count, curr) => (curr > 0 ? count + 1 : count),
      0
    );

    const findCountWithReduce2 = arr2.reduce(
      (count, curr) => (curr > 0 ? count + 1 : count),
      0
    );

    const findCountWithReduce3 = arr3.reduce(
      (count, curr) => (curr > 0 ? count + 1 : count),
      0
    );

    const findCountWithReduce4 = arr4.reduce(
      (count, curr) => (curr > 0 ? count + 1 : count),
      0
    );

    const findCountWithFunction = countPositiveNumbers(arr);

    const findCountWithFunction2 = countPositiveNumbers(arr2);

    const findCountWithFunction3 = countPositiveNumbers(arr3);

    const findCountWithFunction4 = countPositiveNumbers(arr4);

    expect(findCountWithFunction).toBe(findCountWithReduce);

    expect(findCountWithFunction2).toBe(findCountWithReduce2);

    expect(findCountWithFunction3).toBe(findCountWithReduce3);

    expect(findCountWithFunction4).toBe(findCountWithReduce4);
  });

  test("should flattened the array", () => {
    const arrays1 = [
      [1, 2],
      [3, 4],
      [5, 6]
    ];
    const arrays2 = [[1, 2], [3, 4, 5], [6]];
    const arrays3 = [[], [], []];
    const arrays4 = [
      [1, 2],
      ["a", "b"],
      [3, 4]
    ];
    const arrays5 = [
      [1, 2],
      [3, 4],
      [5, 6]
    ];
    const arrays6 = [];
    const arrays7 = "invalid";

    const flattenedArrayWithReduce1 = arrays1.reduce(
      (flattened, currentArray) => flattened.concat(currentArray),
      []
    );
    const flattenedArrayWithFunction1 = flattenNestedArrays(arrays1);

    const flattenedArrayWithReduce2 = arrays2.reduce(
      (flattened, currentArray) => flattened.concat(currentArray),
      []
    );
    const flattenedArrayWithFunction2 = flattenNestedArrays(arrays2);

    const flattenedArrayWithReduce3 = arrays3.reduce(
      (flattened, currentArray) => flattened.concat(currentArray),
      []
    );
    const flattenedArrayWithFunction3 = flattenNestedArrays(arrays3);

    const flattenedArrayWithReduce4 = arrays4.reduce(
      (flattened, currentArray) => flattened.concat(currentArray),
      []
    );
    const flattenedArrayWithFunction4 = flattenNestedArrays(arrays4);

    const flattenedArrayWithReduce5 = arrays5.reduce(
      (flattened, currentArray) => flattened.concat(currentArray),
      []
    );
    const flattenedArrayWithFunction5 = flattenNestedArrays(arrays5);

    const flattenedArrayWithReduce6 = arrays6.reduce(
      (flattened, currentArray) => flattened.concat(currentArray),
      []
    );
    const flattenedArrayWithFunction6 = flattenNestedArrays(arrays6);

    expect(flattenedArrayWithFunction1).toEqual(flattenedArrayWithReduce1);

    expect(flattenedArrayWithFunction2).toEqual(flattenedArrayWithReduce2);

    expect(flattenedArrayWithFunction3).toEqual(flattenedArrayWithReduce3);

    expect(flattenedArrayWithFunction4).toEqual(flattenedArrayWithReduce4);

    expect(flattenedArrayWithFunction5).toEqual(flattenedArrayWithReduce5);

    expect(flattenedArrayWithFunction6).not.toBe(flattenedArrayWithReduce6);

    expect(flattenNestedArrays).toThrow(
      "Cannot read properties of undefined (reading 'reduce')"
    );

    // expect(flattenedArrayWithFunction7).toEqual(flattenedArrayWithReduce7)
  });

  test(" is should be an grouped", () => {
    function groupByProperty(objects, property) {
      return objects.reduce((grouped, currentObject) => {
        const propValue = currentObject[property];
        if (!grouped[propValue]) {
          grouped[propValue] = [];
        }
        grouped[propValue].push(currentObject);
        return grouped;
      }, {});
    }

    const students = [
      { name: "Alice", age: 25 },
      { name: "Bob", age: 30 },
      { name: "Carol", age: 25 }
    ];

    const groupedByAge = groupByProperty(students, "age");

    const expectedGroupedByAge = {
      25: [
        { name: "Alice", age: 25 },
        { name: "Carol", age: 25 }
      ],
      30: [{ name: "Bob", age: 30 }]
    };

    const groupedByEmpty = groupByProperty(students, undefined);

    const groupedByEmptyObject = groupByProperty([], "age");

    expect(groupedByAge).toEqual(expectedGroupedByAge);
    expect(groupedByEmpty).toEqual({ undefined: students });

    expect(groupedByEmptyObject).toEqual({});
  });
});
