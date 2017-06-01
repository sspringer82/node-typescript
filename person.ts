export class Person {
  constructor(
    private firstname: string,
    private lastname: string
  ) {}

  getFullName() {
    return `${this.firstname} ${this.lastname}`;
  }
}