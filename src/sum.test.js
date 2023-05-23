const sum = require("./sum");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("const test", () => {
  const bookTitle = "book";
  const bookPrice = 3000;

  expect(bookTitle).toBe("book");
  expect(bookPrice).toBe(3000);
});

test("べき乗 test", () => {
  expect(3 ** 4).toBe(81);
  expect(Math.pow(2, 4)).toBe(16);
});

function addPrefix(text, prefix) {
  // `prefix`が指定されていない場合は"デフォルト:"を付ける
  const pre = typeof prefix === "string" ? prefix : "デフォルト:";
  return pre + text;
}

test("三項演算子test", () => {
  expect(typeof "文字列").toBe("string");
  expect(typeof undefined).toBe("undefined");
  expect(addPrefix("abc")).toBe("デフォルト:abc");
  console.log(addPrefix("文字列"));
});

test("Number.parseFloat,Number.parseInt test", () => {
  expect(Number.parseInt("10", 10)).toBe(10);
  expect(Number.parseInt("10", 10)).not.toBe("10");
  expect(Number.parseInt("10")).toBe(10);
  expect(Number.parseFloat("3.14", 10)).toBe(3.14);
  expect(Number.parseFloat("3.14", 10)).not.toBe("3.14");
  expect(Number.parseInt("3.14", 10)).toBe(3);
  expect(Number.parseInt("3.5", 10)).toBe(3);
  expect(Number.parseInt("AAA", 10)).toBe(NaN);
  expect(Number.isNaN(Number.parseInt("AAA", 10))).toBe(true);
});

