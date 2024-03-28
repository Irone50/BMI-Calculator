function calculateBMI() {
    let weight = parseFloat(document.getElementById('weight').value);
    let height = parseFloat(document.getElementById('height').value);

    if (isNaN(weight) || isNaN(height)) {
        alert("Please enter valid values for weight and height.");
        return;
    }

    // To convert height from centimeters to meters
    height = height/100;

    // To calculate BMI
    let bmi = weight / (height * height);

    // To display result
    let result = document.getElementById('result');
    result.innerHTML = `Your BMI is: ${bmi.toFixed(1)}`;

    //To determine BMI group
    let group;
    if (bmi < 18.5) {
        group = "Underweight";
    }
    else if (bmi <= 24.9) {
        group = "Healthy-Weight" ;
    }
    else if (bmi <= 29.9) {
        group = "Overweight";
    }
    else {
        group = "Obesity";
    }

    result.innerHTML = result.innerHTML + `<br>Your BMI group is: ${group}`;
}


// To reset the fields
function resetFields() {
    document.getElementById('weight').value = '';
    document.getElementById('height').value = '';
    document.getElementById('result').innerHTML = '';
}

