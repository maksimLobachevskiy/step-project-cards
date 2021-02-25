import {info} from "../utils/info";
import Input from "../componets/Input";
import Form from "./Form";


export default class FormTherapist extends Form {
    constructor(doctor) {
        super(doctor)
        this.age = new Input(info.age, "form-control", 'age').create();
    }

    render(modal) {
        super.render(modal);
        this.self.classList.add('form-therapist');
        this.self.insertBefore(this.age, this.submit);
    };
};
