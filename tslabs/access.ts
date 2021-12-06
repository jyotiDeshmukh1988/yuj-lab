class PersonAccess {
  constructor(private firstName: any, private lastName: any) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getName() {
    console.log(`Hello I am ${this.firstName} - ${this.lastName}`);
  }
}
let ram = new PersonAccess('Ram', 'Shyam');
ram.getName();
