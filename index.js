"use strict";
class Car {
    constructor(plate, color, manufacturer) {
        this.plate = plate;
        this.color = color;
        this.manufacturer = manufacturer;
    }
    /**
     * Getter plate
     * @return {string}
     */
    get plate() {
        return this._plate;
    }
    /**
     * Setter plate
     * @param {string} value
     */
    set plate(value) {
        this._plate = value;
    }
    /**
     * Getter color
     * @return {string}
     */
    get color() {
        return this._color;
    }
    /**
     * Setter color
     * @param {string} value
     */
    set color(value) {
        this._color = value;
    }
    /**
     * Getter manufacturer
     * @return {string}
     */
    get manufacturer() {
        return this._manufacturer;
    }
    /**
     * Setter manufacturer
     * @param {string} value
     */
    set manufacturer(value) {
        this._manufacturer = value;
    }
}
class Sticker {
    constructor(car, price) {
        this._price = 0;
        this.car = car;
        this.price = price;
    }
    /**
     * Getter price
     * @return {number }
     */
    get price() {
        return this._price;
    }
    /**
     * Setter price
     * @param {number } value
     */
    set price(value) {
        if (value >= 0) {
            this._price = value;
        }
        else {
            throw new Error("value not acceptable");
        }
    }
    /**
     * Getter car
     * @return {Car }
     */
    get car() {
        return this._car;
    }
    /**
     * Setter car
     * @param {Car } value
     */
    set car(value) {
        this._car = value;
    }
}
class Person {
    constructor(firstName, lastName, sticker) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.sticker = sticker;
    }
    /**
     * Getter firstName
     * @return {string}
     */
    get firstName() {
        return this._firstName;
    }
    /**
     * Setter firstName
     * @param {string} value
     */
    set firstName(value) {
        this._firstName = value;
    }
    /**
     * Getter lastName
     * @return {string}
     */
    get lastName() {
        return this._lastName;
    }
    /**
     * Setter lastName
     * @param {string} value
     */
    set lastName(value) {
        this._lastName = value;
    }
    /**
     * Getter sticker
     * @return {Sticker}
     */
    get sticker() {
        return this._sticker;
    }
    /**
     * Setter sticker
     * @param {Sticker} value
     */
    set sticker(value) {
        this._sticker = value;
    }
    isAllowedToEnterCampus() {
        var _a;
        if (this.sticker !== undefined) {
            return ((_a = this.sticker) === null || _a === void 0 ? void 0 : _a.price) > 0;
        }
        return false;
    }
}
class Employee extends Person {
    constructor(firstName, lastName, sticker, yearsOfWork) {
        super(firstName, lastName, sticker);
        this._minYearsOfWork = 1;
        this.yearsOfWork = yearsOfWork;
    }
    /**
     * Getter yearsOfWork
     * @return {number}
     */
    get yearsOfWork() {
        return this._yearsOfWork;
    }
    /**
     * Setter yearsOfWork
     * @param {number} value
     */
    set yearsOfWork(value) {
        if (value >= 0) {
            this._yearsOfWork = value;
        }
        else {
            throw new Error("value not acceptable");
        }
    }
    /**
     * Getter minYearsOfWork
     * @return {number }
     */
    get minYearsOfWork() {
        return this._minYearsOfWork;
    }
    /**
     * Setter minYearsOfWork
     * @param {number } value
     */
    set minYearsOfWork(value) {
        if (value >= 0) {
            this._minYearsOfWork = value;
        }
        else {
            throw new Error("value not acceptable");
        }
    }
    isAllowedToParkInParkingCovered() {
        if (this.yearsOfWork !== undefined && this.minYearsOfWork !== undefined) {
            return this.yearsOfWork > this.minYearsOfWork;
        }
        return false;
    }
}
class Student extends Person {
    constructor(firstName, lastName, sticker, currentyearsOfStudy) {
        super(firstName, lastName, sticker);
        this._yearsOfStudy = 3;
        this.currentyearsOfStudy = currentyearsOfStudy;
    }
    /**
     * Getter yearsOfStudy
     * @return {number}
     */
    get yearsOfStudy() {
        return this._yearsOfStudy;
    }
    /**
     * Setter yearsOfStudy
     * @param {number} value
     */
    set yearsOfStudy(value) {
        if (value >= 0) {
            this._yearsOfStudy = value;
        }
        else {
            throw new Error("value not acceptable");
        }
    }
    /**
     * Getter currentyearsOfStudy
     * @return {number}
     */
    get currentyearsOfStudy() {
        return this._currentyearsOfStudy;
    }
    /**
     * Setter currentyearsOfStudy
     * @param {number} value
     */
    set currentyearsOfStudy(value) {
        if (value >= 0) {
            this._currentyearsOfStudy = value;
        }
        else {
            throw new Error("value not acceptable");
        }
    }
    isAllowedToParkInParkingCovered() {
        if (this.yearsOfStudy !== undefined && this.currentyearsOfStudy !== undefined) {
            return this.currentyearsOfStudy === this.yearsOfStudy;
        }
        return false;
    }
}
class ParkingLot {
    constructor(parkingId, parkingName, parkingArea) {
        this.parkingId = parkingId;
        this.parkingName = parkingName;
        this.parkingArea = parkingArea;
    }
    /**
     * Getter parkingId
     * @return {number}
     */
    get parkingId() {
        return this._parkingId;
    }
    /**
     * Setter parkingId
     * @param {number} value
     */
    set parkingId(value) {
        this._parkingId = value;
    }
    /**
     * Getter parkingName
     * @return {string}
     */
    get parkingName() {
        return this._parkingName;
    }
    /**
     * Setter parkingName
     * @param {string} value
     */
    set parkingName(value) {
        this._parkingName = value;
    }
    /**
     * Getter parkingArea
     * @return {string}
     */
    get parkingArea() {
        return this._parkingArea;
    }
    /**
     * Setter parkingArea
     * @param {string} value
     */
    set parkingArea(value) {
        this._parkingArea = value;
    }
    checkEligibility(person) {
        let isAllowedToEnterCampus = person.isAllowedToEnterCampus() ? 'allowed To Enter Campus' : 'not allowed To Enter Campus';
        let isAllowedToParkInParkingCovered = person.isAllowedToParkInParkingCovered() ? 'allowed to Park In Parking Covered' : 'not allowed to Park In Parking Covered';
        return `${person.firstName} ${person.lastName}: ${isAllowedToEnterCampus} and ${isAllowedToParkInParkingCovered}`;
    }
}
const parkingLot = new ParkingLot(1, "park 1", 'A');
const car_1 = new Car("plate 1", "red", "bmw");
const sticker_1 = new Sticker(car_1, 50);
const employee_1 = new Employee("employee name ", "1", sticker_1, 10);
const car_2 = new Car("plate 2", "blue", "honda");
const sticker_2 = undefined;
const employee_2 = new Employee("employee name ", "2", sticker_2, 5);
const car_3 = new Car("plate 3", "blue", "honda");
const sticker_3 = new Sticker(car_3, 100);
const student_1 = new Student("student name ", "1", sticker_3, 3);
const car_4 = new Car("plate 4", "green", "honda");
const sticker_4 = new Sticker(car_4, 100);
const student_2 = new Student("student name ", "2", sticker_4, 2);
const listPerson = [employee_1, employee_2, student_1, student_2];
for (const person of listPerson) {
    console.log("----------------");
    console.log(parkingLot.checkEligibility(person));
    console.log("----------------");
}