test("function test", () => {
  function double(num) {
    return num * 2;
  }
  expect(double(10)).toBe(20);
  function echo(x) {
    return x;
  }
  expect(echo(1)).toBe(1);
  expect(echo()).toBe(undefined);
});
test("デフォルト引数の練習", () => {
  function addPrefix2(text, prefix = "デフォルト:") {
    // `prefix`が指定されていない場合は"デフォルト:"を付ける
    // const pre = typeof prefix === "string" ? prefix : "デフォルト:";
    return prefix + text;
  }
  expect(addPrefix2("abc")).toBe("デフォルト:abc");
  expect(addPrefix2("abc", "d")).toBe("dabc");
});
test("if/elseif test", () => {
  const ver = function (version) {
    if (version === "ES5") {
      return "ECMAScript 5";
    } else if (version === "ES6") {
      return "ECMAScript 2015";
    } else if (version === "ES7") {
      return "ECMAScript 2016";
    }
    return "unknown";
  };
  expect(ver("ES5")).toBe("ECMAScript 5");
  expect(ver("ES6")).toBe("ECMAScript 2015");
  expect(ver("ES7")).toBe("ECMAScript 2016");
  expect(ver(3)).toBe("unknown");
});
test("else test", () => {
  const UruToshi = function (year) {
    if (year % 4 === 0) {
      // 4で割り切れる
      if (year % 100 === 0) {
        // 100で割り切れる
        if (year % 400 === 0) {
          // 400で割り切れる
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
    } else {
      return false;
    }
  };
  expect(UruToshi(2000)).toBe(true);
  expect(UruToshi(2020)).toBe(true);
  expect(UruToshi(2014)).toBe(false);
});
test("else2 test", () => {
  const UruToshi = function (year) {
    if (year % 400 === 0) {
      // 400で割り切れる
      return true;
    } else if (year % 100 === 0) {
      // 100で割り切れる
      return false;
    } else if (year % 4 === 0) {
      // 4で割り切れる
      return true;
    } else {
      // それ以外
      return false;
    }
  };
  expect(UruToshi(2000)).toBe(true);
  expect(UruToshi(2020)).toBe(true);
  expect(UruToshi(2014)).toBe(false);
});
test("Switch test", () => {
  const ver = function (version) {
    switch (version) {
      case "ES5":
        return "ECMAScript 5";
      case "ES6":
        return "ECMAScript 2015";
      case "ES7":
        return "ECMAScript 2016";
      default:
        return "しらないバージョンです";
    }
  };
  expect(ver("ES5")).toBe("ECMAScript 5");
  expect(ver("ES6")).toBe("ECMAScript 2015");
  expect(ver("ES7")).toBe("ECMAScript 2016");
  expect(ver(3)).toBe("しらないバージョンです");
});
test("Switch2 test", () => {
  const number = function (num) {
    switch (num % 4) {
      case 0:
        return "グー";
      case 1:
        return "チョキ";
      case 2:
        return "パ";
      case 3:
        return "Unknown";
    }
  };
  expect(number(0)).toBe("グー");
  expect(number(1)).toBe("チョキ");
  expect(number(2)).toBe("パ");
  expect(number(3)).toBe("Unknown");
  expect(number(4)).toBe("グー");
  expect(number(14)).toBe("パ");
});
test("わざと間違え test", () => {
  const ver = function (version) {
    if (version === "ES5") {
      return "ECMAScript 5";
    } else if (version === "ES6") {
      return "ECMAScript 2015";
    } else if (version === "ES7") {
      return "ECMAScript 2016";
    }
    return "unknown";
  };
  // expect(ver("ES5")).toBe("ECMA");
});
test("繰り返し test", () => {
  function sum(max) {
    let total = 0;
    for (let i = 0; i < max; i++) {
      total += i + 1;
    }
    return total;
  }
  expect(sum(4)).toBe(10);
  expect(sum(10)).toBe(55);
});
test("繰り返し test2", () => {
  function sum(nums) {
    let total = 0;
    for (let i = 0; i < nums.length; i++) {
      total += nums[i];
    }
    return total;
  }
  expect(sum([1])).toBe(1);
  expect(sum([])).toBe(0);
  expect(sum([1, 2, 3])).toBe(6);
});
test("break test", () => {
  function IsEvenIncluded(nums) {
    let IsEvenIncluded = false;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] % 2 === 0) {
        IsEvenIncluded = true;
        break;
      }
    }
    return IsEvenIncluded;
  }
  expect(IsEvenIncluded([1])).toBe(false);
  expect(IsEvenIncluded([])).toBe(false);
  expect(IsEvenIncluded([1, 2, 3])).toBe(true);
});
test("some/filter test", () => {
  const array = [1, 2, 3, 4, 5];
  const array1 = [1, 3, 5, 7];
  const array2 = [2, 4, 6, 8];
  expect(
    array.some((number) => {
      return number % 2 === 0;
    })
  ).toBe(true);
  expect(
    array1.some((number) => {
      return number % 2 === 0;
    })
  ).toBe(false);
  expect(
    array2.some((number) => {
      return number % 2 === 0;
    })
  ).toBe(true);
  expect(
    array.filter((number) => {
      return number % 2 === 0;
    })
  ).toStrictEqual([2, 4]);
  expect(
    array1.filter((number) => {
      return number % 2 === 0;
    })
  ).toStrictEqual([]);
  expect(
    array2.filter((number) => {
      return number % 2 === 0;
    })
  ).toStrictEqual([2, 4, 6, 8]);
  expect(
    array.filter((number) => {
      return number % 2 !== 0;
    })
  ).toStrictEqual([1, 3, 5]);
  expect(array.filter((number) => number % 2 !== 0)).toStrictEqual([1, 3, 5]);
});

test("object test", () => {
  const obj = {};
  expect(Object.keys(obj)).toStrictEqual([]);
  const blueGreen = "blue-green";
  const color = {
    red: "red",
    green: "green",
    blue: "blue",
    [blueGreen]: "Blue-Green",
  };
  expect(Object.keys(color)).toStrictEqual([
    "red",
    "green",
    "blue",
    "blue-green",
  ]);
  expect(Object.keys(color).length).toStrictEqual(4);
  expect(color.red).toStrictEqual("red");
  expect(color.green).toStrictEqual("green");
  expect(color.blue).toStrictEqual("blue");

  // 省略
  const test = "AAA";
  const test1 = {
    test: test,
  };
  const test2 = {
    test,
  };
  expect(test1.AAA === test2.AAA).toStrictEqual(true);
  expect(test1).toStrictEqual(test2);

  color.orange = "orange";
  expect(color.orange).toStrictEqual("orange");
  // color["blue-green"] = "blue-green";
  expect(color["blue-green"]).toStrictEqual("Blue-Green");
});
