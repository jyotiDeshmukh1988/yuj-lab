var PersonAccess = /** @class */ (function () {
    function PersonAccess(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    PersonAccess.prototype.getName = function () {
        console.log("Hello I am ".concat(this.firstName, " - ").concat(this.lastName));
    };
    return PersonAccess;
}());
var ram = new PersonAccess('Ram', 'Shyam');
ram.getName();
