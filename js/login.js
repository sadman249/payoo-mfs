// console.log('button')

// document.getElementById('id').addEventListener('click', function(){})

document.getElementById('button-login').addEventListener('click', function(event){
    event.preventDefault();
    console.log('login button click');

    const phoneNumber = document.getElementById('phone-number').value;
    console.log(phoneNumber)
});