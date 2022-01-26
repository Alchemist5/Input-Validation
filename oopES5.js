function User(username, password, cpassword, email) {
    this.username = username,
    this.password = password,
    this.cpassword = cpassword,
    this.email = email;
}

User.prototype.createAccount = function(ui) {
    if(this.username.length >= 8 ) {
        
        if(this.password === this.cpassword) {
            ui.showMessage('Account created successfully!');

            ui.storeInLocalStorage(this.username, this.password, this.email);
        }else {
            ui.showError('Password don\'t match');
        }

    } else {
        ui.showAlert('Username is too short');
    }
}

function UI() {

}

UI.prototype.storeInLocalStorage = function(username,password,email) {
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
}

UI.prototype.showMessage = function(message) {
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

UI.prototype.showError = function(error) {
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

UI.prototype.showAlert = function(alert) {
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

document.querySelector('#form').addEventListener('submit', function(e) {
    const userName = document.querySelector('.username').value;
    const passWord = document.querySelector('.password').value;
    const cpassword = document.querySelector('.cpassword').value;
    const email = document.querySelector('.email').value;

    // Instantiate User
    const user = new User(userName,passWord,cpassword,email);

    // Instantiate UI
    const ui = new UI();

    user.createAccount(ui)

    e.preventDefault();
})