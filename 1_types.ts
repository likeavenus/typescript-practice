const isFetching: boolean = true;

const int: number = 7;
const float: number = 4.2;

const message: string = 'Miracle';

const numberArray: number[] = [1, 2, 3, 4, 5];
const numberArray2: Array<number> = [5, 4, 3, 2, 2];

const words: string[] = ['Word', 'House', 'Car'];

// Tuple
const contact: [string, number] = ['Rafael', 7];

// Any
let variable: any = 42;
variable = 'string';

function sayMyName(name: string): void {
    console.log(name);
}

function infinite(): never {
    while(true) {

    }
}

// Type
type Login = string;
type Password = number;
type ID = string | number | boolean;

const login: Login = 'admin';
const pass: Password = 1987;
const id: ID = 1234;


