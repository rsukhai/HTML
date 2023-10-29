var triangleForm1 = document.getElementById('triangleForm1');

triangleForm1.onsubmit = function(e) {
    e.preventDefault();

    var sideA = parseFloat(document.getElementById('sideA1').value);
    var sideB = parseFloat(document.getElementById('sideB1').value);
    var sideC = parseFloat(document.getElementById('sideC1').value);


    var s = (sideA + sideB + sideC) / 2;
    var area = Math.sqrt(s * (s - sideA) * (s - sideB) * (s - sideC));

    document.getElementById('result1').innerHTML = 'Площа трикутника: ' + area.toFixed(2);
};


var triangleForm2 = document.getElementById('triangleForm2');

triangleForm2.onsubmit = function(e) {
    e.preventDefault();

    var sideA2 = parseFloat(document.getElementById('sideA2').value);
    var sideB2 = parseFloat(document.getElementById('sideB2').value);
    var angleInRadians = parseFloat(document.getElementById('angle').value) * (Math.PI / 180);

    var area = 1/2*sideA2*sideB2*Math.sin(angleInRadians) ;

    document.getElementById('result2').innerHTML = 'Площа трикутника: ' + area.toFixed(2);
};

var triangleForm3 = document.getElementById('triangleForm3');

triangleForm3.onsubmit = function(e) {
    e.preventDefault();

    var sideA3 = parseFloat(document.getElementById('sideA3').value);
    var sideB3 = parseFloat(document.getElementById('sideB3').value);

    var area = 1/2*sideA3*sideB3 ;

    document.getElementById('result3').innerHTML = 'Площа трикутника: ' + area.toFixed(2);
};

var triangleForm4 = document.getElementById('triangleForm4');

triangleForm4.onsubmit = function(e) {
    e.preventDefault();

    var sideA4 = parseFloat(document.getElementById('sideA4').value);
    var sideB4 = parseFloat(document.getElementById('sideB4').value);
    var sideC4 = parseFloat(document.getElementById('sideC4').value);
    var radius = parseFloat(document.getElementById('radius').value);

    var area = (sideA4*sideB4*sideC4)/(4*radius) ;

    document.getElementById('result4').innerHTML = 'Площа трикутника: ' + area.toFixed(2);
};


var calculator = document.getElementById('calc');

calculator.onsubmit = function(e) {
    e.preventDefault();

    var number = document.getElementById('number').value;
    var reversedNumber = parseInt(number.split('').reverse().join(''));

    if (parseInt(number) === reversedNumber) {
        document.getElementById('result5').innerHTML = 'Число є паліндромом';
    } else {
        document.getElementById('result5').innerHTML = 'Число не є паліндромом';
    }
};