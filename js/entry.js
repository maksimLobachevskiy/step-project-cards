import LoginForm from "./Form/LoginForm";

const GHE = (selector) => document.querySelector(selector)
const email = 'step@project.cards'
const passvord = 'step@project.cards'
const token = "7b4afba8-3267-406f-8280-a610a6985812";

export default function newEntry() {
    const entry = GHE('.entry')
    const newVisit = GHE('.new-visit')

    if (thisToken()) {
        newVisit.style = "display:block;"
        entry.style = "display:none;"
        // функция рендера id="content"
    }
    if (!thisToken()) {
        const modalLogin = GHE('.modal-login')
        const form = new LoginForm();
        form.render(modalLogin)
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
    const modalEntry = GHE(".modal-entry")
    const formEntry = modalEntry.querySelector('form')
    formEntry.addEventListener('submit', (e) => {
        e.preventDefault();
        const isEmail = GHE('#emailId').value
        const isPassword = GHE('#password').value
        if (isEmail == email && isPassword == passvord) {
            fetch("https://ajax.test-danit.com/api/v2/cards/login", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email: isEmail, password: isPassword})
            })
                .then(response => response.text())
                .then(respLogin => {
                    const entry = GHE('.entry')
                    const newVisit = GHE('.new-visit')
                    if (respLogin == token) {
                        newVisit.style = "display:block;"
                        entry.style = "display:none;"
                        localStorage.setItem('token', respLogin)
                        GHE('.btn-close').click()
                        // функция рендера id="content"
                    }
                })
        } else {
            alert("you entered incorrect email or password")
        }
    })
}
