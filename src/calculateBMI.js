
/*
BMI is calculated by dividing a person’s weight in kilograms by their height in meters squared.
*/
const calculateBMI = function (weight, height) {
    let bmi;
    bmi = weight / height / height;
    bmi = bmi * 10000;
    console.log('bmi')
    console.log(bmi);
    return bmi;
}
module.exports = calculateBMI;