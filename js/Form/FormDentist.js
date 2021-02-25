import {info} from "../utils/info";
import Input from "../componets/Input";
import Form from "./Form.js";
import {createCard} from "../CardAPI";



export default class FormDentist extends Form {
    constructor(doctor) {
        super(doctor)
        this.lastDateVisit = new Input(info.lastDateVisit, "form-control", 'last visit').create();
    }
    render(modal) {
        super.render(modal);
        this.self.classList.add('form-dentist');
        this.self.insertBefore(this.lastDateVisit, this.submit);
        this.send()
    };


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
        });
    }

};
