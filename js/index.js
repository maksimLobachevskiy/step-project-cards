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
import renderCards from './renderCards';
import {Modal, ModalVisit} from "./Form/Modal";


const content = document.getElementById('content');
const modalVisit = new ModalVisit();
modalVisit.renderModal(content)

newEntry()
const cardWrapper = document.querySelector('.cardWrapper')
    renderCards(cardWrapper)

