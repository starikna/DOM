import App from "../app";

test("test create div class 'goblin'", () => {
  App.getHole(1);

  const expected = `<div class="hole" id="hole1"><div class="goblin"</div></div>`;

  const received = toString(App.getHole(1));
  expect(received).toEqual(expected);
});
