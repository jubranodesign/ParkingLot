
class Car {
    private _plate?: string;
    private _color?: string;
    private _manufacturer?: string;

    constructor(plate: string, color: string, manufacturer: string) {
        this.plate = plate;
        this.color = color;
        this.manufacturer = manufacturer;
    }

    /**
     * Getter plate
     * @return {string}
     */
    public get plate(): string | undefined {
        return this._plate;
    }

    /**
     * Setter plate
     * @param {string} value
     */
    public set plate(value: string) {
        this._plate = value;
    }

    /**
     * Getter color
     * @return {string}
     */
    public get color(): string | undefined {
        return this._color;
    }

    /**
     * Setter color
     * @param {string} value
     */
    public set color(value: string) {
        this._color = value;
    }

    /**
     * Getter manufacturer
     * @return {string}
     */
    public get manufacturer(): string | undefined {
        return this._manufacturer;
    }

    /**
     * Setter manufacturer
     * @param {string} value
     */
    public set manufacturer(value: string) {
        this._manufacturer = value;
    }

}

class Sticker {
    private _car?: Car;
    private _price: number = 0;

    constructor(car: Car, price: number) {
        this.car = car;
        this.price = price;
    }

    /**
     * Getter price
     * @return {number }
     */
    public get price(): number {
        return this._price;
    }

    /**
     * Setter price
     * @param {number } value
     */
    public set price(value: number) {
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
    public get car(): Car | undefined {
        return this._car;
    }

    /**
     * Setter car
     * @param {Car } value
     */
    public set car(value: Car) {
        this._car = value;
    }

}

abstract class Person {
    private _firstName?: string;
    private _lastName?: string;
    private _sticker?: Sticker;

    constructor(firstName: string, lastName: string, sticker: Sticker | undefined) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.sticker = sticker;
    }

    /**
     * Getter firstName
     * @return {string}
     */
    public get firstName(): string | undefined {
        return this._firstName;
    }

    /**
     * Setter firstName
     * @param {string} value
     */
    public set firstName(value: string) {
        this._firstName = value;
    }


    /**
     * Getter lastName
     * @return {string}
     */
    public get lastName(): string | undefined {
        return this._lastName;
    }

    /**
     * Setter lastName
     * @param {string} value
     */
    public set lastName(value: string) {
        this._lastName = value;
    }

    /**
     * Getter sticker
     * @return {Sticker}
     */
    public get sticker(): Sticker | undefined {
        return this._sticker;
    }

    /**
     * Setter sticker
     * @param {Sticker} value
     */
    public set sticker(value: Sticker | undefined) {
        this._sticker = value;
    }

    public isAllowedToEnterCampus(): boolean {
        if (this.sticker !== undefined) {
            return this.sticker?.price > 0;
        }
        return false;
    }

    public abstract isAllowedToParkInParkingCovered(): boolean;

}

class Employee extends Person {
    private _yearsOfWork?: number;
    private _minYearsOfWork: number = 1;

    constructor(firstName: string, lastName: string, sticker: Sticker | undefined, yearsOfWork: number) {
        super(firstName, lastName, sticker);
        this.yearsOfWork = yearsOfWork;
    }

    /**
     * Getter yearsOfWork
     * @return {number}
     */
    public get yearsOfWork(): number | undefined {
        return this._yearsOfWork;
    }

    /**
     * Setter yearsOfWork
     * @param {number} value
     */
    public set yearsOfWork(value: number) {
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
    public get minYearsOfWork(): number | undefined {
        return this._minYearsOfWork;
    }

    /**
     * Setter minYearsOfWork
     * @param {number } value
     */
    public set minYearsOfWork(value: number) {
        if (value >= 0) {
            this._minYearsOfWork = value;
        }
        else {
            throw new Error("value not acceptable");
        }
    }

    public isAllowedToParkInParkingCovered(): boolean {
        if (this.yearsOfWork !== undefined && this.minYearsOfWork !== undefined) {
            return this.yearsOfWork > this.minYearsOfWork;
        }
        return false;
    }
}

class Student extends Person {
    private _currentyearsOfStudy?: number;
    private _yearsOfStudy?: number = 3;

