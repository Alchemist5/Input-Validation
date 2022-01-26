const userName = document.querySelector('.username');
const passWord = document.querySelector('.password');
const cpassword = document.querySelector('.cpassword');
const form = document.querySelector('.form');
const btn = document.querySelector('.btn');
const email = document.querySelector('.email')

form.addEventListener('submit', createAccount);

function createAccount(e) {
    // const numbers = /^[0-9]+$/;
    if(userName.value.length >= 8 ) {
        
        if(passWord.value === cpassword.value) {
            showMessage('Account created successfully!');

            storeInLocalStorage(userName.value,email.value,passWord.value);
        }else {
            showError('Password don\'t match');
        }

    } else {
        showAlert('Username is too short');
    }

    e.preventDefault();
}

function storeInLocalStorage(username,email,password) {
    let logins;

    const loginData = {
        username,
        password,
        email
    }

    if(localStorage.getItem('Logins') === null){
        logins = [];

        logins.push(loginData);

        localStorage.setItem('Logins', JSON.stringify(logins))
    } else {
        logins = JSON.parse(localStorage.getItem('Logins'));
        logins.push(loginData);

        localStorage.setItem('Logins', JSON.stringify(logins))
    }
};

function showMessage(message){
    const div = document.createElement('div');
    div.className = 'message';
    div.style.color = 'blue';
    div.style.textAlign = 'center'
    div.style.fontSize = '25px';
    div.style.backgroundColor = 'white';
    div.appendChild(document.createTextNode(message));

    const title = document.querySelector('.title');
    form.insertBefore(div, title);
    
    // clear message
    setTimeout( () => {
        document.querySelector('.message').remove();
    }, 2000)
}

function showError(error) {
    const div = document.createElement('div');
    div.className = 'error';
    div.style.color = 'red';
    div.style.textAlign = 'center'
    div.style.fontSize = '25px';
    div.style.backgroundColor = 'white';
    div.appendChild(document.createTextNode(error));

    const title = document.querySelector('.title');
    form.insertBefore(div, title);

     // clear message
     setTimeout( () => {
        document.querySelector('.error').remove();
    }, 2000)
}

function showAlert(alert) {
    const div = document.createElement('div');
    div.className = 'error';
    div.style.color = 'red';
    div.style.textAlign = 'center';
    div.style.fontSize = '25px';
    div.style.backgroundColor = 'white';
    div.appendChild(document.createTextNode(alert));

    const title = document.querySelector('.title');
    form.insertBefore(div, title);

     // clear message
     setTimeout( () => {
        document.querySelector('.error').remove();
    }, 2000)
}

