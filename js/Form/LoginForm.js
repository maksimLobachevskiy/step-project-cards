import {info} from "../utils/info";
import Input from "../componets/Input";


export default class LoginForm {
    constructor(fields) {
        this.self = document.createElement("form");

        this.doctor = fields;
        this.email = new Input(info.email, "form-control", 'email').create();
        this.password = new Input(info.password, "form-control", 'password').create();
        this.submit = new Input(info.submit, 'btn-primary-btn', '').create();

    }
    render(modal) {
        this.email.setAttribute("id", 'emailId');
        this.password.setAttribute("id", 'password');
        this.self.append(this.email, this.password, this.submit);
        modal.append(this.self);
    }
}