import App from "../app";

test("test create div class 'goblin'", () => {
  App.getHole(1);

  const expected = `<div class="hole" id="hole1"></div>`;

  const received = App.getHole(1);
  expect(received).toEqual(expected);
});
