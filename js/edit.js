import FormCardiologist from "./Form/FormCardiologist";
import FormDentist from "./Form/FormDentist";
import FormTherapist from "./Form/FormTherapist";

export function editDoctor(value) {
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
