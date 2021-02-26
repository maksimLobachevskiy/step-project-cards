"use strict";
import 'bootstrap'
import '/scss/style.scss'
import FormCardiologist from "./Form/FormCardiologist";
import Form from "./Form/Form";
import FormDentist from './Form/FormDentist'
import FormTherapist from './Form/FormTherapist'
import newEntry, {GHE} from './entry'
import LoginForm from "./Form/LoginForm";
import FormSelect from "./Form/FormSelect";
import {token} from './utils/info'
import {API} from "./CardAPI";
import {VisitCardiologist} from "./Visit";

const selector = new FormSelect();
const formWrapper = document.querySelector(".select-wrapper");
selector.render(formWrapper);
const modal = document.getElementById("myModal");
const formBtn = document.querySelector(".new-visit");
const span = document.getElementsByClassName("closeBtn")[0];


formBtn.addEventListener('click', () => {
    modal.style.display = "block";
})

span.addEventListener('click', () => {
    modal.style.display = "none";
})

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
newEntry()
