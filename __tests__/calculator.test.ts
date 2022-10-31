import Calculator from "../calculator";

describe("Testing Calculator", () => {
    let calculator: Calculator;

    beforeEach(() => {
        calculator = new Calculator();
    })

    describe("add method", () => {
        test("should add two numbers", () => {
            expect(calculator.add(1, 2)).toBe(3);
        });
    });

    describe("subtract method", () => {
        test("should subtract two numbers", () => {
            expect(calculator.subtract(1, 5)).toBe(-4);
        });
    });

    describe("multiply method", () => {
        test("should multiply two numbers", () => {
            expect(calculator.multiply(5, 2)).toBe(10);
        });
    });

    describe("divide method", () => {
        test("should not divide when number2 is 0", () => {
            expect(() => calculator.divide(5, 0)).toThrow("Number 2 cannot be 0.");
        });
    
        test("should divide two numbers", () => {
            expect(calculator.divide(8, 4)).toBe(2);
        });
    });

})