    constructor(firstName: string, lastName: string, sticker: Sticker, currentyearsOfStudy: number) {
        super(firstName, lastName, sticker);
        this.currentyearsOfStudy = currentyearsOfStudy;
    }

    /**
     * Getter yearsOfStudy
     * @return {number}
     */
    public get yearsOfStudy(): number | undefined {
        return this._yearsOfStudy;
    }

    /**
     * Setter yearsOfStudy
     * @param {number} value
     */
    public set yearsOfStudy(value: number) {
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
    public get currentyearsOfStudy(): number | undefined {
        return this._currentyearsOfStudy;
    }

    /**
     * Setter currentyearsOfStudy
     * @param {number} value
     */
    public set currentyearsOfStudy(value: number) {
        if (value >= 0) {
            this._currentyearsOfStudy = value;
        }
        else {
            throw new Error("value not acceptable");
        }
    }


    public isAllowedToParkInParkingCovered(): boolean {
        if (this.yearsOfStudy !== undefined && this.currentyearsOfStudy !== undefined) {
            return this.currentyearsOfStudy === this.yearsOfStudy;
        }
        return false;
    }

}

class ParkingLot {
    private _parkingId?: number;
    private _parkingName?: string;
    private _parkingArea?: string;

    constructor(parkingId: number, parkingName: string, parkingArea: string) {
        this.parkingId = parkingId;
        this.parkingName = parkingName;
        this.parkingArea = parkingArea;
    }

    /**
     * Getter parkingId
     * @return {number}
     */
    public get parkingId(): number | undefined {
        return this._parkingId;
    }

    /**
     * Setter parkingId
     * @param {number} value
     */
    public set parkingId(value: number) {
        this._parkingId = value;
    }


    /**
     * Getter parkingName
     * @return {string}
     */
    public get parkingName(): string | undefined {
        return this._parkingName;
    }

    /**
     * Setter parkingName
     * @param {string} value
     */
    public set parkingName(value: string) {
        this._parkingName = value;
    }


    /**
     * Getter parkingArea
     * @return {string}
     */
    public get parkingArea(): string | undefined {
        return this._parkingArea;
    }

    /**
     * Setter parkingArea
     * @param {string} value
     */
    public set parkingArea(value: string) {
        this._parkingArea = value;
    }

    public checkEligibility(person: Person): string {
        let isAllowedToEnterCampus = person.isAllowedToEnterCampus() ? 'allowed To Enter Campus' : 'not allowed To Enter Campus';
        let isAllowedToParkInParkingCovered = person.isAllowedToParkInParkingCovered() ? 'allowed to Park In Parking Covered' : 'not allowed to Park In Parking Covered';

        return `${person.firstName} ${person.lastName}: ${isAllowedToEnterCampus} and ${isAllowedToParkInParkingCovered}`;
    }
}


const parkingLot: ParkingLot = new ParkingLot(1, "park 1", 'A');

const car_1: Car = new Car("plate 1", "red", "bmw");
const sticker_1: Sticker = new Sticker(car_1, 50);
const employee_1: Employee = new Employee("employee name ", "1", sticker_1, 10);

const car_2: Car = new Car("plate 2", "blue", "honda");
const sticker_2 = undefined;
const employee_2: Employee = new Employee("employee name ", "2", sticker_2, 5);

const car_3: Car = new Car("plate 3", "blue", "honda");
const sticker_3: Sticker = new Sticker(car_3, 100);
const student_1: Student = new Student("student name ", "1", sticker_3, 3);

const car_4: Car = new Car("plate 4", "green", "honda");
const sticker_4: Sticker = new Sticker(car_4, 100);
const student_2: Student = new Student("student name ", "2", sticker_4, 2);

const listPerson: Person[] = [employee_1, employee_2, student_1, student_2];


for (const person of listPerson) {
    console.log("----------------");
    console.log(parkingLot.checkEligibility(person));
    console.log("----------------");
}

