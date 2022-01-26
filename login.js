const userName = document.querySelector('.username'),
        email = document.querySelector('.email'),
        passWord = document.querySelector('.password'),
        form = document.querySelector('.form');

form.addEventListener('submit', validateUser);

function validateUser(e){
    let logins;
    if(localStorage.getItem('Logins') !== null){
        logins = JSON.parse(localStorage.getItem('Logins'))

        try {
            if(logins.some(el => el.username === userName.value && el.password === passWord.value)) {
                // clearError();
                showMessage('You\'re in the system');
            }else {  
                showError('You\'re not in the system')
            }
        } catch (error) {
            console.log(error);
    }
    e.preventDefault();
}
}

function showMessage(msg){
    clearError();
    const div = document.createElement('div');
    div.className = 'message';
    div.style.color = 'blue';
    div.style.textAlign = 'center'
    div.style.fontSize = '25px';
    div.style.backgroundColor = 'white';
    div.appendChild(document.createTextNode(msg));

    const title = document.querySelector('.title');
    form.insertBefore(div,title);

    setTimeout(() => {
        document.querySelector('.message').style.display = 'none';
    }, 1500)
}

function showError(msg) {
    clearError();
    const div = document.createElement('div');
    div.className = 'error';
    div.style.color = 'red';
    div.style.textAlign = 'center'
    div.style.fontSize = '25px';
    div.style.backgroundColor = 'white';
    div.appendChild(document.createTextNode(msg));

    const title = document.querySelector('.title');
    form.insertBefore(div,title);

    setTimeout(() => {
        document.querySelector('.error').style.display = 'none';
    }, 1500)
}

function clearError() {
    const error = document.querySelector('.error');
    const message = document.querySelector('.message');
    if(message) {
        message.remove()
    }else if(error) {
        error.remove();
    }
}