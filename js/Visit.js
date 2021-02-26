import {info} from "./utils/info";
import Select from "./componets/Select";
import {editCard, deleteCard} from "./CardAPI";

export class Visit {
    constructor({id, fullName, doctor, purpose, desc, priority, status}) {
        this.id = id;
        this.status = status;
        this.doctor = doctor;
        this.fullName = fullName;
        this.purpose = purpose;
        this.priority = priority;
        this.desc = desc;
        this.elem = {
            self: document.createElement('div'),
            fullName: document.createElement('h3'),
            doctor: document.createElement('span'),
            purpose: document.createElement('span'),
            desc: document.createElement('p'),
            priority: document.createElement('span'),
            status:document.createElement('span'),
            btnShowMore: document.createElement('button'),
            btnHide: document.createElement('button'),
            select: new Select(info.cardEdit).create()
        };
    };
    render(parent){
        this.elem.fullName.textContent = this.fullName;
        this.elem.doctor.textContent = `Doctor: ${this.doctor}`;
        this.elem.purpose.textContent = `Purpose of the visit${this.purpose}`;
        this.elem.desc.textContent = `Description: ${this.desc}`;
        this.elem.priority.textContent = `Priority: ${this.priority}`;
        this.elem.status.textContent = `Status: ${this.status}`;
        this.elem.btnShowMore.textContent = `Show More`;
        this.elem.btnHide.textContent = `Hide`;
        this.elem.btnHide.style.display = 'none';

        this.elem.self.dataset.id = this.id
        // this.elem.select.addEventListener ("change", ) - тут надо будет еще дописать Редатирование Удаление.
        //
        this.elem.self.append(this.elem.fullName, this.elem.doctor, this.elem.btnShowMore, this.elem.btnHide, this.elem.select)
    }

}

export class VisitCardiologist extends Visit {
    constructor({id, fullName, doctor, purpose, desc, priority, status, pressure, weightIndex, illness, age}) {
        super({id, fullName, doctor, purpose, desc, priority, status});
        this.pressure = pressure;
        this.weightIndex = weightIndex;
        this.illness = illness;
        this.age = age;
    }

    render(parent){
        super.render(parent);
        this.elem.pressure = document.createElement('span');
        this.elem.weightIndex = document.createElement('span');
        this.elem.illness = document.createElement('span');
        this.elem.age = document.createElement('span');

        this.elem.pressure.textContent =`Pressure: ${this.pressure}`;
        this.elem.weightIndex.textContent =`Body mass index: ${this.weightIndex}`;
        this.elem.illness.textContent = `Past heart disease: ${this.illness}`;
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
            if (key === 'purpose' || key === 'desc' || key === 'priority' || key === 'status' || key === 'pressure' || key === ', weightIndex' || key === 'illness' || key === "age") {
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
        this.elem.self.removeChild(this.elem.status);
        this.elem.self.removeChild(this.elem.pressure);
        this.elem.self.removeChild(this.elem.weightIndex);
        this.elem.self.removeChild(this.elem.illness);
        this.elem.self.removeChild(this.elem.age);
        this.elem.btnHide.style.display ='none';
        this.elem.btnHide.style.display = 'inline-block';
    }
}