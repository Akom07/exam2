const getHijri = document.querySelector('#getHijri')
const getmelady = document.querySelector('#getmelady')
const info = document.querySelector('#info')
const dateHijri = document.querySelector('#dateHijri')
const datemelady = document.querySelector('#datemelady')
url = 'https://api.aladhan.com/v1/calendarByCity/2024/6?city=riyad&country=saudi%20arabia&method=1'


async function getdata(){
    const res = await fetch(url)
    const date = await res.json()
    console.log(date);
    date.data.forEach(e => {
        const row = document.createElement('tr')
        const Fajr = document.createElement('td')
        Fajr.innerText = e.timings.Fajr
        const Dhuhr = document.createElement('td')
        Dhuhr.innerText = e.timings.Dhuhr
        const Asr = document.createElement('td')
        Asr.innerText = e.timings.Asr
        const Maghrib = document.createElement('td')
        Maghrib.innerText = e.timings.Maghrib
        const Isha = document.createElement('td')
        Isha.innerText = e.timings.Isha
        info.append(row )
        row.append(Fajr,Dhuhr,Asr,Maghrib,Isha)
        
    
    getHijri.addEventListener('click',()=>{
        const h1 = document.createElement('h1')
        h1.innerText = e.date.hijri.date
        dateHijri.append(h1)
    })
    getmelady.addEventListener('click',()=>{
        const h1 = document.createElement('h1')
        h1.innerText = e.date.gregorian.date
        datemelady.append(h1)
    })


});
}
getdata()

