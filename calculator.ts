export default class Calculator {

    public add(number1: number, number2: number) {
        return number1 + number2;
    }

    public subtract(number1: number, number2: number) {
        return number1 - number2;
    }

    public multiply(number1: number, number2: number) {
        return number1 * number2;
    }

    public divide(number1: number, number2: number) {
        if (number2 === 0) {
            throw Error("Number 2 cannot be 0.");
        }

        return number1 / number2;
    }
}