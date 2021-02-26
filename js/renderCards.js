import {VisitCardiologist, VisitDentist, VisitTherapist} from "./Visit";
import {getCards} from "./CardAPI";

export default function renderCards(cardWrapper) {
    getCards().then(response => response.json())
        .then(card => {
            if (card.length === 0) {
                const emptyBase = document.createElement('div');
                emptyBase.innerText = "No items have been added";
                cardWrapper.append(emptyBase);
            } else {
                card.forEach(item => {
                    let {doctor} = item;
                    if (doctor === "Cardiologist") {
                        let newCard = new VisitCardiologist(item);
                        newCard.render(cardWrapper);
                        return newCard;
                    } else if (doctor === "Dentist") {
                        let newCard = new VisitDentist(item);
                        newCard.render(cardWrapper);
                        return newCard;
                    } else if (doctor === "Therapist") {
                        let newCard = new VisitTherapist(item);
                        newCard.render(cardWrapper);
                        return newCard;
                    }
                })
                return card;
            }
        });
}
