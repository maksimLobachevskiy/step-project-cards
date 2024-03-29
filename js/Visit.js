import {info} from "./utils/info";
import Select from "./componets/Select";
import {deleteCard} from "./CardAPI";
import FormDentist from "./Form/FormDentist";
import FormCardiologist from "./Form/FormCardiologist";
import FormTherapist from "./Form/FormTherapist";
import {ModalVisit} from "./modal/Modal";

export default class Visit {
    constructor({id, fullName, doctor, purpose, desc, priority, date}) {
        this.id = id;
        this.doctor = doctor;
        this.fullName = fullName;
        this.purpose = purpose;
        this.priority = priority;
        this.desc = desc;
        this.date = date;
        this.elem = {
            self: document.createElement('div'),
            fullName: document.createElement('h3'),
            doctor: document.createElement('span'),
            purpose: document.createElement('span'),
            desc: document.createElement('p'),
            priority: document.createElement('span'),
            date: document.createElement('span'),
            btnShowMore: document.createElement('button'),
            btnHide: document.createElement('button'),
            btnDelete: document.createElement('div'),
            select: new Select(info.cardEdit, 'form-select').create()
        };
    };
    render(parent){
        this.elem.fullName.textContent = this.fullName;
        this.elem.doctor.textContent = `Doctor: ${this.doctor}`;
        this.elem.purpose.textContent = `Purpose of the visit: ${this.purpose}`;
        this.elem.desc.textContent = `Description: ${this.desc}`;
        this.elem.priority.textContent = `Priority: ${this.priority}`;
        this.elem.date.textContent = `Visit Date: ${this.date}`;
        this.elem.btnShowMore.textContent = `Show More`;
        this.elem.btnHide.textContent = `Hide`;
        this.elem.btnHide.style.display = 'none';

        this.elem.self.id = this.id
        this.elem.self.classList.add('card', 'card-body')
        this.elem.btnShowMore.classList.add('btn', 'btn-success')
        this.elem.btnHide.classList.add('btn', 'btn-warning', 'hide-btn')
        this.elem.doctor.classList.add('doctor-title')
        this.elem.btnDelete.classList.add('btn-delete')
        this.elem.btnDelete.innerText = '×';

        this.elem.btnDelete.addEventListener('click', (e) => {
            e.preventDefault();
            const element = document.getElementById(`${this.id}`)
            deleteCard(this.id)
                .then((response) => {
                    if(response.ok) {
                        return element.remove();
                    }

                })
        })
        this.elem.select.addEventListener ("change", (e) => {
            e.preventDefault();
            const value = this.elem.select.value;
            const content = document.getElementById('content');
            const element = document.getElementById(`${this.id}`)

            const cardio = new FormCardiologist();
            const dentist = new FormDentist();
            const therapist = new FormTherapist();
            switch (value) {
                case "Edit":
                    const modalVisitEdit = new ModalVisit();
                    modalVisitEdit.renderModalEdit(content)
                    const formWrapper = document.querySelector('.form-wrapper-edit')
                    if (this.doctor === 'Dentist') {
                        const modalForm = document.querySelector('.form-edit')
                        modalForm.style.display = 'block';
                        dentist.fullName.value = `${this.fullName}`
                        dentist.purpose.value = `${this.purpose}`
                        dentist.desc.value = `${this.desc}`
                        dentist.priority.value = `${this.priority}`
                        dentist.date.value = `${this.date}`
                        dentist.lastDateVisit.value = `${this.lastDateVisit}`;
                        dentist.renderEdit(formWrapper, this.id)
                    } else if (this.doctor === 'Cardiologist') {
                        const modalForm = document.querySelector('.form-edit')
                        modalForm.style.display = 'block';
                        cardio.fullName.value = `${this.fullName}`
                        cardio.purpose.value = `${this.purpose}`
                        cardio.desc.value = `${this.desc}`
                        cardio.priority.value = `${this.priority}`
                        cardio.date.value = `${this.date}`
                        cardio.pressure.value = `${this.pressure}`
                        cardio.bodyMassIndex.value = `${this.bodyMassIndex}`
                        cardio.diseases.value = `${this.diseases}`
                        cardio.age.value = `${this.age}`
                        cardio.renderEdit(formWrapper, this.id)

                    } else if (this.doctor === 'Therapist') {
                        const modalForm = document.querySelector('.form-edit')
                        modalForm.style.display = 'block';
                        therapist.fullName.value = `${this.fullName}`
                        therapist.purpose.value = `${this.purpose}`
                        therapist.desc.value = `${this.desc}`
                        therapist.priority.value = `${this.priority}`
                        therapist.date.value = `${this.date}`
                        therapist.age.value = `${this.age}`;
                        therapist.renderEdit(formWrapper, this.id)
                    }
                    break;
                case "Delete":
                    deleteCard(this.id)
                        .then((response) => {
                            if(response.ok) {
                               return element.remove();
                            }

                        })
                        //.then(() => element.remove())
                    break;
            }
        })
        this.elem.self.append(this.elem.btnDelete, this.elem.fullName, this.elem.doctor, this.elem.btnShowMore, this.elem.btnHide, this.elem.select);
    }
}

export class VisitCardiologist extends Visit {
    constructor({id, fullName, doctor, purpose, desc, priority, date, pressure, bodyMassIndex, diseases, age}) {
        super({id, fullName, doctor, purpose, desc, priority, date});
        this.pressure = pressure;
        this.bodyMassIndex = bodyMassIndex;
        this.diseases = diseases;
        this.age = age;
    }

