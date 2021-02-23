import {info} from "../utils/info";
import Input from "../componets/Input";
import TextArea from "../componets/TexAria";
import Select from "../componets/Select";


export default class Form {
    constructor(doctor) {
        this.self = document.createElement("form");
        this.doctor = doctor;
        this.fullName = new Input(info.fullName, "form__input").create();
        this.purpose = new Input(info.purpose, "form__input").create();
        this.desc = new TextArea(info.desc, "form__input").create();
        this.priority = new Select(info.priority).create();
        this.status = new Select(info.status).create();
        this.submit = new Input(info.submit, "form__submit").create();
    }
    render(modal) {
        this.self.append(this.fullName, this.purpose, this.desc, this.priority, this.status, this.submit);
        modal.append(this.self);
    }
}

