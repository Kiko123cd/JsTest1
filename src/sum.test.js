const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('const test',() => {
  const bookTitle = "book";
  const bookPrice = 3000;

  expect(bookTitle).toBe("book");
  expect(bookPrice).toBe(3000);
})

test('べき乗 test',() => {
  expect(3 ** 4).toBe(81);
  expect(Math.pow(2,4)).toBe(16);
})


function addPrefix(text, prefix) {
  // `prefix`が指定されていない場合は"デフォルト:"を付ける
  const pre = typeof prefix === "string" ? prefix : "デフォルト:";
  return pre + text;
}

test('三項演算子test',() => {
  expect(typeof "文字列").toBe("string");
  expect(typeof undefined).toBe("undefined");
  expect(addPrefix ("abc")).toBe("デフォルト:abc");
  console.log(addPrefix("文字列"));
})

test('Number.parseFloat,Number.parseInt test',() => {
  expect(Number.parseInt("10",10)).toBe(10);
  expect(Number.parseInt("10",10)).not.toBe("10");
  expect(Number.parseInt("10")).toBe(10);
  expect(Number.parseFloat("3.14",10)).toBe(3.14);
  expect(Number.parseFloat("3.14",10)).not.toBe("3.14");
  expect(Number.parseInt("3.14",10)).toBe(3);
  expect(Number.parseInt("3.5",10)).toBe(3);
  expect(Number.parseInt("AAA",10)).toBe(NaN);
  expect(Number.isNaN(Number.parseInt("AAA",10))).toBe(true);
})

test('function test',()=>{
  function double(num){
    return num*2;
  }
  expect(double(10)).toBe(20);
  function echo(x){
    return x;
  }
  expect(echo(1)).toBe(1);
  expect(echo()).toBe(undefined);
})
test('デフォルト引数の練習',()=>{
  function addPrefix2(text, prefix="デフォルト:") {
    // `prefix`が指定されていない場合は"デフォルト:"を付ける
    // const pre = typeof prefix === "string" ? prefix : "デフォルト:";
    return prefix + text;
  }
  expect(addPrefix2 ("abc")).toBe("デフォルト:abc");
  expect(addPrefix2 ("abc","d")).toBe("dabc");
})

test('function and Arrow function test',() => {
  
  const a = function (x){
    return x*x;
  }
  const b = (x)=>{
    return x*x;
  }
  const c = x =>x*x;
  expect(a(2)).toBe(4);
  expect(b(2)).toBe(4);
})