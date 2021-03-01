import {info} from "../utils/info";
import Input from "../componets/Input";
import TextArea from "../componets/TexAria";
import Select from "../componets/Select";
import {editCard, createCard} from "../CardAPI";


export default class Form {
    constructor(doctor) {
        this.self = document.createElement("form");
        this.self.classList.add('form-doctor');
        this.doctor = doctor;
        this.fullName = new Input(info.fullName, "form-control", 'fullName').create();
        this.purpose = new Input(info.purpose, "form-control", 'purpose').create();
        this.desc = new TextArea(info.desc, "form-control", 'desc').create();
        this.priority = new Select(info.priority, 'form-select', '', 'priority').create();
        this.status = new Select(info.status, 'form-select', '', 'status').create();
        this.submit = new Input(info.submit, 'btn-primary-btn', 'btn').create();
    }
    render(modal) {
        this.self.append(this.fullName, this.purpose, this.desc, this.priority, this.status, this.submit);
        modal.append(this.self);
        this.send()
    }

    send() {
        const readData = document.querySelector('.form-doctor');
        readData.addEventListener('submit', (e) => {
            e.preventDefault();

            const formData = new FormData(e.target);
            const data = Array.from(formData.entries()).reduce((memo, pair) => ({
                ...memo,
                [pair[0]]: pair[1],
            }), {});
            createCard(data)
                .then(response => response.json())
                .then(response => console.log(response))
            readData.reset();
            document.querySelector(".closeBtn").click();
            document.location.reload();
        });
    }

    renderEdit(modal, id) {
        this.self.append(this.fullName, this.purpose, this.desc, this.priority, this.status, this.submit);
        modal.append(this.self);
        this.edit(id);
    }

    edit(id) {
        const readData = document.querySelector('.form-edit');
        readData.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            const data = Array.from(formData.entries()).reduce((memo, pair) => ({
                ...memo,
                [pair[0]]: pair[1],
            }), {});
            editCard(data, id)
                .then(response => response.json())
                .then(response => console.log(response))

            document.querySelector(".closeBtn").click();
            document.location.reload();
        });
    }

}

