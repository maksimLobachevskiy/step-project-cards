import { token } from 'utils/info'
export const API = 'https://ajax.test-danit.com/api/v2/cards';

export function getLogin(email, password) {
    return fetch(`${API}/login`,{
        method: "POST",
        body: JSON.stringify({
            email: email,
            password: password
        })
    })
}

export function createCard(card) {
    return fetch(`${API}/cards`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(card)
    })
}

export function deleteCard(id) {
    return fetch(`${API}/cards/${id}`,{
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export function editCard(newCard, cardId) {
    return fetch(`${API}/cards/${cardId}`,{
        method: "PUT",
        headers: {
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(newCard)
    })
}

export function getCards() {
    return fetch(`${API}/cards`,{
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}