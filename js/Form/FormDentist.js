import {info} from "../utils/info";
import Input from "../componets/Input";
import Form from "./Form.js"


export default class FormDentist extends Form {
    constructor(doctor) {
        super(doctor)
        this.lastDateVisit = new Input(info.lastDateVisit, "form-control").create();
    }
    render(modal) {
        super.render(modal);
        this.self.classList.add('form-dentist');
        this.self.insertBefore(this.lastDateVisit, this.submit);
    };
};
