"use strict";
import 'bootstrap'
import '/scss/style.scss'
import newEntry, {GHE} from './entry'
import renderCards from './renderCards';
import {ModalVisit} from "./modal/Modal";


const content = document.getElementById('content');
const modalVisit = new ModalVisit();
modalVisit.renderModal(content)
newEntry()
const cardWrapper = document.querySelector('.cardWrapper')
    renderCards(cardWrapper)

