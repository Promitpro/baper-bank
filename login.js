document.getElementById('btn-submit').addEventListener('click', function(){
    const emailFeild = document.getElementById('user-email');
    const email = emailFeild.value;

    const passwordFeild = document.getElementById('user-password');
    const password = passwordFeild.value;

    if(email == 'promps@baap.com' && password == 'dollar')
    {
        window.location.href = 'next.html';
    }
    else{
        alert('invalid user');
    }
    
})