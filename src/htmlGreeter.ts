import { Greeter } from "./greeter";

export class HtmlGreeter extends Greeter {
  tagName: string;

  constructor(greeting: string, tagName: string) {
    super(greeting);
    this.tagName = tagName;
  }

  greet(name: string): any {
    return `<h1>${this.greeting}, ${name}!</h1>`;
  }
}
