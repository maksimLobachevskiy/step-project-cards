import LoginForm from "./Form/LoginForm";
import plug from "./Form/plug";

const GHE = (selector) => document.querySelector(selector)
const email = 'step@project.cards'
const passvord = 'step@project.cards'
const token = "7b4afba8-3267-406f-8280-a610a6985812";

export default function newEntry() {
    const entry = GHE('.entry')
    const newVisit = GHE('.new-visit')
    const exit = GHE('.exit')

    exit.addEventListener('click',exitLayaut)


    if (thisToken()) {
        exit.style = "display:block;"
        newVisit.style = "display:block;"
        entry.style = "display:none;"

        // функция рендера id="content"
        plug()//удалить
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
                        plug()//удалить
                    }
                })
        } else {
            alert("you entered incorrect email or password")
        }
    })
}

function exitLayaut(){
    localStorage.removeItem('token');
    const element = GHE("#content")
    element.innerHTML = '<div class="d-flex justify-content-center forminner"><p class="align-middle start__text">You must be logged in to proceed!</p></div>'
}
export {GHE}