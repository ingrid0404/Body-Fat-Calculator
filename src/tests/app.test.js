const calculateBMI = require('./../calculateBMI');

describe("BMI tests", () => {
    test('BMI test 1', () => {
        let result = calculateBMI(16.9, 105.4);
        expect(result).toBe(15.212671345088195);

    });
    test('BMI test 2', () => {
        let result = calculateBMI(45, 130);
        expect(result).toBe(26.62721893491124);

    });

    test('BMI test 3', () => {
        let result = calculateBMI(113, 170);
        expect(result).toBe(39.10034602076125);

    });
})

