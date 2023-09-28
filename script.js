const username = document.getElementById('username')
const email = document.getElementById('emai')
const mobile = document.getElementById('mobile')
const password = document.getElementById('password')
const repas = document.getElementById('repass')
const agree = document.getElementById('agr')

function validate(){
    const usernameval =  username.value.trim()
    const emailval =  email.value.trim()
    const mobileval =  mobile.value.trim()
    const passwordval =  password.value.trim()
    const repasval =  repas.value.trim()

    if(usernameval===''){
        alert('please enter username')
    }else{

    }
    
    if (emailval===''){
        alert('please enter email address')
    }else if(!validateemail(emailval)){
        alert('please provide a valid email address')
    }else{
        
    }

    if(mobileval.length!=10){
        alert('Mobile number must be 10 characters')
    }else{

    }
    if(passwordval===''){
        alert('please enter password')
    }else if(passwordval.length<8){
        alert('password mustbe 8 charactors long')
    }else{

    }

    if(repasval!==passwordval){
        alert('password mismatch')
    }else{

    }

}

let validateemail = (email) =>{
    return String(email)
    .toLowerCase()
    .match( /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/);
};