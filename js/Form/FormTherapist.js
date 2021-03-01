import {info} from "../utils/info";
import Input from "../componets/Input";
import Form from "./Form";


export default class FormTherapist extends Form {
    constructor(doctor) {
        super(doctor)
        this.doc = new Input(info.therapist, "form-control", 'doctor').create();
        this.age = new Input(info.age, "form-control", 'age').create();
    }

    render(modal) {
        super.render(modal);
        this.self.classList.add('form-therapist');
        this.doc.defaultValue = 'Therapist';
        this.doc.readOnly = true;
        this.self.insertBefore(this.doc, this.fullName);
        this.self.insertBefore(this.age, this.submit);
    }

    renderEdit(modal, id) {
        super.renderEdit(modal, id);
        this.doc.defaultValue = 'Therapist';
        this.doc.readOnly = true;
        this.self.insertBefore(this.doc, this.fullName);
        this.self.insertBefore(this.age, this.submit);
    }
};
