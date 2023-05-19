import App from "../app";

test("test create div class 'hole'", () => {
  const app = new App(4);
  const expected = `<div class="hole" id="hole1"></div>`;
  const received = App.getHole(1);

  expect(app.getHole(1)).toEqual(expected);
});
