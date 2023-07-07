
import { MALE, FEMALE } from './app.js';

import { calculateBMI } from './calculateBMI.js';

/*The formula uses a person’s body mass index (BMI) to estimate their body fat percentage. 
For men, the formula is (1.20 x BMI) + (0.23 x Age) – 16.2, while for women, 
it is (1.20 x BMI) + (0.23 x Age) – 5.4. 
*/
const calculateBodyFat = function (height, weight, age, gender) {

    let bodyFat;
    const bmi = calculateBMI(weight, height);

    bodyFat = (1.2 * bmi) + (0.23 * age);
    if (gender === MALE) {
        bodyFat -= 16.2;

    } else if (gender === FEMALE) {
        bodyFat -= 5.4;
    }

    return bodyFat;
}

module.export = calculateBodyFat;