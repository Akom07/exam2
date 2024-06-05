url = 'https://api.openweathermap.org/data/2.5/weather?q=Riyadh&appid=55c2ba57fb25e37a2310327522b19d07'
const full = document.querySelector('#full')
const cityName = document.querySelector('#cityName')
const temp = document.querySelector('#temp')
const humidity = document.querySelector('#humidity')
const lon = document.querySelector('#lon')
const lat = document.querySelector('#lat')

full.innerText = localStorage.getItem('fullName')


async function weather() {
    const res = await fetch(url)
    const data =await res.json()
        console.log(data);

const temper = data.main.temp-273.15

        cityName.innerText = data.name
        temp.innerText = temper.toFixed(2)
        humidity.innerText = data.main.humidity
        lon.innerText = data.coord.lon
        lat.innerText = data.coord.lat


}
weather()


