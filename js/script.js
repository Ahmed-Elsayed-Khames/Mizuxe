let submitBtn=document.getElementById('btn')

submitBtn.addEventListener('click',()=>{
let name=document.getElementById('name').value;
let email=document.getElementById('email').value;
let nameField=document.getElementById('name');
let emailField=document.getElementById('email');

if(name=='' ||email==''){
    alert('All Fields Must Be Filled');
}else if(email.indexOf('@')===-1 || email.indexOf('.')===-1){
    alert('Invalid Email');
}else if(name.length<10){
    alert('Name should be more than 10 characters');
}
nameField.value=''
emailField.value=''

})
    

let toTop=document.getElementById('totop')
window.onscroll=()=>{
    if(document.documentElement.scrollTop>100){
        toTop.style.display='block'
    }else{
        toTop.style.display='none'
    }
}
toTop.addEventListener('click',()=>{
    window.scroll({top:0,
        behavior:"smooth"
    })

})