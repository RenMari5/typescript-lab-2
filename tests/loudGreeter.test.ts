import { LoudGreeter } from "../src/loudGreeter";

describe("LoudGreeter class", () => {
  test("greet method returns 'Sup, Ren!!", () => {
    const name = "Ren";
    const greeting = "Sup";

    const javaScriptGreets = new LoudGreeter(greeting).greet(name);

    expect(javaScriptGreets).toBe("Sup, Ren!!");
  });
  test("greet method returns 'Konnichiwa, Michiko!!!", () => {
    const name = "Michiko";
    const greeting = "Konnichiwa";

    const javaScriptGreets = new LoudGreeter(greeting).greet(name);

    expect(javaScriptGreets).toBe("Konnichiwa, Michiko!!!");
  });
});
