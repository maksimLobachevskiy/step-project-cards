"use strict";
import 'bootstrap'
import '/scss/style.scss'
import FormCardiologist from "./Form/FormCardiologist";
import Form from "./Form/Form";
import FormDentist from './Form/FormDentist'
import FormTherapist from './Form/FormTherapist'
import LoginForm from "./Form/LoginForm";
const modalLogin = document.querySelector('.modal-login')
const form = new LoginForm();

//const content = document.getElementById('content');

form.render(modalLogin)