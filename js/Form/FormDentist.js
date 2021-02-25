import {info} from "../utils/info";
import Input from "../componets/Input";
import Form from "./Form.js";

export default class FormDentist extends Form {
    constructor(doctor) {
        super(doctor)
        this.doc = new Input(info.dentist, "form-control", 'doctor').create();
        this.lastDateVisit = new Input(info.lastDateVisit, "form-control", 'last visit').create();
    }
    render(modal) {
        super.render(modal);
        this.self.classList.add('form-dentist');
        this.doc.defaultValue = 'Dentist';
        this.doc.disabled = true;
        this.self.insertBefore(this.doc, this.fullName);
        this.self.insertBefore(this.lastDateVisit, this.submit);

    };

};
