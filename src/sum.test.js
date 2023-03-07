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

test(' test',() => {
  expect().toBe();
  expect().toBe();
})
