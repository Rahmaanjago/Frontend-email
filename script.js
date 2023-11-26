const btnSubmit = document.querySelector('.button');
const allContainer = document.querySelector('.all-container');
const mainContainer = document.querySelector('.main-container');
const form = document.querySelector('.form');
const confirmEmail = document.querySelector('.confirmation');
const emailInput = document.querySelector('.email');

 form.onsubmit = function(e){
    e.preventDefault();

    allContainer.classList.remove('hidden');
    mainContainer.classList.add('hidden');
    
    confirmEmail.innerHTML = `A confirmation email has been sent to <b>${emailInput.value}</b>. Please open it and click the button inside to confirm your subscription`;
}



// btnSubmit.addEventListener('click', function(){
//     const emailInput = document.querySelector('.email').value;
//     console.log(emailInput);
//     if(emailInput == ""){

//         return;
//     }
//     allContainer.classList.remove('hidden');
//     mainContainer.classList.add('hidden');
    
// })