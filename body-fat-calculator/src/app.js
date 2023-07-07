

const MALE = 'MALE';
const FEMALE = 'FEMALE';


/*
BMI is calculated by dividing a person’s weight in kilograms by their height in meters squared.
*/
function calculateBMI(weight, height) {
    let bmi;
    bmi = weight / (height * height);
    return bmi;
}

/*The formula uses a person’s body mass index (BMI) to estimate their body fat percentage. 
For men, the formula is (1.20 x BMI) + (0.23 x Age) – 16.2, while for women, 
it is (1.20 x BMI) + (0.23 x Age) – 5.4. 
*/
function calculateBodyFat(height, weight, age, gender) {

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
/*
For men, the healthy range of body fat percentage is as follows:
Essential fat: 2-5%
Athletes: 6-13%
Fitness: 14-17%
Average: 18-24%
Obese: 25% or higher

For women, the healthy range of body fat percentage is as follows:
Essential fat: 10-13%
Athletes: 14-20%
Fitness: 21-24%
Average: 25-31%
Obese: 32% or higher
*/

/*
function classificateBodyFat(bodyFat, gender) {
    if (gender === MALE) {
        bodyFat -= 16.2;

    } else if (gender === FEMALE) {
        bodyFat -= 5.4;
    }

}
*/