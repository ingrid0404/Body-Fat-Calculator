

export const MALE = 'MALE';
export const FEMALE = 'FEMALE';


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

document.getElementById('clear').addEventListener('click', (event) => {
    Array.from(document.getElementsByTagName('textarea')).forEach(element => {
        element.value = '';
    });
    document.getElementById("checkbox").checked = false;

})

document.getElementById('calculate').addEventListener('click', (event) => {

    const gender = document.getElementById('checkbox').checked ? FEMALE : MALE;
    const height = document.getElementById('height').value;
    console.log(height);
    const weight = document.getElementById('weight').value;
    console.log(weight);
    const age = document.getElementById('age').value;
    console.log(age);

    const bodyFatResult = calculateBodyFat(height, weight, age, gender);
    console.log(bodyFatResult)
})

module.exports