const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('const test',() => {
  const bookTitle = "book";
  const bookPrice = 3000;
  bookTitle = "まんが"
  expect(bookTitle).toBe("book");
  expect(bookPrice).toBe(3000);
})