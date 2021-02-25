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

// function submit() {
//     const submit = document.querySelector(".btn-primary-btn");
//
//     const getFormData = () => {
//         const form = document.getElementById("form");
//         return new FormData(form);
//     }
//
//     const toJson = function(event) {
//         const formData = getFormData();
//         event.preventDefault();
//         let object = {};
//         formData.forEach((name, key) => {
//             if (!Reflect.has(object, key)) {
//                 object[key] = name;
//                 return;
//             }
//             if (!Array.isArray(object[key])) {
//                 object[key] = [object[key]];
//             }
//             object[key].push(name);
//         });
//         let json = JSON.stringify(object);
//         console.log(json);
//     };
//
//     submit.addEventListener("click", toJson);
// }
//
// submit();
