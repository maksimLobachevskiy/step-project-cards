import {info} from "../utils/info";
import Input from "../componets/Input";
import TextArea from "../componets/TexAria";
import Form from "./Form.js"

export default class FormCardiologist extends Form {
    constructor(doctor) {
        super(doctor);
        this.doc = new Input(info.cardiologist, "form-control", 'doctor').create();
        //this.visitDate = new Input(info.visitDate, 'form-control', 'date').create();
        this.pressure = new Input(info.pressure, "form-control", 'pressure').create();
        this.bodyMassIndex = new Input(info.weightIndex, "form-control", 'bodyMassIndex').create();
        this.diseases = new TextArea(info.illness, "form-control", 'diseases').create();
        this.age = new Input(info.age, "form-control", 'age').create();
    }

    render(modal) {
        super.render(modal);
        this.doc.defaultValue = 'Cardiologist';
        this.doc.readOnly = true;
        this.self.insertBefore(this.doc, this.fullName);
        this.self.insertBefore(this.pressure, this.submit);
        this.self.insertBefore(this.bodyMassIndex, this.submit);
        this.self.insertBefore(this.diseases, this.submit);
        this.self.insertBefore(this.age, this.submit);

    };
    renderEdit(modal, id) {
        super.renderEdit(modal, id);
        this.doc.defaultValue = 'Cardiologist';
        this.doc.readOnly = true;
        this.self.insertBefore(this.doc, this.fullName);
        this.self.insertBefore(this.pressure, this.submit);
        this.self.insertBefore(this.bodyMassIndex, this.submit);
        this.self.insertBefore(this.diseases, this.submit);
        this.self.insertBefore(this.age, this.submit);
    }
};