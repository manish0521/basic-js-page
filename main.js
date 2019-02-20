window.onload = printIt;

function printIt() {
    let celsius = 10;

    // Calculate Fahrenheit
    // Take celsius, multiply it by 9/5
    // Add 32.

    let fahrenheit = celsius * 9 / 5 + 32;

    // Answer should be in the form of:
    // 30 degrees Celsius converts to 86 degrees Fahrenheit.

    let answer = celsius + ' degrees Celsius equals ' + fahrenheit + " degrees Fahrenheit.";

    // Print out fahrenheit
    document.querySelector('.calculator').innerText = answer;
}