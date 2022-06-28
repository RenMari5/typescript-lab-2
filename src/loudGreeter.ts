import { Greeter } from "./greeter";

export class LoudGreeter extends Greeter {
  private extra: string;

  constructor(extra: string) {
    super(greeting);
    this.extra = extra;
  }

  addVolume(): void {}
}
