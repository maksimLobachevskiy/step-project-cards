import {info} from "../utils/info";
import Input from "../componets/Input";
import TextArea from "../componets/TexAria";
import Form from "./Form.js"

export default class FormCardiologist extends Form {
    constructor(doctor) {
        super(doctor);
        this.pressure = new Input(info.pressure, "form__input").create();
        this.bodyMassIndex = new Input(info.bodyMassIndex, "form__input").create();
        this.diseases = new TextArea(info.diseases, "form__input").create();
        this.age = new Input(info.age, "form__input").create();
    }

    render(modal) {
        super.render(modal);
        const connections = [this.pressure, this.bodyMassIndex, this.diseases, this.age];

        connections.forEach(conn => {
            this.self.insertBefore(conn, this.create);
        })
    };
};