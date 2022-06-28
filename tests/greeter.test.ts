import { Greeter } from "../src/greeter";

describe("Greeter class", () => {
  test("greet method returns 'Sup, Ren!", () => {
    const name = "Ren";
    const greeting = "Sup";

    const greets = new Greeter(greeting).greet(name);

    expect(greets).toBe("Sup, Ren!");
  });
  test("greet method returns 'Konnichiwa, Michiko!", () => {
    const name = "Michiko";
    const greeting = "Konnichiwa";

    const greets = new Greeter(greeting).greet(name);

    expect(greets).toBe("Konnichiwa, Michiko!");
  });
});
