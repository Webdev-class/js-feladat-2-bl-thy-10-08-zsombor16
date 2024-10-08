
const APIAdress = 'https://archive-api.open-meteo.com/v1/archive?';
async function f1 (lat, long, timeStr) {
   

        const response = await fetch(`https://archive-api.open-meteo.com/v1/archive?latitude=${lat}&longitude=${long}&start_date=${timeStr}&end_date=${timeStr}&hourly=temperature_2m`);
        const data = await response.json();

        const temperatures = data.hourly.temperature_2m;
        const averageTemperature = Math.floor(temperatures.reduce((a, b) => a + b, 0) / temperatures.length);
        return averageTemperature;
}

module.exports = f1;