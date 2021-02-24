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

const modal = document.querySelector('.modal-2');
const selector = new FormSelect();
selector.render(modal);

newEntry()