    render(parent){
        super.render(parent);
        this.elem.pressure = document.createElement('span');
        this.elem.bodyMassIndex = document.createElement('span');
        this.elem.diseases = document.createElement('span');
        this.elem.age = document.createElement('span');

        this.elem.pressure.textContent =`Pressure: ${this.pressure}`;
        this.elem.bodyMassIndex.textContent =`Body mass index: ${this.bodyMassIndex}`;
        this.elem.diseases.textContent = `Past heart disease: ${this.diseases}`;
        this.elem.age.textContent = `Age: ${this.age}`;

        this.elem.btnShowMore.addEventListener('click', () => {
            this.showMore()
        });

        this.elem.btnHide.addEventListener('click', () => {
            this.hide();
        });

        if(parent){
            parent.append(this.elem.self)
        }else {
            return this.elem.self;
        }
    }

    showMore(){
        const moreInfo =[];

        for (let key in this.elem) {
            if (key === 'purpose' || key === 'desc' || key === 'priority' || key === 'date' || key === 'pressure' || key === 'bodyMassIndex' || key === 'diseases' || key === "age") {
                moreInfo.push(this.elem[key]);
            }
        }
        moreInfo.forEach(item => {
            this.elem.self.insertBefore(item, this.elem.btnShowMore);
        });

        this.elem.btnShowMore.style.display = 'none';
        this.elem.btnHide.style.display = 'inline-block';
    }

    hide() {
        this.elem.self.removeChild(this.elem.purpose);
        this.elem.self.removeChild(this.elem.desc);
        this.elem.self.removeChild(this.elem.priority);
        this.elem.self.removeChild(this.elem.date);
        this.elem.self.removeChild(this.elem.pressure);
        this.elem.self.removeChild(this.elem.bodyMassIndex);
        this.elem.self.removeChild(this.elem.diseases);
        this.elem.self.removeChild(this.elem.age);
        this.elem.btnHide.style.display ='none';
        this.elem.btnShowMore.style.display = 'inline-block';
    }
}

export class VisitDentist extends Visit {
    constructor({id, fullName, doctor, purpose, desc, priority, date, lastDateVisit}) {
        super({id, fullName, doctor, purpose, desc, priority, date});
        this.lastDateVisit = lastDateVisit;
    }

    render(parent){
        super.render(parent);
        this.elem.lastDateVisit = document.createElement('span');

        this.elem.lastDateVisit.textContent =`Date of last visit: ${this.lastDateVisit}`;

        this.elem.btnShowMore.addEventListener('click', () => {
            this.showMore()
        });

        this.elem.btnHide.addEventListener('click', () => {
            this.hide();
        });

        if(parent){
            parent.append(this.elem.self)
        }else {
            return this.elem.self;
        }
    }

    showMore(){
        const moreInfo =[];

        for (let key in this.elem) {
            if (key === 'purpose' || key === 'desc' || key === 'priority' || key === 'date' || key === "lastDateVisit") {
                moreInfo.push(this.elem[key]);
            }
        }
        moreInfo.forEach(item => {
            this.elem.self.insertBefore(item, this.elem.btnShowMore);
        });

        this.elem.btnShowMore.style.display = 'none';
        this.elem.btnHide.style.display = 'inline-block';
    }

    hide() {
        this.elem.self.removeChild(this.elem.purpose);
        this.elem.self.removeChild(this.elem.desc);
        this.elem.self.removeChild(this.elem.priority);
        this.elem.self.removeChild(this.elem.date);
        this.elem.self.removeChild(this.elem.lastDateVisit);
        this.elem.btnHide.style.display ='none';
        this.elem.btnShowMore.style.display = 'inline-block';
    }
}

export class VisitTherapist extends Visit {
    constructor({id, fullName, doctor, purpose, desc, priority, date, age}) {
        super({id, fullName, doctor, purpose, desc, priority, date});
        this.age = age;
    }

    render(parent){
        super.render(parent);
        this.elem.age = document.createElement('span');

        this.elem.age.textContent =`Age: ${this.age}`;

        this.elem.btnShowMore.addEventListener('click', () => {
            this.showMore()
        });

        this.elem.btnHide.addEventListener('click', () => {
            this.hide();
        });

        if(parent){
            parent.append(this.elem.self)
        }else {
            return this.elem.self;
        }
    }

    showMore(){
        const moreInfo =[];

        for (let key in this.elem) {
            if (key === 'purpose' || key === 'desc' || key === 'priority' || key === 'date' || key === "age") {
                moreInfo.push(this.elem[key]);
            }
        }
        moreInfo.forEach(item => {
            this.elem.self.insertBefore(item, this.elem.btnShowMore);
        });

        this.elem.btnShowMore.style.display = 'none';
        this.elem.btnHide.style.display = 'inline-block';
    }

    hide() {
        this.elem.self.removeChild(this.elem.purpose);
        this.elem.self.removeChild(this.elem.desc);
        this.elem.self.removeChild(this.elem.priority);
        this.elem.self.removeChild(this.elem.date);
        this.elem.self.removeChild(this.elem.age);
        this.elem.btnHide.style.display ='none';
        this.elem.btnShowMore.style.display = 'inline-block';
    }
}

