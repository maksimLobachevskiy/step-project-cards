import LoginForm from "./Form/LoginForm";
//import plug from "./Form/plug";
import renderCards from "./renderCards";

const GHE = (selector) => document.querySelector(selector)
const email = 'step@project.cards'
const passvord = 'step@project.cards'
const token = "7b4afba8-3267-406f-8280-a610a6985812";
const entry = GHE('.entry')
const newVisit = GHE('.new-visit')
const exit = GHE('.exit')
const cardWrapper = document.querySelector('.cardWrapper')

export default function newEntry() {
    entry.addEventListener('click', login)
    const modalLogin = GHE('.modal-login')
    const form = new LoginForm();
    form.render(modalLogin)

    if (thisToken()) {
        exit.style = "display:block;"
        newVisit.style = "display:block;"
        entry.style = "display:none;"
        exit.addEventListener('click', exitLayaut);
        const formInner = document.querySelector('.start__text').innerHTML = "";
        renderCards(cardWrapper);
        // функция рендера id="content"
        //plug()//удалить
    }
    if (!thisToken()) {

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
                    if (respLogin == token) {
                        const form=GHE('form')
                        if (form.parentNode) {
                            form.parentNode.removeChild(form);
                        }
                        exit.style = "display:block;"
                        newVisit.style = "display:block;"
                        entry.style = "display:none;"
                        exit.addEventListener('click', exitLayaut)
                        localStorage.setItem('token', respLogin)
                        GHE('.btn-close').click()
                        renderCards(cardWrapper);
                        // функция рендера id="content"
                        //plug()//удалить
                    }
                })
        } else {
            alert("you entered incorrect email or password")
        }
    })
}

function exitLayaut() {
    localStorage.removeItem('token');
    const element = GHE("#content")
    element.innerHTML = '<div class="d-flex justify-content-center forminner"><p class="align-middle start__text">You must be logged in to proceed!</p></div>'
    entry.style = "display:block;"
    newVisit.style = "display:none;"
    exit.style = "display:none;"
    newEntry()
}

export {GHE}