import { JavaScriptGreeter } from "../src/javascriptGreeter";

describe("JavaScriptGreeter class", () => {
  test("greet method returns 'console.log(Sup, Ren!)", () => {
    const name = "Ren";
    const greeting = "Sup";

    const javaScriptGreets = new JavaScriptGreeter(greeting).greet(name);

    expect(javaScriptGreets).toBe("console.log(Sup, Ren!)");
  });
  test("greet method returns 'console.log(Konnichiwa, Michiko!)", () => {
    const name = "Michiko";
    const greeting = "Konnichiwa";

    const javaScriptGreets = new JavaScriptGreeter(greeting).greet(name);

    expect(javaScriptGreets).toBe("console.log(Konnichiwa, Michiko!)");
  });
});
