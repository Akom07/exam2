const userName = document.querySelector('#userName')
const password = document.querySelector('#password')
const logInBtn = document.querySelector('#logInBtn')
const url = 'https://665736c59f970b3b36c866df.mockapi.io/userData'


logInBtn.addEventListener('click',async()=>{
    const res = await fetch(url)
    const data = await res.json()
    const user = data.find(e => e.userName == userName.value && e.password == password.value)
    if(user){
        localStorage.setItem('fullName',user.fullName)
        window.location.href = './profile.html'
    }

    



})