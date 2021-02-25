import {info} from "../utils/info";
import Input from "../componets/Input";
import TextArea from "../componets/TexAria";
import Select from "../componets/Select";


export default class Form {
    constructor(doctor) {
        this.self = document.createElement("form");
        this.self.classList.add('form-doctor');
        this.doctor = doctor;
        this.fullName = new Input(info.fullName, "form-control", 'name').create();
        this.purpose = new Input(info.purpose, "form-control", 'purpose').create();
        this.desc = new TextArea(info.desc, "form-control", 'description').create();
        this.priority = new Select(info.priority, 'form-select', '', 'priority').create();
        this.status = new Select(info.status, 'form-select', '', 'status').create();
        this.submit = new Input(info.submit, 'btn-primary-btn', 'btn').create();
    }
    render(modal) {
        this.self.append(this.fullName, this.purpose, this.desc, this.priority, this.status, this.submit);
        modal.append(this.self);
    }


}

