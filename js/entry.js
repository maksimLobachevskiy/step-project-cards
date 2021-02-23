import LoginForm from "./Form/LoginForm";

const GHE = (selector) => document.querySelector(selector)

const token = "7b4afba8-3267-406f-8280-a610a6985812";

export default function newEntry() {
    const entry = document.querySelector('.entry')
    const newVisit = document.querySelector('.new-visit')

    if (thisToken()) {
        newVisit.style = "display:block;"
        entry.style = "display:none;"
    }
    if (!thisToken()) {
        entry.addEventListener('click', login)
    }
}


function thisToken() {
    if (localStorage.getItem('token') == token) {
        return true;
    }
    return false;
}

function login() {




        fetch("https://ajax.test-danit.com/api/v2/cards/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: 'step@project.cards', password: 'step@project.cards'})
        })
            .then(response => response.text())
            .then(respLogin => {
                const entry = document.querySelector('.entry')
                const newVisit = document.querySelector('.new-visit')
                if (respLogin == token) {
                    newVisit.style = "display:block;"
                    entry.style = "display:none;"
                    localStorage.setItem('token', respLogin)
                    newVisit.addEventListener('click', () => alert('55555'))
                } else {
                    alert('не угадал')
                }
            })
}



const modalLogin = document.querySelector('.modal-login')
const form = new LoginForm();

form.render(modalLogin)
