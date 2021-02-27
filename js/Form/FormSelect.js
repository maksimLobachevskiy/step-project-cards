import SelectDoctor from "../componets/SelectDoctor";
import FormDentist from "./FormDentist";
import FormCardiologist from "./FormCardiologist";
import FormTherapist from "./FormTherapist";

export default class FormSelect {
    constructor() {
        this.select = new SelectDoctor(["Cardiologist", "Dentist", "Therapist"], "doctor", "Choose doctor:").create();
    }

    render(modal) {
        modal.append(this.select);
        this.select.addEventListener("change", () => {
           const value = this.select.value;
            this.chooseDoctor(value);
        });
    }

    chooseDoctor(value) {
        const modal = document.querySelector('.form-wrapper')
        const cardio = new FormCardiologist();
        const dentist = new FormDentist();
        const therapist = new FormTherapist();

        switch (value) {
            case "Cardiologist":
                modal.innerHTML = "";
                cardio.render(modal);
                break;
            case "Dentist":
                modal.innerHTML = "";
                dentist.render(modal);
                break;
            case "Therapist":
                modal.innerHTML = "";
                therapist.render(modal);
                break;
        }
    }
}