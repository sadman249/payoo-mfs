// // console.log('button')

// // document.getElementById('id').addEventListener('click', function(){})

// document.getElementById('button-login').addEventListener('click', function(event){
//     event.preventDefault();

//     const phoneNumber = document.getElementById('phone-number').value;
//     const pinNumber = document.getElementById('pin-number').value;

//     console.log(phoneNumber, pinNumber)

//     // this is temporary
//     if(phoneNumber=== '5' && pinNumber === '1234'){
//         console.log('you are logged in');
//     }
//     else{
//         alert('Wrong phone number of pin');
//     }
// });

document.getElementById('button-login').addEventListener('click', function(event){
    event.preventDefault();

    // get phone number and pin
    const phoneNumber =document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    // console.log(phoneNumber, pinNumber);

    if(phoneNumber === '5' && pinNumber === '1234'){
        console.log('you are logged in');
        window.location.href = '/home.html';
    }
    else{
        alert('Wrong phone number or pin')
    }
});