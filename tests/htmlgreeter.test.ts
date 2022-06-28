import { HtmlGreeter } from "../src/htmlGreeter";

describe("HtmlGreeter class", () => {
  test("greet method returns '<h1>Sup, Ren!</h1>'", () => {
    const name = "Ren";
    const greeting = "Sup";

    const htmlGreets = new HtmlGreeter(greeting).greet(name);

    expect(htmlGreets).toBe("<h1>Sup, Ren!</h1>");
  });
  test("greet method returns '<div>Konnichiwa, Michiko!</div>'", () => {
    const name = "Michiko";
    const greeting = "Konnichiwa";
    const tagName = "div";

    const htmlGreets = new HtmlGreeter(greeting, tagName).greet(name);

    expect(htmlGreets).toBe("<div>Konnichiwa, Michiko!</div>");
  });
});
