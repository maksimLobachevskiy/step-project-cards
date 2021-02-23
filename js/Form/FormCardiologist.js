import {info} from "../utils/info";
import Input from "../componets/Input";
import TextArea from "../componets/TexAria";
import Form from "./Form.js"

export default class FormCardiologist extends Form {
    constructor(doctor) {
        super(doctor);
        this.pressure = new Input(info.pressure, "form-control").create();
        this.bodyMassIndex = new Input(info.weightIndex, "form-control").create();
        this.diseases = new TextArea(info.illness, "form-control").create();
        this.age = new Input(info.age, "form-control").create();
    }

    render(modal) {
        super.render(modal);
        this.self.insertBefore(this.pressure, this.submit);
        this.self.insertBefore(this.bodyMassIndex, this.submit);
        this.self.insertBefore(this.diseases, this.submit);
        this.self.insertBefore(this.age, this.submit);
     //    const connections = [this.pressure, this.bodyMassIndex, this.diseases, this.age];
     //
     // connections.forEach(conn => {
     //       this.self.insertBefore(conn, this.create);
     //     })

    };
};