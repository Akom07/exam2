const userName = document.querySelector('#userName')
const fullName = document.querySelector('#fullName')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const signUpBtn = document.querySelector('#signUpBtn')
const url = 'https://665736c59f970b3b36c866df.mockapi.io/userData'

// const userNameEXP =  '/?=.*[A-Z]/';
// const emailEXP = /@/ 




signUpBtn.addEventListener('click',async()=>{
if(fullName.value.length < 3){
console.log('invalid fullName');
}else if (!userName.value){
    console.log('invalid user');

}else if( !email.value){
    console.log('invalid email');

}else if(password.value < 4){
    console.log('invalid password');

}else{
    const res = await fetch(url,{
        method: 'POST',
        body: JSON.stringify({
            fullName:fullName.value,
            userName : userName.value,
            email:email.value,
            password:password.value
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
    const data = await res.json()
    window.location.href = './login.html'

    }
})