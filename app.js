const submit = document.querySelector('#submit-button')

submit.addEventListener('click', generate);

// bmi calculating function
function calculateBMI() {
    // take weight value
    let weight = document.querySelector('#weight-input').value,

        // take height value
        height = document.querySelector('#height-input').value,

        // calculate bmi
        bmi = weight / Math.pow(height / 100, 2),

        // bmi rounding
        bmiRound = bmi.toFixed(2);

    return bmiRound;
}

// generate bmi output
function generate() {
    // take result 
    let result = document.querySelector('#result'),

    // take body 
        body = document.querySelector('body'),

    // calculate BMI
        bmi = calculateBMI(),
    
    // get BMI Details
        bmiDetails = bmiInfo(bmi);

    body.style.backgroundColor = bmiDetails.bmiWarning;

    // generate output
    result.innerHTML = 'Your BMI is: <span id="bmiColor">' + bmi + '</span>, U are in: ' + bmiDetails.bmiClass + ' category - ' + bmiDetails.bmiCategory + '.';

}


// based on BMI find category and class.

function bmiInfo(bmi) {
    let bmiClass,
        bmiCategory,
        bmiWarning;


    // IF ATTACK

    if (bmi < 15) {
        bmiClass = 0;
        bmiCategory = 'underweight';
        bmiWarning = '#e74c3c'
    } else if (bmi >= 15 && bmi < 16) {
        bmiClass = 1;
        bmiCategory = 'underweight';
        bmiWarning = '#e74c3c'
    } else if (bmi >= 16 && bmi < 18.5) {
        bmiClass = 2;
        bmiCategory = 'underweight';
        bmiWarning = '#e67e22'
    } else if (bmi >= 18.5 && bmi < 25) {
        bmiClass = 3;
        bmiCategory = 'healthy';
        bmiWarning = '#2ecc71'
    } else if (bmi >= 25 && bmi < 30) {
        bmiClass = 4;
        bmiCategory = 'overweight';
        bmiWarning = '#e67e22'
    } else if (bmi >= 30 && bmi < 35) {
        bmiClass = 5;
        bmiCategory = 'obese';
        bmiWarning = '#e74c3c'
    } else if (bmi >= 35 && bmi < 40) {
        bmiClass = 6;
        bmiCategory = 'obese';
        bmiWarning = '#e74c3c'
    } else {
        bmiClass = 7;
        bmiCategory = 'obese';
        bmiWarning = '#e74c3c'
    }

    let bmiDetail = {
        'bmiClass': bmiClass,
        'bmiCategory': bmiCategory,
        'bmiWarning': bmiWarning
    }

    return bmiDetail;

}