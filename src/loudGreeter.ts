import { Greeter } from "./greeter";

export class LoudGreeter extends Greeter {
  private extra: string = "!";

  //   constructor(extra: string) {
  //     super(extra);
  //     this.extra = extra;
  //   }

  addVolume(): void {
    this.extra += "!";
  }

  greet(name: string): any {
    // return `${this.greeting}, ${name}!${this.extra}`;
    return super.greet(name) + this.extra;
  }
}
