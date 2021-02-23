import {info} from "../utils/info";
import Input from "../componets/Input";
import Form from "./Form";


export default class FormTherapist extends Form {
    constructor(doctor) {
        super(doctor)
        this.age = new Input(info.age, "form__input").create();
    }

    render(modal) {
        super.render(modal);
        this.self.insertBefore(this.age, this.submit);
    };
};
