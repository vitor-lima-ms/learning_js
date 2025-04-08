let userValue = prompt('Enter the product value: ');

if (userValue < 20 || (typeof userValue) === 'string') {
    document.getElementById('result').innerHTML = 'Denied'
}
else {
    document.getElementById('result').innerHTML = 'Approved'
}