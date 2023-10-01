document.addEventListener('DOMContentLoaded', function () {
    const temperatureInput = document.getElementById('temperatureInput');
    const unitSelector = document.getElementById('unitSelector');
    const convertButton = document.getElementById('convertButton');
    const result = document.getElementById('result');

    convertButton.addEventListener('click', () => {
        const temperature = parseFloat(temperatureInput.value);

        if (isNaN(temperature)) {
            result.textContent = 'Please enter a valid number.';
            return;
        }

        const unit = unitSelector.value;

        let convertedTemperature, convertedUnit;

        if (unit === 'celsius') {
            convertedTemperature = convertToCelsius(temperature);
            convertedUnit = '°C';
        } else if (unit === 'fahrenheit') {
            convertedTemperature = convertToFahrenheit(temperature);
            convertedUnit = '°F';
        } else if (unit === 'kelvin') {
            convertedTemperature = convertToKelvin(temperature);
            convertedUnit = 'K';
        }

        result.textContent = `${temperature} ${unit.toUpperCase()} is ${convertedTemperature.toFixed(2)} ${convertedUnit}`;
    });

    function convertToCelsius(temperature) {
        return (temperature - 32) * (5/9);
    }

    function convertToFahrenheit(temperature) {
        return (temperature * 9/5) + 32;
    }

    function convertToKelvin(temperature) {
        return temperature + 273.15;
    }
});
