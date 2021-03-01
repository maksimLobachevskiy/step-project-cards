import FormSelect from "./FormSelect";
import {token} from "../utils/info";
import LoginForm from "./LoginForm";
import {login} from "../entry";

export class Modal {
    constructor(modal) {
        this.modal = modal;
        this.self = document.createElement('div');
        this.modalContent = document.createElement('div');
        this.modalHeader = document.createElement('div');
        this.modalTitle = document.createElement('h5');
        this.closeBtn = document.createElement('span');
        this.formWrapper = document.createElement('div');
    }

    renderModal(modal) {
        this.self.classList.add('modal-form');
        this.self.id = 'myModal';
        this.modalContent.classList.add('modalContent');
        this.modalHeader.classList.add('modal__header');
        this.closeBtn.classList.add('closeBtn');
        this.closeBtn.innerHTML = "&times;";
        this.modalTitle.classList.add('modal-title')
        this.formWrapper.classList.add('form-insert')
        this.modalHeader.append(this.modalTitle, this.closeBtn);
        this.modalContent.append(this.modalHeader, this.formWrapper);
        this.self.append(this.modalContent);
        modal.append(this.self);
        const formBtn = document.querySelector(".new-visit");
        formBtn.addEventListener('click', () => {
            this.self.style.display = "block";
        })

        this.closeBtn.addEventListener('click', () => {
            this.self.style.display = "none";
        })

        window.addEventListener('click', (event) => {
            if (event.target === this.self) {
                this.self.style.display = "none";
            }
        })
    }
    renderModalEdit(modal) {
        this.self.classList.add('form-edit');
        this.self.id = 'editModal';
        this.modalContent.classList.add('modalContentEdit');
        this.modalHeader.classList.add('modal__header');
        this.closeBtn.classList.add('closeBtn');
        this.closeBtn.innerHTML = "&times;";
        this.modalTitle.classList.add('modal-title')
        this.formWrapper.classList.add('form-insert')
        this.modalHeader.append(this.modalTitle, this.closeBtn);
        this.modalContent.append(this.modalHeader, this.formWrapper);
        this.self.append(this.modalContent);
        modal.append(this.self);
        this.closeBtn.addEventListener('click', () => {
            this.self.style.display = "none";
        })
        window.addEventListener('click', (event) => {
            if (event.target === this.self) {
                this.self.style.display = "none";
            }
        })
    }

}

export class ModalVisit extends Modal {
    constructor(modal) {
        super(modal)
        this.select = document.createElement('div');
        this.wrapper = document.createElement('div');
    }
    renderModal(modal) {
        super.renderModal(modal)
        this.modalTitle.innerText = 'Create visit'
            this.select.classList.add('select-wrapper')
            this.wrapper.classList.add('form-wrapper')
            this.formWrapper.append(this.select, this.wrapper)
            const selector = new FormSelect();
            selector.render(this.select);
    }

    renderModalEdit(modal) {
        super.renderModalEdit(modal);
        this.modalTitle.innerText = 'Edit visit'
        this.wrapper.classList.add('form-wrapper-edit')
        this.formWrapper.append(this.wrapper)

    }


}

export class ModalLogin extends Modal {
    constructor(modal) {
        super(modal)
    }
    renderModal(modal) {
        super.renderModal(modal)
        const form = new LoginForm();
        form.render(this.formWrapper)
        const loginBtn = document.querySelector(".entry");
        loginBtn.addEventListener('click', () => {
            this.self.style.display = "block";
            login()
        })

        this.closeBtn.addEventListener('click', () => {
            this.self.style.display = "none";
        })

        window.addEventListener('click', (event) => {
            if (event.target === this.self) {
                this.self.style.display = "none";
            }
        })
    }
}